(()=>{var e={};e.id=492,e.ids=[492],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},6836:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=s(260),n=s(8203),a=s(5155),i=s.n(a),l=s(7292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,7752)),"/home/zuke/Desktop/shai/shai-website/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"]}],c=[],h={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8621:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3219,23)),Promise.resolve().then(s.t.bind(s,4863,23)),Promise.resolve().then(s.t.bind(s,5155,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,6313,23)),Promise.resolve().then(s.t.bind(s,8530,23)),Promise.resolve().then(s.t.bind(s,8921,23))},6237:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6959,23)),Promise.resolve().then(s.t.bind(s,3875,23)),Promise.resolve().then(s.t.bind(s,8903,23)),Promise.resolve().then(s.t.bind(s,4178,23)),Promise.resolve().then(s.t.bind(s,6013,23)),Promise.resolve().then(s.t.bind(s,7190,23)),Promise.resolve().then(s.t.bind(s,1365,23))},312:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,5197,23)),Promise.resolve().then(s.bind(s,4898))},808:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,7801,23)),Promise.resolve().then(s.bind(s,2558))},2558:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(5512),n=s(8009),a=s(6008),i=s(9334),l=s(4195),o=s(9400),d=s(4269),c=s(6438);let h=[{title:"About",href:"/about"},{title:"Team",href:"/team"},{title:"What We Do",href:"/what-we-do"},{title:"Impact",href:"/impact"},{title:"Careers",href:"/careers"},{title:"Blog",href:"/blog"},{title:"Contact",href:"/contact"}];function u(){let e=(0,i.usePathname)(),[t,s]=n.useState(!1);return(0,r.jsxs)("header",{className:"border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50",children:[(0,r.jsxs)("div",{className:"container flex items-center justify-between py-4",children:[(0,r.jsx)(a.default,{href:"/",className:"text-2xl font-bold text-slate-100",children:"SH&AI"}),(0,r.jsx)("nav",{className:"hidden md:flex items-center space-x-8",children:h.map(t=>(0,r.jsx)(a.default,{href:t.href,className:(0,l.cn)("text-sm font-medium transition-colors hover:text-slate-100",e===t.href?"text-slate-100":"text-slate-400"),children:t.title},t.href))}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)(o.$,{asChild:!0,children:(0,r.jsx)(a.default,{href:"/enquiry",children:"Contact Us"})})}),(0,r.jsx)("button",{className:"md:hidden text-slate-100",onClick:()=>s(!t),children:t?(0,r.jsx)(d.A,{size:24}):(0,r.jsx)(c.A,{size:24})})]}),t&&(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsxs)("nav",{className:"flex flex-col space-y-4 px-4 py-6 bg-slate-900/95 border-t border-slate-800",children:[h.map(t=>(0,r.jsx)(a.default,{href:t.href,onClick:()=>s(!1),className:(0,l.cn)("text-sm font-medium transition-colors hover:text-slate-100",e===t.href?"text-slate-100":"text-slate-400"),children:t.title},t.href)),(0,r.jsx)(o.$,{asChild:!0,className:"w-full mt-4",children:(0,r.jsx)(a.default,{href:"/enquiry",children:"Contact Us"})})]})})]})}},9400:(e,t,s)=>{"use strict";s.d(t,{$:()=>d});var r=s(5512),n=s(8009),a=s(2705),i=s(2101),l=s(4195);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef(({className:e,variant:t,size:s,asChild:n=!1,...i},d)=>{let c=n?a.DX:"button";return(0,r.jsx)(c,{className:(0,l.cn)(o({variant:t,size:s,className:e})),ref:d,...i})});d.displayName="Button"},4195:(e,t,s)=>{"use strict";s.d(t,{cn:()=>a});var r=s(2281),n=s(4805);function a(...e){return(0,n.QP)((0,r.$)(e))}},7752:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>d});var r=s(2740),n=s(7339),a=s.n(n);s(5692),s(6301);var i=s(308);function l(){return(0,r.jsx)("footer",{className:"bg-slate-900 text-slate-50 py-8",children:(0,r.jsxs)("div",{className:"container px-4",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-4",children:"SH&AI"}),(0,r.jsx)("p",{className:"text-sm text-slate-400",children:"Revolutionizing healthcare through AI-driven solutions."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Quick Links"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/",className:"text-slate-400 hover:text-slate-200",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/about",className:"text-slate-400 hover:text-slate-200",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/team",className:"text-slate-400 hover:text-slate-200",children:"Team"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/what-we-do",className:"text-slate-400 hover:text-slate-200",children:"What We Do"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/products",className:"text-slate-400 hover:text-slate-200",children:"Products"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/enquiry",className:"text-slate-400 hover:text-slate-200",children:"Enquiry"})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Contact Us"}),(0,r.jsxs)("p",{className:"text-sm text-slate-400",children:["123 AI Healthcare Street",(0,r.jsx)("br",{}),"Bangalore, Karnataka 560001",(0,r.jsx)("br",{}),"India",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Email: info@shai.com",(0,r.jsx)("br",{}),"Phone: +91 123 456 7890"]})]})]}),(0,r.jsxs)("div",{className:"mt-8 text-center text-sm text-slate-400",children:["\xa9 ",new Date().getFullYear()," SH&AI. All rights reserved."]})]})})}var o=s(4898);let d={title:"SH&AI - Healthcare Innovation",description:"Revolutionizing Healthcare Through AI Innovation"};function c({children:e}){return(0,r.jsx)("html",{lang:"en",className:"dark",children:(0,r.jsxs)("body",{className:`${a().className} bg-slate-900 min-h-screen flex flex-col`,children:[(0,r.jsx)(o.default,{}),e,(0,r.jsx)(l,{})]})})}},4898:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/zuke/Desktop/shai/shai-website/src/components/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/zuke/Desktop/shai/shai-website/src/components/Header.tsx","default")},5692:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[906],()=>s(6836));module.exports=r})();