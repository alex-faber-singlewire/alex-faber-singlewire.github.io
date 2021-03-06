// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__5659__auto__ = [];
var len__5652__auto___17035 = arguments.length;
var i__5653__auto___17036 = (0);
while(true){
if((i__5653__auto___17036 < len__5652__auto___17035)){
args__5659__auto__.push((arguments[i__5653__auto___17036]));

var G__17037 = (i__5653__auto___17036 + (1));
i__5653__auto___17036 = G__17037;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4594__auto__ = m;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5366__auto__ = (function schema$utils$iter__17025(s__17026){
return (new cljs.core.LazySeq(null,(function (){
var s__17026__$1 = s__17026;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17026__$1);
if(temp__4425__auto__){
var s__17026__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17026__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__17026__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__17028 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__17027 = (0);
while(true){
if((i__17027 < size__5365__auto__)){
var vec__17033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__17027);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17033,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__17028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__17038 = (i__17027 + (1));
i__17027 = G__17038;
continue;
} else {
var G__17039 = (i__17027 + (1));
i__17027 = G__17039;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17028),schema$utils$iter__17025(cljs.core.chunk_rest(s__17026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17028),null);
}
} else {
var vec__17034 = cljs.core.first(s__17026__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17034,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__17025(cljs.core.rest(s__17026__$2)));
} else {
var G__17040 = cljs.core.rest(s__17026__$2);
s__17026__$1 = G__17040;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5366__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq17023){
var G__17024 = cljs.core.first(seq17023);
var seq17023__$1 = cljs.core.next(seq17023);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__17024,seq17023__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__5659__auto__ = [];
var len__5652__auto___17043 = arguments.length;
var i__5653__auto___17044 = (0);
while(true){
if((i__5653__auto___17044 < len__5652__auto___17043)){
args__5659__auto__.push((arguments[i__5653__auto___17044]));

var G__17045 = (i__5653__auto___17044 + (1));
i__5653__auto___17044 = G__17045;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq17041){
var G__17042 = cljs.core.first(seq17041);
var seq17041__$1 = cljs.core.next(seq17041);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__17042,seq17041__$1);
});
schema.utils.max_value_length = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19)) : cljs.core.atom.call(null,(19)));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str(value)].join('')) <= (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(schema.utils.max_value_length) : cljs.core.deref.call(null,schema.utils.max_value_length)))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17049){
var vec__17050 = p__17049;
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(1),null);
return clojure.string.replace(s__$1,from,[cljs.core.str(to)].join(''));
}),s,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__17046_SHARP_){
return (- cljs.core.count(cljs.core.second(p1__17046_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
return schema.utils.unmunge((function (){var or__4594__auto__ = cljs.core.not_empty(cljs.core.second(cljs.core.re_find(/function ([^\(]*)\(/,[cljs.core.str(f)].join(''))));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return "function";
}
})());
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || (x.cljs$core$IRecord$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});
schema.utils.validation_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$value,cljs.core.cst$sym$expectation_DASH_delay,cljs.core.cst$sym$fail_DASH_explanation], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__17054 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17054) : cljs.core.deref.call(null,G__17054));
})()),(function (){var or__4594__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.cst$sym$not;
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.named_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$error], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),cljs.core.cst$sym$named);
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
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k17056,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__17058 = (((k17056 instanceof cljs.core.Keyword))?k17056.fqn:null);
switch (G__17058) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17056,else__5211__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = true;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17055){
var self__ = this;
var G__17055__$1 = this;
return (new cljs.core.RecordIter((0),G__17055__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core._iterator(self__.__extmap)));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__17055){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__17059 = cljs.core.keyword_identical_QMARK_;
var expr__17060 = k__5216__auto__;
if(cljs.core.truth_((pred__17059.cljs$core$IFn$_invoke$arity$2 ? pred__17059.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,expr__17060) : pred__17059.call(null,cljs.core.cst$kw$error,expr__17060)))){
return (new schema.utils.ErrorContainer(G__17055,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__17055),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__17055){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__17055,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$error], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__17057){
return (new schema.utils.ErrorContainer(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(G__17057),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17057,cljs.core.cst$kw$error),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$x], 0)))].join('')));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_(x))){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

/**
 * @interface
 */
schema.utils.PSimpleCell = function(){};

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$get_cell$arity$1 == null)))){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (schema.utils.get_cell[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (schema.utils.get_cell["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$set_cell$arity$2 == null)))){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (schema.utils.set_cell[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5250__auto__.call(null,this$,x));
} else {
var m__5250__auto____$1 = (schema.utils.set_cell["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5250__auto____$1.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
}
});


/**
* @constructor
 * @implements {schema.utils.PSimpleCell}
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$q,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean,cljs.core.cst$kw$volatile_DASH_mutable,true], null))], null);
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
