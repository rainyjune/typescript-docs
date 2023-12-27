"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[4845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const l={},o="TypeScript do while",p={unversionedId:"control-flow-statements/typescript-do-while",id:"control-flow-statements/typescript-do-while",title:"TypeScript do while",description:"\u6458\u8981\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 do...while \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\uff0c\u8be5\u5faa\u73af\u8fd0\u884c\u76f4\u5230\u6761\u4ef6\u8ba1\u7b97\u7ed3\u679c\u4e3a false\u3002",source:"@site/docs/control-flow-statements/typescript-do-while.md",sourceDirName:"control-flow-statements",slug:"/control-flow-statements/typescript-do-while",permalink:"/control-flow-statements/typescript-do-while",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript while",permalink:"/control-flow-statements/typescript-while"},next:{title:"TypeScript break",permalink:"/control-flow-statements/typescript-break"}},a={},c=[{value:"TypeScript do\u2026while \u8bed\u53e5\u7b80\u4ecb",id:"typescript-dowhile-\u8bed\u53e5\u7b80\u4ecb",level:2},{value:"TypeScript do\u2026while \u8bed\u53e5\u793a\u4f8b",id:"typescript-dowhile-\u8bed\u53e5\u793a\u4f8b",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript-do-while"},"TypeScript do while"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6458\u8981"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"do...while")," \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\uff0c\u8be5\u5faa\u73af\u8fd0\u884c\u76f4\u5230\u6761\u4ef6\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,i.kt)("h2",{id:"typescript-dowhile-\u8bed\u53e5\u7b80\u4ecb"},"TypeScript do\u2026while \u8bed\u53e5\u7b80\u4ecb"),(0,i.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"do...while")," \u8bed\u53e5\u7684\u8bed\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"do {\n    // do something\n} while(condition);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"do...while")," \u8bed\u53e5\u6267\u884c\u5176\u4e3b\u4f53\u4e2d\u7531\u5927\u62ec\u53f7 (",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),") \u5305\u88f9\u7684\u8bed\u53e5\uff0c\u76f4\u5230\u6761\u4ef6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"do...while")," \u8bed\u53e5\u59cb\u7ec8\u81f3\u5c11\u6267\u884c\u4e00\u6b21\u5176\u5faa\u73af\u4f53\u3002"),(0,i.kt)("p",null,"\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," \u8bed\u53e5\u4e0d\u540c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"do...while")," \u8bed\u53e5\u5728\u6bcf\u6b21\u5faa\u73af\u8fed\u4ee3\u540e\u8bc4\u4f30 ",(0,i.kt)("inlineCode",{parentName:"p"},"condition"),"\uff0c\u56e0\u6b64\u79f0\u4e3a\u540e\u6d4b\u8bd5\u5faa\u73af\u3002"),(0,i.kt)("h2",{id:"typescript-dowhile-\u8bed\u53e5\u793a\u4f8b"},"TypeScript do\u2026while \u8bed\u53e5\u793a\u4f8b"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"do...while")," \u8bed\u53e5\u5c06 0 \u5230 9 \u4e4b\u95f4\u7684\u6570\u5b57\u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let i = 0;\n\ndo {\n    console.log(i);\n    i++\n} while (i < 10);\n")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n")),(0,i.kt)("p",null,"\u600e\u4e48\u8fd0\u884c\u7684\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," \u5e76\u5728\u8fdb\u5165\u5faa\u73af\u4e4b\u524d\u5c06\u5176\u521d\u59cb\u5316\u4e3a\u96f6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," \u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," \u52a0 1\uff0c\u5e76\u68c0\u67e5\u5b83\u662f\u5426\u5c0f\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"\u3002\u5982\u679c\u5c0f\u4e8e\uff0c\u5219\u91cd\u590d\u5faa\u73af\uff0c\u76f4\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," \u5927\u4e8e\u6216\u7b49\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"\u3002")),(0,i.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"do...while")," \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\uff0c\u8be5\u5faa\u73af\u8fd0\u884c\u76f4\u5230\u6761\u4ef6\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\u3002")))}u.isMDXComponent=!0}}]);