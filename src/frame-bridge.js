/* One outer scroll controls both retained WebGL scenes. */
(function(){
'use strict';
const W=window,channel='portfolio-portifolio-v1';
const post=data=>W.parent.postMessage({channel,...data},'*');
W.PortifolioBridge={post};
W.addEventListener('wheel',e=>{if(e.ctrlKey)return;e.preventDefault();e.stopImmediatePropagation();post({type:'wheel',input:'wheel',delta:e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1)});},{capture:true,passive:false});
let touchY=null;
W.addEventListener('touchstart',e=>{touchY=e.touches[0]?.clientY??null;post({type:'touch-start'});},{passive:true,capture:true});
W.addEventListener('touchmove',e=>{if(e.touches.length!==1||touchY===null)return;const y=e.touches[0].clientY,delta=touchY-y;touchY=y;if(Math.abs(delta)>.1){e.preventDefault();post({type:'wheel',input:'touch',delta});}},{capture:true,passive:false});
W.addEventListener('touchend',()=>{touchY=null;},{passive:true,capture:true});W.addEventListener('touchcancel',()=>{touchY=null;},{passive:true,capture:true});
W.addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return;if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();post({type:'key',key:e.key,shift:e.shiftKey});}},{capture:true});
W.addEventListener('click',e=>{const a=e.target.closest?.('a[href]');if(a&&!a.matches('.portifolio-project-link,.portifolio-contact a'))e.preventDefault();},{capture:true});
})();
