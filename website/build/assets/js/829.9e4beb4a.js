"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=s(n),d=o,m=y["".concat(i,".").concat(d)]||y[d]||u[d]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9649:(e,t,n)=>{n.d(t,{N:()=>y,Z:()=>d});var r=n(3366),o=n(7462),l=n(7294),a=n(6010),c=n(5999),i=n(3616);const s="anchorWithStickyNavbar_y2LR",p="anchorWithHideOnScrollNavbar_3ly5";var u=["id"],y=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,o.Z)({},t,{id:void 0}),t.children))};const d=function(e){return"h1"===e?y:(t=e,function(e){var n,y=e.id,d=(0,r.Z)(e,u),m=(0,i.LU)().navbar.hideOnScroll;return y?l.createElement(t,(0,o.Z)({},d,{className:(0,a.Z)("anchor",(n={},n[p]=m,n[s]=!m,n)),id:y}),d.children,l.createElement("a",{className:"hash-link",href:"#"+y,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},7707:(e,t,n)=>{n.d(t,{Z:()=>B});var r=n(7462),o=n(3366),l=n(7294),a=n(2859),c=n(9960),i=n(6010);const s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var p={Prism:n(7410).default,theme:s};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=y({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=y({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=y({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?y({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(c))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=y({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?y({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),u(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,c=[],i=[c];a>-1;){for(;(l=r[a]++)<o[a];){var s=void 0,p=t[a],u=n[a][l];if("string"==typeof u?(p=a>0?p:["plain"],s=u):(p=f(p,u.type),u.alias&&(p=f(p,u.alias)),s=u.content),"string"==typeof s){var y=s.split(d),h=y.length;c.push({types:p,content:y[0]});for(var g=1;g<h;g++)m(c),i.push(c=[]),c.push({types:p,content:y[g]})}else a++,t.push(p),n.push(s),r.push(0),o.push(s.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return m(c),i}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component);var b=n(5999),k=n(3616);const E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var O=n(5350);const T=function(){var e=(0,k.LU)().prism,t=(0,O.Z)().isDarkTheme,n=e.theme||E,r=e.darkTheme||n;return t?r:n},Z="codeBlockContainer_J+bg",j="codeBlockContent_csEI",N="codeBlockTitle_oQzk",P="codeBlock_rtdJ",C="copyButton_M3SB",S="codeBlockLines_1zSZ";function w(e){var t,n=e.children,o=e.className,a=e.metastring,c=e.title,s=(0,k.LU)().prism,u=(0,l.useState)(!1),y=u[0],d=u[1],m=(0,l.useState)(!1),f=m[0],h=m[1];(0,l.useEffect)((function(){h(!0)}),[]);var g=(0,k.bc)(a)||c,E=T(),O=Array.isArray(n)?n.join(""):n,w=null!=(t=(0,k.Vo)(o))?t:s.defaultLanguage,x=(0,k.nZ)(O,a,w),L=x.highlightLines,D=x.code,_=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),l=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),l&&l.focus()}(D),d(!0),setTimeout((function(){return d(!1)}),2e3)};return l.createElement(v,(0,r.Z)({},p,{key:String(f),theme:E,code:D,language:w}),(function(e){var t=e.className,n=e.style,a=e.tokens,c=e.getLineProps,s=e.getTokenProps;return l.createElement("div",{className:(0,i.Z)(Z,o,k.kM.common.codeBlock)},g&&l.createElement("div",{style:n,className:N},g),l.createElement("div",{className:(0,i.Z)(j,w)},l.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,P,"thin-scrollbar"),style:n},l.createElement("code",{className:S},a.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=c({line:e,key:t});return L.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return l.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})),l.createElement("br",null))})))),l.createElement("button",{type:"button","aria-label":(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(C,"clean-btn"),onClick:_},y?l.createElement(b.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(b.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var x=n(9649);const L="details_h+cY";function D(e){var t=Object.assign({},e);return l.createElement(k.PO,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",L,t.className)}))}var _=["mdxType","originalType"];const B={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,a=(r.mdxType,r.originalType,(0,o.Z)(r,_));return l.createElement(e.props.originalType,a)}return e}(e)}));return l.createElement(a.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(w,e):l.createElement("code",e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(w,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(D,(0,r.Z)({},e,{summary:n}),o)},h1:(0,x.Z)("h1"),h2:(0,x.Z)("h2"),h3:(0,x.Z)("h3"),h4:(0,x.Z)("h4"),h5:(0,x.Z)("h5"),h6:(0,x.Z)("h6")}}}]);