"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7210],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=o.createContext({}),s=function(e){var t=o.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(a),p=i,h=m["".concat(u,".").concat(p)]||m[p]||c[p]||n;return a?o.createElement(h,l(l({ref:t},d),{},{components:a})):o.createElement(h,l({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2272:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>u,metadata:()=>s,toc:()=>d,default:()=>m});var o=a(7462),i=a(3366),n=(a(7294),a(3905)),l=["components"],r={id:"imagebackground",title:"The Image Background Mural Item",sidebar_label:"Image Background"},u=void 0,s={unversionedId:"imagebackground",id:"imagebackground",title:"The Image Background Mural Item",description:"An Image Background item has a still image that takes up the entire screen, but which has title, subtitle, and body text over it as well as the possibility for looping audio. An Image Background item's image remains unmoving when a user scrolls until all of the text has scrolled. Then the story advances to the next item.",source:"@site/../docs/ImageBackground.md",sourceDirName:".",slug:"/imagebackground",permalink:"/docs/imagebackground",tags:[],version:"current",lastUpdatedBy:"Douglas Arellanes",lastUpdatedAt:1641146231,formattedLastUpdatedAt:"1/2/2022",frontMatter:{id:"imagebackground",title:"The Image Background Mural Item",sidebar_label:"Image Background"},sidebar:"docs",previous:{title:"Image Audio",permalink:"/docs/imageaudio"},next:{title:"Parallax Image",permalink:"/docs/imageparallax"}},d=[{value:"Upload image",id:"upload-image",children:[],level:2},{value:"Full page layout",id:"full-page-layout",children:[],level:2},{value:"Title",id:"title",children:[],level:2},{value:"Subtitle",id:"subtitle",children:[],level:2},{value:"Position body text",id:"position-body-text",children:[],level:2},{value:"Text",id:"text",children:[],level:2},{value:"Navigation",id:"navigation",children:[],level:2},{value:"Image alt text",id:"image-alt-text",children:[],level:2},{value:"Choose audio",id:"choose-audio",children:[{value:"Loop",id:"loop",children:[],level:3}],level:2}],c={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An Image Background item has a still image that takes up the entire screen, but which has title, subtitle, and body text over it as well as the possibility for looping audio. An Image Background item's image remains unmoving when a user scrolls until all of the text has scrolled. Then the story advances to the next item."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mural&#39;s Image Background item on phone",src:a(2372).Z,title:"Mural's Image Background item on phone"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mural&#39;s Image Background item on tablet",src:a(8803).Z,title:"Mural's Image Background item on tablet"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mural&#39;s Image Background item on desktop",src:a(1498).Z,title:"Mural's Image Background item on desktop"})),(0,n.kt)("h2",{id:"upload-image"},"Upload image"),(0,n.kt)("p",null,"Clicking this button allows you to select the image you want to use from your computer's file system. Images can be in common formats such as .jpg, .png, or .gif. The image will be enlarged to fit the width of the window. You cannot use a URL for your image file."),(0,n.kt)("h2",{id:"full-page-layout"},"Full page layout"),(0,n.kt)("p",null,"This checkbox determines whether the final Mural story output will be more focused upon the image or the text. If the element is checked, then your text will be forced towards the bottom of the Mural story window to allow more space for the image."),(0,n.kt)("h2",{id:"title"},"Title"),(0,n.kt)("p",null,"This is what you would like the title of the Mural story output of this editor pane to display."),(0,n.kt)("h2",{id:"subtitle"},"Subtitle"),(0,n.kt)("p",null,"This is the subtitle that displays under the main Mural story output of this editor pane."),(0,n.kt)("h2",{id:"position-body-text"},"Position body text"),(0,n.kt)("p",null,"Depending on the composition of your image, you may want to position your text on the left, center or right of the screen. Checking one of these buttons will align the text items accordingly. By default, the body text is aligned to the left."),(0,n.kt)("h2",{id:"text"},"Text"),(0,n.kt)("p",null,"This is the main text of the Mural story output of this editor pane. It is in rich text and can be formatted to include links, bold, italicised, and other text modifications."),(0,n.kt)("h2",{id:"navigation"},"Navigation"),(0,n.kt)("p",null,"This is what the name of this view output will be called in the Mural story navigation menu. This does not have to be the same as the title.\nNavigation is not a mandatory field and it can be left blank (not recommended) but it can also be supressed from the navigation (recommended if the field is blank)."),(0,n.kt)("h2",{id:"image-alt-text"},"Image alt text"),(0,n.kt)("p",null,"Type the alt text you want for your image here."),(0,n.kt)("h2",{id:"choose-audio"},"Choose audio"),(0,n.kt)("p",null,"This button enables you to upload an audio file to play in the background of your image. The audio will play until the user navigates away from the item. Files must be uploaded from your computer's file system - you cannot use a URL for your audio file."),(0,n.kt)("h3",{id:"loop"},"Loop"),(0,n.kt)("p",null,"Checking this box sets the audio to play on a loop. The audio will play until the user navigates away from the item."))}m.isMDXComponent=!0},1498:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ImageBackground-desktop-fd344033be7520cf2a8f1095e40713de.png"},2372:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ImageBackground-phone-d87afc2f476fac27c3f638e8e6850536.png"},8803:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ImageBackground-tablet-bad22b7a4f5e4fe9e743dbdf2d47b246.png"}}]);