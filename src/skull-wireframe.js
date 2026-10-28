/* Rasterise the robot's vector geometry once. Opacity scanning and parallax are
   animated by the existing WebGL compositor, with no recurring canvas uploads. */
(function(){
'use strict';
function initialise(){
 const u=window.__portifolioHero?.uniforms,texture=u?.tPortifolioHologram?.value;
 if(!texture?.image?.complete){requestAnimationFrame(initialise);return;}
 const canvas=document.createElement('canvas');canvas.width=574;canvas.height=686;
 const ctx=canvas.getContext('2d');ctx.scale(.5,.5);ctx.lineWidth=.85;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='rgba(31,36,29,1)';
 // Limit the hologram to the face; keep the hair free of contour particles.
 ctx.beginPath();ctx.ellipse(574,720,330,430,0,0,Math.PI*2);ctx.clip();
 const paths=window.PORTIFOLIO_ROBOT_PATHS||[];let edges=0;
 ctx.beginPath();
 for(const path of paths){ctx.moveTo(path[0][0],path[0][1]);for(let i=1;i<path.length;i++){ctx.lineTo(path[i][0],path[i][1]);edges++;}}
 ctx.stroke();texture.image=canvas;texture.generateMipmaps=false;texture.minFilter=1006;texture.magFilter=1006;texture.needsUpdate=true;
 window.__portifolioWireframe={animated:true,source:'robot-reference-contours',mode:'gpu-opacity-scan',paths:paths.length,edges,uploads:1};
}
requestAnimationFrame(initialise);
})();
