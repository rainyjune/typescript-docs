"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>k});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=p,k=u["".concat(s,".").concat(m)]||u[m]||y[m]||l;return r?n.createElement(k,a(a({ref:t},o),{},{components:r})):n.createElement(k,a({ref:t},o))}));function k(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:p,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),p=(r(7294),r(3905));const l={},a="TypeScript \u6570\u7ec4\u7c7b\u578b",i={unversionedId:"basic-types/typescript-array-type",id:"basic-types/typescript-array-type",title:"TypeScript \u6570\u7ec4\u7c7b\u578b",description:"\u7b80\u4ecb\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684 array \u7c7b\u578b\u53ca\u5176\u57fa\u672c\u64cd\u4f5c\u3002",source:"@site/docs/basic-types/typescript-array-type.md",sourceDirName:"basic-types",slug:"/basic-types/typescript-array-type",permalink:"/basic-types/typescript-array-type",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript object \u7c7b\u578b",permalink:"/basic-types/typescript-object-type"},next:{title:"TypeScript \u5143\u7ec4",permalink:"/basic-types/typescript-tuple"}},s={},c=[{value:"TypeScript \u6570\u7ec4\u7c7b\u578b\u4ecb\u7ecd",id:"typescript-\u6570\u7ec4\u7c7b\u578b\u4ecb\u7ecd",level:2},{value:"TypeScript \u6570\u7ec4\u7684\u5c5e\u6027\u548c\u65b9\u6cd5",id:"typescript-\u6570\u7ec4\u7684\u5c5e\u6027\u548c\u65b9\u6cd5",level:2},{value:"\u5b58\u50a8\u6df7\u5408\u7c7b\u578b\u7684\u503c",id:"\u5b58\u50a8\u6df7\u5408\u7c7b\u578b\u7684\u503c",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],o={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,p.kt)(u,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript-\u6570\u7ec4\u7c7b\u578b"},"TypeScript \u6570\u7ec4\u7c7b\u578b"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u7b80\u4ecb"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"array")," \u7c7b\u578b\u53ca\u5176\u57fa\u672c\u64cd\u4f5c\u3002"),(0,p.kt)("h2",{id:"typescript-\u6570\u7ec4\u7c7b\u578b\u4ecb\u7ecd"},"TypeScript \u6570\u7ec4\u7c7b\u578b\u4ecb\u7ecd"),(0,p.kt)("p",null,"TypeScript \u4e2d\u7684\u6570\u7ec4\u662f\u6709\u5e8f\u7684\u6570\u636e\u5217\u8868\u3002\u8981\u58f0\u660e\u4e00\u4e2a\u5305\u542b\u7279\u5b9a\u7c7b\u578b\u503c\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let arrayName: type[];\n")),(0,p.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u58f0\u660e\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let skills: string[];\n")),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5411\u6570\u7ec4\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u4e32\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'skills[0] = "Problem Solving";\nskills[1] = "Programming";\n')),(0,p.kt)("p",null,"\u6216\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"push()")," \u65b9\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"skills.push('Software Design');\n")),(0,p.kt)("p",null,"\u4e0b\u9762\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5e76\u4e3a\u5176\u8d4b\u503c\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let skills = ['Problem Sovling','Software Design','Programming'];\n")),(0,p.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0cTypeScript \u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"skills")," \u6570\u7ec4\u63a8\u65ad\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4\u3002\u5b83\u7b49\u6548\u4e8e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let skills: string[];\nskills = ['Problem Sovling','Software Design','Programming'];\n")),(0,p.kt)("p",null,"\u4e00\u65e6\u4f60\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7279\u5b9a\u7c7b\u578b\u7684\u6570\u7ec4\uff0cTypeScript \u5c06\u963b\u6b62\u4f60\u5411\u6570\u7ec4\u6dfb\u52a0\u4e0d\u517c\u5bb9\u7684\u503c\u3002"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u64cd\u4f5c\u5c06\u89e6\u53d1\u9519\u8bef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"skills.push(100);\n")),(0,p.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u6b63\u5728\u5c1d\u8bd5\u5411\u5b57\u7b26\u4e32\u6570\u7ec4\u6dfb\u52a0\u4e00\u4e2a\u6570\u5b57\u3002"),(0,p.kt)("p",null,"\u9519\u8bef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Argument of type 'number' is not assignable to parameter of type 'string'.\n")),(0,p.kt)("p",null,"\u5f53\u4f60\u4ece\u6570\u7ec4\u4e2d\u63d0\u53d6\u5143\u7d20\u65f6\uff0cTypeScript \u53ef\u4ee5\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let skill = skills[0];\nconsole.log(typeof(skill));\n")),(0,p.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"string\n")),(0,p.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u63d0\u53d6 ",(0,p.kt)("inlineCode",{parentName:"p"},"skills")," \u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5e76\u5c06\u5176\u5206\u914d\u7ed9 ",(0,p.kt)("inlineCode",{parentName:"p"},"skill")," \u53d8\u91cf\u3002"),(0,p.kt)("p",null,"\u7531\u4e8e\u5b57\u7b26\u4e32\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u662f\u5b57\u7b26\u4e32\uff0cTypeScript \u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"skill")," \u53d8\u91cf\u7684\u7c7b\u578b\u63a8\u65ad\u4e3a\u5b57\u7b26\u4e32\uff0c\u5982\u8f93\u51fa\u6240\u793a\u3002"),(0,p.kt)("h2",{id:"typescript-\u6570\u7ec4\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"},"TypeScript \u6570\u7ec4\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),(0,p.kt)("p",null,"TypeScript \u6570\u7ec4\u53ef\u4ee5\u8bbf\u95ee JavaScript \u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"length")," \u5c5e\u6027\u83b7\u53d6\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6570\u91cf\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let series = [1, 2, 3];\nconsole.log(series.length); // 3\n")),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u6709\u7528\u7684\u6570\u7ec4\u65b9\u6cd5\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"forEach()"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"map()"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"reduce()")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"filter()"),"\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let series = [1, 2, 3];\nlet doubleIt = series.map(e => e* 2);\nconsole.log(doubleIt);\n")),(0,p.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"[ 2, 4, 6 ] \n")),(0,p.kt)("h2",{id:"\u5b58\u50a8\u6df7\u5408\u7c7b\u578b\u7684\u503c"},"\u5b58\u50a8\u6df7\u5408\u7c7b\u578b\u7684\u503c"),(0,p.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e86\u5982\u4f55\u58f0\u660e\u4e00\u4e2a\u5305\u542b\u5b57\u7b26\u4e32\u548c\u6570\u5b57\u7684\u6570\u7ec4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let scores = ['Programming', 5, 'Software Design', 4];\n")),(0,p.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cTypeScript \u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"scores")," \u6570\u7ec4\u63a8\u65ad\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"string | number")," \u7ec4\u6210\u7684\u6570\u7ec4\u3002"),(0,p.kt)("p",null,"\u5b83\u7b49\u6548\u4e8e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let scores : (string | number)[];\nscores = ['Programming', 5, 'Software Design', 4];\n")),(0,p.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5728 TypeScript \u4e2d\uff0c\u6570\u7ec4\u662f\u503c\u7684\u6709\u5e8f\u5217\u8868\u3002\u6570\u7ec4\u53ef\u4ee5\u5b58\u50a8\u6df7\u5408\u7c7b\u578b\u7684\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u8981\u58f0\u660e\u7279\u5b9a\u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"let arr: type[]")," \u8bed\u6cd5\u3002")))}y.isMDXComponent=!0}}]);