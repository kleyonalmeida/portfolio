(function(){
'use strict';
const channel='portfolio-portifolio-v1',hero=document.querySelector('.hero'),about=document.querySelector('.hero-about'),follow=document.querySelector('.follow'),heroFrame=document.getElementById('hero-frame'),followFrame=document.getElementById('follow-frame'),nav=document.getElementById('nav'),space=document.getElementById('scroll-space'),loading=document.getElementById('loading'),progress=document.getElementById('progress'),reduce=matchMedia('(prefers-reduced-motion: reduce)'),mobile=matchMedia('(max-width:767px)'),sectionMobile=matchMedia('(max-width:567px) and (max-aspect-ratio:13/9),(max-width:667px) and (min-aspect-ratio:13/9),(max-width:979px) and (max-height:415px) and (min-aspect-ratio:13/9)');
const clamp=n=>Math.max(0,Math.min(1,n)),ratio=.42;
let followHeight=16000,stops=[],frames=[],readingRanges=[],heroReady=false,followReady=false,ticking=false,lastScroll=-1,lastHeroActive=null,lastFollowActive=null,lastMode=null;
let aboutReveal=innerHeight*.42,aboutOverflow=0,aboutEnd=aboutReveal,entryDistance=innerHeight*ratio,followStart=aboutEnd+entryDistance,timeline=PortifolioTimeline.create([],15000,innerHeight,ratio);
const loadingStages={heroLoaded:false,followLoaded:false,heroReady:false,followReady:false};
function loadingProgress(){const percent=(loadingStages.heroLoaded?15:0)+(loadingStages.followLoaded?15:0)+(loadingStages.heroReady?35:0)+(loadingStages.followReady?35:0);document.getElementById('loading-bar').style.transform=`scaleX(${percent/100})`;document.getElementById('loading-percent').textContent=percent+'%';document.getElementById('loading-meter').setAttribute('aria-valuenow',String(percent));}
heroFrame.addEventListener('load',()=>{loadingStages.heroLoaded=true;loadingProgress()});followFrame.addEventListener('load',()=>{loadingStages.followLoaded=true;loadingProgress()});
const motion=new PortifolioLenis({autoRaf:true,lerp:.1,smoothWheel:true,wheelMultiplier:1.6});window.__portifolioScroll=motion;
const moveTo=(value,options={})=>motion.scrollTo(value,{...options,...(reduce.matches?{immediate:true}:{})});
const post=(frame,data)=>frame.contentWindow.postMessage({channel,...data},'*');
function activity(frame,active,isHero){const previous=isHero?lastHeroActive:lastFollowActive;if(active!==previous){post(frame,{type:'activity',active});if(isHero)lastHeroActive=active;else lastFollowActive=active;}}
function measure(){
 const source=timeline.toSource(Math.max(0,motion.animatedScroll-followStart)),heroProgress=clamp(motion.animatedScroll/followStart),inHero=motion.animatedScroll<followStart;
 aboutReveal=innerHeight*(mobile.matches?.22:.42);aboutOverflow=Math.max(0,about.scrollHeight+parseFloat(getComputedStyle(about).top)+35-innerHeight);aboutEnd=aboutReveal+aboutOverflow;entryDistance=innerHeight*ratio;followStart=aboutEnd+entryDistance;
 timeline=PortifolioTimeline.create(stops,Math.max(0,followHeight-innerHeight),innerHeight,ratio,readingRanges);window.__portifolioTimeline={...timeline,entryDistance,followStart,aboutReveal,aboutEnd,aboutOverflow,frames,stops,readingRanges};
 space.style.height=`${innerHeight+followStart+timeline.length}px`;motion.dimensions.resize();
 const position=inHero?heroProgress*followStart:followStart+timeline.toTrack(source);if(Math.abs(motion.animatedScroll-position)>.5)motion.scrollTo(position,{immediate:true});lastScroll=-1;update();
}
function update(){
 ticking=false;const y=scrollY,p=clamp((y-aboutEnd)/entryDistance),intro=clamp(y/aboutReveal),reading=Math.min(aboutOverflow,Math.max(0,y-aboutReveal));
 about.style.transform=`translate3d(0,${(1-intro)*innerHeight*.8-reading}px,0)`;about.style.opacity=clamp(intro*2);about.setAttribute('aria-hidden',intro<.05?'true':'false');
 heroFrame.style.transform=`translate3d(${intro*(mobile.matches?24:23)}vw,0,0) scale(${1-intro*(mobile.matches?.5:0)})`;
 heroFrame.style.opacity=mobile.matches?1-clamp(reading/220):1;document.documentElement.dataset.about=intro>.1?'true':'false';
 if(p>0&&p<1){const n=1-p,normalised=sectionMobile.matches?clamp((n-.25)/.75):n,amount=normalised*normalised,tilt=reduce.matches?0:amount*15,x=reduce.matches?0:amount*(sectionMobile.matches?-50/390*100:124/1440*100);follow.style.transform=`translate3d(${x}vw,${n*100}vh,0) rotate(${tilt}deg)`;}
 const mode=p===0?'hero':p===1?'follow':'transition';if(mode!==lastMode){follow.style.visibility=p>0?'visible':'hidden';hero.style.visibility=p===1?'hidden':'visible';if(p===1)follow.style.transform='translate3d(0,0,0)';document.documentElement.dataset.section=mode;lastMode=mode;}
 follow.style.pointerEvents=p>.96?'auto':'none';nav.classList.toggle('is-follow',p>.65);if(p===0)nav.classList.remove('is-contact','is-petrol');
 const sourceY=timeline.toSource(Math.max(0,y-followStart));if(sourceY!==lastScroll){post(followFrame,{type:'scroll',y:sourceY});lastScroll=sourceY;}
 if(mobile.matches){const color=p<.65?'#f8f8f3':nav.classList.contains('is-contact')?'#111211':nav.classList.contains('is-petrol')?'#104a4d':stops[3]!==undefined&&sourceY>=stops[3]-innerHeight*.2?'#f3f2eb':'#c5939d';document.documentElement.style.setProperty('--mobile-page-background',color);const meta=document.querySelector('meta[name="theme-color"]');if(meta&&meta.content!==color)meta.content=color;}
 if(heroReady&&followReady){activity(heroFrame,p<1,true);activity(followFrame,p>0,false);}progress.style.transform=`scaleY(${y/Math.max(1,followStart+timeline.length)})`;
}
function requestUpdate(){if(!ticking){ticking=true;requestAnimationFrame(update)}}
function finishLoading(){if(heroReady&&followReady){measure();loadingProgress();document.documentElement.dataset.ready='true';update();setTimeout(()=>loading.classList.add('is-done'),220);}}
let wheelGate=null,lastWheelTime=0;
function navigateBy(delta){
 const now=performance.now(),fresh=now-lastWheelTime>140,direction=Math.sign(delta);lastWheelTime=now;if(!direction)return;
 if(wheelGate){if(direction!==wheelGate.direction)wheelGate=null;else if(Math.abs(motion.animatedScroll-wheelGate.at)>1.5||!fresh)return;else wheelGate=null;}
 const current=motion.targetScroll,destination=Math.max(0,Math.min(motion.limit,current+delta));
 const anchors=[aboutReveal,aboutEnd,followStart,...stops.map(y=>followStart+timeline.toTrack(y)),...frames.map(y=>followStart+timeline.toTrack(y))].sort((a,b)=>a-b).filter((y,i,a)=>!i||Math.abs(y-a[i-1])>1);
 const boundary=direction>0?anchors.find(y=>y>current+1&&y<=destination):anchors.toReversed().find(y=>y<current-1&&y>=destination);
 if(boundary!==undefined){wheelGate={at:boundary,direction};moveTo(boundary);}else moveTo(destination);
}
function wheelMove(delta,input){if(mobile.matches&&input==='touch'){wheelGate=null;motion.scrollTo(Math.max(0,Math.min(motion.limit,motion.animatedScroll+delta)),{immediate:true,force:true});return;}navigateBy(Math.max(-innerHeight*2,Math.min(innerHeight*2,delta*(input==='touch'?1.2:1.6))))}
function keyboard(key,shift){const jumps={ArrowDown:80,ArrowUp:-80,PageDown:innerHeight*.65,PageUp:-innerHeight*.65,' ':innerHeight*.65*(shift?-1:1)};if(key==='Home'){wheelGate=null;moveTo(0)}else if(key==='End'){wheelGate=null;moveTo(motion.limit)}else if(key in jumps)navigateBy(jumps[key]);}
window.addEventListener('message',e=>{if(![heroFrame.contentWindow,followFrame.contentWindow].includes(e.source)||e.data?.channel!==channel)return;const d=e.data;
 if(d.type==='open-link'){const url=String(d.url||'');if(/^https:\/\/((?:www\.)?corpcore\.com\.br|github\.com|www\.linkedin\.com)(\/|$)/.test(url))window.open(url,'_blank','noopener');else if(/^(mailto:kleionfsa2020@live\.com|tel:\+5575991801820)$/.test(url))location.href=url;}
 else if(d.type==='open-cv')window.open(new URL('assets/Kleyon-Almeida.pdf',location.href).href,'_blank','noopener');
 else if(d.type==='touch-start'&&mobile.matches){wheelGate=null;motion.scrollTo(motion.animatedScroll,{immediate:true,force:true});}
 else if(d.type==='touch-end'&&mobile.matches){const velocity=Math.max(-2.5,Math.min(2.5,Number(d.velocity)||0));if(Math.abs(velocity)>.08)motion.scrollTo(motion.animatedScroll+velocity*220,{duration:.65,easing:t=>1-Math.pow(1-t,3),force:true});}
 else if(d.type==='wheel')wheelMove(Number(d.delta)||0,d.input);
 else if(d.type==='follow-petrol'){nav.classList.toggle('is-petrol',Boolean(d.petrol));requestUpdate();}
 else if(d.type==='follow-theme'){nav.classList.toggle('is-contact',Boolean(d.contact));requestUpdate();}
 else if(d.type==='key')keyboard(d.key,d.shift);
 else if(d.type==='hero-ready'&&e.source===heroFrame.contentWindow){heroReady=true;loadingStages.heroLoaded=loadingStages.heroReady=true;loadingProgress();lastHeroActive=null;finishLoading();}
 else if(d.type==='follow-ready'&&e.source===followFrame.contentWindow){followReady=true;loadingStages.followLoaded=loadingStages.followReady=true;loadingProgress();lastFollowActive=null;finishLoading();}
 else if(d.type==='follow-size'&&e.source===followFrame.contentWindow&&Number.isFinite(d.height)){followHeight=d.height;stops=Array.isArray(d.stops)?d.stops:[];frames=Array.isArray(d.frames)?d.frames:stops;readingRanges=Array.isArray(d.readingRanges)?d.readingRanges:[];wheelGate=null;measure();}
});
window.addEventListener('wheel',e=>{if(e.ctrlKey)return;e.preventDefault();e.stopImmediatePropagation();wheelMove(e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1),'wheel')},{capture:true,passive:false});
window.addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return;if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key)){e.preventDefault();keyboard(e.key,e.shiftKey);}});
motion.on('scroll',update);window.addEventListener('scroll',requestUpdate,{passive:true});window.addEventListener('resize',()=>{lastMode=null;measure()},{passive:true});document.fonts.ready.then(measure);
followFrame.addEventListener('load',()=>{lastScroll=-1;requestUpdate()});document.querySelectorAll('a[href="#explorar"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();moveTo(aboutReveal)}));document.querySelectorAll('a[href="#inicio"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();moveTo(0)}));measure();
})();
