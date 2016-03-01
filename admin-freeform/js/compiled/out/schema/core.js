// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (schema.core.spec[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (schema.core.spec["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (schema.core.explain[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (schema.core.explain["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___16583 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__4425__auto___16583)){
var error_16584 = temp__4425__auto___16583;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_16584], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_16584], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator(schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__16585_SHARP_){
var and__4582__auto__ = !((p1__16585_SHARP_ == null));
if(and__4582__auto__){
var or__4594__auto__ = (klass === p1__16585_SHARP_.constructor);
if(or__4594__auto__){
return or__4594__auto__;
} else {
return p1__16585_SHARP_ instanceof klass;
}
} else {
return and__4582__auto__;
}
}),(function (p1__16586_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16586_SHARP_),klass),cljs.core.cst$sym$instance_QMARK_);
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__4423__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain(more_schema);
} else {
var pred__16587 = cljs.core._EQ_;
var expr__16588 = this$;
if(cljs.core.truth_((pred__16587.cljs$core$IFn$_invoke$arity$2 ? pred__16587.cljs$core$IFn$_invoke$arity$2(null,expr__16588) : pred__16587.call(null,null,expr__16588)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__16587.cljs$core$IFn$_invoke$arity$2 ? pred__16587.cljs$core$IFn$_invoke$arity$2(Boolean,expr__16588) : pred__16587.call(null,Boolean,expr__16588)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__16587.cljs$core$IFn$_invoke$arity$2 ? pred__16587.cljs$core$IFn$_invoke$arity$2(Number,expr__16588) : pred__16587.call(null,Number,expr__16588)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__16587.cljs$core$IFn$_invoke$arity$2 ? pred__16587.cljs$core$IFn$_invoke$arity$2(null,expr__16588) : pred__16587.call(null,null,expr__16588)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__16587.cljs$core$IFn$_invoke$arity$2 ? pred__16587.cljs$core$IFn$_invoke$arity$2(Date,expr__16588) : pred__16587.call(null,Date,expr__16588)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__16587.cljs$core$IFn$_invoke$arity$2 ? pred__16587.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__16588) : pred__16587.call(null,cljs.core.UUID,expr__16588)))){
return cljs.core.cst$sym$Uuid;
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16591,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16593 = (((k16591 instanceof cljs.core.Keyword))?k16591.fqn:null);
switch (G__16593) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16591,else__5211__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.AnythingSchema{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16590){
var self__ = this;
var G__16590__$1 = this;
return (new cljs.core.RecordIter((0),G__16590__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16590){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16594 = cljs.core.keyword_identical_QMARK_;
var expr__16595 = k__5216__auto__;
if(cljs.core.truth_((pred__16594.cljs$core$IFn$_invoke$arity$2 ? pred__16594.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_,expr__16595) : pred__16594.call(null,cljs.core.cst$kw$_,expr__16595)))){
return (new schema.core.AnythingSchema(G__16590,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16590),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16590){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__16590,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Any;
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__16592){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__16592),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16592,cljs.core.cst$kw$_),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16601,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16603 = (((k16601 instanceof cljs.core.Keyword))?k16601.fqn:null);
switch (G__16603) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16601,else__5211__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.EqSchema{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16600){
var self__ = this;
var G__16600__$1 = this;
return (new cljs.core.RecordIter((0),G__16600__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16600){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16604 = cljs.core.keyword_identical_QMARK_;
var expr__16605 = k__5216__auto__;
if(cljs.core.truth_((pred__16604.cljs$core$IFn$_invoke$arity$2 ? pred__16604.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,expr__16605) : pred__16604.call(null,cljs.core.cst$kw$v,expr__16605)))){
return (new schema.core.EqSchema(G__16600,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16600),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16600){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__16600,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16598_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__16598_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16599_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16599_SHARP_),self__.v),cljs.core.cst$sym$_EQ_);
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),cljs.core.cst$sym$eq);
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__16602){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__16602),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16602,cljs.core.cst$kw$v),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16611,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16613 = (((k16611 instanceof cljs.core.Keyword))?k16611.fqn:null);
switch (G__16613) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16611,else__5211__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Isa{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16610){
var self__ = this;
var G__16610__$1 = this;
return (new cljs.core.RecordIter((0),G__16610__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16610){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16614 = cljs.core.keyword_identical_QMARK_;
var expr__16615 = k__5216__auto__;
if(cljs.core.truth_((pred__16614.cljs$core$IFn$_invoke$arity$2 ? pred__16614.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$h,expr__16615) : pred__16614.call(null,cljs.core.cst$kw$h,expr__16615)))){
return (new schema.core.Isa(G__16610,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16614.cljs$core$IFn$_invoke$arity$2 ? pred__16614.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,expr__16615) : pred__16614.call(null,cljs.core.cst$kw$parent,expr__16615)))){
return (new schema.core.Isa(self__.h,G__16610,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16610),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16610){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__16610,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16608_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__16608_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16609_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),p1__16609_SHARP_),cljs.core.cst$sym$isa_QMARK_);
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),cljs.core.cst$sym$isa_QMARK_);
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__16612){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__16612),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__16612),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16612,cljs.core.cst$kw$h,cljs.core.array_seq([cljs.core.cst$kw$parent], 0)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args16618 = [];
var len__5652__auto___16621 = arguments.length;
var i__5653__auto___16622 = (0);
while(true){
if((i__5653__auto___16622 < len__5652__auto___16621)){
args16618.push((arguments[i__5653__auto___16622]));

var G__16623 = (i__5653__auto___16622 + (1));
i__5653__auto___16622 = G__16623;
continue;
} else {
}
break;
}

