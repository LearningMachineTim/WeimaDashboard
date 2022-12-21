"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6987],{84176:(e,l,t)=>{t.d(l,{q:()=>r});var a=t(52423),o=t(68404),i=t(16755),n=t(45916);const r=e=>{let{colorPalette:l,min:t,max:a,display:r,hoverValue:u,useStopsPercentage:c}=e;const[m,v]=(0,o.useState)([]),[h,p]=(0,o.useState)({isShown:!1,value:0}),[f,g]=(0,o.useState)(null),x=(0,i.l4)(),y=d(x,m);(0,o.useEffect)((()=>{v(s({colorArray:l,stops:10,useStopsPercentage:c}))}),[l,c]);return(0,o.useEffect)((()=>{g(null==u?null:function(e){if(e>1)return 100;if(e<0)return 0;return 100*e}((u-t)/(a-t)))}),[u,t,a]),(0,n.jsxs)("div",{className:y.scaleWrapper,onMouseMove:e=>{const l=e.nativeEvent.offsetX,o=e.currentTarget.offsetWidth,i=Math.floor(100*l/o+1),n=Math.floor((a-t)*i/100+t);p({isShown:!0,value:n}),g(i)},onMouseLeave:()=>{p({isShown:!1,value:0})},children:[(0,n.jsx)("div",{className:y.scaleGradient,children:r&&(h.isShown||void 0!==u)&&(0,n.jsx)("div",{className:y.followerContainer,children:(0,n.jsx)("div",{className:y.follower,style:{left:`${f}%`}})})}),r&&(0,n.jsxs)("div",{className:y.followerContainer,children:[(0,n.jsxs)("div",{className:y.legendValues,children:[(0,n.jsx)("span",{children:r(t)}),(0,n.jsx)("span",{children:r(a)})]}),null!=f&&(h.isShown||void 0!==u)&&(0,n.jsx)("span",{className:y.hoverValue,style:{left:`${f}%`},children:r(null!=u?u:h.value)})]})]})},s=e=>{let{colorArray:l,stops:t,useStopsPercentage:a=!0}=e;const o=l.length;if(a&&o<=20){const e=1/o*100;let t=0;const a=[];for(const o of l)t>0?a.push(`${o} ${t}%`):a.push(o),t+=e,a.push(`${o} ${t}%`);return a}const i=l[o-1],n=Math.ceil(o/t),r=new Set;for(let e=0;e<o;e+=n)r.add(l[e]);return r.add(i),[...r]};const d=(e,l)=>({scaleWrapper:a.css`
    width: 100%;
    font-size: 11px;
    opacity: 1;
  `,scaleGradient:a.css`
    background: linear-gradient(90deg, ${l.join()});
    height: 10px;
    pointer-events: none;
  `,legendValues:a.css`
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  `,hoverValue:a.css`
    position: absolute;
    margin-top: -14px;
    padding: 3px 15px;
    background: ${e.colors.background.primary};
    transform: translateX(-50%);
  `,followerContainer:a.css`
    position: relative;
    pointer-events: none;
    white-space: nowrap;
  `,follower:a.css`
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 2px solid ${e.colors.text.primary};
    margin-top: 5px;
  `})},41412:(e,l,t)=>{t.r(l),t.d(l,{plugin:()=>ve});var a=t(68404),o=t(18151),i=t(15399),n=t(27843),r=t(97859),s=t(65737),d=t(27864),u=t(44108),c=t(33441),m=t(84176),v=t(20909),h=t(72828),p=t(57337),f=t(52423),g=t(74658),x=t(678),y=t(16755),w=t(27783),b=t(30733),k=t(13131),S=t(48717),B=t(1700),L=t(26006),M=t(55343),V=t(32934),C=t(54761),D=t(8006),A=t(94722),O=t(32654),j=t(45916);const P=e=>2===e.hover.seriesIdx?(0,j.jsx)(O.H,{data:e.data.exemplars,rowIndex:e.hover.dataIdx}):(0,j.jsx)(R,Object.assign({},e)),R=e=>{var l,t,o,i,r;let{data:s,hover:d,showHistogram:u}=e;const c=d.dataIdx,m=null===(l=s.heatmap)||void 0===l?void 0:l.fields[0],v=null===(t=s.heatmap)||void 0===t?void 0:t.fields[1],f=null===(o=s.heatmap)||void 0===o?void 0:o.fields[2],x=e=>{if(null!=m&&m.display)return(0,M.zc)(m.display(e));if((null==m?void 0:m.type)===n.fS.time){const l="YYYY-MM-DD HH:mm:ss",t=(0,A.h4)().getCurrent();return null==t?void 0:t.formatDate(e,l)}return`${e}`},y=null==m?void 0:m.values.toArray(),w=null==v?void 0:v.values.toArray(),b=null==f?void 0:f.values.toArray(),k=(0,h.d8)(s.heatmap),S=null!=v&&v.display?e=>(0,M.zc)(v.display(e)):e=>`${e}`,B=null!==(i=c%s.yBucketCount)&&void 0!==i?i:0;let L,P,R,I;if(k.yOrdinalDisplay){const e=s.yLayout===p.D.le?B-1:B,l=s.yLayout===p.D.le?B:B+1;L=`${k.yOrdinalDisplay[e]}`,P=`${k.yOrdinalDisplay[l]}`}else{const e=null==w?void 0:w[B];if(s.yLayout===p.D.le)if(P=`${e}`,s.yLog){let l=(2===s.yLog?Math.log2:Math.log10)(e)-1/s.yLogSplit;L=`${s.yLog**l}`}else L=""+(e-s.yBucketSize);else if(L=`${e}`,s.yLog){let l=(2===s.yLog?Math.log2:Math.log10)(e)+1/s.yLogSplit;P=`${s.yLog**l}`}else P=`${e+s.yBucketSize}`}s.xLayout===p.D.le?(I=null==y?void 0:y[c],R=I-s.xBucketSize):(R=null==y?void 0:y[c],I=R+s.xBucketSize);const H=null==b?void 0:b[c],E=null===(r=s.heatmap)||void 0===r?void 0:r.fields.filter((e=>{var l,t;return!Boolean(null===(l=e.config.custom)||void 0===l||null===(t=l.hideFrom)||void 0===t?void 0:t.tooltip)})),N=[],z=new Set;for(const e of null!=E?E:[])if(e.getLinks){const l=e.values.get(c),t=e.display?e.display(l):{text:`${l}`,numeric:+l};e.getLinks({calculatedValue:t,valueRowIndex:c}).forEach((e=>{const l=`${e.title}/${e.href}`;z.has(l)||(N.push(e),z.add(l))}))}let G=(0,a.useRef)(null),$=Math.round(150*devicePixelRatio),T=Math.round(50*devicePixelRatio);(0,a.useEffect)((()=>{if(u){var e;let l=null===(e=G.current)||void 0===e?void 0:e.getContext("2d");if(l&&y&&w&&b){let e=c;for(;y[e--]===y[c];);e++;let t=e+s.yBucketCount,a=0,o=e;for(;o<t;){let e=b[o];a=Math.max(a,e),o++}let i=new Path2D,n=new Path2D;o=e;let r=0;for(;o<t;){let e=b[o];if(e>0){let l=e/a,t=r/(s.yBucketCount+1);(o===c?i:n).rect(Math.round($*t),Math.round(T*(1-l)),Math.round($/s.yBucketCount),Math.round(T*l))}o++,r++}l.clearRect(0,0,$,T),l.fillStyle="#ffffff80",l.fill(n),l.fillStyle="#ff000080",l.fill(i)}}}),[c]);const[Y]=(0,a.useState)((()=>{var e,l;return(null===(e=s.heatmap)||void 0===e||null===(l=e.meta)||void 0===l?void 0:l.type)===g.P.HeatmapCells&&!(0,h.qJ)(s.heatmap)}));if(Y)return(0,j.jsx)("div",{children:(0,j.jsx)(O.H,{data:s.heatmap,rowIndex:c})});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{children:x(R)}),(0,j.jsx)("div",{children:x(I)})]}),u&&(0,j.jsx)("canvas",{width:$,height:T,ref:G,style:{width:$+"px",height:T+"px"}}),(0,j.jsxs)("div",{children:[s.yLayout===p.D.unknown?(0,j.jsx)("div",{children:S(L)}):(0,j.jsxs)("div",{children:["Bucket: ",S(L)," - ",S(P)]}),(0,j.jsxs)("div",{children:[(0,V.C)(f,s.heatmap),": ",s.display(H)]})]}),N.length>0&&(0,j.jsx)(C.wc,{children:N.map(((e,l)=>(0,j.jsx)(D.Qj,{icon:"external-link-alt",target:e.target,href:e.href,onClick:e.onClick,fill:"text",style:{width:"100%"},children:e.title},l)))})]})};var I=t(52902),H=t(43917),E=t(55860),N=t(92721),z=t(37800),G=t(60053),$=t(27565),T=t(78321);function Y(e){const{disp:l,each:t,gap:a=1,hideLE:o=-1/0,hideGE:i=1/0,xAlign:n=1,yAlign:r=1,ySizeDivisor:s=1}=e,d=devicePixelRatio,u=a>=4?Math.round:e=>e,c=Math.round(a*d);return(e,a)=>(E.Z.orient(e,a,((d,m,v,h,p,f,g,x,y,w,b,k,S,B,L)=>{var M;let V=e.data[a];const C=V[0],D=V[1],A=V[2],O=C.length;let j,P,R=l.fill.values(e,a),I=null!==(M=l.fill.index)&&void 0!==M?M:[...new Set(R)],H=I.map((e=>new Path2D)),E=O-D.lastIndexOf(D[0]),N=O/E,z=D[1]-D[0]||p.max-p.min,G=C[E]-C[0];j=3===h.distr?Math.abs(f(C[0]*h.log,h,w,x)-f(C[0],h,w,x)):Math.abs(f(G,h,w,x)-f(0,h,w,x)),P=3===p.distr?Math.abs(g(D[0]*p.log,p,b,y)-g(D[0],p,b,y))/s:Math.abs(g(z,p,b,y)-g(0,p,b,y))/s,j=Math.max(1,u(j-c)),P=Math.max(1,u(P-c));let $=-1===n?-j:0===n?-j/2:0,T=1===r?-P:0===r?-P/2:0,Y=D.slice(0,E).map((e=>u(g(e,p,b,y)+T))),F=Array.from({length:N},((e,l)=>u(f(C[l*E],h,w,x)+$)));for(let l=0;l<O;l++)if(A[l]>o&&A[l]<i){let a=F[~~(l/E)],o=Y[l%E];B(H[R[l]],a,o,j,P),t(e,1,l,a,o,j,P)}return e.ctx.save(),e.ctx.rect(e.bbox.left,e.bbox.top,e.bbox.width,e.bbox.height),e.ctx.clip(),H.forEach(((l,t)=>{e.ctx.fillStyle=I[t],e.ctx.fill(l)})),e.ctx.restore(),null})),null)}function F(e,l){return(t,a)=>(E.Z.orient(t,a,((o,i,n,r,s,d,u,c,m,v,h,p,f,g,x)=>{[i,n]=n;let y=new Path2D,w=[y],b=[null!=l?l:"rgba(255,0,255,0.7)"];for(let l=0;l<i.length;l++){let o=n[l];o-=.5,o+=.5*(2*Math.round(Math.random())-1)*Math.random();let p=d(i[l],r,v,c),f=u(o,s,h,m),x=8,w=8;g(y,p-x/2,f-w/2,x,w),e.each(t,a,l,p-x/2,f-w/2,x,w)}t.ctx.save(),t.ctx.rect(t.bbox.left,t.bbox.top,t.bbox.width,t.bbox.height),t.ctx.clip(),w.forEach(((e,l)=>{t.ctx.fillStyle=b[l],t.ctx.fill(e)})),t.ctx.restore()})),null)}function _(e){const{disp:l,each:t,gap:a=1,hideLE:o=-1/0,hideGE:i=1/0}=e,n=devicePixelRatio,r=a>=4?Math.round:e=>e,s=Math.round(a*n);return(e,a)=>(E.Z.orient(e,a,((n,d,u,c,m,v,h,p,f,g,x,y,w,b,k)=>{var S;let B=e.data[a];const L=B[0],M=B[1],V=B[2],C=B[3],D=L.length;let A=l.fill.values(e,a),O=null!==(S=l.fill.index)&&void 0!==S?S:[...new Set(A)],j=O.map((e=>new Path2D)),P=new Map,R=new Map;for(let e=0;e<L.length;e++){let l=L[e],t=M[e],a=V[e];P.has(l)||P.set(l,r(v(l,c,g,p))),R.has(t)||R.set(t,r(h(t,m,x,f))),R.has(a)||R.set(a,r(h(a,m,x,f)))}let I=P.get(L.find((e=>e!==L[0])))-P.get(L[0]);for(let l=0;l<D;l++){if(C[l]<=o||C[l]>=i)continue;let a=L[l],n=M[l],r=V[l],d=P.get(a),u=R.get(n),c=I,m=u-R.get(r);c=Math.max(1,c-s),m=Math.max(1,m-s);let v=d,h=u;b(j[A[l]],v,h,c,m),t(e,1,l,v,h,c,m)}e.ctx.save(),e.ctx.rect(e.bbox.left,e.bbox.top,e.bbox.width,e.bbox.height),e.ctx.clip(),j.forEach(((l,t)=>{e.ctx.fillStyle=O[t],e.ctx.fill(l)})),e.ctx.restore()})),null)}const W=function(e,l,t){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1/0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0;if(null==l){l=1/0;for(let t=0;t<e.length;t++)e[t]>a&&e[t]<o&&(l=Math.min(l,e[t]))}if(null==t){t=-1/0;for(let l=0;l<e.length;l++)e[l]>a&&e[l]<o&&(t=Math.max(t,e[l]))}return[l,t]},q=(e,l,t,a)=>{let o=Math.max(a-t,1),i=l.length,n=Array(e.length);for(let l=0;l<e.length;l++)n[l]=e[l]<t?0:e[l]>a?i-1:Math.min(i-1,Math.floor(i*(e[l]-t)/o));return n};function U(e,l,t){var a,o,i,n;let r=e.series;if(null==r||!r.length)return{};const s=null===(a=e.annotations)||void 0===a?void 0:a.find((e=>"exemplar"===e.name));var d;if(l.calculate)return J((0,h.xf)(r,null!==(d=l.calculation)&&void 0!==d?d:{}),s,l,t);let u;for(const e of r)switch(null===(o=e.meta)||void 0===o?void 0:o.type){case g.P.HeatmapCells:return(0,h.qJ)(e)?J(e,s,l,t):Z(e,s,l,t);case g.P.HeatmapRows:u=e}return u||(u=r.length>1?(0,I._9)({frames:r}):r[0]),J((0,h.Cj)(Object.assign({unit:null===(i=l.yAxis)||void 0===i?void 0:i.unit,decimals:null===(n=l.yAxis)||void 0===n?void 0:n.decimals},l.rowsFrame,{frame:u})),s,l,t)}const Z=(e,l,t,a)=>{var o,i,n;if((null===(o=e.meta)||void 0===o?void 0:o.type)!==g.P.HeatmapCells||(0,h.qJ)(e))return{warning:"Expected sparse heatmap format",heatmap:e};K(e.fields[1],t.yAxis,a);const r=K(e.fields[3],t.cellValues,a);let[s,d]=W(e.fields[3].values.toArray(),t.color.min,t.color.max,null===(i=t.filterValues)||void 0===i?void 0:i.le,null===(n=t.filterValues)||void 0===n?void 0:n.ge);return{heatmap:e,minValue:s,maxValue:d,exemplars:l,display:e=>(0,M.zc)(r(e))}},J=(e,l,t,a)=>{var o,i,r,s,d,u,c,m,v,f,x,y,w;if((null===(o=e.meta)||void 0===o?void 0:o.type)!==g.P.HeatmapCells)return{warning:"Expected heatmap scanlines format",heatmap:e};if(e.fields.length<2||e.length<2)return{heatmap:e};const b=(0,h.d8)(e);let k,S,B;for(const l of e.fields)switch(l.name){case"y":S=l.name;case"yMin":case"yMax":S||(S=l.name),null==b.yOrdinalDisplay&&K(l,t.yAxis,a);break;case"x":case"xMin":case"xMax":k=l.name;break;default:l.type!==n.fS.number||B||(B=l)}if(!S)return{warning:"Missing Y field",heatmap:e};if(!S)return{warning:"Missing X field",heatmap:e};if(!B)return{warning:"Missing value field",heatmap:e};const L=K(B,t.cellValues,a),V=e.fields[0].values.toArray(),C=e.fields[1].values.toArray(),D=V.length;let A=D-C.lastIndexOf(C[0]),O=D/A,j=C[1]-C[0],P=V[A]-V[0],[R,I]=W(B.values.toArray(),t.color.min,t.color.max,null===(i=t.filterValues)||void 0===i?void 0:i.le,null===(r=t.filterValues)||void 0===r?void 0:r.ge),H=null===(s=t.calculation)||void 0===s?void 0:s.xBuckets,E=null===(d=t.calculation)||void 0===d?void 0:d.yBuckets;return{heatmap:e,exemplars:null!=l&&l.length?l:void 0,xBucketSize:P,yBucketSize:j,xBucketCount:O,yBucketCount:A,yLog:null!==(u=null==E||null===(c=E.scale)||void 0===c?void 0:c.log)&&void 0!==u?u:0,xLog:null!==(m=null==H||null===(v=H.scale)||void 0===v?void 0:v.log)&&void 0!==m?m:0,xLogSplit:null!=H&&null!==(f=H.scale)&&void 0!==f&&f.log?+(null!==(x=null==H?void 0:H.value)&&void 0!==x?x:"1"):1,yLogSplit:null!=E&&null!==(y=E.scale)&&void 0!==y&&y.log?+(null!==(w=null==E?void 0:E.value)&&void 0!==w?w:"1"):1,minValue:R,maxValue:I,xLayout:"xMax"===k?p.D.le:"xMin"===k?p.D.ge:p.D.unknown,yLayout:"yMax"===S?p.D.le:"yMin"===S?p.D.ge:p.D.unknown,display:e=>(0,M.zc)(L(e))}};function K(e,l,t){var a;if(null!=l&&null!==(a=l.unit)&&void 0!==a&&a.length||null!=(null==l?void 0:l.decimals)){const{unit:t,decimals:a}=l;e.display=void 0,e.config=Object.assign({},e.config),null!=t&&t.length&&(e.config.unit=t),null!=a&&(e.config.decimals=a)}return e.display||(e.display=(0,H.U)({field:e,theme:t})),e.display}var X=t(24314),Q=t(96586),ee=t(35008),le=t.n(ee);Object.freeze([1,0]);let te,ae;!function(e){e.Opacity="opacity",e.Scheme="scheme"}(te||(te={})),function(e){e.Linear="linear",e.Exponential="exponential"}(ae||(ae={}));const oe={calculate:!1,color:{mode:te.Scheme,scheme:"Oranges",fill:"dark-orange",scale:ae.Exponential,reverse:!1,exponent:.5,steps:64},rowsFrame:{layout:p.D.auto},yAxis:{axisPlacement:d.LB.Left},cellValues:{},showValue:d.Jp.Auto,tooltip:{show:!0,yHistogram:!1},legend:{show:!0},exemplars:{color:"rgba(255,0,255,0.7)"},filterValues:{le:1e-9},cellGap:1},ie=[{name:"BrBG",invert:"always"},{name:"PiYG",invert:"always"},{name:"PRGn",invert:"always"},{name:"PuOr",invert:"always"},{name:"RdBu",invert:"always"},{name:"RdGy",invert:"always"},{name:"RdYlBu",invert:"always"},{name:"RdYlGn",invert:"always"},{name:"Spectral",invert:"always"},{name:"Blues",invert:"dark"},{name:"Greens",invert:"dark"},{name:"Greys",invert:"dark"},{name:"Oranges",invert:"dark"},{name:"Purples",invert:"dark"},{name:"Reds",invert:"dark"},{name:"Turbo",invert:"light"},{name:"Cividis",invert:"light"},{name:"Viridis",invert:"light"},{name:"Magma",invert:"light"},{name:"Inferno",invert:"light"},{name:"Plasma",invert:"light"},{name:"Warm",invert:"light"},{name:"Cool",invert:"light"},{name:"Cubehelix",invert:"light",name2:"CubehelixDefault"},{name:"BuGn",invert:"dark"},{name:"BuPu",invert:"dark"},{name:"GnBu",invert:"dark"},{name:"OrRd",invert:"dark"},{name:"PuBuGn",invert:"dark"},{name:"PuBu",invert:"dark"},{name:"PuRd",invert:"dark"},{name:"RdPu",invert:"dark"},{name:"YlGnBu",invert:"dark"},{name:"YlGn",invert:"dark"},{name:"YlOrBr",invert:"dark"},{name:"YlOrRd",invert:"dark"},{name:"Rainbow",invert:"always"},{name:"Sinebow",invert:"always"}],ne=ie.find((e=>"Spectral"===e.name));function re(e,l){var t;const a=Object.assign({},oe.color,e),o=[],i=(null!==(t=a.steps)&&void 0!==t?t:128)-1;if(e.mode===te.Opacity){const t=le()(l.visualization.getColorByName(e.fill)).toPercentageRgb(),n=a.scale===ae.Exponential?X.scalePow().exponent(a.exponent).domain([0,1]).range([0,1]):X.scaleLinear().domain([0,1]).range([0,1]);for(let e=0;e<=i;e++)t.a=n(e/i),o.push(le()(t).toString("hex8"))}else{var n,r;const t=null!==(n=ie.find((e=>e.name===a.scheme)))&&void 0!==n?n:ne;let s="interpolate"+(null!==(r=t.name2)&&void 0!==r?r:t.name);const d=Q[s];for(let e=0;e<=i;e++){let l=d(e/i),t=0===l.indexOf("rgb")?"#"+[...l.matchAll(/\d+/g)].map((e=>(+e[0]).toString(16).padStart(2,"0"))).join(""):l;o.push(t)}("always"===t.invert||"dark"===t.invert&&l.isDark||"light"===t.invert&&l.isLight)&&o.reverse(),e.reverse&&o.reverse()}return o}const se=e=>({colorScaleWrapper:f.css`
    margin-left: 25px;
    padding: 10px 0;
    max-width: 300px;
  `}),de=["bucketFrame"];const ue=(e,l,t,a)=>{if("heatmap"===l&&t.angular){const{fieldConfig:l,options:o}=function(e){var l,t,a,o,i,n;const r={defaults:{},overrides:[]},s="tsbuckets"!==e.dataFormat,u=Object.assign({},oe.calculation),c=Object.assign({logBase:1},e.yAxis);s&&(e.xBucketSize?u.xBuckets={mode:p.k.Size,value:`${e.xBucketSize}`}:e.xBucketNumber&&(u.xBuckets={mode:p.k.Count,value:`${e.xBucketNumber}`}),e.yBucketSize?u.yBuckets={mode:p.k.Size,value:`${e.yBucketSize}`}:e.xBucketNumber&&(u.yBuckets={mode:p.k.Count,value:`${e.yBucketNumber}`}),c.logBase>1&&(u.yBuckets={mode:p.k.Count,value:+c.splitFactor>0?`${c.splitFactor}`:void 0,scale:{type:d.wf.Log,log:c.logBase}}));const m=me(null===(l=e.cards)||void 0===l?void 0:l.cardPadding,2),v={calculate:s,calculation:u,color:Object.assign({},oe.color,{steps:128}),cellGap:m||1,cellRadius:me(null===(t=e.cards)||void 0===t?void 0:t.cardRound),yAxis:{axisPlacement:!1===c.show?d.LB.Hidden:d.LB.Left,reverse:Boolean(e.reverseYBuckets),axisWidth:me(c.width),min:c.min,max:c.max,unit:c.format,decimals:c.decimals},cellValues:{decimals:me(e.tooltipDecimals)},rowsFrame:{layout:ce(e.yBucketBound)},legend:{show:Boolean(null===(a=e.legend)||void 0===a?void 0:a.show)},showValue:d.Jp.Never,tooltip:{show:Boolean(null===(o=e.tooltip)||void 0===o?void 0:o.show),yHistogram:Boolean(null===(i=e.tooltip)||void 0===i?void 0:i.showHistogram)},exemplars:Object.assign({},oe.exemplars)};e.hideZeroBuckets&&(v.filterValues=Object.assign({},oe.filterValues));const h=null!==(n=e.color)&&void 0!==n?n:{};switch(null==h?void 0:h.mode){case"spectrum":{v.color.mode=te.Scheme;const e=h.colorScheme;let l=ie.find((l=>l.name===e));l||(l=ie.find((l=>e.indexOf(l.name)>=0))),v.color.scheme=l?l.name:oe.color.scheme;break}case"opacity":v.color.mode=te.Opacity,v.color.scale=h.scale}v.color.fill=h.cardColor,v.color.min=h.min,v.color.max=h.max,"number"==typeof h.min&&"number"==typeof h.max&&h.min>h.max&&(v.color.min=h.max,v.color.max=h.min,v.color.reverse=!0);return{fieldConfig:r,options:v}}(Object.assign({},t.angular,{fieldConfig:a}));return e.fieldConfig=l,o}if("heatmap-new"===l){const l=e.options,{bucketFrame:t}=l,a=function(e,l){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||(o[t]=e[t]);return o}(l,de);return t?Object.assign({},a,{rowsFrame:t}):e.options}return{}};function ce(e){switch(e){case"upper":return p.D.ge;case"lower":return p.D.le;case"middle":return p.D.unknown}return p.D.auto}function me(e,l){if(null==e||""===e)return l;const t=+e;return isNaN(t)?l:t}const ve=new o.c((e=>{let{data:l,id:t,timeRange:o,timeZone:i,width:n,height:r,options:s,fieldConfig:u,eventBus:c,onChangeTimeRange:v,replaceVariables:f}=e;const V=(0,y.l4)(),C=(0,y.wW)(se),{sync:D}=(0,w.R9)();let A=(0,a.useRef)(o);A.current=o;const O=(0,a.useMemo)((()=>{try{return U(l,s,V)}catch(e){return{warning:`${e}`}}}),[l,s,V]),R=(0,a.useMemo)((()=>{var e,l;let t=[],a=[];const o=(0,h.d8)(O.heatmap);if(null!==(e=O.exemplars)&&void 0!==e&&e.length&&o.yMatchWithLabel){var i;t=null===(i=O.exemplars)||void 0===i?void 0:i.fields[0].values.toArray();if(null!=o.yOrdinalDisplay){var n;a=(null===(n=O.exemplars)||void 0===n?void 0:n.fields.find((e=>e.name===o.yMatchWithLabel)).values.toArray()).map((e=>{var l;return null===(l=o.yOrdinalLabel)||void 0===l?void 0:l.indexOf(e)}))}else{var r;a=null===(r=O.exemplars)||void 0===r?void 0:r.fields[1].values.toArray()}}return[null,null===(l=O.heatmap)||void 0===l?void 0:l.fields.map((e=>e.values.toArray())),[t,a]]}),[O.heatmap,O.exemplars]),I=(0,a.useMemo)((()=>re(s.color,V)),[s.color,V]),[H,W]=(0,a.useState)(void 0),[Z,J]=(0,a.useState)(!1),K=(0,a.useRef)(!1),X=()=>{K.current=!K.current,J(K.current)},Q=(0,a.useCallback)((e=>{W(null!=e?e:void 0)}),[s,l.structureRev]),ee=(0,a.useRef)(O);ee.current=O;const le=(0,a.useMemo)((()=>{var e,l,t,a,o,n,r,u,m,f;const x=null===(e=ee.current)||void 0===e||null===(l=e.heatmap)||void 0===l||null===(t=l.fields[1].config)||void 0===t||null===(a=t.custom)||void 0===a?void 0:a.scaleDistribution;return function(e){var l,t,a,o,i,n,r,s,u,c,m,v,f,x,y,w;const{dataRef:b,theme:k,eventBus:S,onhover:B,onclick:L,onzoom:V,isToolTipOpen:C,timeZone:D,getTimeRange:A,palette:O,cellGap:j,hideLE:P,hideGE:R,yAxisConfig:I,ySizeDivisor:H,sync:W}=e,U="x",Z="time",J=devicePixelRatio;let K=null===(l=b.current)||void 0===l||null===(t=l.heatmap)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.type;const X=k.visualization.getColorByName(e.exemplarColor);let Q,ee,le,te=new $.U(D);te.addHook("init",(e=>{e.root.querySelectorAll(".u-cursor-pt").forEach((e=>{Object.assign(e.style,{borderRadius:"0",border:"1px solid white",background:"transparent"})})),L&&e.over.addEventListener("mouseup",(l=>{e.cursor.drag._x||e.cursor.drag._y||L(l)}),!0)})),V&&te.addHook("setSelect",(e=>{V({xMin:e.posToVal(e.select.left,U),xMax:e.posToVal(e.select.left+e.select.width,U)}),e.setSelect({left:0,top:0,width:0,height:0},!1)})),te.addHook("setData",(e=>{let{min:l,max:t}=e.scales.x,a=A().from.valueOf(),o=A().to.valueOf();l===a&&t===o||queueMicrotask((()=>{e.setScale(U,{min:a,max:o})}))})),te.addHook("syncRect",((e,l)=>{le=l}));const ae={point:{[Z]:null},data:null===(o=b.current)||void 0===o?void 0:o.heatmap},oe=new N.es(ae);let ie;B&&te.addHook("setLegend",(e=>{if(null!=e.cursor.idxs)for(let l=0;l<e.cursor.idxs.length;l++){const t=e.cursor.idxs[l];if(null!=t){const{left:a,top:o}=e.cursor;return ae.rowIndex=t,ae.point.time=e.posToVal(a,U),S.publish(oe),void(C.current||(ie&&(clearTimeout(ie),ie=0),B({seriesIdx:l,dataIdx:t,pageX:le.left+a,pageY:le.top+o})))}}C.current||ie||(ie=setTimeout((()=>{B(null),ae.rowIndex=void 0,ae.point.time=null,S.publish(oe)}),100))})),te.addHook("drawClear",(e=>{Q=Q||new T.lW(0,0,e.bbox.width,e.bbox.height),Q.clear(),e.series.forEach(((e,l)=>{l>0&&(e._paths=null)}))})),te.setMode(2),te.addScale({scaleKey:U,isTime:!0,orientation:d.wN.Horizontal,direction:d.bQ.Right,range:()=>[A().from.valueOf(),A().to.valueOf()]}),te.addAxis({scaleKey:U,placement:d.LB.Bottom,isTime:!0,theme:k,timeZone:D});const ne=null===(i=b.current)||void 0===i||null===(n=i.heatmap)||void 0===n?void 0:n.fields[1];if(!ne)return te;const re=null===(r=ne.config)||void 0===r?void 0:r.custom,se=null!==(s=null==re?void 0:re.scaleDistribution)&&void 0!==s?s:{type:d.wf.Linear},de=Boolean(I.reverse),ue=K===g.P.HeatmapCells&&!(0,h.qJ)(null===(u=b.current)||void 0===u?void 0:u.heatmap),ce=se.type!==d.wf.Linear||ue,me=null!=(0,h.d8)(null===(c=b.current)||void 0===c?void 0:c.heatmap).yOrdinalDisplay,ve="y_"+(Math.random()+1).toString(36).substring(7);te.addScale({scaleKey:ve,isTime:!1,orientation:d.wN.Vertical,direction:de?d.bQ.Down:d.bQ.Up,distribution:ce?d.wf.Log:d.wf.Linear,log:null!==(m=se.log)&&void 0!==m?m:2,range:ue?(e,l,t)=>{var a;let o,i;if([o,i]=ce?E.Z.rangeLog(l,t,null!==(a=se.log)&&void 0!==a?a:2,!0):[l,t],ce&&!me){let l=e.scales[ve].log,t=2===l?Math.log2:Math.log10,{min:a,max:n}=I;if(null!=a&&a>0){let e=t(a);o=l**(0,z.mB)(e,1)}if(null!=n&&n>0){let e=t(n);i=l**(0,z.UO)(e,1)}}return[o,i]}:(e,l,t)=>{let a=l,o=t,{min:i,max:n}=I;if(ce){var r,s;let d=e.scales[ve].log,u=!1,c=!1,m=2===d?Math.log2:Math.log10;if(1!==H){let e=m(l),i=m(t);Number.isInteger(e)||(a=d**(0,z.mB)(e,1),u=!0),Number.isInteger(i)||(o=d**(0,z.UO)(i,1),c=!0)}if((null===(r=b.current)||void 0===r?void 0:r.yLayout)===p.D.le?u||(a/=d):(null===(s=b.current)||void 0===s?void 0:s.yLayout)===p.D.ge?c||(o*=d):(a/=d/2,o*=d/2),!me){if(null!=i&&i>0){let e=m(i);a=d**(0,z.mB)(e,1)}if(null!=n&&n>0){let e=m(n);o=d**(0,z.UO)(e,1)}}}else{var d;let e=null===(d=b.current)||void 0===d?void 0:d.yBucketSize;var u,c;0===e&&(e=1),e&&((null===(u=b.current)||void 0===u?void 0:u.yLayout)===p.D.le?a-=e:(null===(c=b.current)||void 0===c?void 0:c.yLayout)===p.D.ge?o+=e:(a-=e/2,o+=e/2)),me||(a=null!=i?i:a,o=null!=n?n:o)}return[a,o]}});const he=null!==(v=ne.display)&&void 0!==v?v:(0,M.Cf)("short");te.addAxis({scaleKey:ve,show:I.axisPlacement!==d.LB.Hidden,placement:I.axisPlacement||d.LB.Left,size:I.axisWidth||null,label:I.axisLabel,theme:k,formatValue:(e,l)=>(0,M.zc)(he(e,l)),splits:me?e=>{var l,t;const a=(0,h.d8)(null===(l=b.current)||void 0===l?void 0:l.heatmap);if(!a.yOrdinalDisplay)return[0,1];let o=a.yOrdinalDisplay.map(((e,l)=>l));switch(null===(t=b.current)||void 0===t?void 0:t.yLayout){case p.D.le:o.unshift(-1);break;case p.D.ge:o.push(o.length)}if(e.height<60)o=[o[0],o[o.length-1]];else for(;o.length>3&&(e.height-15)/o.length<10;)o=o.filter(((e,l)=>l%2==0));return o}:void 0,values:me?(e,l)=>{var t;const a=(0,h.d8)(null===(t=b.current)||void 0===t?void 0:t.heatmap);return a.yOrdinalDisplay?l.map((e=>{var l,t;return e<0?null!==(l=a.yMinDisplay)&&void 0!==l?l:"":null!==(t=a.yOrdinalDisplay[e])&&void 0!==t?t:""})):l}:void 0});const pe=ue?_:Y;te.addSeries({facets:[{scale:U,auto:!0,sorted:1},{scale:ve,auto:!0}],pathBuilder:pe({each:(e,l,t,a,o,i,n)=>{Q.add({x:a-e.bbox.left,y:o-e.bbox.top,w:i,h:n,sidx:l,didx:t})},gap:j,hideLE:P,hideGE:R,xAlign:(null===(f=b.current)||void 0===f?void 0:f.xLayout)===p.D.le?-1:(null===(x=b.current)||void 0===x?void 0:x.xLayout)===p.D.ge?1:0,yAlign:((null===(y=b.current)||void 0===y?void 0:y.yLayout)===p.D.le?-1:(null===(w=b.current)||void 0===w?void 0:w.yLayout)===p.D.ge?1:0)*(de?-1:1),ySizeDivisor:H,disp:{fill:{values:(e,l)=>{var t,a;let o=ue?3:2;return q(e.data[l][o],O,null===(t=b.current)||void 0===t?void 0:t.minValue,null===(a=b.current)||void 0===a?void 0:a.maxValue)},index:O}}}),theme:k,scaleKey:""}),te.addSeries({facets:[{scale:U,auto:!0,sorted:1},{scale:ve,auto:!0}],pathBuilder:F({each:(e,l,t,a,o,i,n)=>{Q.add({x:a-e.bbox.left,y:o-e.bbox.top,w:i,h:n,sidx:l,didx:t})}},X),theme:k,scaleKey:""});const fe={drag:{x:!0,y:!1,setScale:!1},dataIdx:(e,l)=>{if(1===l){ee=null;let l=e.cursor.left*J,t=e.cursor.top*J;Q.get(l,t,1,1,(e=>{(0,T.Pn)(l,t,e.x,e.y,e.x+e.w,e.y+e.h)&&(ee=e)}))}return ee&&l===ee.sidx?ee.didx:null},points:{fill:"rgba(255,255,255, 0.3)",bbox:(e,l)=>{let t=ee&&l===ee.sidx;return{left:t?ee.x/J:-10,top:t?ee.y/J:-10,width:t?ee.w/J:0,height:t?ee.h/J:0}}}};return W&&W()!==G.m.Off&&(fe.sync={key:"__global_",scales:[U,ve],filters:{pub:(e,l,t,a,o,i,n)=>(t<0?(ae.point.time=null,S.publish(new N.xH)):(ae.point.time=l.posToVal(t,U),S.publish(oe)),!0)}},te.setSync()),te.setCursor(fe),te}({dataRef:ee,theme:V,eventBus:c,onhover:Q,onclick:s.tooltip.show?X:null,onzoom:e=>{e.xMax-e.xMin>1&&v({from:e.xMin,to:e.xMax})},isToolTipOpen:K,timeZone:i,getTimeRange:()=>A.current,sync:D,palette:I,cellGap:s.cellGap,hideLE:null===(o=s.filterValues)||void 0===o?void 0:o.le,hideGE:null===(n=s.filterValues)||void 0===n?void 0:n.ge,exemplarColor:null!==(r=null===(u=s.exemplars)||void 0===u?void 0:u.color)&&void 0!==r?r:"rgba(255,0,255,0.7)",yAxisConfig:s.yAxis,ySizeDivisor:(null==x?void 0:x.type)===d.wf.Log?+((null===(m=s.calculation)||void 0===m||null===(f=m.yBuckets)||void 0===f?void 0:f.value)||1):1})}),[s,i,l.structureRev]);return O.warning||!O.heatmap?(0,j.jsx)(x.Z,{panelId:t,fieldConfig:u,data:l,needsNumberField:!0,message:O.warning}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(b.AY,{width:n,height:r,legend:(()=>{var e,l,t,a;if(!O.heatmap||!s.legend.show)return null;let o=(null===(e=ee.current)||void 0===e||null===(l=e.heatmap)||void 0===l||null===(t=l.meta)||void 0===t?void 0:t.type)===g.P.HeatmapCells&&!(0,h.qJ)(null===(a=ee.current)||void 0===a?void 0:a.heatmap)?3:2;const i=O.heatmap.fields[o];let n;return H&&O.heatmap.fields&&1===H.seriesIdx&&(n=i.values.get(H.dataIdx)),(0,j.jsx)(b.AY.Legend,{placement:"bottom",maxHeight:"20%",children:(0,j.jsx)("div",{className:C.colorScaleWrapper,children:(0,j.jsx)(m.q,{hoverValue:n,colorPalette:I,min:ee.current.minValue,max:ee.current.maxValue,display:O.display})})})})(),children:(e,l)=>(0,j.jsx)(k.N,{config:le,data:R,width:e,height:l,timeRange:o})}),(0,j.jsx)(S.h_,{children:H&&s.tooltip.show&&(0,j.jsxs)(B.S,{position:{x:H.pageX,y:H.pageY},offset:{x:10,y:10},allowPointerEvents:K.current,children:[Z&&(0,j.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:(0,j.jsx)(L.P,{onClick:()=>{K.current=!1,J(!1),Q(null)},style:{position:"relative",top:"auto",right:"auto",marginRight:0}})}),(0,j.jsx)(P,{data:O,hover:H,showHistogram:s.tooltip.yHistogram})]})})]})})).useFieldConfig({disableStandardOptions:Object.values(i.qb).filter((e=>e!==i.qb.Links)),useCustomConfig:e=>{e.addCustomEditor({id:"scaleDistribution",path:"scaleDistribution",name:"Y axis scale",category:["Heatmap"],editor:u.Y,override:u.Y,defaultValue:{type:d.wf.Linear},shouldApply:e=>e.type===n.fS.number,process:r.kG,hideFromDefaults:!0}),(0,c.B)(e)}}).setPanelChangeHandler(ue).setMigrationHandler((e=>0===Object.keys(e.options).length?ue(e,"heatmap",{angular:e},e.fieldConfig):e.options)).setPanelOptions(((e,l)=>{var t,a,o,i;const n=null!==(t=l.options)&&void 0!==t?t:oe;let r=!1;try{const e=U({series:l.data},n,s.v.theme2);r=null!=(0,h.d8)(e.heatmap).yOrdinalDisplay}catch{}let u=["Heatmap"];var c,f,g;(e.addRadio({path:"calculate",name:"Calculate from data",defaultValue:oe.calculate,category:u,settings:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}}),n.calculate&&(0,v.J)("calculation.",e,n.calculation,u),u=["Y Axis"],e.addRadio({path:"yAxis.axisPlacement",name:"Placement",defaultValue:null!==(a=oe.yAxis.axisPlacement)&&void 0!==a?a:d.LB.Left,category:u,settings:{options:[{label:"Left",value:d.LB.Left},{label:"Right",value:d.LB.Right},{label:"Hidden",value:d.LB.Hidden}]}}).addUnitPicker({category:u,path:"yAxis.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:u,path:"yAxis.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),r||e.addNumberInput({path:"yAxis.min",name:"Min value",settings:{placeholder:"Auto"},category:u}).addTextInput({path:"yAxis.max",name:"Max value",settings:{placeholder:"Auto"},category:u}),e.addNumberInput({path:"yAxis.axisWidth",name:"Axis width",defaultValue:oe.yAxis.axisWidth,settings:{placeholder:"Auto",min:5},category:u}).addTextInput({path:"yAxis.axisLabel",name:"Axis label",defaultValue:oe.yAxis.axisLabel,settings:{placeholder:"Auto"},category:u}),n.calculate)||e.addRadio({path:"rowsFrame.layout",name:"Tick alignment",defaultValue:null!==(c=null===(f=oe.rowsFrame)||void 0===f?void 0:f.layout)&&void 0!==c?c:p.D.auto,category:u,settings:{options:[{label:"Auto",value:p.D.auto},{label:"Top (LE)",value:p.D.le},{label:"Middle",value:p.D.unknown},{label:"Bottom (GE)",value:p.D.ge}]}});(e.addBooleanSwitch({path:"yAxis.reverse",name:"Reverse",defaultValue:!0===oe.yAxis.reverse,category:u}),u=["Colors"],e.addRadio({path:"color.mode",name:"Mode",defaultValue:oe.color.mode,category:u,settings:{options:[{label:"Scheme",value:te.Scheme},{label:"Opacity",value:te.Opacity}]}}),e.addColorPicker({path:"color.fill",name:"Color",defaultValue:oe.color.fill,category:u,showIf:e=>e.color.mode===te.Opacity}),e.addRadio({path:"color.scale",name:"Scale",defaultValue:oe.color.scale,category:u,settings:{options:[{label:"Exponential",value:ae.Exponential},{label:"Linear",value:ae.Linear}]},showIf:e=>e.color.mode===te.Opacity}),e.addSliderInput({path:"color.exponent",name:"Exponent",defaultValue:oe.color.exponent,category:u,settings:{min:.1,max:2,step:.1},showIf:e=>e.color.mode===te.Opacity&&e.color.scale===ae.Exponential}),e.addSelect({path:"color.scheme",name:"Scheme",description:"",defaultValue:oe.color.scheme,category:u,settings:{options:ie.map((e=>({value:e.name,label:e.name})))},showIf:e=>e.color.mode!==te.Opacity}),e.addSliderInput({path:"color.steps",name:"Steps",defaultValue:oe.color.steps,category:u,settings:{min:2,max:128,step:1}}).addBooleanSwitch({path:"color.reverse",name:"Reverse",defaultValue:oe.color.reverse,category:u}).addCustomEditor({id:"__scale__",path:"__scale__",name:"",category:u,editor:()=>{const e=re(n.color,s.v.theme2);return(0,j.jsx)("div",{children:(0,j.jsx)(m.q,{colorPalette:e,min:1,max:100})})}}),e.addNumberInput({path:"color.min",name:"Start color scale from value",defaultValue:oe.color.min,settings:{placeholder:"Auto (min)"},category:u}).addNumberInput({path:"color.max",name:"End color scale at value",defaultValue:oe.color.max,settings:{placeholder:"Auto (max)"},category:u}),u=["Cell display"],n.calculate)||e.addTextInput({path:"rowsFrame.value",name:"Value name",defaultValue:null===(g=oe.rowsFrame)||void 0===g?void 0:g.value,settings:{placeholder:"Value"},category:u});e.addUnitPicker({category:u,path:"cellValues.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:u,path:"cellValues.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),e.addSliderInput({name:"Cell gap",path:"cellGap",defaultValue:oe.cellGap,category:u,settings:{min:0,max:25}}).addNumberInput({path:"filterValues.le",name:"Hide cells with values <=",defaultValue:null===(o=oe.filterValues)||void 0===o?void 0:o.le,settings:{placeholder:"None"},category:u}).addNumberInput({path:"filterValues.ge",name:"Hide cells with values >=",defaultValue:null===(i=oe.filterValues)||void 0===i?void 0:i.ge,settings:{placeholder:"None"},category:u}),u=["Tooltip"],e.addBooleanSwitch({path:"tooltip.show",name:"Show tooltip",defaultValue:oe.tooltip.show,category:u}),e.addBooleanSwitch({path:"tooltip.yHistogram",name:"Show histogram (Y axis)",defaultValue:oe.tooltip.yHistogram,category:u,showIf:e=>e.tooltip.show}),u=["Legend"],e.addBooleanSwitch({path:"legend.show",name:"Show legend",defaultValue:oe.legend.show,category:u}),u=["Exemplars"],e.addColorPicker({path:"exemplars.color",name:"Color",defaultValue:oe.exemplars.color,category:u})})).setSuggestionsSupplier(new class{getSuggestionsForData(e){var l;const{dataSummary:t}=e;if(null===(l=e.data)||void 0===l||!l.series||!t.hasData||t.timeFieldCount<1||t.numberFieldCount<2||t.numberFieldCount>10)return;const a=U(e.data,oe,s.v.theme2);a&&!a.warning&&e.getListAppender({name:"",pluginId:"heatmap",options:{},fieldConfig:{defaults:{custom:{}},overrides:[]}})}})}}]);
//# sourceMappingURL=heatmapPanel.7ac6b12db56f559572a9.js.map