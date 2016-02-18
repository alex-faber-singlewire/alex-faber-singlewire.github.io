// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.impl.batching');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('goog.async.nextTick');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flush_DASH_dom,reagent.impl.batching.do_later,cljs.core.cst$kw$yield,goog.async.nextTick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

re_frame.router.enqueue = (function re_frame$router$enqueue(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$enqueue$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$enqueue$arity$2(this$,event);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router.enqueue[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5250__auto__.call(null,this$,event));
} else {
var m__5250__auto____$1 = (re_frame.router.enqueue["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5250__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.enqueue",this$);
}
}
}
});

re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5250__auto__.call(null,this$,trigger,arg));
} else {
var m__5250__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5250__auto____$1.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
}
});

re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._add_event[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5250__auto__.call(null,this$,event));
} else {
var m__5250__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5250__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
}
});

re_frame.router._process_1st_event = (function re_frame$router$_process_1st_event(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._process_1st_event[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (re_frame.router._process_1st_event["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event",this$);
}
}
}
});

re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
}
});

re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._run_queue[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
}
});

re_frame.router._pause_run = (function re_frame$router$_pause_run(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause_run$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause_run$arity$2(this$,later_fn);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._pause_run[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5250__auto__.call(null,this$,later_fn));
} else {
var m__5250__auto____$1 = (re_frame.router._pause_run["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5250__auto____$1.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause-run",this$);
}
}
}
});

re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._exception[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5250__auto__.call(null,this$,ex));
} else {
var m__5250__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5250__auto____$1.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
}
});

re_frame.router._begin_resume = (function re_frame$router$_begin_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_begin_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_begin_resume$arity$1(this$);
} else {
var x__5249__auto__ = (((this$ == null))?null:this$);
var m__5250__auto__ = (re_frame.router._begin_resume[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto__.call(null,this$));
} else {
var m__5250__auto____$1 = (re_frame.router._begin_resume["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5250__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-begin-resume",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue){
this.fsm_state = fsm_state;
this.queue = queue;
})
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = true;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_begin_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frame.router._process_1st_event(this$__$1);

return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$finish_DASH_resume,null);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$finish_DASH_run,null);
} else {
var temp__4423__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__4423__auto__)){
var later_fn = temp__4423__auto__;
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$pause_DASH_run,later_fn);
} else {
re_frame.router._process_1st_event(this$__$1);

var G__22883 = (n - (1));
n = G__22883;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__22878 = ((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$begin_DASH_run,null);
});})(this$__$1))
;
return goog.async.nextTick(G__22878);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{re_frame.handlers.handle(event_v);
}catch (e22879){var ex_22884 = e22879;
re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$exception,ex_22884);
}
return self__.queue = cljs.core.pop(self__.queue);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause_run$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__22880 = ((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$begin_DASH_resume,null);
});})(this$__$1))
;
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__22880) : later_fn.call(null,G__22880));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$enqueue$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$add_DASH_event,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
var vec__22881 = (function (){var G__22882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resuming,cljs.core.cst$kw$add_DASH_event], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resuming,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._add_event(this$__$1,arg);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quiescent,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._exception(this$__$1,arg);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__22882)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quiescent], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._run_next_tick(this$__$1);
});})(G__22882,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$begin_DASH_run], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._run_queue(this$__$1);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause_DASH_run], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._pause_run(this$__$1,arg);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resuming,cljs.core.cst$kw$exception], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quiescent,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._exception(this$__$1,arg);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quiescent,cljs.core.cst$kw$add_DASH_event], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__22882,this$__$1){
return (function (){
re_frame.router._add_event(this$__$1,arg);

return re_frame.router._run_next_tick(this$__$1);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._add_event(this$__$1,arg);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._add_event(this$__$1,arg);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._add_event(this$__$1,arg);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$begin_DASH_resume], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resuming,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._begin_resume(this$__$1);
});})(G__22882,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resuming,cljs.core.cst$kw$finish_DASH_resume], null),G__22882)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__22882,this$__$1){
return (function (){
return re_frame.router._run_queue(this$__$1);
});})(G__22882,this$__$1))
], null);
} else {
throw [cljs.core.str("re-frame: state transition not found. "),cljs.core.str(self__.fsm_state),cljs.core.str(" "),cljs.core.str(trigger)].join('');

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
})();
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881,(1),null);
self__.fsm_state = new_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fsm_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$queue,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"re-frame.router/EventQueue");
});

re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue){
return (new re_frame.router.EventQueue(fsm_state,queue));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs.core.cst$kw$quiescent,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
/**
 * Queue an event to be processed by the registered handler.
 * 
 *   Usage example:
 *   (dispatch [:delete-item 42])
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"dispatch\" is ignoring a nil event."], 0));
} else {
re_frame.router.enqueue(re_frame.router.event_queue,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler
 *   immediately. Note: dispatch-sync may not be called while another
 *   event is being handled.
 * 
 *   Usage example:
 *   (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle(event_v);

return null;
});
