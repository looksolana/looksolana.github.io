(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{255:(e,t,a)=>{"use strict";function n(e){let{moduleIds:t}=e;return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return n}}),a(5155),a(7650),a(5744),a(589)},2146:(e,t,a)=>{"use strict";function n(e){let{reason:t,children:a}=e;return a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}}),a(5262)},4054:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{bindSnapshot:function(){return o},createAsyncLocalStorage:function(){return r},createSnapshot:function(){return s}});let a=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class n{disable(){throw a}getStore(){}run(){throw a}exit(){throw a}enterWith(){throw a}static bind(e){return e}}let i="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function r(){return i?new i:new n}function o(e){return i?i.bind(e):n.bind(e)}function s(){return i?i.snapshot():function(e,...t){return e(...t)}}},5744:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorageInstance}});let n=a(7828)},6036:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(5155),i=a(6645),r=a.n(i),o=a(2115);let s=[{id:"3d_model",name:"3D Model"},{id:"analog_film",name:"Analog Film"},{id:"anime",name:"Anime"},{id:"artstyle_hyperrealism",name:"Hyperrealism"},{id:"artstyle_psychedelic",name:"Psychedelic"},{id:"artstyle_renaissance",name:"Renaissance"},{id:"artstyle_steampunk",name:"Steampunk"},{id:"cctv_footage",name:"CCTV footage"},{id:"cinematic",name:"Cinematic"},{id:"claymation",name:"Claymation"},{id:"comicbook",name:"Comic Book"},{id:"disney",name:"Disney"},{id:"futuristic_cybernetic",name:"Cybernetic"},{id:"futuristic_futuristic",name:"Futuristic"},{id:"futuristic_retro_cyberpunk",name:"Retro Cyberpunk"},{id:"futuristic_retro_futurism",name:"Retro Futurism"},{id:"futuristic_scifi",name:"Sci-Fi"},{id:"futuristic_vaporwave",name:"Vaporwave"},{id:"glitch_art",name:"Glitch Effect"},{id:"hand_drawn",name:"Hand Drawn"},{id:"misc_disco",name:"Disco"},{id:"misc_dreamscape",name:"Dreamscape"},{id:"misc_dystopian",name:"Dystopian"},{id:"misc_fairy_tale",name:"Fairy Tale"},{id:"misc_gothic",name:"Gothic"},{id:"misc_grunge",name:"Grunge"},{id:"misc_horror",name:"Horror"},{id:"misc_kawaii",name:"Kawaii"},{id:"misc_lovecraftian",name:"Lovecraftian"},{id:"misc_macabre",name:"Macabre"},{id:"misc_metropolis",name:"Metropolis"},{id:"misc_minimalist",name:"Minimalist"},{id:"misc_nautical",name:"Nautical"},{id:"misc_space",name:"Cosmic"},{id:"misc_techwear_fashion",name:"Techwear Fashion"},{id:"misc_tribal",name:"Tribal"},{id:"n64",name:"N64"},{id:"photo-film_noir",name:"Film Noir"},{id:"photo-hdr",name:"HDR Photo"},{id:"photo-iphone_photographic",name:"iPhone Photography"},{id:"photo-long_exposure",name:"Long Exposure"},{id:"photo-neon_noir",name:"Neon Noir"},{id:"pixel_art",name:"Pixel Art"},{id:"studio_ghibli",name:"Studio Ghibli"}],l=["/examples/1.jpeg","/examples/2.jpeg","/examples/3.png","/examples/4.png","/examples/5.png","/examples/6.png","/examples/7.jpeg","/examples/8.jpeg","/examples/9.jpg","/examples/10.jpg","/examples/11.jpg","/examples/12.jpeg","/examples/13.webp","/examples/14.webp","/examples/15.webp","/examples/16.webp","/examples/17.webp","/examples/18.webp"],c=e=>"?"+Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&"),d=()=>{let[e,t]=(0,o.useState)(""),a=!0,i=(a=window.innerWidth>500)?500:300,r=a?450:270,[d,u]=(0,o.useState)(""),[m,p]=(0,o.useState)(l),[h,f]=(0,o.useState)(s),[g,b]=(0,o.useState)("anime"),[y,x]=(0,o.useState)({loading:!1,text:"",error:""});(0,o.useEffect)(()=>{_()},[]);let _=()=>{fetch("https://studio.api.memedeck.xyz/api/styles").then(e=>e.json()).then(e=>{f(e)})},j=(e,t)=>{if(t>0){let n=new Image;n.crossOrigin="anonymous";let o=document.getElementById("canvas"),s=null==o?void 0:o.getContext("2d");n.src=e,s&&n.addEventListener("load",()=>{s.drawImage(n,0,0,1024,921.6,0,0,i,r),s.font="".concat(a?15:12,'px "Luckiest Guy"'),s.strokeStyle="rgba(0,0,0)",s.strokeText("$LOOK",i-(a?65:50),r-(a?12:8)),s.fillStyle="rgba(255,255,255,0.8)",s.fillText("$LOOK",i-(a?64.5:49.5),r-(a?11.5:7.5)),s.lineWidth=1,setTimeout(()=>j(e,t-1),300)})}},k=e=>{document.getElementById("canvas"),fetch("https://looksolana.com/api/1/upload".concat(c({source:e,title:"Generated on Website"})),{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":"chv_pEj_d91362e99dbc6374f4be5ebc94faa6cc2473891892e5e8b35b3dea7d100c3e9ab5b1caaf1e56ae782488f420216d6c1626e9a52b49a43215a87ecebc80be60d8"}})},v=e=>{fetch("https://studio.api.memedeck.xyz/api/generate/image/"+e,{method:"GET",headers:{"Content-Type":"application/json","X-Memedeck-API-Key":"0bWCJT2XKXVnFCcxO0xjC6E4iXLL3J0H","X-Memedeck-Deck-Id":"deck:37daa27e_379e_4436_8c57_d4ae5724b848"}}).then(e=>e.json()).then(t=>{if("processing"===t.status)setTimeout(()=>v(e),4e3);else if("complete"===t.status){let e=t.image.url;k(e),x({loading:!1,text:"Look bro, what do you think?"}),p(t=>{let a=[...t];return a.pop(),a.unshift(e),a}),j(e,2),u(e)}else x({loading:!1,error:"Error occurred."})})},w=async()=>{if(!e.length)return x({loading:!1,error:"Enter a prompt."});x({loading:!0,text:"Loading..."}),await fetch("https://studio.api.memedeck.xyz/api/generate/image",{method:"POST",headers:{"Content-Type":"application/json","X-Memedeck-API-Key":"0bWCJT2XKXVnFCcxO0xjC6E4iXLL3J0H","X-Memedeck-Deck-Id":"deck:37daa27e_379e_4436_8c57_d4ae5724b848"},body:JSON.stringify({aspect_ratio:"square",character:"look",prompt:e,style:g})}).then(e=>e.json()).then(e=>{x({loading:!0,text:"Processing..."}),"error"===e.result?x({loading:!1,error:"Error occurred: "+e.reason}):v(e.prompt_id)})};return(0,n.jsxs)("main",{children:[(0,n.jsxs)("ul",{className:"header-links",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://looksolana.com/",children:" Home "})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://x.com/look_solana",children:" X (Twitter) "})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://tiktok.com/@look_solana",children:" Tiktok "})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"http://t.me/LOOK_officialTG",children:" Telegram "})})]}),(0,n.jsxs)("div",{className:"LOOK_app",children:[(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{children:"Generate your own $LOOK meme"}),(0,n.jsx)("p",{}),(0,n.jsx)("label",{children:"Describe your meme with a short prompt."}),(0,n.jsx)("textarea",{className:"styled-textarea",value:e,style:{borderColor:"Enter a prompt."===y.error?"red":"#ddd",width:"".concat(i,"px"),minHeight:"".concat(500===i?100:130,"px")},required:!0,onChange:e=>t(e.target.value),placeholder:"Main character is Donald Trump. Second character is Elon Musk. Third character on the background is Joe Biden. Background is a sunny day, main character is smiling."}),y.error&&(0,n.jsx)("p",{style:{color:"red"},children:y.error}),(0,n.jsx)("p",{}),(0,n.jsx)("label",{children:"Select a style"}),(0,n.jsx)("select",{className:"styled-select",onChange:e=>{b(e.target.value)},style:{width:"".concat(i,"px")},value:g,name:"inp-style",id:"inp-style",children:h.map(e=>{let{id:t,name:a}=e;return(0,n.jsx)("option",{value:t,children:a},t)})}),(0,n.jsx)("p",{}),(0,n.jsx)("button",{disabled:y.loading,className:"styled-button",onClick:w,children:"Generate"}),(0,n.jsx)("p",{children:" Your output will be displayed below."}),(0,n.jsx)("label",{children:y.text}),d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"styled-button success",onClick:()=>{let e=document.createElement("a");e.download="look_meme.png",e.href=document.getElementById("canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),e.click()},children:"Download"}),(0,n.jsx)("br",{})]}),(0,n.jsx)("canvas",{id:"canvas",width:i,height:r})]}),(0,n.jsxs)("div",{className:"past-nine",children:[(0,n.jsx)("p",{children:"Example outputs (18)"}),(0,n.jsx)("div",{className:"images_wrapper",style:{maxWidth:i},children:m.map((e,t)=>e?(0,n.jsx)("img",{src:e},e):(0,n.jsx)("div",{className:"img-placeholder linear-background"},t))})]})]})]})},u=r()(()=>Promise.resolve(d),{ssr:!1})},6645:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=a(8229)._(a(7357));function i(e,t){var a;let i={};"function"==typeof e&&(i.loader=e);let r={...i,...t};return(0,n.default)({...r,modules:null==(a=r.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7357:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=a(5155),i=a(2115),r=a(2146);function o(e){return{default:e&&"default"in e?e.default:e}}a(255);let s={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},l=function(e){let t={...s,...e},a=(0,i.lazy)(()=>t.loader().then(o)),l=t.loading;function c(e){let o=l?(0,n.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,c=s?i.Suspense:i.Fragment,d=t.ssr?(0,n.jsxs)(n.Fragment,{children:[null,(0,n.jsx)(a,{...e})]}):(0,n.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(a,{...e})});return(0,n.jsx)(c,{...s?{fallback:o}:{},children:d})}return c.displayName="LoadableComponent",c}},7828:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,a(4054).createAsyncLocalStorage)()},9513:(e,t,a)=>{Promise.resolve().then(a.bind(a,6036))}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(9513)),_N_E=e.O()}]);