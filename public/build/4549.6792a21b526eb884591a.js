"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4549],{4549:(e,i,a)=>{a.r(i),a.d(i,{VerifyEmailPage:()=>y,default:()=>z});var r,s,n,l,t=a(68404),d=a(3209),o=a(93570),c=a(54761),u=a(8006),h=a(3218),m=a(58101),v=a(65678),g=a(4645),p=a(46782),j=a(47900),x=a(54168),f=a(45916);const b=()=>{const e=(0,j.iG)(),[i,a]=(0,t.useState)(!1);return i?(0,f.jsxs)("div",{children:[r||(r=(0,f.jsx)("p",{children:"An email with a verification link has been sent to the email address. You should receive it shortly."})),s||(s=(0,f.jsx)(c.W2,{margin:"md"})),(0,f.jsx)(u.Qj,{variant:"primary",href:(0,p.iE)().appSubUrl+"/signup",children:"Complete Signup"})]}):(0,f.jsx)(h.l,{onSubmit:i=>{(0,o.i)().post("/api/user/signup",i).then((()=>{a(!0)})).catch((i=>{var a;const r=(null===(a=i.data)||void 0===a?void 0:a.message)||i;e.warning(r)}))},children:e=>{var i;let{register:a,errors:r}=e;return(0,f.jsxs)(f.Fragment,{children:[n||(n=(0,f.jsx)(m.D,{children:"Verify Email"})),(0,f.jsx)(v.g,{label:"Email",description:"Enter your email address to get a verification link sent to you",invalid:!!r.email,error:null===(i=r.email)||void 0===i?void 0:i.message,children:(0,f.jsx)(g.I,Object.assign({id:"email"},a("email",{required:"Email is required",pattern:{value:x.Yb,message:"Email is invalid"}}),{placeholder:"Email"}))}),(0,f.jsxs)(c.Lh,{children:[l||(l=(0,f.jsx)(u.zx,{type:"submit",children:"Send verification email"})),(0,f.jsx)(u.Qj,{fill:"text",href:(0,p.iE)().appSubUrl+"/login",children:"Back to login"})]})]})}})};var E;const y=()=>E||(E=(0,f.jsx)(d.dd,{children:(0,f.jsx)(d.$s,{children:(0,f.jsx)(b,{})})})),z=y},54168:(e,i,a)=>{a.d(i,{Yb:()=>s,d5:()=>n});var r=a(65737);const s=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;const n=()=>function(){var e;const i=null===(e=r.v.licenseInfo)||void 0===e?void 0:e.trialExpiry;return!!(i&&i>0)}()&&r.v.featureToggles.featureHighlights}}]);
//# sourceMappingURL=4549.6792a21b526eb884591a.js.map