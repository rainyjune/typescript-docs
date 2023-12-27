"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[5637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=p,k=u["".concat(o,".").concat(y)]||u[y]||m[y]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:p,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),p=(n(7294),n(3905));const a={},l="\u7406\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca",i={unversionedId:"basic-types/typescript-type-annotations",id:"basic-types/typescript-type-annotations",title:"\u7406\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca",description:"\u6458\u8981: \u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca\u3002",source:"@site/docs/basic-types/typescript-type-annotations.md",sourceDirName:"basic-types",slug:"/basic-types/typescript-type-annotations",permalink:"/basic-types/typescript-type-annotations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript \u7c7b\u578b",permalink:"/basic-types/typescript-types"},next:{title:"TypeScript \u7c7b\u578b\u63a8\u65ad",permalink:"/basic-types/typescript-type-inference"}},o={},c=[{value:"\u4ec0\u4e48\u662f TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca",id:"\u4ec0\u4e48\u662f-typescript-\u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca",level:2},{value:"\u5728\u53d8\u91cf\u548c\u5e38\u91cf\u4e2d\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca",id:"\u5728\u53d8\u91cf\u548c\u5e38\u91cf\u4e2d\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca",level:2},{value:"\u7c7b\u578b\u6ce8\u91ca\u793a\u4f8b",id:"\u7c7b\u578b\u6ce8\u91ca\u793a\u4f8b",level:2},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:3},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",level:3},{value:"\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u7c7b\u578b",id:"\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u7c7b\u578b",level:3},{value:"\u6458\u8981",id:"\u6458\u8981",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,p.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u7406\u89e3-typescript-\u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca"},"\u7406\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6458\u8981"),": \u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca\u3002"),(0,p.kt)("h2",{id:"\u4ec0\u4e48\u662f-typescript-\u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca"},"\u4ec0\u4e48\u662f TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca"),(0,p.kt)("p",null,"TypeScript \u4f7f\u7528\u7c7b\u578b\u6279\u6ce8\u6765\u663e\u5f0f\u6307\u5b9a\u6807\u8bc6\u7b26\u7684\u7c7b\u578b\uff0c\u5982\u53d8\u91cf\u3001\u51fd\u6570\u3001\u5bf9\u8c61\u7b49\u3002"),(0,p.kt)("p",null,"TypeScript \u5728\u6807\u8bc6\u7b26\u540e\u4f7f\u7528\u8bed\u6cd5 ",(0,p.kt)("inlineCode",{parentName:"p"},":type")," \u4f5c\u4e3a\u7c7b\u578b\u6ce8\u91ca\uff0c\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"type")," \u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684\u7c7b\u578b\u3002"),(0,p.kt)("p",null,"\u4e00\u65e6\u4e00\u4e2a\u6807\u8bc6\u7b26\u88ab\u6807\u6ce8\u4e86\u7c7b\u578b\uff0c\u5b83\u5c31\u53ea\u80fd\u4f5c\u4e3a\u8be5\u7c7b\u578b\u4f7f\u7528\u3002\u5982\u679c\u5b83\u88ab\u7528\u4f5c\u53e6\u4e00\u79cd\u7c7b\u578b\uff0cTypeScript \u7f16\u8bd1\u5668\u4f1a\u89e6\u53d1\u9519\u8bef\u3002"),(0,p.kt)("h2",{id:"\u5728\u53d8\u91cf\u548c\u5e38\u91cf\u4e2d\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca"},"\u5728\u53d8\u91cf\u548c\u5e38\u91cf\u4e2d\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u8bed\u6cd5\u663e\u793a\u4e86\u5982\u4f55\u4e3a\u53d8\u91cf\u548c\u5e38\u91cf\u6307\u5b9a\u7c7b\u578b\u6ce8\u91ca\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let variableName: type;\nlet variableName: type = value;\nconst constantName: type = value;\n")),(0,p.kt)("p",null,"\u5728\u6b64\u8bed\u6cd5\u4e2d\uff0c\u7c7b\u578b\u6ce8\u91ca\u4f4d\u4e8e\u53d8\u91cf\u6216\u5e38\u91cf\u540d\u79f0\u4e4b\u540e\uff0c\u524d\u9762\u6709\u4e00\u4e2a\u5192\u53f7(",(0,p.kt)("inlineCode",{parentName:"p"},":"),")\u3002"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5bf9\u4e00\u4e2a\u53d8\u91cf\u4f7f\u7528\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," \u6ce8\u91ca:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let counter: number;\n")),(0,p.kt)("p",null,"\u6b64\u540e\uff0c\u4f60\u53ea\u80fd\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"counter")," \u53d8\u91cf\u8d4b\u503c\u4e00\u4e2a\u6570\u5b57:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"counter = 1;\n")),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u7ed9 ",(0,p.kt)("inlineCode",{parentName:"p"},"counter")," \u53d8\u91cf\u8d4b\u503c\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let counter: number;\ncounter = 'Hello'; // compile error \n")),(0,p.kt)("p",null,"\u62a5\u9519\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Type '\"Hello\"' is not assignable to type 'number'.\n")),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e00\u6761\u8bed\u53e5\u4e2d\u540c\u65f6\u4e3a\u4e00\u4e2a\u53d8\u91cf\u6307\u5b9a\u7c7b\u578b\u548c\u521d\u59cb\u5316\u8d4b\u503c\uff0c\u5982\u4e0b\u6240\u793a:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let counter: number = 1;\n")),(0,p.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5bf9 ",(0,p.kt)("inlineCode",{parentName:"p"},"counter")," \u53d8\u91cf\u4f7f\u7528\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," \u6ce8\u91ca\uff0c\u5e76\u5c06\u5176\u521d\u59cb\u5316\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"),(0,p.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u4e86\u57fa\u672c\u7c7b\u578b\u6ce8\u91ca\u7684\u5176\u4ed6\u793a\u4f8b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let name: string = 'John';\nlet age: number = 25;\nlet active: boolean = true;\n")),(0,p.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"name")," \u53d8\u91cf\u83b7\u5f97 ",(0,p.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"age")," \u53d8\u91cf\u83b7\u5f97 ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," \u7c7b\u578b\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"active"),"\u53d8\u91cf\u83b7\u5f97 ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")," \u7c7b\u578b\u3002"),(0,p.kt)("h2",{id:"\u7c7b\u578b\u6ce8\u91ca\u793a\u4f8b"},"\u7c7b\u578b\u6ce8\u91ca\u793a\u4f8b"),(0,p.kt)("h3",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,p.kt)("p",null,"\u82e5\u8981\u6ce8\u91ca\u4f60\u4f7f\u7528\u7684\u6570\u7ec4\u7c7b\u578b\uff0c\u8bf7\u4f7f\u7528\u67d0\u4e2a\u7c7b\u578b\u7136\u540e\u52a0\u4e0a\u4e00\u5bf9\u65b9\u62ec\u53f7",(0,p.kt)("inlineCode",{parentName:"p"},": type[]"),"\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let arrayName: type[];\n")),(0,p.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u58f0\u660e\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];\n")),(0,p.kt)("h3",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),(0,p.kt)("p",null,"\u8981\u6307\u5b9a\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4f7f\u7528\u5bf9\u8c61\u7c7b\u578b\u6ce8\u91ca\u3002\u4f8b\u5982:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let person: {\n   name: string;\n   age: number\n};\n\nperson = {\n   name: 'John',\n   age: 25\n}; // valid\n")),(0,p.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"person")," \u5bf9\u8c61\u53ea\u63a5\u53d7\u4e24\u4e2a\u5c5e\u6027: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\u7c7b\u578b\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," \u7c7b\u578b\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"age"),"\u3002"),(0,p.kt)("h3",{id:"\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u7c7b\u578b"},"\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u7c7b\u578b"),(0,p.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u4e86\u5e26\u6709\u53c2\u6570\u7c7b\u578b\u6ce8\u91ca\u548c\u8fd4\u56de\u7c7b\u578b\u6ce8\u91ca\u7684\u51fd\u6570\u6ce8\u91ca:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let greeting : (name: string) => string;\n")),(0,p.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u4efb\u4f55\u63a5\u53d7\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u51fd\u6570\u5206\u914d\u7ed9 ",(0,p.kt)("inlineCode",{parentName:"p"},"greeting")," \u53d8\u91cf:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"greeting = function (name: string) {\n    return `Hi ${name}`;\n};\n")),(0,p.kt)("p",null,"\u7531\u4e8e\u8d4b\u7ed9 ",(0,p.kt)("inlineCode",{parentName:"p"},"greeting")," \u53d8\u91cf\u7684\u51fd\u6570\u4e0e\u5176\u51fd\u6570\u7c7b\u578b\u4e0d\u5339\u914d\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4f1a\u89e6\u53d1\u4e00\u4e2a\u9519\u8bef\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"greeting = function () {\n    console.log('Hello');\n};\n")),(0,p.kt)("p",null,"\u9519\u8bef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.\n")),(0,p.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca\u8bed\u6cd5 ",(0,p.kt)("inlineCode",{parentName:"li"},": [type]")," \u6765\u663e\u5f0f\u6307\u5b9a\u53d8\u91cf\u3001\u51fd\u6570\u3001\u51fd\u6570\u8fd4\u56de\u503c\u7b49\u7684\u7c7b\u578b\u3002")))}m.isMDXComponent=!0}}]);