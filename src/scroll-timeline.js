/* Shorten section entrances without compressing the overflow needed to read tall sections. */
(function(root){
'use strict';
function create(stops,maxSource,viewport,ratio=.42,readingRanges=[]){
 const extra=readingRanges.flatMap(r=>[r.start,r.end]);
 const ends=[0,...extra.filter(n=>n>0&&n<maxSource),...stops.filter(Number.isFinite).filter(n=>n>0&&n<maxSource),Math.max(0,maxSource)].sort((a,b)=>a-b).filter((n,i,a)=>i===0||n!==a[i-1]);
 const points=[{source:0,track:0}];let track=0;
 for(let i=1;i<ends.length;i++){
  const start=ends[i-1],end=ends[i];
  if(readingRanges.length){const middle=(start+end)/2,reading=readingRanges.some(r=>middle>=r.start&&middle<=r.end);track+=(end-start)*(reading?1:ratio);points.push({source:end,track});}
  else{const reading=Math.max(0,end-start-viewport);if(reading>0){track+=reading;points.push({source:start+reading,track});}track+=(end-start-reading)*ratio;points.push({source:end,track});}
 }
 function convert(value,from,to){
  value=Math.max(0,Math.min(points.at(-1)[from],value));
  for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i];if(value<=b[from])return a[to]+(value-a[from])/(b[from]-a[from])*(b[to]-a[to]);}
  return points.at(-1)[to];
 }
 return {points,length:track,maxSource,toSource:y=>convert(y,'track','source'),toTrack:y=>convert(y,'source','track')};
}
const api={create};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.PortifolioTimeline=api;
})(typeof window!=='undefined'?window:globalThis);
