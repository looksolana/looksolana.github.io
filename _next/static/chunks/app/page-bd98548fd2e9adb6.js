(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{255:(e,t,n)=>{"use strict";function a(e){let{moduleIds:t}=e;return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return a}}),n(5155),n(7650),n(5744),n(589)},2146:(e,t,n)=>{"use strict";function a(e){let{reason:t,children:n}=e;return n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}}),n(5262)},4054:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{bindSnapshot:function(){return o},createAsyncLocalStorage:function(){return r},createSnapshot:function(){return s}});let n=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class a{disable(){throw n}getStore(){}run(){throw n}exit(){throw n}enterWith(){throw n}static bind(e){return e}}let i="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function r(){return i?new i:new a}function o(e){return i?i.bind(e):a.bind(e)}function s(){return i?i.snapshot():function(e,...t){return e(...t)}}},5744:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return a.workAsyncStorageInstance}});let a=n(7828)},6036:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(5155),i=n(6645),r=n.n(i),o=n(2115);let s=[{id:"3d_model",name:"3D Model"},{id:"analog_film",name:"Analog Film"},{id:"anime",name:"Anime"},{id:"artstyle_hyperrealism",name:"Hyperrealism"},{id:"artstyle_psychedelic",name:"Psychedelic"},{id:"artstyle_renaissance",name:"Renaissance"},{id:"artstyle_steampunk",name:"Steampunk"},{id:"cctv_footage",name:"CCTV footage"},{id:"cinematic",name:"Cinematic"},{id:"claymation",name:"Claymation"},{id:"comicbook",name:"Comic Book"},{id:"disney",name:"Disney"},{id:"futuristic_cybernetic",name:"Cybernetic"},{id:"futuristic_futuristic",name:"Futuristic"},{id:"futuristic_retro_cyberpunk",name:"Retro Cyberpunk"},{id:"futuristic_retro_futurism",name:"Retro Futurism"},{id:"futuristic_scifi",name:"Sci-Fi"},{id:"futuristic_vaporwave",name:"Vaporwave"},{id:"glitch_art",name:"Glitch Effect"},{id:"hand_drawn",name:"Hand Drawn"},{id:"misc_disco",name:"Disco"},{id:"misc_dreamscape",name:"Dreamscape"},{id:"misc_dystopian",name:"Dystopian"},{id:"misc_fairy_tale",name:"Fairy Tale"},{id:"misc_gothic",name:"Gothic"},{id:"misc_grunge",name:"Grunge"},{id:"misc_horror",name:"Horror"},{id:"misc_kawaii",name:"Kawaii"},{id:"misc_lovecraftian",name:"Lovecraftian"},{id:"misc_macabre",name:"Macabre"},{id:"misc_metropolis",name:"Metropolis"},{id:"misc_minimalist",name:"Minimalist"},{id:"misc_nautical",name:"Nautical"},{id:"misc_space",name:"Cosmic"},{id:"misc_techwear_fashion",name:"Techwear Fashion"},{id:"misc_tribal",name:"Tribal"},{id:"n64",name:"N64"},{id:"photo-film_noir",name:"Film Noir"},{id:"photo-hdr",name:"HDR Photo"},{id:"photo-iphone_photographic",name:"iPhone Photography"},{id:"photo-long_exposure",name:"Long Exposure"},{id:"photo-neon_noir",name:"Neon Noir"},{id:"pixel_art",name:"Pixel Art"},{id:"studio_ghibli",name:"Studio Ghibli"}],l=()=>{let[e,t]=(0,o.useState)(""),n=!0,i=(n=window.innerWidth>500)?500:300,r=n?375:225,[l,c]=(0,o.useState)(""),[d,u]=(0,o.useState)(s),[m,h]=(0,o.useState)("anime"),[p,f]=(0,o.useState)({loading:!1,text:"",error:""});(0,o.useEffect)(()=>{g()},[]);let g=()=>{fetch("https://studio.api.memedeck.xyz/api/styles").then(e=>e.json()).then(e=>{u(e)})},y=e=>{let t=new Image;t.crossOrigin="anonymous";let a=document.getElementById("canvas"),o=null==a?void 0:a.getContext("2d");t.src=e,o&&t.addEventListener("load",()=>{o.drawImage(t,0,0,1024,768,0,0,i,r),o.font="".concat(n?15:12,"px Arial"),o.strokeStyle="rgba(0,0,0,0.5)",o.strokeText("$LOOK",i-(n?65:50),r-(n?12:8)),o.fillStyle="rgba(255,255,255,0.5)",o.fillText("$LOOK",i-(n?64:49),r-(n?11:7)),o.lineWidth=2})},_=e=>{fetch("https://studio.api.memedeck.xyz/api/generate/image/"+e,{method:"GET",headers:{"Content-Type":"application/json","X-Memedeck-API-Key":"0bWCJT2XKXVnFCcxO0xjC6E4iXLL3J0H","X-Memedeck-Deck-Id":"deck:37daa27e_379e_4436_8c57_d4ae5724b848"}}).then(e=>e.json()).then(t=>{"processing"===t.status?setTimeout(()=>_(e),4e3):"complete"===t.status?(f({loading:!1,text:"Look bro, what do you think?"}),y(t.image.url),c(t.image.url)):f({loading:!1,error:"Error occurred."})})},b=async()=>{if(!e.length)return f({loading:!1,error:"Enter a prompt."});f({loading:!0,text:"Loading..."}),await fetch("https://studio.api.memedeck.xyz/api/generate/image",{method:"POST",headers:{"Content-Type":"application/json","X-Memedeck-API-Key":"0bWCJT2XKXVnFCcxO0xjC6E4iXLL3J0H","X-Memedeck-Deck-Id":"deck:37daa27e_379e_4436_8c57_d4ae5724b848"},body:JSON.stringify({aspect_ratio:"square",character:"look",prompt:e,style:m})}).then(e=>e.json()).then(e=>{f({loading:!0,text:"Processing..."}),"error"===e.result?f({loading:!1,error:"Error occurred: "+e.reason}):_(e.prompt_id)})};return(0,a.jsx)("div",{className:"App",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("ul",{className:"header-links",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://looksolana.com/",children:" Home "})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://x.com/look_solana",children:" X (Twitter) "})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://tiktok.com/@look_solana",children:" Tiktok "})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"http://t.me/LOOK_officialTG",children:" Telegram "})})]}),(0,a.jsx)("h1",{children:"Generate your own $LOOK meme"}),(0,a.jsx)("img",{alt:"$LOOK bro origin",width:i,src:"/look.jpeg"}),(0,a.jsx)("p",{}),(0,a.jsx)("label",{children:"Describe your meme with a short prompt."}),(0,a.jsx)("textarea",{className:"styled-textarea",value:e,style:{borderColor:"Enter a prompt."===p.error?"red":"#ddd",width:"".concat(i,"px"),minHeight:"".concat(500===i?100:130,"px")},required:!0,onChange:e=>t(e.target.value),placeholder:"Main character is Donald Trump. Second character is Elon Musk. Third character on the background is Joe Biden. Background is a sunny day, main character is smiling."}),p.error&&(0,a.jsx)("p",{style:{color:"red"},children:p.error}),(0,a.jsx)("p",{}),(0,a.jsx)("label",{children:"Select a style"}),(0,a.jsx)("select",{className:"styled-select",onChange:e=>{h(e.target.value)},style:{width:"".concat(i,"px")},value:m,name:"inp-style",id:"inp-style",children:d.map(e=>{let{id:t,name:n}=e;return(0,a.jsx)("option",{value:t,children:n},t)})}),(0,a.jsx)("p",{}),(0,a.jsx)("button",{disabled:p.loading,className:"styled-button",onClick:b,children:"Generate"}),(0,a.jsx)("p",{}),(0,a.jsx)("label",{children:p.text}),l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"styled-button success",onClick:()=>{let e=document.createElement("a");e.download="look_meme.png",e.href=document.getElementById("canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),e.click()},children:"Download"}),(0,a.jsx)("br",{})]}),(0,a.jsx)("canvas",{id:"canvas",width:i,height:r})]})})},c=r()(()=>Promise.resolve(l),{ssr:!1})},6645:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=n(8229)._(n(7357));function i(e,t){var n;let i={};"function"==typeof e&&(i.loader=e);let r={...i,...t};return(0,a.default)({...r,modules:null==(n=r.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7357:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let a=n(5155),i=n(2115),r=n(2146);function o(e){return{default:e&&"default"in e?e.default:e}}n(255);let s={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},l=function(e){let t={...s,...e},n=(0,i.lazy)(()=>t.loader().then(o)),l=t.loading;function c(e){let o=l?(0,a.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,c=s?i.Suspense:i.Fragment,d=t.ssr?(0,a.jsxs)(a.Fragment,{children:[null,(0,a.jsx)(n,{...e})]}):(0,a.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(n,{...e})});return(0,a.jsx)(c,{...s?{fallback:o}:{},children:d})}return c.displayName="LoadableComponent",c}},7828:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorageInstance",{enumerable:!0,get:function(){return a}});let a=(0,n(4054).createAsyncLocalStorage)()},9513:(e,t,n)=>{Promise.resolve().then(n.bind(n,6036))}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(9513)),_N_E=e.O()}]);