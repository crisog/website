(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var o=r(1),n=r(6),a=(r(0),r(137)),i=(r(139),{id:"sourcecred",title:"SourceCred",sidebar_label:"SourceCred"}),c={id:"sourcecred",title:"SourceCred",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/sourcecred.mdx",permalink:"/website/docs/sourcecred",editUrl:"https://github.com/aracred/website/edit/master/docs/sourcecred.mdx",sidebar_label:"SourceCred",sidebar:"someSidebar",previous:{title:"Aragon",permalink:"/website/docs/aragon"},next:{title:"Design Goals",permalink:"/website/docs/designGoals"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"..."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://aracred.github.io/website/img/sc-logo-new.png",alt:null}))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"SourceCred allows you to measure and manage contributions to an endeavor.")),Object(a.b)("p",null,'SourceCred is a reputation protocol for open collaboration. At a basic level, SourceCred tracks the contributions that are made to a community project. It does this by assigning each contribution and contributor a score, called "Cred", based on the contributions\' value to the project.'),Object(a.b)("p",null,"The way SourceCred works is that it organizes the contribution history of a project into a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Graph_theory"}),"graph"),". Nodes on the graph represent contributions. SourceCred then runs a modified ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Graph_theory"}),"PageRank algorithm")," on the graph to produce scores for each node. Every time a contribution is referenced it increases the importance of that node. Nodes that are referenced a lot will have a lot of credibility in the graph."),Object(a.b)("p",null,'We call the scores for nodes on a SourceCred graph "Cred." As people make contributions the scores of nodes on the graph will change. This makes the graph like a living system and Cred like a force of nature within that system. You can think of Cred like a liquid that "flows" through the graph towards important nodes. Nodes can be contributions or contributors. If you (a node) contribute to something that is important (another node), then Cred will flow to that contribution and then to you. This incentivizes positive-sum collaboration where contributions can synergize into something greater than the sum of their parts, and as a result create more value for contributors and consumers overall.'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you want to learn more about SourceCred all of the most up to date information can be found on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://sourcecred.io/"}),"https://sourcecred.io/"),".")))}l.isMDXComponent=!0},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?n.a.createElement(f,c({ref:t},u,{components:r})):n.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},138:function(e,t,r){"use strict";var o=r(0),n=r(35);t.a=function(){return Object(o.useContext)(n.a)}},139:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(138);function n(e){const{siteConfig:t}=Object(o.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}}}]);