var G__16620 = args16618.length;
switch (G__16620) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16618.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16628,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16630 = (((k16628 instanceof cljs.core.Keyword))?k16628.fqn:null);
switch (G__16630) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16628,else__5211__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.EnumSchema{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16627){
var self__ = this;
var G__16627__$1 = this;
return (new cljs.core.RecordIter((0),G__16627__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16627){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16631 = cljs.core.keyword_identical_QMARK_;
var expr__16632 = k__5216__auto__;
if(cljs.core.truth_((pred__16631.cljs$core$IFn$_invoke$arity$2 ? pred__16631.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vs,expr__16632) : pred__16631.call(null,cljs.core.cst$kw$vs,expr__16632)))){
return (new schema.core.EnumSchema(G__16627,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16627),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16627){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__16627,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16625_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__16625_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16626_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16626_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$enum,self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vs], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__16629){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__16629),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16629,cljs.core.cst$kw$vs),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__5659__auto__ = [];
var len__5652__auto___16636 = arguments.length;
var i__5653__auto___16637 = (0);
while(true){
if((i__5653__auto___16637 < len__5652__auto___16636)){
args__5659__auto__.push((arguments[i__5653__auto___16637]));

var G__16638 = (i__5653__auto___16637 + (1));
i__5653__auto___16637 = G__16638;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq16635){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16635));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16641,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16643 = (((k16641 instanceof cljs.core.Keyword))?k16641.fqn:null);
switch (G__16643) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16641,else__5211__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Predicate{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16640){
var self__ = this;
var G__16640__$1 = this;
return (new cljs.core.RecordIter((0),G__16640__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16640){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16644 = cljs.core.keyword_identical_QMARK_;
var expr__16645 = k__5216__auto__;
if(cljs.core.truth_((pred__16644.cljs$core$IFn$_invoke$arity$2 ? pred__16644.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p_QMARK_,expr__16645) : pred__16644.call(null,cljs.core.cst$kw$p_QMARK_,expr__16645)))){
return (new schema.core.Predicate(G__16640,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16644.cljs$core$IFn$_invoke$arity$2 ? pred__16644.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pred_DASH_name,expr__16645) : pred__16644.call(null,cljs.core.cst$kw$pred_DASH_name,expr__16645)))){
return (new schema.core.Predicate(self__.p_QMARK_,G__16640,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16640),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16640){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__16640,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__16639_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16639_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return cljs.core.cst$sym$Int;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return cljs.core.cst$sym$Keyword;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return cljs.core.cst$sym$Symbol;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return cljs.core.cst$sym$Str;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),cljs.core.cst$sym$pred);

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p_QMARK_,cljs.core.cst$sym$pred_DASH_name], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__16642){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16642),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__16642),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16642,cljs.core.cst$kw$p_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$pred_DASH_name], 0)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args16648 = [];
var len__5652__auto___16651 = arguments.length;
var i__5653__auto___16652 = (0);
while(true){
if((i__5653__auto___16652 < len__5652__auto___16651)){
args16648.push((arguments[i__5653__auto___16652]));

var G__16653 = (i__5653__auto___16652 + (1));
i__5653__auto___16652 = G__16653;
continue;
} else {
}
break;
}

var G__16650 = args16648.length;
switch (G__16650) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16648.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.cst$kw$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16658,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16660 = (((k16658 instanceof cljs.core.Keyword))?k16658.fqn:null);
switch (G__16660) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16658,else__5211__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Protocol{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16657){
var self__ = this;
var G__16657__$1 = this;
return (new cljs.core.RecordIter((0),G__16657__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16657){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16661 = cljs.core.keyword_identical_QMARK_;
var expr__16662 = k__5216__auto__;
if(cljs.core.truth_((pred__16661.cljs$core$IFn$_invoke$arity$2 ? pred__16661.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,expr__16662) : pred__16661.call(null,cljs.core.cst$kw$p,expr__16662)))){
return (new schema.core.Protocol(G__16657,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16657),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16657){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__16657,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16655_SHARP_){
return cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,p1__16655_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16656_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16656_SHARP_),schema.core.protocol_name(this$__$1)),cljs.core.cst$sym$satisfies_QMARK_);
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),cljs.core.cst$sym$protocol);
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__16659){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__16659),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16659,cljs.core.cst$kw$p),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__11655__11656__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11655__11656__auto__),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16665_SHARP_){
return cljs.core.re_find(this$__$1,p1__16665_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16666_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16666_SHARP_),schema.core.explain(this$__$1)),cljs.core.cst$sym$re_DASH_find);
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core16669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core16669 = (function (meta16670){
this.meta16670 = meta16670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core16669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16671,meta16670__$1){
var self__ = this;
var _16671__$1 = this;
return (new schema.core.t_schema$core16669(meta16670__$1));
});

schema.core.t_schema$core16669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16671){
var self__ = this;
var _16671__$1 = this;
return self__.meta16670;
});

schema.core.t_schema$core16669.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core16669.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16667_SHARP_){
return (p1__16667_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16668_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16668_SHARP_),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core16669.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core16669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta16670], null);
});

