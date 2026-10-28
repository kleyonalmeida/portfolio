/* Portrait, robot reveal and fluid contours. No reference page is mounted. */
(function(){
'use strict';
window.PortifolioVisuals.startHero();
// Restore the fluid reveal over the portrait, independently of page scrolling.
window.__portifolioHero.uniforms.uCursorIntensity.value=1;
const pointer={x:0,y:0};let raf=0,last=0;
function ease(now){raf=0;const u=window.__portifolioHero.uniforms.uPortifolioPointer;const dt=Math.min(50,last?now-last:16.7);last=now;const a=1-Math.exp(-dt/55);u.value.x+=(pointer.x-u.value.x)*a;u.value.y+=(pointer.y-u.value.y)*a;if(Math.abs(pointer.x-u.value.x)+Math.abs(pointer.y-u.value.y)>.0001)raf=requestAnimationFrame(ease)}
window.addEventListener('pointermove',e=>{pointer.x=e.clientX/innerWidth-.5;pointer.y=.5-e.clientY/innerHeight;if(!raf){last=0;raf=requestAnimationFrame(ease)}},{passive:true});
window.addEventListener('pointerleave',()=>{pointer.x=pointer.y=0;if(!raf)raf=requestAnimationFrame(ease)});
const ready=setInterval(()=>{const u=window.__portifolioHero?.uniforms;if(u?.tPortifolioPortrait.value.image?.complete&&u?.tPortifolioSkull.value.image?.complete){clearInterval(ready);document.documentElement.dataset.portifolioReady='true';document.documentElement.dataset.portraitOnly='true';PortifolioBridge.post({type:'hero-ready'})}},100);
})();
