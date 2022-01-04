"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1002],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=h(o),c=n,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||r;return o?a.createElement(m,s(s({ref:t},u),{},{components:o})):a.createElement(m,s({ref:t},u))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var h=2;h<r;h++)s[h]=o[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3172:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>h,assets:()=>u,toc:()=>d,default:()=>c});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),s=["components"],i={title:"What We've Learned Making Mural",author:"Douglas Arellanes",authorURL:"https://twitter.com/dougiegyro"},l=void 0,h={permalink:"/blog/2018/06/04/what-we-learned",source:"@site/blog/2018-06-04-what-we-learned.md",title:"What We've Learned Making Mural",description:"Mural is a tool for creating visual longform stories. The Mural software is marking its official launch this week, and it\u2019s been a pleasure to work on it as with the support of the Google Digital News Initiative\u2019s Prototype Fund. As our project is open source (AGPL), we figured that it would be good to extend our transparency and share with you some of the things we\u2019ve learned along the way.",date:"2018-06-04T00:00:00.000Z",formattedDate:"June 4, 2018",tags:[],readingTime:9.775,truncated:!0,authors:[{name:"Douglas Arellanes",url:"https://twitter.com/dougiegyro"}],prevItem:{title:"Mural at Mozfest 2019",permalink:"/blog/2019/10/27/mozfest-2019"},nextItem:{title:"Introducing Mural",permalink:"/blog/2017/07/06/introducing-mural"}},u={authorsImageUrls:[void 0]},d=[{value:"Lesson 1: Get out of the CMS",id:"lesson-1-get-out-of-the-cms",children:[],level:3},{value:"Lesson 2: Focus on sequence",id:"lesson-2-focus-on-sequence",children:[],level:3},{value:"Lesson 4: Simple things done well",id:"lesson-4-simple-things-done-well",children:[],level:3},{value:"Lesson 5: Listening to and watching our users",id:"lesson-5-listening-to-and-watching-our-users",children:[],level:3},{value:"Lesson 6: Trust the community",id:"lesson-6-trust-the-community",children:[],level:3}],p={toc:d};function c(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mural is a tool for creating visual longform stories. The ",(0,r.kt)("a",{parentName:"p",href:"https://www.getmural.io/"},"Mural software is marking its official launch this week"),", and it\u2019s been a pleasure to work on it as with the support of the Google Digital News Initiative\u2019s Prototype Fund. As our project is open source (AGPL), we figured that it would be good to extend our transparency and share with you some of the things we\u2019ve learned along the way."),(0,r.kt)("p",null,"A lot of this is technical, but as Father John Culkin once wrote about Marshall McLuhan\u2019s philosophy, \u201cWe shape our tools, and thereafter they shape us.\u201d The decisions we made in making Mural, and what we\u2019ve learned in the process, might provide helpful insights for others making and using storytelling tools, as well as for those interested in how Mural was created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Mural\u2019s UI as of version 0.2.3",src:o(5907).Z})),(0,r.kt)("h3",{id:"lesson-1-get-out-of-the-cms"},"Lesson 1: Get out of the CMS"),(0,r.kt)("p",null,"Traditional content management systems (CMSes) are great at a lot of things \u2014 they do a lot and do so stably. But one of the areas of greatest disappointment we\u2019ve had has always been the way they work with visual content \u2014 the furthest most CMSes will go is to create a slideshow or embed media such as a video."),(0,r.kt)("p",null,"It\u2019s 2018. We have cars that drive themselves, but the best visuals we get on web pages are slideshows. Something is wrong here."),(0,r.kt)("p",null,"We made Mural as a specific tool for a specific purpose: To present visual content with maximum impact. How we decided to achieve this turned out to be a very interesting exercise."),(0,r.kt)("p",null,"Mural had its start as a visual theme for a CMS called Newscoop, but to get it to work, users had to go through a great deal of pain. The CMS backend had to be hacked to within an inch of its life. Learning how to set up the server environment was a deeply Linux-heavy affair, and then users had to first learn the ins-and-outs of first the CMS, then the peculiarities of the theme. Users wailed and gnashed their teeth, but in the end they put up with it because the theme looked good once everything was in place."),(0,r.kt)("p",null,"The experience led to our first decision: In order to make a tool that truly works with visual content, we had to get away from the mentality that everything an organization does must be in one single CMS."),(0,r.kt)("p",null,"There are quite a few good CMS themes for outputting big visuals \u2014 Snowball for Wordpress is an example \u2014 but the problem isn\u2019t with the theme, it\u2019s with the backend. The Wordpress admin interface isn\u2019t really isn\u2019t made for working with visual content, and rearranging content can be tedious. This may change with initiatives like Wordpress\u2019 Gutenberg editor \u2014 and we certainly hope so."),(0,r.kt)("p",null,"This led us to think: If we got away from the CMS, we could better understand the workflow of visual longform projects, which tend to be one-off efforts, assembled once and never updated again."),(0,r.kt)("p",null,"There was another plus. We could make the longform stories into static files, which would help to simplify things greatly on the technical side. With our output as static files, we wouldn\u2019t need a dynamic server, with all of the overhead that managing one entails. In fact, we could go serverless if we wanted to. With static pages, organizations can publish their stories just about anywhere, and for less money and trouble than a CMS."),(0,r.kt)("p",null,"To be clear, strong visuals don\u2019t require static pages. But static pages definitely makes the process simpler for less-technical users, and because time is money, we\u2019re saving both."),(0,r.kt)("p",null,"It turns out we aren\u2019t alone in thinking like this. The Chicago Tribune explored static HTML pages with its ",(0,r.kt)("a",{href:"http://www.tarbell.io/",target:"_blank",rel:"noopener noreferrer"},"Tarbell")," project (a seriously underrated project, IMHO). The New York Times tends to hand-code its special pages, and the LA Times has its ",(0,r.kt)("a",{href:"https://docs.google.com/presentation/d/1IybYcc0eVL-Rchm7lEQNwrM-AHRfr_M8ewfGYYNjeu8/edit?pli=1#slide=id.p",target:"_blank",rel:"noopener noreferrer"},"Django Bakery")," to generate static pages for its projects. You should check out the LA Times\u2019 presentation on the Django Bakery to see what I mean. And then there\u2019s ",(0,r.kt)("a",{href:"https://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"},"Jekyll"),", which is a whole universe unto itself."),(0,r.kt)("p",null,"All of these projects pointing to a similar conclusion: When it comes to visuals, it\u2019s easier to go outside the CMS than to get it to do what you want, especially when it has to do with anything outside existing templates."),(0,r.kt)("h3",{id:"lesson-2-focus-on-sequence"},"Lesson 2: Focus on sequence"),(0,r.kt)("p",null,"We started to think about what a specialized tool would look like if it were built for the single purpose of making visual longforms. The task could be broken down to three components \u2014 assembling, sequencing and presenting, and we started to look for effective metaphors."),(0,r.kt)("p",null,"As it turns out, one of the metaphors that works relatively well is presentation software. There are ",(0,r.kt)("a",{href:"https://www.bbc.com/news/technology-35038429",target:"_blank",rel:"noopener noreferrer"},"many faults to Powerpoint"),", but one of the things it does very well is to help users lay out visual sequences. We liked the drag-and-drop metaphor they use for ordering screens, so that was our model. In our parlance, we call the workspace the Storyboard, and the individual components Items.\nWe also wanted a tool that would bring about a shift in how video is treated in web storytelling. Many have spoken of a pivot to video, and while that hype wave has crested, the need still remains for media organizations to come up with more compelling uses for video. We think that full-screen, user-driven, sequential video could provide storytellers with some new ways to tell those stories.\nIn this way, we have different Items for the type of content that\u2019s being presented. There are currently two video items, three static image items, two slideshow items and one text item:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fullpage video"),(0,r.kt)("li",{parentName:"ul"},"Background video"),(0,r.kt)("li",{parentName:"ul"},"Image parallax"),(0,r.kt)("li",{parentName:"ul"},"Image audio"),(0,r.kt)("li",{parentName:"ul"},"Image background"),(0,r.kt)("li",{parentName:"ul"},"Vertical slideshow"),(0,r.kt)("li",{parentName:"ul"},"Horizontal slideshow"),(0,r.kt)("li",{parentName:"ul"},"Centred text")),(0,r.kt)("p",null,"Each of these items can then be used to present content, and the sequence of items can be rearranged by dragging and dropping.\nLesson 3: Move to the desktop\nWhen we started work on Mural, we originally intended it as server software. This would let us create a service for authoring content, and would let us use a centralized code base. But then we started thinking about the large amounts of files that would be used by such a service, and the storage and bandwidth implications of that, and we started to think otherwise. Also, there are still enough places in the world that don\u2019t have cheap and plentiful wireless broadband for sending and working with video."),(0,r.kt)("p",null,"Luckily, there\u2019s been tremendous progress on an open source project called ",(0,r.kt)("a",{href:"https://www.electronjs.org",target:"_blank",rel:"noopener noreferrer"},"Electron"),", which lets developers create desktop apps using JavaScript, HTML and CSS, and the same code can be used on Mac, Windows and Linux. We considered having both desktop and server versions of Mural, but for now we\u2019ve decided to concentrate on the desktop version, as it solves more of our users\u2019 pain points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Low barrier to entry")," You don\u2019t need to know how to code to build a rich media site easily. Simply start writing and adding your media and the app will do the rest.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"It\u2019s faster")," to work with a desktop program, because the user doesn\u2019t have to upload videos to a server before working with the story")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"It\u2019s easier to make changes")," on the desktop version, as there is no lag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because ",(0,r.kt)("strong",{parentName:"p"},"Mural outputs HTML, CSS and Javascript"),", technically-savvy users can make additional changes before uploading by working in your favorite coding environment. We\u2019ve also discussed ways to support code insertion inside the Mural editor, so that a technically savvy user would be able to write (or copy) the code they need")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"You have a choice of servers, and all of them are affordable.")," We\u2019re using a mix of different servers for the stories we make with Mural, and all of them are quite affordable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Real world preview.")," This allows for believable previewing of your work because what you see is being rendered in an actual browser in real time as you work.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Keep agile.")," The user can work on the go to build a story with their assets as they create them. No need to wait for phone signal and internet tethering to continue working.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The backend design we\u2019ve chosen also lets us make a ",(0,r.kt)("strong",{parentName:"p"},"mobile app later on.")," We\u2019d love to do this right away, but were faced with a very limited budget"))),(0,r.kt)("h3",{id:"lesson-4-simple-things-done-well"},"Lesson 4: Simple things done well"),(0,r.kt)("p",null,"We understand very well that working with video, especially optimizing video, can take a long time. We had a lot of debates about whether or not to include video conversion functionality in the editor, but decided against this because it would add a lot of complexity to the code. Instead we decided to highlight in our manual a number of different external tools that are already very good at converting video. We would, however, like to make it clearer to the user that they have to optimize their videos themselves, and will improve this in future versions. That said, working with video is definitely an area we\u2019re looking to improve.\nWe do plan on adding support to Mural for integrating YouTube and Vimeo videos in a future release, and are interested in embed support for a number of different services \u2014 support for data visualization tools like D3 are also on our to-do list. In fact, one of the artists we worked with in testing Mural, Dominic Smith, has created a piece, ",(0,r.kt)("a",{parentName:"p",href:"https://stories.getmural.io/isisarts/thevolunteers/"},"The Volunteers"),", in which all of the videos are served from Vimeo."),(0,r.kt)("h3",{id:"lesson-5-listening-to-and-watching-our-users"},"Lesson 5: Listening to and watching our users"),(0,r.kt)("p",null,"One of the reasons we made Mural was so that journalists and people working in the arts would have the ability to better convey arts stories, which by their very nature are multimedia. Some of our earliest testers are artists themselves, and they\u2019ve used Mural both as a way to document their work and as an artistic medium in and of itself."),(0,r.kt)("p",null,"We\u2019ve listened to our users very carefully and have also watched them use Mural, and this has given us much clearer prioritization of our bugs and feature requests. We\u2019re big practitioners of Design Thinking, and we started the project with personae representing types of users, but over time these personae have been replaced with real users and their very real tasks, needs and pain points.\nDesign Thinking also helped us to clarify and refine Mural\u2019s features and functionality, and we continue to follow its five primary steps: Empathize, Define, Ideate, Prototype and Test."),(0,r.kt)("h3",{id:"lesson-6-trust-the-community"},"Lesson 6: Trust the community"),(0,r.kt)("p",null,"One of our current discussions has to do with how to make Mural into a viable project that serves its community but also becomes a sustainable business. All of us on the Mural team are strong advocates of open source, and we\u2019re taking a leap of faith in starting a new business while keeping that commitment. We believe that once we get Mural our into users\u2019 hands, they\u2019ll start to get involved in improving it and developing it further, as well as using the services we offer based on the tool."),(0,r.kt)("p",null,"We plan to offer a number of paid services on top of Mural, including hosting, optimization, and development of new features. We also want to offer consulting and training to show users how to make the most of not only Mural, but also a number of related apps and services. It\u2019s cheesy to end this up this way, but it needs to be said: ",(0,r.kt)("a",{parentName:"p",href:"mailto:getinfo@getmural.io"},"Get in touch")," and we can work together to make it easier to tell visual stories!"))}c.isMDXComponent=!0},5907:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/what-we-learned-df8c66bb63ff5ca300b3018aae328ce7.jpeg"}}]);