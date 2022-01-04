"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9989],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var l=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=c(i),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return i?l.createElement(h,o(o({ref:t},d),{},{components:i})):l.createElement(h,o({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:r,o[1]=n;for(var c=2;c<a;c++)o[c]=i[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}u.displayName="MDXCreateElement"},423:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>n,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>u});var l=i(7462),r=i(3366),a=(i(7294),i(3905)),o=["components"],n={id:"verticalslideshow",title:"The Vertical Slideshow Mural Item",sidebar_label:"Vertical Slideshow"},s=void 0,c={unversionedId:"verticalslideshow",id:"version-0.4.0/verticalslideshow",title:"The Vertical Slideshow Mural Item",description:'A Vertical slideshow item refers to a collection of images with captions that can be scrolled through in a set - each slide "sticking" to the top of the screen until the following slide replaces it.',source:"@site/versioned_docs/version-0.4.0/VerticalSlideshow.md",sourceDirName:".",slug:"/verticalslideshow",permalink:"/docs/0.4.0/verticalslideshow",tags:[],version:"0.4.0",lastUpdatedBy:"Naomi Aro",lastUpdatedAt:1640890617,formattedLastUpdatedAt:"12/30/2021",frontMatter:{id:"verticalslideshow",title:"The Vertical Slideshow Mural Item",sidebar_label:"Vertical Slideshow"},sidebar:"docs",previous:{title:"Image Parallax",permalink:"/docs/0.4.0/imageparallax"},next:{title:"Youtube",permalink:"/docs/0.4.0/youtube"}},d=[{value:"Title",id:"title",children:[],level:2},{value:"Credits",id:"credits",children:[],level:2},{value:"Image Sources",id:"image-sources",children:[{value:"Small image",id:"small-image",children:[],level:3},{value:"Medium image",id:"medium-image",children:[],level:3},{value:"Large image",id:"large-image",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'A Vertical slideshow item refers to a collection of images with captions that can be scrolled through in a set - each slide "sticking" to the top of the screen until the following slide replaces it.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mural&#39;s Vertical Slideshow item on phone",src:i(1413).Z,title:"Mural's Vertical Slideshow item on phone"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mural&#39;s Vertical Slideshow item on tablet",src:i(5546).Z,title:"Mural's Vertical Slideshow item on tablet"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mural&#39;s Vertical Slideshow item on desktop",src:i(5927).Z,title:"Mural's Vertical Slideshow item on desktop"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Slide [+]")," Clicking this adds another slide to the slideshow. You can have as many slides in the slideshow as you want. For optimal results large slideshows are discouraged as currently all images for a slideshow are bulk loaded as a set."),(0,a.kt)("h2",{id:"title"},"Title"),(0,a.kt)("p",null,"This is for the title of the individual slide"),(0,a.kt)("h2",{id:"credits"},"Credits"),(0,a.kt)("p",null,"This is for the image credit"),(0,a.kt)("h2",{id:"image-sources"},"Image Sources"),(0,a.kt)("h3",{id:"small-image"},"Small image"),(0,a.kt)("p",null,"This image is for display on mobile. The small image works best at 1080 x 1920. (mobile portrait)"),(0,a.kt)("h3",{id:"medium-image"},"Medium image"),(0,a.kt)("p",null,"This image will be for display on older computers with lower-resolution screens or tablets. The medium image works best at 768 x 1024. (tablet portrait)"),(0,a.kt)("h3",{id:"large-image"},"Large image"),(0,a.kt)("p",null,"This image will be for display on large and high-resolution screens. The large image works best at 1920 x 1080. (desktop landscape)"),(0,a.kt)("p",null,"The width in pixels of each breakpoint of a Mural story window are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"768px"),(0,a.kt)("li",{parentName:"ul"},"992px"),(0,a.kt)("li",{parentName:"ul"},"1200px")))}u.isMDXComponent=!0},5927:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/VerticalSlideshow-desktop-a05c31d1d650b93b628c80881c94a92c.png"},1413:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/VerticalSlideshow-phone-3ad2e452d5c0d4a2957f037325c5bff9.png"},5546:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/VerticalSlideshow-tablet-fc3d03688cde698d5a3f3f1c3de678be.png"}}]);