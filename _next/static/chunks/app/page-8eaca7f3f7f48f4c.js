(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{255:(e,t,a)=>{"use strict";function n(e){let{moduleIds:t}=e;return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return n}}),a(5155),a(7650),a(5744),a(589)},2146:(e,t,a)=>{"use strict";function n(e){let{reason:t,children:a}=e;return a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}}),a(5262)},4054:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{bindSnapshot:function(){return s},createAsyncLocalStorage:function(){return r},createSnapshot:function(){return o}});let a=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class n{disable(){throw a}getStore(){}run(){throw a}exit(){throw a}enterWith(){throw a}static bind(e){return e}}let i="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function r(){return i?new i:new n}function s(e){return i?i.bind(e):n.bind(e)}function o(){return i?i.snapshot():function(e,...t){return e(...t)}}},5744:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorageInstance}});let n=a(7828)},6036:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(5155),i=a(6645),r=a.n(i),s=a(2115);let o=[{id:"3d_model",name:"3D Model"},{id:"analog_film",name:"Analog Film"},{id:"anime",name:"Anime"},{id:"artstyle_hyperrealism",name:"Hyperrealism"},{id:"artstyle_psychedelic",name:"Psychedelic"},{id:"artstyle_renaissance",name:"Renaissance"},{id:"artstyle_steampunk",name:"Steampunk"},{id:"cctv_footage",name:"CCTV footage"},{id:"cinematic",name:"Cinematic"},{id:"claymation",name:"Claymation"},{id:"comicbook",name:"Comic Book"},{id:"disney",name:"Disney"},{id:"futuristic_cybernetic",name:"Cybernetic"},{id:"futuristic_futuristic",name:"Futuristic"},{id:"futuristic_retro_cyberpunk",name:"Retro Cyberpunk"},{id:"futuristic_retro_futurism",name:"Retro Futurism"},{id:"futuristic_scifi",name:"Sci-Fi"},{id:"futuristic_vaporwave",name:"Vaporwave"},{id:"glitch_art",name:"Glitch Effect"},{id:"hand_drawn",name:"Hand Drawn"},{id:"misc_disco",name:"Disco"},{id:"misc_dreamscape",name:"Dreamscape"},{id:"misc_dystopian",name:"Dystopian"},{id:"misc_fairy_tale",name:"Fairy Tale"},{id:"misc_gothic",name:"Gothic"},{id:"misc_grunge",name:"Grunge"},{id:"misc_horror",name:"Horror"},{id:"misc_kawaii",name:"Kawaii"},{id:"misc_lovecraftian",name:"Lovecraftian"},{id:"misc_macabre",name:"Macabre"},{id:"misc_metropolis",name:"Metropolis"},{id:"misc_minimalist",name:"Minimalist"},{id:"misc_nautical",name:"Nautical"},{id:"misc_space",name:"Cosmic"},{id:"misc_techwear_fashion",name:"Techwear Fashion"},{id:"misc_tribal",name:"Tribal"},{id:"n64",name:"N64"},{id:"photo-film_noir",name:"Film Noir"},{id:"photo-hdr",name:"HDR Photo"},{id:"photo-iphone_photographic",name:"iPhone Photography"},{id:"photo-long_exposure",name:"Long Exposure"},{id:"photo-neon_noir",name:"Neon Noir"},{id:"pixel_art",name:"Pixel Art"},{id:"studio_ghibli",name:"Studio Ghibli"}],l=["/examples/1.jpeg","/examples/2.jpeg","/examples/3.png","/examples/4.png","/examples/5.png","/examples/6.png","/examples/7.jpeg","/examples/8.jpeg","/examples/9.jpg","/examples/10.jpg","/examples/11.jpg","/examples/12.jpeg","/examples/13.webp","/examples/14.webp","/examples/15.webp","/examples/16.webp","/examples/17.webp","/examples/18.webp"],c=()=>{let[e,t]=(0,s.useState)(""),a=!0,i=(a=window.innerWidth>500)?500:300,r=a?450:270,[c,d]=(0,s.useState)(""),[u,m]=(0,s.useState)(l),[p,h]=(0,s.useState)(o),[f,g]=(0,s.useState)("anime"),[x,y]=(0,s.useState)({loading:!1,text:"",error:""});(0,s.useEffect)(()=>{_()},[]);let _=()=>{fetch("https://studio.api.memedeck.xyz/api/styles").then(e=>e.json()).then(e=>{h(e)})},b=(e,t)=>{if(t>0){let n=new Image;n.crossOrigin="anonymous";let s=document.getElementById("canvas"),o=null==s?void 0:s.getContext("2d");n.src=e,o&&n.addEventListener("load",()=>{o.drawImage(n,0,0,1024,921.6,0,0,i,r),o.font="".concat(a?15:12,"px Arial"),o.strokeStyle="rgba(0,0,0,0.5)",o.strokeText("$LOOK",i-(a?65:50),r-(a?12:8)),o.fillStyle="rgba(255,255,255,0.5)",o.fillText("$LOOK",i-(a?64:49),r-(a?11:7)),o.lineWidth=2,setTimeout(()=>b(e,t-1),300)})}},j=e=>{fetch("https://studio.api.memedeck.xyz/api/generate/image/"+e,{method:"GET",headers:{"Content-Type":"application/json","X-Memedeck-API-Key":"0bWCJT2XKXVnFCcxO0xjC6E4iXLL3J0H","X-Memedeck-Deck-Id":"deck:37daa27e_379e_4436_8c57_d4ae5724b848"}}).then(e=>e.json()).then(t=>{"processing"===t.status?setTimeout(()=>j(e),4e3):"complete"===t.status?(y({loading:!1,text:"Look bro, what do you think?"}),m(e=>{let a=[...e];return a.pop(),a.unshift(t.image.url),a}),b(t.image.url,2),d(t.image.url)):y({loading:!1,error:"Error occurred."})})},k=async()=>{if(!e.length)return y({loading:!1,error:"Enter a prompt."});y({loading:!0,text:"Loading..."}),await fetch("https://studio.api.memedeck.xyz/api/generate/image",{method:"POST",headers:{"Content-Type":"application/json","X-Memedeck-API-Key":"0bWCJT2XKXVnFCcxO0xjC6E4iXLL3J0H","X-Memedeck-Deck-Id":"deck:37daa27e_379e_4436_8c57_d4ae5724b848"},body:JSON.stringify({aspect_ratio:"square",character:"look",prompt:e,style:f})}).then(e=>e.json()).then(e=>{y({loading:!0,text:"Processing..."}),"error"===e.result?y({loading:!1,error:"Error occurred: "+e.reason}):j(e.prompt_id)})};return(0,n.jsxs)("main",{children:[(0,n.jsxs)("ul",{className:"header-links",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://looksolana.com/",children:" Home "})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://x.com/look_solana",children:" X (Twitter) "})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://tiktok.com/@look_solana",children:" Tiktok "})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"http://t.me/LOOK_officialTG",children:" Telegram "})})]}),(0,n.jsxs)("div",{className:"LOOK_app",children:[(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{children:"Generate your own $LOOK meme"}),(0,n.jsx)("p",{}),(0,n.jsx)("label",{children:"Describe your meme with a short prompt."}),(0,n.jsx)("textarea",{className:"styled-textarea",value:e,style:{borderColor:"Enter a prompt."===x.error?"red":"#ddd",width:"".concat(i,"px"),minHeight:"".concat(500===i?100:130,"px")},required:!0,onChange:e=>t(e.target.value),placeholder:"Main character is Donald Trump. Second character is Elon Musk. Third character on the background is Joe Biden. Background is a sunny day, main character is smiling."}),x.error&&(0,n.jsx)("p",{style:{color:"red"},children:x.error}),(0,n.jsx)("p",{}),(0,n.jsx)("label",{children:"Select a style"}),(0,n.jsx)("select",{className:"styled-select",onChange:e=>{g(e.target.value)},style:{width:"".concat(i,"px")},value:f,name:"inp-style",id:"inp-style",children:p.map(e=>{let{id:t,name:a}=e;return(0,n.jsx)("option",{value:t,children:a},t)})}),(0,n.jsx)("p",{}),(0,n.jsx)("button",{disabled:x.loading,className:"styled-button",onClick:k,children:"Generate"}),(0,n.jsx)("p",{children:" Your output will be displayed below."}),(0,n.jsx)("label",{children:x.text}),c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"styled-button success",onClick:()=>{let e=document.createElement("a");e.download="look_meme.png",e.href=document.getElementById("canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),e.click()},children:"Download"}),(0,n.jsx)("br",{})]}),(0,n.jsx)("canvas",{id:"canvas",width:i,height:r})]}),(0,n.jsxs)("div",{className:"past-nine",children:[(0,n.jsx)("p",{children:"Example outputs (18)"}),(0,n.jsx)("div",{className:"images_wrapper",style:{maxWidth:i},children:u.map((e,t)=>e?(0,n.jsx)("img",{src:e},e):(0,n.jsx)("div",{className:"img-placeholder linear-background"},t))})]})]})]})},d=r()(()=>Promise.resolve(c),{ssr:!1})},6645:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=a(8229)._(a(7357));function i(e,t){var a;let i={};"function"==typeof e&&(i.loader=e);let r={...i,...t};return(0,n.default)({...r,modules:null==(a=r.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7357:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=a(5155),i=a(2115),r=a(2146);function s(e){return{default:e&&"default"in e?e.default:e}}a(255);let o={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},l=function(e){let t={...o,...e},a=(0,i.lazy)(()=>t.loader().then(s)),l=t.loading;function c(e){let s=l?(0,n.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,c=o?i.Suspense:i.Fragment,d=t.ssr?(0,n.jsxs)(n.Fragment,{children:[null,(0,n.jsx)(a,{...e})]}):(0,n.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(a,{...e})});return(0,n.jsx)(c,{...o?{fallback:s}:{},children:d})}return c.displayName="LoadableComponent",c}},7828:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,a(4054).createAsyncLocalStorage)()},9513:(e,t,a)=>{Promise.resolve().then(a.bind(a,6036))}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(9513)),_N_E=e.O()}]);