(self.webpackChunkionic_pages=self.webpackChunkionic_pages||[]).push([[9773],{9773:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createSwipeBackGesture:()=>s});var n=a(5392),r=a(4366);a(5901);const s=(e,t,a,s,i)=>{const c=e.ownerDocument.defaultView;return(0,r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:a,onMove:e=>{s(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,a=e.deltaX/t,r=e.velocityX,s=r>=0&&(r>.2||e.deltaX>t/2),o=(s?1-a:a)*t;let u=0;if(o>5){const e=o/Math.abs(r);u=Math.min(e,540)}i(s,a<=0?.01:(0,n.j)(0,a,.9999),u)}})}}}]);