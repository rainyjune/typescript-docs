"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[2676],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=p,f=u["".concat(o,".").concat(m)]||u[m]||y[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:p,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),p=(r(7294),r(3905));const i={},a="TypeScript String \u7c7b\u578b",l={unversionedId:"basic-types/typescript-string",id:"basic-types/typescript-string",title:"TypeScript String \u7c7b\u578b",description:"\u7b80\u4ecb\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u5b57\u7b26\u4e32\u6570\u636e\u7c7b\u578b\u3002",source:"@site/docs/basic-types/typescript-string.md",sourceDirName:"basic-types",slug:"/basic-types/typescript-string",permalink:"/basic-types/typescript-string",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript Number \u7c7b\u578b",permalink:"/basic-types/typescript-number"},next:{title:"TypeScript Boolean \u7c7b\u578b",permalink:"/basic-types/typescript-boolean"}},o={},c=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],s={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,p.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript-string-\u7c7b\u578b"},"TypeScript String \u7c7b\u578b"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u7b80\u4ecb"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u5b57\u7b26\u4e32\u6570\u636e\u7c7b\u578b\u3002"),(0,p.kt)("p",null,"\u4e0e JavaScript \u4e00\u6837\uff0cTypeScript \u4f7f\u7528\u53cc\u5f15\u53f7 (",(0,p.kt)("inlineCode",{parentName:"p"},'"'),") \u6216\u5355\u5f15\u53f7 (",(0,p.kt)("inlineCode",{parentName:"p"},"'"),") \u5c06\u5b57\u7b26\u4e32\u6587\u5b57\u62ec\u8d77\u6765\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let firstName: string = 'John';\nlet title: string = \"Web Developer\";\n")),(0,p.kt)("p",null,"TypeScript \u8fd8\u652f\u6301\u4f7f\u7528\u53cd\u5f15\u53f7 (",(0,p.kt)("inlineCode",{parentName:"p"},"`"),") \u5305\u88f9\u5b57\u7b26\u7684\u6a21\u677f\u5b57\u7b26\u4e32\u3002"),(0,p.kt)("p",null,"\u6a21\u677f\u5b57\u7b26\u4e32\u5141\u8bb8\u4f60\u521b\u5efa\u591a\u884c\u5b57\u7b26\u4e32\u5e76\u63d0\u4f9b\u5b57\u7b26\u4e32\u63d2\u503c\u529f\u80fd\u3002"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u5982\u4f55\u4f7f\u7528\u53cd\u5f15\u53f7 (",(0,p.kt)("inlineCode",{parentName:"p"},"`"),") \u521b\u5efa\u591a\u884c\u5b57\u7b26\u4e32\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let description = `This TypeScript string can \nspan multiple \nlines\n`;\n")),(0,p.kt)("p",null,"\u5b57\u7b26\u4e32\u63d2\u503c\u5141\u8bb8\u4f60\u5c06\u53d8\u91cf\u5d4c\u5165\u5230\u5b57\u7b26\u4e32\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let firstName: string = `John`;\nlet title: string = `Web Developer`;\nlet profile: string = `I'm ${firstName}. \nI'm a ${title}`;\n\nconsole.log(profile);\n")),(0,p.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"I'm John. \nI'm a Web Developer.\n")),(0,p.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5728 TypeScript \u4e2d\uff0c\u6240\u6709\u5b57\u7b26\u4e32\u90fd\u662f ",(0,p.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4e0e JavaScript \u4e00\u6837\uff0cTypeScript \u4f7f\u7528\u53cc\u5f15\u53f7 (",(0,p.kt)("inlineCode",{parentName:"li"},'"'),")\u3001\u5355\u5f15\u53f7 (",(0,p.kt)("inlineCode",{parentName:"li"},"'"),") \u548c\u53cd\u5f15\u53f7 (",(0,p.kt)("inlineCode",{parentName:"li"},"`"),") \u5c06\u5b57\u7b26\u4e32\u6587\u5b57\u62ec\u8d77\u6765\u3002")))}y.isMDXComponent=!0}}]);