(()=>{var e={};e.id=948,e.ids=[948],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},77337:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=t(73137),i=t(54647),o=t(4183),a=t.n(o),n=t(71775),u={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);t.d(r,u);let d=s.AppPageRouteModule,l=["",{children:["(dashboard)",{children:["(routes)",{children:["conversation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,25670)),"/home/adii/Bird-AI/bird-ai/app/(dashboard)/(routes)/conversation/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,88747)),"/home/adii/Bird-AI/bird-ai/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,79958)),"/home/adii/Bird-AI/bird-ai/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/adii/Bird-AI/bird-ai/app/(dashboard)/(routes)/conversation/page.tsx"],p="/(dashboard)/(routes)/conversation/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:i.x.APP_PAGE,page:"/(dashboard)/(routes)/conversation/page",pathname:"/conversation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},70889:(e,r,t)=>{Promise.resolve().then(t.bind(t,75932))},75932:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>page});var s=t(60080),i=t(17232),o=t(18310),a=t(66558),n=t(19098);let u=n.Ry({prompt:n.Z_().min(1,{message:"prompt required"})});var d=t(83894),l=t(60806),c=t(49424),p=t(68384),x=t(93258),m=t(57114),h=t(9885),b=t(89735),g=t(61626),v=t(23161),f=t(88502),q=t(38854);let page=()=>{let e=(0,m.useRouter)(),[r,t]=(0,h.useState)([]),n=(0,a.cI)({resolver:(0,d.F)(u),defaultValues:{prompt:""}}),_=n.formState.isSubmitting,onSubmit=async s=>{try{let e={role:"user",content:s.prompt},i=[...r,e],o=await x.Z.post("/api/conversation",{messages:i});t(r=>[...r,e,o.data]),n.reset()}catch(e){console.log(e)}finally{e.refresh()}};return(0,s.jsxs)("div",{children:[s.jsx(i.X,{title:"Conversation",description:"Our AI ChatBot",icon:o.Z,iconColor:"text-violet-500",bgColor:"bg-violet-500/10"}),(0,s.jsxs)("div",{className:"px-4 lg:px-8",children:[s.jsx("div",{children:s.jsx(l.l0,{...n,children:(0,s.jsxs)("form",{onSubmit:n.handleSubmit(onSubmit),className:" rounded-lg  border  w-full  p-4  px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 ",children:[s.jsx(l.Wi,{name:"prompt",render:({field:e})=>s.jsx(l.xJ,{className:"col-span-12 lg:col-span-10",children:s.jsx(l.NI,{className:"m-0 p-0",children:s.jsx(c.I,{className:"border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent",disabled:_,placeholder:"what can i tell?",...e})})})}),s.jsx(p.z,{className:"col-span-12 lg:col-span-2 w-full",disabled:_,children:"Generate"})]})})}),(0,s.jsxs)("div",{className:"space-y-4 mt-4",children:[_&&s.jsx("div",{className:"p-8 rounded-lg w-full flex items-center justify-center bg-muted",children:s.jsx(g.a,{})}),0===r.length&&!_&&s.jsx(b.H,{label:"No conversation started."}),s.jsx("div",{className:"flex flex-col-reverse gap-y-4",children:r.map(e=>(0,s.jsxs)("div",{className:(0,v.cn)("p-8 w-full flex items-start gap-x-8 rounded-lg","user"===e.role?"bg-white border border-black/10":"bg-muted"),children:["user"===e.role?s.jsx(f.Y,{}):s.jsx(q.k,{}),s.jsx("p",{className:"text-sm",children:e.content})]},e.content))})]})]})]})}},25670:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>o,default:()=>u});var s=t(17536);let i=(0,s.createProxy)(String.raw`/home/adii/Bird-AI/bird-ai/app/(dashboard)/(routes)/conversation/page.tsx`),{__esModule:o,$$typeof:a}=i,n=i.default,u=n}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[651,581,885,717,830,876,112,129,343,71,488,119,22],()=>__webpack_exec__(77337));module.exports=t})();