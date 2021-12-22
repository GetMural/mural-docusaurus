"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[938],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1465:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>p});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"metadata",title:"Story Metadata",sidebar_label:"Metadata"},s=void 0,c={unversionedId:"metadata",id:"metadata",title:"Story Metadata",description:"The metadata screen is where the information that describes the story to external sources is presented. This information is important to search engines and social media platforms as this is where the short description and image you see on Google and Facebook or Twitter comes from. It is also where you can add your Google Analytics identification number if you want.",source:"@site/../docs/meta.md",sourceDirName:".",slug:"/metadata",permalink:"/docs/metadata",tags:[],version:"current",lastUpdatedBy:"Edouard",lastUpdatedAt:1625638983,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"metadata",title:"Story Metadata",sidebar_label:"Metadata"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Background Video",permalink:"/docs/backgroundvideo"}},u=[{value:"Title",id:"title",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Author",id:"author",children:[],level:3},{value:"Canonical URL",id:"canonical-url",children:[],level:3},{value:"Site Name",id:"site-name",children:[],level:3},{value:"Site Image",id:"site-image",children:[],level:3}],d={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The metadata screen is where the information that describes the story to external sources is presented. This information is important to search engines and social media platforms as this is where the short description and image you see on Google and Facebook or Twitter comes from. It is also where you can add your Google Analytics identification number if you want."),(0,o.kt)("p",null,"If these fields are left blank they won't be output in the final build of your Mural story."),(0,o.kt)("p",null,"Each of the items in the Meta Information editor panel relates to the following final output of your Mural story."),(0,o.kt)("h3",{id:"title"},"Title"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<title>Sample story: Searching for Spring in Stromovka</title>\n")),(0,o.kt)("p",null,"The title metadata field is also responsible for the ",(0,o.kt)("inlineCode",{parentName:"p"},"og")," (Open Graph) ",(0,o.kt)("inlineCode",{parentName:"p"},"og:title")," property which is used by social media platforms such as Facebook and Twitter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta\n  property="og:title"\n  content="Sample story: Searching for Spring in Stromovka"\n/>\n')),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The description metadata field is where you should describe your Mural story in between 120 to 158 characters. This length may seem arbitrary (and in some ways it is) - but this is ideal length of a string of text when displayed by search engines likesuch as Google or Duck Duck Go and Social media platforms such as Facebook, Twitter, or Mastodon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta\n  name="description"\n  content="Prague\'s Stromovka park is one of its biggest. A former royal hunting ground, the park now features a number of ways to relax and enjoy the outdoors."\n/>\n')),(0,o.kt)("p",null,"The description metadata field is also responsible for the ",(0,o.kt)("inlineCode",{parentName:"p"},"og:description")," output in your final Mural story."),(0,o.kt)("h3",{id:"author"},"Author"),(0,o.kt)("p",null,"The author field is where the author of the Mural story's name is entered."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="author" content="Douglas Arellanes" />\n')),(0,o.kt)("h3",{id:"canonical-url"},"Canonical URL"),(0,o.kt)("p",null,"If you know the final website address of your Mural story then this is where to enter that information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta\n  property="og:url"\n  content="https://s3.eu-central-1.amazonaws.com/muralsoftware/test_stories/spring_sample_story/index.html"\n/>\n')),(0,o.kt)("h3",{id:"site-name"},"Site Name"),(0,o.kt)("p",null,"What is the name of your Mural story? Although they are often the same this does not have to be identical to the title metadata information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta property="og:site_name" content="Mural" />\n')),(0,o.kt)("h3",{id:"site-image"},"Site Image"),(0,o.kt)("p",null,"This is where you should upload an image to represent your Mural story when it is displayed on social media platforms such as Facebook, Twitter, or Mastodon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta\n  property="og:image"\n  content="https://s3.eu-central-1.amazonaws.com/muralsoftware/test_stories/spring_sample_story/uploads/purple_flowers_thumbnail.jpg"\n/>\n')))}p.isMDXComponent=!0}}]);