schema.core.t_schema$core16669.cljs$lang$type = true;

schema.core.t_schema$core16669.cljs$lang$ctorStr = "schema.core/t_schema$core16669";

schema.core.t_schema$core16669.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"schema.core/t_schema$core16669");
});

schema.core.__GT_t_schema$core16669 = (function schema$core$__GT_t_schema$core16669(meta16670){
return (new schema.core.t_schema$core16669(meta16670));
});

}

return (new schema.core.t_schema$core16669(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16673,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16675 = (((k16673 instanceof cljs.core.Keyword))?k16673.fqn:null);
switch (G__16675) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16673,else__5211__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Maybe{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16672){
var self__ = this;
var G__16672__$1 = this;
return (new cljs.core.RecordIter((0),G__16672__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16672){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16676 = cljs.core.keyword_identical_QMARK_;
var expr__16677 = k__5216__auto__;
if(cljs.core.truth_((pred__16676.cljs$core$IFn$_invoke$arity$2 ? pred__16676.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16677) : pred__16676.call(null,cljs.core.cst$kw$schema,expr__16677)))){
return (new schema.core.Maybe(G__16672,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16672),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16672){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__16672,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.nil_QMARK_,cljs.core.cst$kw$schema,schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$maybe);
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__16674){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16674),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16674,cljs.core.cst$kw$schema),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16682,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16684 = (((k16682 instanceof cljs.core.Keyword))?k16682.fqn:null);
switch (G__16684) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16682,else__5211__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.NamedSchema{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16681){
var self__ = this;
var G__16681__$1 = this;
return (new cljs.core.RecordIter((0),G__16681__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16681){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16685 = cljs.core.keyword_identical_QMARK_;
var expr__16686 = k__5216__auto__;
if(cljs.core.truth_((pred__16685.cljs$core$IFn$_invoke$arity$2 ? pred__16685.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16686) : pred__16685.call(null,cljs.core.cst$kw$schema,expr__16686)))){
return (new schema.core.NamedSchema(G__16681,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16685.cljs$core$IFn$_invoke$arity$2 ? pred__16685.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__16686) : pred__16685.call(null,cljs.core.cst$kw$name,expr__16686)))){
return (new schema.core.NamedSchema(self__.schema,G__16681,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16681),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16681){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__16681,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__16680_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__16680_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),cljs.core.cst$sym$named);
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__16683){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16683),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__16683),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16683,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$name], 0)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16691,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16693 = (((k16691 instanceof cljs.core.Keyword))?k16691.fqn:null);
switch (G__16693) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16691,else__5211__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Either{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16690){
var self__ = this;
var G__16690__$1 = this;
return (new cljs.core.RecordIter((0),G__16690__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16690){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16694 = cljs.core.keyword_identical_QMARK_;
var expr__16695 = k__5216__auto__;
if(cljs.core.truth_((pred__16694.cljs$core$IFn$_invoke$arity$2 ? pred__16694.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__16695) : pred__16694.call(null,cljs.core.cst$kw$schemas,expr__16695)))){
return (new schema.core.Either(G__16690,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16690),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16690){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__16690,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5366__auto__ = ((function (this$__$1){
return (function schema$core$iter__16697(s__16698){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16698__$1 = s__16698;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16698__$1);
if(temp__4425__auto__){
var s__16698__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16698__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16698__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16700 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16699 = (0);
while(true){
if((i__16699 < size__5365__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16699);
cljs.core.chunk_append(b__16700,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__16704 = (i__16699 + (1));
i__16699 = G__16704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16700),schema$core$iter__16697(cljs.core.chunk_rest(s__16698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16700),null);
}
} else {
var s = cljs.core.first(s__16698__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__16697(cljs.core.rest(s__16698__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5366__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__16689_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16689_SHARP_),cljs.core.cst$sym$some_DASH_matching_DASH_either_DASH_clause_QMARK_);
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__16692){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__16692),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16692,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__5659__auto__ = [];
var len__5652__auto___16706 = arguments.length;
var i__5653__auto___16707 = (0);
while(true){
if((i__5653__auto___16707 < len__5652__auto___16706)){
args__5659__auto__.push((arguments[i__5653__auto___16707]));

var G__16708 = (i__5653__auto___16707 + (1));
i__5653__auto___16707 = G__16708;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq16705){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16705));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16711,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16713 = (((k16711 instanceof cljs.core.Keyword))?k16711.fqn:null);
switch (G__16713) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16711,else__5211__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16710){
var self__ = this;
var G__16710__$1 = this;
return (new cljs.core.RecordIter((0),G__16710__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16710){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16714 = cljs.core.keyword_identical_QMARK_;
var expr__16715 = k__5216__auto__;
if(cljs.core.truth_((pred__16714.cljs$core$IFn$_invoke$arity$2 ? pred__16714.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$preds_DASH_and_DASH_schemas,expr__16715) : pred__16714.call(null,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,expr__16715)))){
return (new schema.core.ConditionalSchema(G__16710,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16714.cljs$core$IFn$_invoke$arity$2 ? pred__16714.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error_DASH_symbol,expr__16715) : pred__16714.call(null,cljs.core.cst$kw$error_DASH_symbol,expr__16715)))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__16710,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16710),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16710){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__16710,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5366__auto__ = ((function (this$__$1){
return (function schema$core$iter__16717(s__16718){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16718__$1 = s__16718;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16718__$1);
if(temp__4425__auto__){
var s__16718__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16718__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16718__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16720 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16719 = (0);
while(true){
if((i__16719 < size__5365__auto__)){
var vec__16725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16719);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16725,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16725,(1),null);
cljs.core.chunk_append(b__16720,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__16730 = (i__16719 + (1));
i__16719 = G__16730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16720),schema$core$iter__16717(cljs.core.chunk_rest(s__16718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16720),null);
}
} else {
var vec__16726 = cljs.core.first(s__16718__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16726,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16726,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__16717(cljs.core.rest(s__16718__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5366__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__16709_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16709_SHARP_),(function (){var or__4594__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__16727){
var vec__16728 = p__16727;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16728,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16728,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__16712){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__16712),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__16712),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16712,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.array_seq([cljs.core.cst$kw$error_DASH_symbol], 0)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__5659__auto__ = [];
var len__5652__auto___16742 = arguments.length;
var i__5653__auto___16743 = (0);
while(true){
if((i__5653__auto___16743 < len__5652__auto___16742)){
args__5659__auto__.push((arguments[i__5653__auto___16743]));

var G__16744 = (i__5653__auto___16743 + (1));
i__5653__auto___16743 = G__16744;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && ((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__5366__auto__ = (function schema$core$iter__16732(s__16733){
return (new cljs.core.LazySeq(null,(function (){
var s__16733__$1 = s__16733;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16733__$1);
if(temp__4425__auto__){
var s__16733__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16733__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16733__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16735 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16734 = (0);
while(true){
if((i__16734 < size__5365__auto__)){
var vec__16740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16734);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740,(1),null);
cljs.core.chunk_append(b__16735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null));

var G__16745 = (i__16734 + (1));
i__16734 = G__16745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16735),schema$core$iter__16732(cljs.core.chunk_rest(s__16733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16735),null);
}
} else {
var vec__16741 = cljs.core.first(s__16733__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null),schema$core$iter__16732(cljs.core.rest(s__16733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5366__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq16731){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16731));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (schema.core.precondition[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (schema.core.precondition["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__5366__auto__ = ((function (this$__$1){
return (function schema$core$iter__16746(s__16747){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16747__$1 = s__16747;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16747__$1);
if(temp__4425__auto__){
var s__16747__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16747__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16747__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16749 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16748 = (0);
while(true){
if((i__16748 < size__5365__auto__)){
var map__16756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16748);
var map__16756__$1 = ((((!((map__16756 == null)))?((((map__16756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16756):map__16756);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16756__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16756__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__16749,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__16760 = (i__16748 + (1));
i__16748 = G__16760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16749),schema$core$iter__16746(cljs.core.chunk_rest(s__16747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16749),null);
}
} else {
var map__16758 = cljs.core.first(s__16747__$2);
var map__16758__$1 = ((((!((map__16758 == null)))?((((map__16758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16758):map__16758);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16758__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16758__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__16746(cljs.core.rest(s__16747__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5366__auto__(this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16763,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16765 = (((k16763 instanceof cljs.core.Keyword))?k16763.fqn:null);
switch (G__16765) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16763,else__5211__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.CondPre{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16762){
var self__ = this;
var G__16762__$1 = this;
return (new cljs.core.RecordIter((0),G__16762__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16762){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16766 = cljs.core.keyword_identical_QMARK_;
var expr__16767 = k__5216__auto__;
if(cljs.core.truth_((pred__16766.cljs$core$IFn$_invoke$arity$2 ? pred__16766.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__16767) : pred__16766.call(null,cljs.core.cst$kw$schemas,expr__16767)))){
return (new schema.core.CondPre(G__16762,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16762),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16762){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__16762,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5366__auto__ = ((function (this$__$1){
return (function schema$core$iter__16769(s__16770){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16770__$1 = s__16770;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16770__$1);
if(temp__4425__auto__){
var s__16770__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16770__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16770__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16772 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16771 = (0);
while(true){
if((i__16771 < size__5365__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16771);
cljs.core.chunk_append(b__16772,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__16776 = (i__16771 + (1));
i__16771 = G__16776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16772),schema$core$iter__16769(cljs.core.chunk_rest(s__16770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16772),null);
}
} else {
var s = cljs.core.first(s__16770__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__16769(cljs.core.rest(s__16770__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5366__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__16761_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16761_SHARP_),cljs.core.cst$sym$matches_DASH_some_DASH_precondition_QMARK_);
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cond_DASH_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__16764){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__16764),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16764,cljs.core.cst$kw$schemas),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__5659__auto__ = [];
var len__5652__auto___16778 = arguments.length;
var i__5653__auto___16779 = (0);
while(true){
if((i__5653__auto___16779 < len__5652__auto___16778)){
args__5659__auto__.push((arguments[i__5653__auto___16779]));

var G__16780 = (i__5653__auto___16779 + (1));
i__5653__auto___16779 = G__16780;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq16777){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16777));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16783,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16785 = (((k16783 instanceof cljs.core.Keyword))?k16783.fqn:null);
switch (G__16785) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16783,else__5211__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Constrained{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$ = true;

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16782){
var self__ = this;
var G__16782__$1 = this;
return (new cljs.core.RecordIter((0),G__16782__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$post_DASH_name,null,cljs.core.cst$kw$postcondition,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16782){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16786 = cljs.core.keyword_identical_QMARK_;
var expr__16787 = k__5216__auto__;
if(cljs.core.truth_((pred__16786.cljs$core$IFn$_invoke$arity$2 ? pred__16786.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16787) : pred__16786.call(null,cljs.core.cst$kw$schema,expr__16787)))){
return (new schema.core.Constrained(G__16782,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16786.cljs$core$IFn$_invoke$arity$2 ? pred__16786.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$postcondition,expr__16787) : pred__16786.call(null,cljs.core.cst$kw$postcondition,expr__16787)))){
return (new schema.core.Constrained(self__.schema,G__16782,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16786.cljs$core$IFn$_invoke$arity$2 ? pred__16786.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_name,expr__16787) : pred__16786.call(null,cljs.core.cst$kw$post_DASH_name,expr__16787)))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__16782,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16782),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16782){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__16782,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = true;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__16781_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16781_SHARP_),self__.post_name);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.post_name),schema.core.explain(self__.schema)),cljs.core.cst$sym$constrained);
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$postcondition,cljs.core.cst$sym$post_DASH_name], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__16784){
return (new schema.core.Constrained(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16784),cljs.core.cst$kw$postcondition.cljs$core$IFn$_invoke$arity$1(G__16784),cljs.core.cst$kw$post_DASH_name.cljs$core$IFn$_invoke$arity$1(G__16784),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16784,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], 0)),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var args16790 = [];
var len__5652__auto___16793 = arguments.length;
var i__5653__auto___16794 = (0);
while(true){
if((i__5653__auto___16794 < len__5652__auto___16793)){
args16790.push((arguments[i__5653__auto___16794]));

var G__16795 = (i__5653__auto___16794 + (1));
i__5653__auto___16794 = G__16795;
continue;
} else {
}
break;
}

var G__16792 = args16790.length;
switch (G__16792) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16790.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16799,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16801 = (((k16799 instanceof cljs.core.Keyword))?k16799.fqn:null);
switch (G__16801) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16799,else__5211__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(tx))){
return tx;
} else {
var G__16802 = (function (){var or__4594__auto__ = tx;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16802) : f.call(null,G__16802));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__16797_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__16797_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Both{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16798){
var self__ = this;
var G__16798__$1 = this;
return (new cljs.core.RecordIter((0),G__16798__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16798){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16803 = cljs.core.keyword_identical_QMARK_;
var expr__16804 = k__5216__auto__;
if(cljs.core.truth_((pred__16803.cljs$core$IFn$_invoke$arity$2 ? pred__16803.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__16804) : pred__16803.call(null,cljs.core.cst$kw$schemas,expr__16804)))){
return (new schema.core.Both(G__16798,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16798),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16798){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__16798,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__16800){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__16800),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16800,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__5659__auto__ = [];
var len__5652__auto___16808 = arguments.length;
var i__5653__auto___16809 = (0);
while(true){
if((i__5653__auto___16809 < len__5652__auto___16808)){
args__5659__auto__.push((arguments[i__5653__auto___16809]));

var G__16810 = (i__5653__auto___16809 + (1));
i__5653__auto___16809 = G__16810;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq16807){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16807));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__16813 = cljs.core.meta(v);
var map__16813__$1 = ((((!((map__16813 == null)))?((((map__16813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16813):map__16813);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16816,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16818 = (((k16816 instanceof cljs.core.Keyword))?k16816.fqn:null);
switch (G__16818) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16816,else__5211__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Recursive{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16815){
var self__ = this;
var G__16815__$1 = this;
return (new cljs.core.RecordIter((0),G__16815__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16815){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16819 = cljs.core.keyword_identical_QMARK_;
var expr__16820 = k__5216__auto__;
if(cljs.core.truth_((pred__16819.cljs$core$IFn$_invoke$arity$2 ? pred__16819.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$derefable,expr__16820) : pred__16819.call(null,cljs.core.cst$kw$derefable,expr__16820)))){
return (new schema.core.Recursive(G__16815,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16815),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16815){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__16815,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.derefable) : cljs.core.deref.call(null,self__.derefable))], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.var_name(self__.derefable)),cljs.core.cst$sym$var):cljs.core.cst$sym$$$$)),cljs.core.cst$sym$recursive);
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__16817){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__16817),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16817,cljs.core.cst$kw$derefable),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.array_seq([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16828,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16830 = (((k16828 instanceof cljs.core.Keyword))?k16828.fqn:null);
switch (G__16830) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16828,else__5211__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Atomic{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$ = true;

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16827){
var self__ = this;
var G__16827__$1 = this;
return (new cljs.core.RecordIter((0),G__16827__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16827){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16831 = cljs.core.keyword_identical_QMARK_;
var expr__16832 = k__5216__auto__;
if(cljs.core.truth_((pred__16831.cljs$core$IFn$_invoke$arity$2 ? pred__16831.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16832) : pred__16831.call(null,cljs.core.cst$kw$schema,expr__16832)))){
return (new schema.core.Atomic(G__16827,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16827),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16827){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__16827,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = true;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__11655__11656__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11655__11656__auto__),cljs.core.cst$sym$atom_QMARK_);
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
var G__16834_16837 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.deref.call(null,coll));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16834_16837) : item_fn.call(null,G__16834_16837));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
var G__16835 = cljs.core.first(xs);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16835) : cljs.core.atom.call(null,G__16835));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$atom);
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__16829){
return (new schema.core.Atomic(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16829),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16829,cljs.core.cst$kw$schema),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16839,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16841 = (((k16839 instanceof cljs.core.Keyword))?k16839.fqn:null);
switch (G__16841) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16839,else__5211__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.RequiredKey{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16838){
var self__ = this;
var G__16838__$1 = this;
return (new cljs.core.RecordIter((0),G__16838__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16838){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16842 = cljs.core.keyword_identical_QMARK_;
var expr__16843 = k__5216__auto__;
if(cljs.core.truth_((pred__16842.cljs$core$IFn$_invoke$arity$2 ? pred__16842.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$k,expr__16843) : pred__16842.call(null,cljs.core.cst$kw$k,expr__16843)))){
return (new schema.core.RequiredKey(G__16838,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16838),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16838){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__16838,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__16840){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__16840),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16840,cljs.core.cst$kw$k),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16847,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16849 = (((k16847 instanceof cljs.core.Keyword))?k16847.fqn:null);
switch (G__16849) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16847,else__5211__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.OptionalKey{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16846){
var self__ = this;
var G__16846__$1 = this;
return (new cljs.core.RecordIter((0),G__16846__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16846){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16850 = cljs.core.keyword_identical_QMARK_;
var expr__16851 = k__5216__auto__;
if(cljs.core.truth_((pred__16850.cljs$core$IFn$_invoke$arity$2 ? pred__16850.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$k,expr__16851) : pred__16850.call(null,cljs.core.cst$kw$k,expr__16851)))){
return (new schema.core.OptionalKey(G__16846,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16846),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16846){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__16846,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__16848){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__16848),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16848,cljs.core.cst$kw$k),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__4594__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16855,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16857 = (((k16855 instanceof cljs.core.Keyword))?k16855.fqn:null);
switch (G__16857) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16855,else__5211__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.MapEntry{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16854){
var self__ = this;
var G__16854__$1 = this;
return (new cljs.core.RecordIter((0),G__16854__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16854){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16858 = cljs.core.keyword_identical_QMARK_;
var expr__16859 = k__5216__auto__;
if(cljs.core.truth_((pred__16858.cljs$core$IFn$_invoke$arity$2 ? pred__16858.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_schema,expr__16859) : pred__16858.call(null,cljs.core.cst$kw$key_DASH_schema,expr__16859)))){
return (new schema.core.MapEntry(G__16854,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16858.cljs$core$IFn$_invoke$arity$2 ? pred__16858.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val_DASH_schema,expr__16859) : pred__16858.call(null,cljs.core.cst$kw$val_DASH_schema,expr__16859)))){
return (new schema.core.MapEntry(self__.key_schema,G__16854,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16854),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16854){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__16854,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__16861_16868 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16861_16868) : item_fn.call(null,G__16861_16868));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__16862_16869 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16862_16869) : item_fn.call(null,G__16862_16869));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__16863,p__16864,_){
var vec__16865 = p__16863;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16865,(0),null);
var vec__16866 = p__16864;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(1),null);
var temp__4423__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,cljs.core.cst$sym$invalid_DASH_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain(self__.key_schema)),cljs.core.cst$sym$map_DASH_entry);
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__16856){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__16856),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__16856),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16856,cljs.core.cst$kw$key_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$val_DASH_schema], 0)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null)));
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_16899 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__16870_SHARP_){
return (cljs.core.count(p1__16870_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_16899)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([duplicate_keys_16899], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5366__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__16885(s__16886){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__16886__$1 = s__16886;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16886__$1);
if(temp__4425__auto__){
var s__16886__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16886__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16886__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16888 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16887 = (0);
while(true){
if((i__16887 < size__5365__auto__)){
var vec__16895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16887);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16895,(1),null);
cljs.core.chunk_append(b__16888,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__16887,rk,required_QMARK_,vec__16895,k,v,c__5364__auto__,size__5365__auto__,b__16888,s__16886__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__16896_16900 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16896_16900) : item_fn.call(null,G__16896_16900));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__16887,rk,required_QMARK_,vec__16895,k,v,c__5364__auto__,size__5365__auto__,b__16888,s__16886__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__16901 = (i__16887 + (1));
i__16887 = G__16901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16888),schema$core$map_elements_$_iter__16885(cljs.core.chunk_rest(s__16886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16888),null);
}
} else {
var vec__16897 = cljs.core.first(s__16886__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16897,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__16897,k,v,s__16886__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__16898_16902 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16898_16902) : item_fn.call(null,G__16898_16902));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__16897,k,v,s__16886__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__16885(cljs.core.rest(s__16886__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__5366__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__5366__auto__ = (function schema$core$map_error_$_iter__16913(s__16914){
return (new cljs.core.LazySeq(null,(function (){
var s__16914__$1 = s__16914;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16914__$1);
if(temp__4425__auto__){
var s__16914__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16914__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16914__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16916 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16915 = (0);
while(true){
if((i__16915 < size__5365__auto__)){
var vec__16921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16915);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921,(1),null);
cljs.core.chunk_append(b__16916,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__16923 = (i__16915 + (1));
i__16915 = G__16923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16916),schema$core$map_error_$_iter__16913(cljs.core.chunk_rest(s__16914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16916),null);
}
} else {
var vec__16922 = cljs.core.first(s__16914__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16922,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16922,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__16913(cljs.core.rest(s__16914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5366__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__11655__11656__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11655__11656__auto__),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__16924_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__16924_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5366__auto__ = (function schema$core$map_explain_$_iter__16935(s__16936){
return (new cljs.core.LazySeq(null,(function (){
var s__16936__$1 = s__16936;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16936__$1);
if(temp__4425__auto__){
var s__16936__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16936__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16936__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16938 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16937 = (0);
while(true){
if((i__16937 < size__5365__auto__)){
var vec__16943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16937);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16943,(1),null);
cljs.core.chunk_append(b__16938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__16945 = (i__16937 + (1));
i__16937 = G__16945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16938),schema$core$map_explain_$_iter__16935(cljs.core.chunk_rest(s__16936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16938),null);
}
} else {
var vec__16944 = cljs.core.first(s__16936__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16944,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__16935(cljs.core.rest(s__16936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5366__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__11655__11656__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11655__11656__auto__),cljs.core.cst$sym$set_QMARK_);
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16947,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16949 = (((k16947 instanceof cljs.core.Keyword))?k16947.fqn:null);
switch (G__16949) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16947,else__5211__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Queue{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16946){
var self__ = this;
var G__16946__$1 = this;
return (new cljs.core.RecordIter((0),G__16946__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16946){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16950 = cljs.core.keyword_identical_QMARK_;
var expr__16951 = k__5216__auto__;
if(cljs.core.truth_((pred__16950.cljs$core$IFn$_invoke$arity$2 ? pred__16950.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16951) : pred__16950.call(null,cljs.core.cst$kw$schema,expr__16951)))){
return (new schema.core.Queue(G__16946,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16946),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16946){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__16946,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__11655__11656__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11655__11656__auto__),cljs.core.cst$sym$queue_QMARK_);
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$queue);
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__16948){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16948),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16948,cljs.core.cst$kw$schema),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k16955,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__16957 = (((k16955 instanceof cljs.core.Keyword))?k16955.fqn:null);
switch (G__16957) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16955,else__5211__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.One{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16954){
var self__ = this;
var G__16954__$1 = this;
return (new cljs.core.RecordIter((0),G__16954__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__16954){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__16958 = cljs.core.keyword_identical_QMARK_;
var expr__16959 = k__5216__auto__;
if(cljs.core.truth_((pred__16958.cljs$core$IFn$_invoke$arity$2 ? pred__16958.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16959) : pred__16958.call(null,cljs.core.cst$kw$schema,expr__16959)))){
return (new schema.core.One(G__16954,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16958.cljs$core$IFn$_invoke$arity$2 ? pred__16958.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optional_QMARK_,expr__16959) : pred__16958.call(null,cljs.core.cst$kw$optional_QMARK_,expr__16959)))){
return (new schema.core.One(self__.schema,G__16954,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16958.cljs$core$IFn$_invoke$arity$2 ? pred__16958.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__16959) : pred__16958.call(null,cljs.core.cst$kw$name,expr__16959)))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__16954,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__16954),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__16954){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__16954,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__16956){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16956),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16956),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__16956),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16956,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__16967 = cljs.core.split_with((function (p1__16962_SHARP_){
return ((p1__16962_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__16962_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16967,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16967,(1),null);
var vec__16968 = cljs.core.split_with(((function (vec__16967,required,more){
return (function (p1__16963_SHARP_){
var and__4582__auto__ = (p1__16963_SHARP_ instanceof schema.core.One);
if(and__4582__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__16963_SHARP_);
} else {
return and__4582__auto__;
}
});})(vec__16967,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16968,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16968,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__16967,required,more,vec__16968,optional,more__$1){
return (function (p1__16964_SHARP_){
return !((p1__16964_SHARP_ instanceof schema.core.One));
});})(vec__16967,required,more,vec__16968,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_(x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16969_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16969_SHARP_),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__16970 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5366__auto__ = ((function (vec__16970,singles,multi,this$__$1){
return (function schema$core$iter__16971(s__16972){
return (new cljs.core.LazySeq(null,((function (vec__16970,singles,multi,this$__$1){
return (function (){
var s__16972__$1 = s__16972;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16972__$1);
if(temp__4425__auto__){
var s__16972__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16972__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16972__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16974 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16973 = (0);
while(true){
if((i__16973 < size__5365__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16973);
cljs.core.chunk_append(b__16974,(function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (i__16973,required_QMARK_,s,c__5364__auto__,size__5365__auto__,b__16974,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq(x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
var G__16981_16992 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16981_16992) : item_fn.call(null,G__16981_16992));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__16982_16993 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (i__16973,temp__4423__auto__,required_QMARK_,s,c__5364__auto__,size__5365__auto__,b__16974,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s.name),cljs.core.cst$sym$present_QMARK_);
});})(i__16973,temp__4423__auto__,required_QMARK_,s,c__5364__auto__,size__5365__auto__,b__16974,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16982_16993) : item_fn.call(null,G__16982_16993));
} else {
}

return null;
}
});})(i__16973,required_QMARK_,s,c__5364__auto__,size__5365__auto__,b__16974,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1))
);
})());

var G__16994 = (i__16973 + (1));
i__16973 = G__16994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16974),schema$core$iter__16971(cljs.core.chunk_rest(s__16972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16974),null);
}
} else {
var s = cljs.core.first(s__16972__$2);
return cljs.core.cons((function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (required_QMARK_,s,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq(x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
var G__16983_16995 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16983_16995) : item_fn.call(null,G__16983_16995));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__16984_16996 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__4423__auto__,required_QMARK_,s,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s.name),cljs.core.cst$sym$present_QMARK_);
});})(temp__4423__auto__,required_QMARK_,s,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16984_16996) : item_fn.call(null,G__16984_16996));
} else {
}

return null;
}
});})(required_QMARK_,s,s__16972__$2,temp__4425__auto__,vec__16970,singles,multi,this$__$1))
);
})(),schema$core$iter__16971(cljs.core.rest(s__16972__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16970,singles,multi,this$__$1))
,null,null));
});})(vec__16970,singles,multi,this$__$1))
;
return iter__5366__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(extra)),cljs.core.cst$sym$has_DASH_extra_DASH_elts_QMARK_);
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__16985 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5366__auto__ = ((function (vec__16985,singles,multi,this$__$1){
return (function schema$core$iter__16986(s__16987){
return (new cljs.core.LazySeq(null,((function (vec__16985,singles,multi,this$__$1){
return (function (){
var s__16987__$1 = s__16987;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16987__$1);
if(temp__4425__auto__){
var s__16987__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16987__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16987__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16989 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16988 = (0);
while(true){
if((i__16988 < size__5365__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16988);
cljs.core.chunk_append(b__16989,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one)));

var G__16997 = (i__16988 + (1));
i__16988 = G__16997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16989),schema$core$iter__16986(cljs.core.chunk_rest(s__16987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16989),null);
}
} else {
var s = cljs.core.first(s__16987__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one)),schema$core$iter__16986(cljs.core.rest(s__16987__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16985,singles,multi,this$__$1))
,null,null));
});})(vec__16985,singles,multi,this$__$1))
;
return iter__5366__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k17002,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__17004 = (((k17002 instanceof cljs.core.Keyword))?k17002.fqn:null);
switch (G__17004) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17002,else__5211__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.Record{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17001){
var self__ = this;
var G__17001__$1 = this;
return (new cljs.core.RecordIter((0),G__17001__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__17001){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__17005 = cljs.core.keyword_identical_QMARK_;
var expr__17006 = k__5216__auto__;
if(cljs.core.truth_((pred__17005.cljs$core$IFn$_invoke$arity$2 ? pred__17005.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$klass,expr__17006) : pred__17005.call(null,cljs.core.cst$kw$klass,expr__17006)))){
return (new schema.core.Record(G__17001,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17005.cljs$core$IFn$_invoke$arity$2 ? pred__17005.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__17006) : pred__17005.call(null,cljs.core.cst$kw$schema,expr__17006)))){
return (new schema.core.Record(self__.klass,G__17001,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__17001),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__17001){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__17001,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16998_SHARP_){
return (p1__16998_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16999_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16999_SHARP_),self__.klass),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__4423__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__17000_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__17000_SHARP_),cljs.core.cst$sym$passes_DASH_extra_DASH_validation_QMARK_);
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),cljs.core.cst$sym$record);
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__17003){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__17003),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__17003),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17003,cljs.core.cst$kw$klass,cljs.core.array_seq([cljs.core.cst$kw$schema], 0)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__17012 = cljs.core.split_with((function (p1__17009_SHARP_){
return (p1__17009_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17012,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17012,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__17012,required,more){
return (function (p1__17010_SHARP_){
return schema.core.explain(p1__17010_SHARP_.schema);
});})(vec__17012,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k17014,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__17016 = (((k17014 instanceof cljs.core.Keyword))?k17014.fqn:null);
switch (G__17016) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17014,else__5211__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.core.FnSchema{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17013){
var self__ = this;
var G__17013__$1 = this;
return (new cljs.core.RecordIter((0),G__17013__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__17013){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__17017 = cljs.core.keyword_identical_QMARK_;
var expr__17018 = k__5216__auto__;
if(cljs.core.truth_((pred__17017.cljs$core$IFn$_invoke$arity$2 ? pred__17017.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$output_DASH_schema,expr__17018) : pred__17017.call(null,cljs.core.cst$kw$output_DASH_schema,expr__17018)))){
return (new schema.core.FnSchema(G__17013,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17017.cljs$core$IFn$_invoke$arity$2 ? pred__17017.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input_DASH_schemas,expr__17018) : pred__17017.call(null,cljs.core.cst$kw$input_DASH_schemas,expr__17018)))){
return (new schema.core.FnSchema(self__.output_schema,G__17013,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__17013),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__17013){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__17013,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__11655__11656__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11655__11656__auto__),cljs.core.cst$sym$ifn_QMARK_);
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT__STAR_,schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT_,schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema,cljs.core.cst$sym$input_DASH_schemas], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__17015){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__17015),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__17015),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17015,cljs.core.cst$kw$output_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$input_DASH_schemas], 0)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.cst$kw$name,name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__4594__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
var m__11388__auto__ = cljs.core.meta(f);
var k__11389__auto__ = cljs.core.cst$kw$schema;
var temp__4423__auto__ = cljs.core.find(m__11388__auto__,k__11389__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__11390__auto__ = temp__4423__auto__;
return cljs.core.val(pair__11390__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__11389__auto__,m__11388__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(schema.utils.max_value_length,max_length) : cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length));
});
