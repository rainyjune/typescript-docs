"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[7],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),y=p,k=m["".concat(o,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:p,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),p=(n(7294),n(3905));const a={},l="TypeScript object \u7c7b\u578b",i={unversionedId:"basic-types/typescript-object-type",id:"basic-types/typescript-object-type",title:"TypeScript object \u7c7b\u578b",description:"\u7b80\u4ecb\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u7684 object \u7c7b\u578b\u4ee5\u53ca\u5982\u4f55\u7f16\u5199\u66f4\u51c6\u786e\u7684 object \u7c7b\u578b\u58f0\u660e\u3002",source:"@site/docs/basic-types/typescript-object-type.md",sourceDirName:"basic-types",slug:"/basic-types/typescript-object-type",permalink:"/basic-types/typescript-object-type",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript Boolean \u7c7b\u578b",permalink:"/basic-types/typescript-boolean"},next:{title:"typescript-array-type",permalink:"/basic-types/typescript-array-type"}},o={},c=[{value:"TypeScript object \u7c7b\u578b\u4ecb\u7ecd",id:"typescript-object-\u7c7b\u578b\u4ecb\u7ecd",level:2},{value:"object \u4e0e Object",id:"object-\u4e0e-object",level:2},{value:"\u7a7a\u7c7b\u578b {}",id:"\u7a7a\u7c7b\u578b-",level:3},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript-object-\u7c7b\u578b"},"TypeScript object \u7c7b\u578b"),(0,p.kt)("p",null,"\u7b80\u4ecb\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u4ee5\u53ca\u5982\u4f55\u7f16\u5199\u66f4\u51c6\u786e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u58f0\u660e\u3002"),(0,p.kt)("h2",{id:"typescript-object-\u7c7b\u578b\u4ecb\u7ecd"},"TypeScript object \u7c7b\u578b\u4ecb\u7ecd"),(0,p.kt)("p",null,"TypeScript ",(0,p.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u4ee3\u8868\u4e86\u6240\u6709\u4e0d\u5c5e\u4e8e\u539f\u59cb\u7c7b\u578b\u7684\u503c\u3002"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u662f TypeScript \u4e2d\u7684\u539f\u59cb\u7c7b\u578b\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"number")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"bigint")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"string")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"boolean")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"null")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"undefined")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"symbol"))),(0,p.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e86\u5982\u4f55\u58f0\u660e\u4e00\u4e2a\u5305\u542b\u5bf9\u8c61\u7684\u53d8\u91cf\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let employee: object;\n\nemployee = {\n    firstName: 'John',\n    lastName: 'Doe',\n    age: 25,\n    jobTitle: 'Web Developer'\n};\n\nconsole.log(employee);\n")),(0,p.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  firstName: 'John',       \n  lastName: 'Doe',\n  age: 25,\n  jobTitle: 'Web Developer'\n}\n")),(0,p.kt)("p",null,"\u5982\u679c\u5c06\u539f\u59cb\u503c\u91cd\u65b0\u5206\u914d\u7ed9 employee \u5bf9\u8c61\uff0c\u4f60\u5c06\u5f97\u5230\u9519\u8bef\u4fe1\u606f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'employee = "Jane";\n')),(0,p.kt)("p",null,"\u9519\u8bef\u4fe1\u606f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"error TS2322: Type '\"Jane\"' is not assignable to type 'object'.\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"employee")," \u5bf9\u8c61\u7684\u7c7b\u578b\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"object"),"\uff0c\u5b83\u6709\u56fa\u5b9a\u7684\u5c5e\u6027\u5217\u8868\u3002\u5982\u679c\u4f60\u5c1d\u8bd5\u8bbf\u95ee\u5bf9\u8c61\u4e0a\u4e0d\u5b58\u5728\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"employee")," \u5c5e\u6027\uff0c\u5c06\u5f97\u5230\u9519\u8bef\u4fe1\u606f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(employee.hireDate);\n")),(0,p.kt)("p",null,"\u62a5\u9519:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"error TS2339: Property 'hireDate' does not exist on type 'object'.\n")),(0,p.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4e0a\u9762\u7684\u8bed\u53e5\u5728 JavaScript \u4e2d\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f1a\u8fd4\u56de ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),(0,p.kt)("p",null,"\u8981\u663e\u5f0f\u6307\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"employee")," \u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u9996\u5148\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u58f0\u660e ",(0,p.kt)("inlineCode",{parentName:"p"},"employee")," \u5bf9\u8c61\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let employee: {\n    firstName: string;\n    lastName: string;\n    age: number;\n    jobTitle: string;\n};\n")),(0,p.kt)("p",null,"\u7136\u540e\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"employee")," \u5bf9\u8c61\u5206\u914d\u7ed9\u542b\u6709\u5176\u5c5e\u6027\u7684\u5bf9\u8c61\u5b57\u9762\u91cf\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"employee = {\n    firstName: 'John',\n    lastName: 'Doe',\n    age: 25,\n    jobTitle: 'Web Developer'\n};\n")),(0,p.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u5c06\u4e24\u79cd\u8bed\u6cd5\u7ec4\u5408\u5728\u540c\u4e00\u4e2a\u8bed\u53e5\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let employee: {\n    firstName: string;\n    lastName: string;\n    age: number;\n    jobTitle: string;\n} = {\n    firstName: 'John',\n    lastName: 'Doe',\n    age: 25,\n    jobTitle: 'Web Developer'\n};\n")),(0,p.kt)("h2",{id:"object-\u4e0e-object"},"object \u4e0e Object"),(0,p.kt)("p",null,"TypeScript \u6709\u53e6\u4e00\u79cd ",(0,p.kt)("inlineCode",{parentName:"p"},"Object")," \u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"O")," \u5b57\u6bcd\u5927\u5199\u547d\u540d\u7684\u7c7b\u578b\u3002\u4e86\u89e3\u5b83\u4eec\u4e4b\u95f4\u7684\u533a\u522b\u5f88\u91cd\u8981\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u8868\u793a\u6240\u6709\u975e\u539f\u59cb\u503c\uff0c\u800c\u7c7b\u578b ",(0,p.kt)("inlineCode",{parentName:"p"},"Object")," \u63cf\u8ff0\u6240\u6709\u5bf9\u8c61\u7684\u529f\u80fd\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u5177\u6709\u4efb\u4f55\u5bf9\u8c61\u90fd\u53ef\u4ee5\u8bbf\u95ee\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"toString()")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"valueOf()")," \u65b9\u6cd5\u3002"),(0,p.kt)("h3",{id:"\u7a7a\u7c7b\u578b-"},"\u7a7a\u7c7b\u578b {}"),(0,p.kt)("p",null,"TypeScript \u6709\u53e6\u4e00\u79cd\u7c7b\u578b\uff0c\u79f0\u4e3a\u7a7a\u7c7b\u578b\uff0c\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"{}")," \u8868\u793a\uff0c\u5b83\u4e0e\u5bf9\u8c61\u7c7b\u578b\u975e\u5e38\u76f8\u4f3c\u3002"),(0,p.kt)("p",null,"\u7a7a\u7c7b\u578b ",(0,p.kt)("inlineCode",{parentName:"p"},"{}")," \u63cf\u8ff0\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u672c\u8eab\u6ca1\u6709\u5c5e\u6027\u3002\u5982\u679c\u5c1d\u8bd5\u8bbf\u95ee\u6b64\u7c7b\u5bf9\u8c61\u7684\u5c5e\u6027\uff0cTypeScript \u5c06\u89e6\u53d1\u7f16\u8bd1\u65f6\u9519\u8bef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let vacant: {};\nvacant.firstName = 'John';\n")),(0,p.kt)("p",null,"\u9519\u8bef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"error TS2339: Property 'firstName' does not exist on type '{}'.\n")),(0,p.kt)("p",null,"\u4f46\u662f\u53ef\u4ee5\u8bbf\u95ee\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u4e0a\u58f0\u660e\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\u53ef\u901a\u8fc7\u539f\u578b\u94fe\u5728\u5bf9\u8c61\u4e0a\u4f7f\u7528\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let vacant: {} = {};\n\nconsole.log(vacant.toString());\n")),(0,p.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"[object Object]\n")),(0,p.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"TypeScript ",(0,p.kt)("inlineCode",{parentName:"li"},"object")," \u7c7b\u578b\u8868\u793a\u4efb\u4f55\u4e0d\u662f\u539f\u59cb\u503c\u7684\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u800c ",(0,p.kt)("inlineCode",{parentName:"li"},"Object")," \u7c7b\u578b\u63cf\u8ff0\u4e86\u6240\u6709\u5bf9\u8c61\u4e0a\u53ef\u7528\u7684\u529f\u80fd\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u7a7a\u7c7b\u578b ",(0,p.kt)("inlineCode",{parentName:"li"},"{}")," \u6307\u7684\u662f\u4e00\u4e2a\u672c\u8eab\u6ca1\u6709\u5c5e\u6027\u7684\u5bf9\u8c61\u3002")))}m.isMDXComponent=!0}}]);