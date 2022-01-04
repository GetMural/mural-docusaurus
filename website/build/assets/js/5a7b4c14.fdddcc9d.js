"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7428],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return o?r.createElement(b,a(a({ref:t},d),{},{components:o})):r.createElement(b,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3150:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>p});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],l={id:"embed",title:"The Embed Video Mural Item",sidebar_label:"Embed Video"},s=void 0,u={unversionedId:"embed",id:"embed",title:"The Embed Video Mural Item",description:"A Video Embed item sets a video from YouTube, Vimeo or Daily Motion to play in a full frame in a Mural story. Playback is triggered automatically by scrolling down into the item, or by the user clicking on the YouTube \u201cplay\u201d button in the center of the video.",source:"@site/../docs/EmbedVideo.md",sourceDirName:".",slug:"/embed",permalink:"/docs/2.0.0/embed",tags:[],version:"current",frontMatter:{id:"embed",title:"The Embed Video Mural Item",sidebar_label:"Embed Video"},sidebar:"docs",previous:{title:"Vertical Slideshow",permalink:"/docs/2.0.0/verticalslideshow"},next:{title:"Image Workflow",permalink:"/docs/2.0.0/image-workflow"}},d=[{value:"Embed Link",id:"embed-link",children:[],level:2},{value:"Options",id:"options",children:[{value:"Show controls",id:"show-controls",children:[],level:3},{value:"Auto-advance",id:"auto-advance",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,l=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Video Embed item sets a video from YouTube, Vimeo or Daily Motion to play in a full frame in a Mural story. Playback is triggered automatically by scrolling down into the item, or by the user clicking on the YouTube \u201cplay\u201d button in the center of the video."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mural&#39;s Youtube item on phone",src:o(605).Z,title:"Mural's Youtube item on phone"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mural&#39;s Youtube item on tablet",src:o(7395).Z,title:"Mural's Youtube item on tablet"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mural&#39;s Youtube item on desktop",src:o(1329).Z,title:"Mural's Youtube item on desktop"})),(0,i.kt)("h2",{id:"embed-link"},"Embed Link"),(0,i.kt)("p",null,"The URL of the YouTube, Vimeo or Daily Motion video. The Embed Video item uses the entire URL. IF the URL is read correctly, a preview of the video will appear below the Embed Link field."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"show-controls"},"Show controls"),(0,i.kt)("p",null,"When this switch is selected, the video platform\u2019s controls (for things like play/pause, share and timeline) are visible. When the switch is off, only the minimum controls required by the video platform are displayed."),(0,i.kt)("h3",{id:"auto-advance"},"Auto-advance"),(0,i.kt)("p",null,"When this switch is selected, the item will automatically scroll to the next item when the video playback is finished.\n",(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Certain YouTube videos - especially music videos managed by Vevo - are not allowed to be used outside the YouTube site. This is specified by the video\u2019s copyright holder and is outside our control. In such an event YouTube will display an error and you will have to use another piece of content for your story."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:o(6540).Z,title:"Mural's Youtube item"})))}p.isMDXComponent=!0},1329:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Youtube-desktop-47446603296d5acd9ef876ca1102ef0e.png"},605:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Youtube-phone-489e6a9fba7fccba445b399b39019b14.png"},7395:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Youtube-tablet-1b3f1da21f989bbf3b2602c6452c0f4e.png"},6540:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/youtube_editor-20ff40706ddb10878971da0ddd328a1d.png"}}]);