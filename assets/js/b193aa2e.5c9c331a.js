"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[9247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(n),k=p,y=s["".concat(c,".").concat(k)]||s[k]||m[k]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:p,l[1]=i;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=n(7462),p=(n(7294),n(3905));const a={},l="TypeScript \u7c7b\u578b\u63a8\u65ad",i={unversionedId:"basic-types/typescript-type-inference",id:"basic-types/typescript-type-inference",title:"TypeScript \u7c7b\u578b\u63a8\u65ad",description:"\u7b80\u4ecb\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u63a8\u65ad\u3002",source:"@site/docs/basic-types/typescript-type-inference.md",sourceDirName:"basic-types",slug:"/basic-types/typescript-type-inference",permalink:"/basic-types/typescript-type-inference",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7406\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca",permalink:"/basic-types/typescript-type-annotations"},next:{title:"TypeScript Number \u7c7b\u578b",permalink:"/basic-types/typescript-number"}},c={},o=[{value:"\u6700\u901a\u7528\u7c7b\u578b\u7b97\u6cd5",id:"\u6700\u901a\u7528\u7c7b\u578b\u7b97\u6cd5",level:2},{value:"\u57fa\u4e8e\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b\u63a8\u65ad",id:"\u57fa\u4e8e\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b\u63a8\u65ad",level:2},{value:"\u7c7b\u578b\u63a8\u65ad\u4e0e\u7c7b\u578b\u6ce8\u89e3",id:"\u7c7b\u578b\u63a8\u65ad\u4e0e\u7c7b\u578b\u6ce8\u89e3",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],u={toc:o},s="wrapper";function m(e){let{components:t,...n}=e;return(0,p.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript-\u7c7b\u578b\u63a8\u65ad"},"TypeScript \u7c7b\u578b\u63a8\u65ad"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u7b80\u4ecb"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684\u7c7b\u578b\u63a8\u65ad\u3002"),(0,p.kt)("p",null,"\u7c7b\u578b\u63a8\u65ad\u63cf\u8ff0\u4e86\u5f53\u4f60\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u6570\u636e\u7c7b\u578b\u65f6\uff0cTypeScript \u5728\u4f55\u5904\u4ee5\u53ca\u5982\u4f55\u63a8\u65ad\u7c7b\u578b\u3002"),(0,p.kt)("h1",{id:"\u57fa\u672c\u7c7b\u578b\u7684\u63a8\u65ad"},"\u57fa\u672c\u7c7b\u578b\u7684\u63a8\u65ad"),(0,p.kt)("p",null,"\u5f53\u4f60\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca\u6765\u663e\u5f0f\u5730\u6307\u5b9a\u5b83\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let counter: number;\n")),(0,p.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"counter")," \u53d8\u91cf\u521d\u59cb\u5316\u4e3a\u6570\u5b57\uff0cTypeScript \u4f1a\u63a8\u65ad\u5b83\u7684\u7c7b\u578b\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"number"),"\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let counter = 0;\n")),(0,p.kt)("p",null,"\u5b83\u7b49\u6548\u4e8e\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let counter: number = 0;\n")),(0,p.kt)("p",null,"\u540c\u6837\uff0c\u5f53\u4f60\u4e3a\u51fd\u6570\u53c2\u6570\u8d4b\u503c\u65f6\uff0cTypeScript \u4f1a\u5c06\u53c2\u6570\u7684\u7c7b\u578b\u63a8\u65ad\u4e3a\u9ed8\u8ba4\u503c\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function setCounter(max=100) {\n    // ...\n}\n")),(0,p.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0cTypeScript \u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"max")," \u53c2\u6570\u7684\u7c7b\u578b\u63a8\u65ad\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"number"),"\u3002"),(0,p.kt)("p",null,"\u540c\u6837\uff0cTypeScript \u5c06\u4ee5\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"increment()")," \u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\u63a8\u65ad\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"number"),"\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function increment(counter: number) {\n    return counter++;\n}\n")),(0,p.kt)("p",null,"\u5b83\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u6548\u679c\u76f8\u540c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function increment(counter: number) : number {\n    return counter++;\n}\n")),(0,p.kt)("h2",{id:"\u6700\u901a\u7528\u7c7b\u578b\u7b97\u6cd5"},"\u6700\u901a\u7528\u7c7b\u578b\u7b97\u6cd5"),(0,p.kt)("p",null,"\u8bf7\u770b\u5982\u4e0b\u8d4b\u503c\u8bed\u53e5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let items = [1, 2, 3, null];\n")),(0,p.kt)("p",null,"\u4e3a\u4e86\u63a8\u65ad ",(0,p.kt)("inlineCode",{parentName:"p"},"items")," \u53d8\u91cf\u7684\u7c7b\u578b\uff0cTypeScript \u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u7c7b\u578b\u3002"),(0,p.kt)("p",null,"\u5b83\u4f7f\u7528\u6700\u901a\u7528\u7c7b\u578b\u7b97\u6cd5\u6765\u5206\u6790\u6bcf\u4e2a\u5019\u9009\u7c7b\u578b\uff0c\u5e76\u9009\u62e9\u4e0e\u6240\u6709\u5176\u4ed6\u5019\u9009\u7c7b\u578b\u517c\u5bb9\u7684\u7c7b\u578b\u3002"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u5982\u4e0a\u7684\u4f8b\u5b50\uff0cTypeScript \u9009\u62e9\u6570\u5b57\u6570\u7ec4\u7c7b\u578b( ",(0,p.kt)("inlineCode",{parentName:"p"},"number[]")," ) \u4f5c\u4e3a\u6700\u901a\u7528\u7684\u7c7b\u578b\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u5c06\u5b57\u7b26\u4e32\u6dfb\u52a0\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"items")," \u6570\u7ec4\uff0cTypeScript \u4f1a\u5c06\u5b83\u7684\u7c7b\u578b\u63a8\u65ad\u4e3a\u6570\u5b57\u548c\u5b57\u7b26\u4e32\u7ec4\u6210\u7684\u6570\u7ec4\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"(number | string)[]"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let items = [0, 1, null, 'Hi'];\n")),(0,p.kt)("p",null,"\u5f53 TypeScript \u627e\u4e0d\u5230\u6700\u901a\u7528\u7c7b\u578b\u65f6\uff0c\u5b83\u4f1a\u8fd4\u56de\u8054\u5408\u6570\u7ec4\u7c7b\u578b\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let arr = [new Date(), new RegExp('\\d+')];\n")),(0,p.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0cTypeScript \u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"arr")," \u7684\u7c7b\u578b\u63a8\u65ad\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"(RegExp | Date)[]"),"\u3002"),(0,p.kt)("h2",{id:"\u57fa\u4e8e\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b\u63a8\u65ad"},"\u57fa\u4e8e\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b\u63a8\u65ad"),(0,p.kt)("p",null,"TypeScript \u6839\u636e\u53d8\u91cf\u7684\u4f4d\u7f6e\u6765\u63a8\u65ad\u5b83\u4eec\u7684\u7c7b\u578b\u3002\u8fd9\u79cd\u673a\u5236\u79f0\u4e3a\u4e0a\u4e0b\u6587\u7c7b\u578b\u63a8\u65ad\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"document.addEventListener('click', function (event) {\n    console.log(event.button); // \n});\n")),(0,p.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cTypeScript \u77e5\u9053 ",(0,p.kt)("inlineCode",{parentName:"p"},"event")," \u53c2\u6570\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"MouseEvent")," \u7684\u5b9e\u4f8b\uff0c\u56e0\u4e3a\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"click")," \u4e8b\u4ef6\u3002"),(0,p.kt)("p",null,"\u4f46\u662f\uff0c\u5f53\u4f60\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"click")," \u4e8b\u4ef6\u66f4\u6539\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"scroll")," \u4e8b\u4ef6\u65f6\uff0cTypeScript \u4f1a\u62a5\u9519\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"document.addEventListener('scroll', function (event) {\n    console.log(event.button); // compiler error\n});\n")),(0,p.kt)("p",null,"\u9519\u8bef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Property 'button' does not exist on type 'Event'.(2339)\n")),(0,p.kt)("p",null,"TypeScript \u77e5\u9053\u6b64\u65f6 ",(0,p.kt)("inlineCode",{parentName:"p"},"event")," \u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"UIEvent")," \u7684\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"MouseEvent")," \u7684\u5b9e\u4f8b\u3002\u5e76\u4e14 ",(0,p.kt)("inlineCode",{parentName:"p"},"UIEvent")," \u6ca1\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," \u5c5e\u6027\uff0c\u56e0\u6b64\uff0cTypeScript \u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002"),(0,p.kt)("p",null,"\u4f60\u4f1a\u5728\u591a\u79cd\u573a\u666f\u4e0b\u53d1\u73b0\u4e0a\u4e0b\u6587\u7c7b\u578b\u63a8\u65ad\uff0c\u4f8b\u5982\u51fd\u6570\u8c03\u7528\u65f6\u7684\u4f20\u53c2\u3001\u7c7b\u578b\u58f0\u660e\u3001\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u6570\u7ec4\u7684\u5143\u7d20\uff0creturn \u8bed\u53e5\u4ee5\u53ca\u8d4b\u503c\u8bed\u53e5\u3002"),(0,p.kt)("h2",{id:"\u7c7b\u578b\u63a8\u65ad\u4e0e\u7c7b\u578b\u6ce8\u89e3"},"\u7c7b\u578b\u63a8\u65ad\u4e0e\u7c7b\u578b\u6ce8\u89e3"),(0,p.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u7c7b\u578b\u63a8\u65ad\u548c\u7c7b\u578b\u6ce8\u91ca\u4e4b\u95f4\u7684\u533a\u522b\uff1a"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u63a8\u65ad"),(0,p.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u6ce8\u89e3"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"TypeScript \u731c\u6d4b\u7c7b\u578b"),(0,p.kt)("td",{parentName:"tr",align:null},"\u4f60\u660e\u786e\u5730\u544a\u8bc9 TypeScript \u7c7b\u578b")))),(0,p.kt)("p",null,"\u90a3\u4e48\uff0c\u4ec0\u4e48\u65f6\u5019\u5206\u522b\u4f7f\u7528\u7c7b\u578b\u63a8\u65ad\u548c\u7c7b\u578b\u6ce8\u89e3\u5462\uff1f"),(0,p.kt)("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c\u4f60\u5e94\u8be5\u59cb\u7ec8\u5c3d\u53ef\u80fd\u591a\u5730\u4f7f\u7528\u7c7b\u578b\u63a8\u65ad\u3002\u540c\u65f6\uff0c\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5f53\u4f60\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5e76\u7a0d\u540e\u4e3a\u5176\u8d4b\u503c\u65f6\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5f53\u4f60\u60f3\u8981\u4e00\u4e2a\u65e0\u6cd5\u63a8\u65ad\u7684\u53d8\u91cf\u65f6\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de ",(0,p.kt)("inlineCode",{parentName:"li"},"any")," \u7c7b\u578b\u800c\u4f60\u9700\u8981\u660e\u786e\u5b83\u7684\u6570\u503c\u7c7b\u578b\u65f6\u3002")),(0,p.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5f53\u4f60\u521d\u59cb\u5316\u53d8\u91cf\u3001\u8bbe\u7f6e\u53c2\u6570\u9ed8\u8ba4\u503c\u548c\u51b3\u5b9a\u51fd\u6570\u8fd4\u56de\u7c7b\u578b\u65f6\uff0c\u5c31\u4f1a\u53d1\u751f\u7c7b\u578b\u63a8\u65ad\u3002"),(0,p.kt)("li",{parentName:"ul"},"TypeScript \u4f7f\u7528\u6700\u901a\u7528\u7c7b\u578b\u7b97\u6cd5\u6765\u9009\u62e9\u4e0e\u6240\u6709\u53d8\u91cf\u517c\u5bb9\u7684\u6700\u4f73\u5019\u9009\u7c7b\u578b\u3002"),(0,p.kt)("li",{parentName:"ul"},"TypeScript \u8fd8\u6839\u636e\u53d8\u91cf\u7684\u4f4d\u7f6e\u4f7f\u7528\u4e0a\u4e0b\u6587\u7c7b\u578b\u63a8\u65ad\u6765\u63a8\u65ad\u53d8\u91cf\u7684\u7c7b\u578b\u3002")))}m.isMDXComponent=!0}}]);