"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[5348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,d=u["".concat(o,".").concat(f)]||u[f]||m[f]||r;return n?l.createElement(d,p(p({ref:t},c),{},{components:n})):l.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=f;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[u]="string"==typeof e?e:i,p[1]=a;for(var s=2;s<r;s++)p[s]=n[s];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(7462),i=(n(7294),n(3905));const r={},p="TypeScript if else",a={unversionedId:"control-flow-statements/typescript-if-else",id:"control-flow-statements/typescript-if-else",title:"TypeScript if else",description:"\u6458\u8981\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript if...else \u8bed\u53e5\u3002",source:"@site/docs/control-flow-statements/typescript-if-else.md",sourceDirName:"control-flow-statements",slug:"/control-flow-statements/typescript-if-else",permalink:"/control-flow-statements/typescript-if-else",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b",permalink:"/basic-types/typescript-string-literal-types"},next:{title:"TypeScript switch case",permalink:"/control-flow-statements/typescript-switch-case"}},o={},s=[{value:"TypeScript if \u8bed\u53e5",id:"typescript-if-\u8bed\u53e5",level:2},{value:"TypeScript if...else \u8bed\u53e5",id:"typescript-ifelse-\u8bed\u53e5",level:2},{value:"\u4e09\u5143\u8fd0\u7b97\u7b26 ?:",id:"\u4e09\u5143\u8fd0\u7b97\u7b26-",level:2},{value:"TypeScript if...else if...else \u8bed\u53e5",id:"typescript-ifelse-ifelse-\u8bed\u53e5",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript-if-else"},"TypeScript if else"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6458\u8981"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript ",(0,i.kt)("inlineCode",{parentName:"p"},"if...else")," \u8bed\u53e5\u3002"),(0,i.kt)("h2",{id:"typescript-if-\u8bed\u53e5"},"TypeScript if \u8bed\u53e5"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u6839\u636e\u6761\u4ef6\u6267\u884c\u8bed\u53e5\u3002 \u5982\u679c\u6761\u4ef6\u4e3a\u771f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u5c06\u6267\u884c\u5176\u4f53\u5185\u7684\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"if(condition) {\n   // if-statement\n}\n")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u8bed\u53e5\u8bf4\u660e\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u6765\u589e\u52a0\u8ba1\u6570\u5668\u53d8\u91cf\uff08\u5982\u679c\u5176\u503c\u5c0f\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," \u5e38\u91cf\u7684\u503c\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const max = 100;\nlet counter = 0;\n\nif (counter < max) {\n    counter++;\n}\n\nconsole.log(counter); // 1\n")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1\n")),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u7531\u4e8e\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"counter")," \u4ece\u96f6\u5f00\u59cb\uff0c\u56e0\u6b64\u5b83\u5c0f\u4e8e\u5e38\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"\u3002 \u8868\u8fbe\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"counter < max")," \u7684\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u56e0\u6b64 ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"counter++")," \u8bed\u53e5\u3002"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u5c06\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"counter")," \u521d\u59cb\u5316\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const max = 100;\nlet counter = 100;\n\nif (counter < max) {\n    counter++;\n}\n\nconsole.log(counter); // 100\n")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"100\n")),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u8868\u8fbe\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"counter < max")," \u7684\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u4e0d\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"counter++")," \u8bed\u53e5\u3002 \u56e0\u6b64\uff0c\u8f93\u51fa\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"\u3002"),(0,i.kt)("h2",{id:"typescript-ifelse-\u8bed\u53e5"},"TypeScript if...else \u8bed\u53e5"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u4e2d\u7684\u6761\u4ef6\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," \u65f6\u6267\u884c\u5176\u4ed6\u8bed\u53e5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if...else")," \u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"if(condition) {\n   // if-statements\n} else {\n  // else statements;\n}\n")),(0,i.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e86\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if..else")," \u8bed\u53e5\u7684\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const max = 100;\nlet counter = 100;\n\nif (counter < max) {\n    counter++;\n} else {\n    counter = 1;\n}\n\nconsole.log(counter);\n")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1\n")),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u8868\u8fbe\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"counter < max")," \u7684\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u56e0\u6b64\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u4e2d\u7684\u8bed\u53e5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"counter")," \u53d8\u91cf\u91cd\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"),(0,i.kt)("h2",{id:"\u4e09\u5143\u8fd0\u7b97\u7b26-"},"\u4e09\u5143\u8fd0\u7b97\u7b26 ?:"),(0,i.kt)("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u6761\u4ef6\u8bed\u53e5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e09\u5143\u8fd0\u7b97\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"?:")," \u800c\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"if...else")," \u8bed\u53e5\u6765\u4f7f\u4ee3\u7801\u66f4\u77ed\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const max = 100;\nlet counter = 100;\n\ncounter < max ? counter++ : counter = 1;\n\nconsole.log(counter);\n")),(0,i.kt)("h2",{id:"typescript-ifelse-ifelse-\u8bed\u53e5"},"TypeScript if...else if...else \u8bed\u53e5"),(0,i.kt)("p",null,"\u5f53\u4f60\u60f3\u8981\u6839\u636e\u591a\u4e2a\u6761\u4ef6\u6267\u884c\u4ee3\u7801\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if...else if...else")," \u8bed\u53e5\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if...else if...else")," \u8bed\u53e5\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," \u5206\u652f\uff0c\u4f46\u53ea\u80fd\u6709\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let discount: number;\nlet itemCount = 11;\n\nif (itemCount > 0 && itemCount <= 5) {\n    discount = 5;  // 5% discount\n} else if (itemCount > 5 && itemCount <= 10) {\n    discount = 10; // 10% discount \n} else {\n    discount = 15; // 15%\n}\n\nconsole.log(`You got ${discount}% discount. `)\n")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n")),(0,i.kt)("p",null,"\u6b64\u793a\u4f8b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if...elseif...else")," \u8bed\u53e5\u6839\u636e\u5546\u54c1\u6570\u91cf\u786e\u5b9a\u6298\u6263\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5546\u54c1\u6570\u91cf\u5c11\u4e8e\u6216\u7b49\u4e8e5\uff0c\u6298\u6263\u4e3a 5%\u3002 \u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u5206\u652f\u4e2d\u7684\u8bed\u53e5\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5546\u54c1\u6570\u91cf\u5c0f\u4e8e\u6216\u7b49\u4e8e 10 \u4ef6\uff0c\u6298\u6263\u4e3a 10%\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," \u5206\u652f\u4e2d\u7684\u8bed\u53e5\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u5f53\u5546\u54c1\u6570\u91cf\u5927\u4e8e 10 \u4ef6\u65f6\uff0c\u6298\u6263\u4e3a 15%\u3002 \u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u4e2d\u7684\u8bed\u53e5\u3002"),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5047\u8bbe\u9879\u76ee\u6570\u59cb\u7ec8\u5927\u4e8e\u96f6\u3002 \u4f46\u662f\uff0c\u5982\u679c\u5546\u54c1\u6570\u91cf\u5c0f\u4e8e 0 \u6216\u5927\u4e8e 10\uff0c\u5219\u6298\u6263\u4e3a 15%\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u4ee3\u7801\u66f4\u5065\u58ee\uff0c\u53ef\u4ee5\u4f7f\u7528\u53e6\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," \u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let discount: number;\nlet itemCount = 11;\n\nif (itemCount > 0 && itemCount <= 5) {\n    discount = 5;  // 5% discount\n} else if (itemCount > 5 && itemCount <= 10) {\n    discount = 10; // 10% discount \n} else if (discount > 10) {\n    discount = 15; // 15%\n} else {\n    throw new Error('The number of items cannot be negative!');\n}\n\nconsole.log(`You got ${discount}% discount. `)\n")),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u4ec5\u5f53\u5546\u54c1\u6570\u91cf\u5927\u4e8e 10 \u65f6\uff0c\u6298\u6263\u4e3a 15%\u3002 \u6267\u884c\u7b2c\u4e8c\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," \u5206\u652f\u4e2d\u7684\u8bed\u53e5\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9879\u76ee\u6570\u5c0f\u4e8e\u96f6\uff0c\u5219\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u4e2d\u7684\u8bed\u53e5\u3002"),(0,i.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," \u8bed\u53e5\u6839\u636e\u6761\u4ef6\u6267\u884c\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u5728\u6761\u4ef6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," \u65f6\u6267\u884c\u4ee3\u7801\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," \u5206\u652f\u3002 \u6700\u597d\u4f7f\u7528\u4e09\u5143\u8fd0\u7b97\u7b26 ",(0,i.kt)("inlineCode",{parentName:"li"},"?:")," \u800c\u4e0d\u662f\u7b80\u5355\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"if...else")," \u8bed\u53e5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"if else if...else")," \u8bed\u53e5\u6839\u636e\u591a\u4e2a\u6761\u4ef6\u6267\u884c\u4ee3\u7801\u3002")))}m.isMDXComponent=!0}}]);