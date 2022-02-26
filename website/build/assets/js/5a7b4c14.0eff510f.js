"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7428],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=i,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(b,a(a({ref:t},c),{},{components:o})):n.createElement(b,a({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3150:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>p});var n=o(7462),i=o(3366),r=(o(7294),o(3905)),a=["components"],l={id:"embed",title:"The Embed Video Mural Item",sidebar_label:"Embed Video"},s=void 0,d={unversionedId:"embed",id:"embed",title:"The Embed Video Mural Item",description:"A Video Embed item sets a video from YouTube, Vimeo or Daily Motion to play in a full frame in a Mural story. Playback is triggered automatically by scrolling down into the item, or by the user clicking on the embed video's playback controls.",source:"@site/../docs/EmbedVideo.md",sourceDirName:".",slug:"/embed",permalink:"/docs/embed",tags:[],version:"current",lastUpdatedBy:"Naomi Aro",lastUpdatedAt:1641283319,formattedLastUpdatedAt:"1/4/2022",frontMatter:{id:"embed",title:"The Embed Video Mural Item",sidebar_label:"Embed Video"},sidebar:"docs",previous:{title:"Vertical Slideshow",permalink:"/docs/verticalslideshow"},next:{title:"What is web monetization?",permalink:"/docs/webmonetization"}},c=[{value:"Embed Link",id:"embed-link",children:[],level:2},{value:"Options",id:"options",children:[{value:"Show controls",id:"show-controls",children:[],level:3},{value:"Auto-advance",id:"auto-advance",children:[],level:3}],level:2}],u={toc:c};function p(e){var t=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Video Embed item sets a video from YouTube, Vimeo or Daily Motion to play in a full frame in a Mural story. Playback is triggered automatically by scrolling down into the item, or by the user clicking on the embed video's playback controls."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mural&#39;s embed Youtube video on phone",src:o(605).Z,title:"Mural's embed Youtube video on phone"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mural&#39;s embed Youtube video on tablet",src:o(7395).Z,title:"Mural's embed Youtube video on tablet"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mural&#39;s embed Youtube video on desktop",src:o(1329).Z,title:"Mural's embed Youtube video on desktop"})),(0,r.kt)("h2",{id:"embed-link"},"Embed Link"),(0,r.kt)("p",null,"The URL of the YouTube, Vimeo or Daily Motion video. The Embed Video item uses the entire URL. IF the URL is read correctly, a preview of the video will appear below the Embed Link field."),(0,r.kt)("p",null,"Ex."),(0,r.kt)("p",null,"Youtube: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.youtube.com/watch?v=aI7B74zpqqI")),(0,r.kt)("p",null,"Vimeo: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://vimeo.com/651937446")),(0,r.kt)("p",null,"Daily Motion: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.dailymotion.com/video/x86r6yq")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"show-controls"},"Show controls"),(0,r.kt)("p",null,"When this switch is selected, the video platform\u2019s controls (for things like play/pause, share and timeline) are visible. When the switch is off, only the minimum controls required by the video platform are displayed."),(0,r.kt)("h3",{id:"auto-advance"},"Auto-advance"),(0,r.kt)("p",null,"When this switch is selected, the item will automatically scroll to the next item when the video playback is finished."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Certain YouTube videos - especially music videos managed by Vevo - are not allowed to be used outside the YouTube site. This is specified by the video\u2019s copyright holder and is outside our control. In such an event YouTube will display an error and you will have to use another piece of content for your story."))}p.isMDXComponent=!0},1329:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Youtube-desktop-47446603296d5acd9ef876ca1102ef0e.png"},605:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Youtube-phone-489e6a9fba7fccba445b399b39019b14.png"},7395:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Youtube-tablet-1b3f1da21f989bbf3b2602c6452c0f4e.png"}}]);