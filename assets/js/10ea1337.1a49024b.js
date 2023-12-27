"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[2357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),o=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=o(n),y=l,k=u["".concat(a,".").concat(y)]||u[y]||m[y]||p;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,i=new Array(p);i[0]=y;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:l,i[1]=c;for(var o=2;o<p;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const p={},i="TypeScript \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b",c={unversionedId:"basic-types/typescript-string-literal-types",id:"basic-types/typescript-string-literal-types",title:"TypeScript \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b",description:"\u6458\u8981\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u8fd9\u4e9b\u7c7b\u578b\u5b9a\u4e49\u63a5\u53d7\u6307\u5b9a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7684\u7c7b\u578b\u3002",source:"@site/docs/basic-types/typescript-string-literal-types.md",sourceDirName:"basic-types",slug:"/basic-types/typescript-string-literal-types",permalink:"/basic-types/typescript-string-literal-types",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript \u7c7b\u578b\u522b\u540d",permalink:"/basic-types/typescript-type-aliases"},next:{title:"TypeScript if else",permalink:"/control-flow-statements/typescript-if-else"}},a={},o=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],s={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"typescript-\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b"},"TypeScript \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6458\u8981"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u8fd9\u4e9b\u7c7b\u578b\u5b9a\u4e49\u63a5\u53d7\u6307\u5b9a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u5141\u8bb8\u5b9a\u4e49\u4e00\u79cd\u4ec5\u63a5\u53d7\u4e00\u4e2a\u6307\u5b9a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5b9a\u4e49\u4e86\u63a5\u53d7\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"'click'")," \u7684\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let click: 'click';\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"click")," \u662f\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u4ec5\u63a5\u53d7\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"'click'"),"\u3002 \u5982\u679c\u5c06\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"click")," \u5206\u914d\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"click"),"\uff0c\u5b83\u662f\u6709\u6548\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"click = 'click'; // valid\n")),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u5f53\u4f60\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"click")," \u5206\u914d\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u6587\u5b57\u65f6\uff0cTypeScript \u7f16\u8bd1\u5668\u5c06\u53d1\u51fa\u9519\u8bef\u3002 \u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"click = 'dblclick'; // compiler error\n")),(0,l.kt)("p",null,"\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Type '\"dblclick\"' is not assignable to type '\"click\"'.\n")),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u5bf9\u4e8e\u9650\u5236\u53d8\u91cf\u4e2d\u53ef\u80fd\u7684\u5b57\u7b26\u4e32\u503c\u5f88\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u53ef\u4ee5\u4e0e\u8054\u5408\u7c7b\u578b\u5f88\u597d\u5730\u7ed3\u5408\u8d77\u6765\uff0c\u4e3a\u53d8\u91cf\u5b9a\u4e49\u4e00\u7ec4\u6709\u9650\u7684\u5b57\u7b26\u4e32\u6587\u5b57\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';\nmouseEvent = 'click'; // valid\nmouseEvent = 'dblclick'; // valid\nmouseEvent = 'mouseup'; // valid\nmouseEvent = 'mousedown'; // valid\nmouseEvent = 'mouseover'; // compiler error\n")),(0,l.kt)("p",null,"\u5982\u679c\u5728\u591a\u4e2a\u5730\u65b9\u4f7f\u7528\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u5b83\u4eec\u5c06\u4f1a\u975e\u5e38\u5197\u957f\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u522b\u540d\u3002 \u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';\nlet mouseEvent: MouseEvent;\nmouseEvent = 'click'; // valid\nmouseEvent = 'dblclick'; // valid\nmouseEvent = 'mouseup'; // valid\nmouseEvent = 'mousedown'; // valid\nmouseEvent = 'mouseover'; // compiler error\n\nlet anotherEvent: MouseEvent;\n")),(0,l.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TypeScript \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u5b9a\u4e49\u63a5\u53d7\u6307\u5b9a\u5b57\u7b26\u4e32\u6587\u5b57\u7684\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u4e0e\u8054\u5408\u7c7b\u578b\u548c\u7c7b\u578b\u522b\u540d\u7ed3\u5408\u4f7f\u7528\u6765\u5b9a\u4e49\u63a5\u53d7\u6709\u9650\u5b57\u7b26\u4e32\u6587\u5b57\u96c6\u7684\u7c7b\u578b\u3002")))}m.isMDXComponent=!0}}]);