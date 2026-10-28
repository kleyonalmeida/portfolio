/* Suspend callbacks of an embedded scene when it is outside the viewport.
   Paused callbacks are retained and resumed, not discarded. */
(function(){
'use strict';
const nativeRAF=window.requestAnimationFrame.bind(window),nativeCancel=window.cancelAnimationFrame.bind(window);
const queued=new Map();let next=1000000,active=true,callbacks=0;
function schedule(id,entry){if(!active||entry.native)return;entry.native=nativeRAF(t=>{entry.native=0;if(!active)return;queued.delete(id);callbacks++;entry.callback(t)})}
window.requestAnimationFrame=function(callback){if(typeof callback!=='function')throw new TypeError('requestAnimationFrame callback must be a function');const id=next++,entry={callback,native:0};queued.set(id,entry);schedule(id,entry);return id};
window.cancelAnimationFrame=function(id){const entry=queued.get(id);if(entry){if(entry.native)nativeCancel(entry.native);queued.delete(id)}else nativeCancel(id)};
function setActive(value){value=Boolean(value)&&!document.hidden;if(value===active)return;active=value;document.documentElement.toggleAttribute('data-portifolio-paused',!active);if(!active){for(const entry of queued.values()){if(entry.native)nativeCancel(entry.native);entry.native=0}}else for(const [id,entry]of queued)schedule(id,entry);window.dispatchEvent(new CustomEvent('portifolio-activity',{detail:active}));}
let requested=true;
window.PortifolioPerformance={get active(){return active},get callbacks(){return callbacks},get pending(){return queued.size},setActive(value){requested=Boolean(value);setActive(requested)}};
document.addEventListener('visibilitychange',()=>setActive(requested));
const style=document.createElement('style');style.textContent='html[data-portifolio-paused] *,html[data-portifolio-paused] *:before,html[data-portifolio-paused] *:after{animation-play-state:paused!important}';document.head.appendChild(style);
window.addEventListener('message',e=>{if(e.source===parent&&e.data?.channel==='portfolio-portifolio-v1'&&e.data.type==='activity')window.PortifolioPerformance.setActive(e.data.active)});
})();
