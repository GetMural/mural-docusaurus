"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>p});var o=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,l=function(e,t){if(null==e)return{};var i,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},h=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=d(i),p=l,m=u["".concat(s,".").concat(p)]||u[p]||c[p]||r;return i?o.createElement(m,n(n({ref:t},h),{},{components:i})):o.createElement(m,n({ref:t},h))}));function p(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,n=new Array(r);n[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,n[1]=a;for(var d=2;d<r;d++)n[d]=i[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9805:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>d,toc:()=>h,default:()=>u});var o=i(7462),l=i(3366),r=(i(7294),i(3905)),n=["components"],a={id:"horizontalslideshow",title:"The Horizontal Slideshow Mural Item",sidebar_label:"Horizontal Slideshow"},s=void 0,d={unversionedId:"horizontalslideshow",id:"horizontalslideshow",title:"The Horizontal Slideshow Mural Item",description:"A Horizontal slideshow item refers to a collection of images that can be displayed in a slideshow with controls on the left and right, and where the images advance horizontally when a user clicks on the control.",source:"@site/../docs/HorizontalSlideshow.md",sourceDirName:".",slug:"/horizontalslideshow",permalink:"/docs/2.0.0/horizontalslideshow",tags:[],version:"current",lastUpdatedBy:"Douglas Arellanes",lastUpdatedAt:1641141577,formattedLastUpdatedAt:"1/2/2022",frontMatter:{id:"horizontalslideshow",title:"The Horizontal Slideshow Mural Item",sidebar_label:"Horizontal Slideshow"},sidebar:"docs",previous:{title:"Fullpage Video",permalink:"/docs/2.0.0/fullpagevideo"},next:{title:"Image Audio",permalink:"/docs/2.0.0/imageaudio"}},h=[{value:"Slideshow Title",id:"slideshow-title",children:[],level:2},{value:"Navigation",id:"navigation",children:[],level:2},{value:"Items",id:"items",children:[{value:"Upload image",id:"upload-image",children:[],level:3},{value:"Slide title",id:"slide-title",children:[],level:3},{value:"Slide credits",id:"slide-credits",children:[],level:3},{value:"Image alt text",id:"image-alt-text",children:[],level:3}],level:2}],c={toc:h};function u(e){var t=e.components,a=(0,l.Z)(e,n);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Horizontal slideshow item refers to a collection of images that can be displayed in a slideshow with controls on the left and right, and where the images advance horizontally when a user clicks on the control."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mural&#39;s Horizontal Slideshow item on phone",src:i(8018).Z,title:"Mural's Horizontal Slideshow item on phone"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mural&#39;s Horizontal Slideshow item on tablet",src:i(46).Z,title:"Mural's Horizontal Slideshow item on tablet"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mural&#39;s Horizontal Slideshow item on desktop",src:i(6719).Z,title:"Mural's Horizontal Slideshow item on desktop"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Add item")," Clicking this button adds another slide to the slideshow. You can have as many slides in the slideshow as you want. For optimal results long slideshows are discouraged as currently all images for a slideshow are bulk loaded as a set."),(0,r.kt)("h2",{id:"slideshow-title"},"Slideshow Title"),(0,r.kt)("p",null,"This is for the title of the entire slideshow."),(0,r.kt)("h2",{id:"navigation"},"Navigation"),(0,r.kt)("p",null,"This is where you write the text you want to appear in the story's navigation menu."),(0,r.kt)("h2",{id:"items"},"Items"),(0,r.kt)("h3",{id:"upload-image"},"Upload image"),(0,r.kt)("p",null,"This is where you select the image to be uploaded. Images can be in common formats such as .gif and .jpg. Images for the slideshows must be uploaded from your computer's file system - you cannot use image URLs in the horizontal slideshow."),(0,r.kt)("h3",{id:"slide-title"},"Slide title"),(0,r.kt)("p",null,"This is where you write the text for the individual slide. "),(0,r.kt)("h3",{id:"slide-credits"},"Slide credits"),(0,r.kt)("p",null,"This is where you write the text for the image credit, should you choose to use it."),(0,r.kt)("h3",{id:"image-alt-text"},"Image alt text"),(0,r.kt)("p",null,"This is where you write the alt text for the individual slide."),(0,r.kt)("p",null,"The width in pixels of each breakpoint of a Mural story window are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"768px"),(0,r.kt)("li",{parentName:"ul"},"992px"),(0,r.kt)("li",{parentName:"ul"},"1200px")))}u.isMDXComponent=!0},6719:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/HorizontalSlideshow-desktop-83840371442902508f551d224bdb9478.png"},8018:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/HorizontalSlideshow-phone-127c0e0a580621dc2783f11e5a266436.png"},46:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/HorizontalSlideshow-tablet-5279a3249774bfbbe014ae6becc41e83.png"}}]);