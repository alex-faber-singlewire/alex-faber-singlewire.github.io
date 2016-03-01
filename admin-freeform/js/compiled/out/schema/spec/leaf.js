// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k17119,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__17121 = (((k17119 instanceof cljs.core.Keyword))?k17119.fqn:null);
switch (G__17121) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17119,else__5211__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__4594__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17118){
var self__ = this;
var G__17118__$1 = this;
return (new cljs.core.RecordIter((0),G__17118__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__17118){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__17122 = cljs.core.keyword_identical_QMARK_;
var expr__17123 = k__5216__auto__;
if(cljs.core.truth_((pred__17122.cljs$core$IFn$_invoke$arity$2 ? pred__17122.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__17123) : pred__17122.call(null,cljs.core.cst$kw$pre,expr__17123)))){
return (new schema.spec.leaf.LeafSpec(G__17118,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__17118),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__17118){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__17118,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__17120){
return (new schema.spec.leaf.LeafSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__17120),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17120,cljs.core.cst$kw$pre),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec(pre);
});
