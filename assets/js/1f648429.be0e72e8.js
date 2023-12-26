"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?a.createElement(k,p(p({ref:t},o),{},{components:n})):a.createElement(k,p({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<c;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const c={},p="TypeScript switch case",i={unversionedId:"control-flow-statements/typescript-switch-case",id:"control-flow-statements/typescript-switch-case",title:"TypeScript switch case",description:"\u6458\u8981\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript switch...case \u8bed\u53e5\u3002",source:"@site/docs/control-flow-statements/typescript-switch-case.md",sourceDirName:"control-flow-statements",slug:"/control-flow-statements/typescript-switch-case",permalink:"/control-flow-statements/typescript-switch-case",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript if else",permalink:"/control-flow-statements/typescript-if-else"},next:{title:"TypeScript for",permalink:"/control-flow-statements/typescript-for"}},l={},s=[{value:"TypeScript switch case \u8bed\u53e5\u7b80\u4ecb",id:"typescript-switch-case-\u8bed\u53e5\u7b80\u4ecb",level:2},{value:"TypeScript switch case \u8bed\u53e5\u793a\u4f8b",id:"typescript-switch-case-\u8bed\u53e5\u793a\u4f8b",level:2},{value:"1) \u4e00\u4e2a\u7b80\u5355\u7684 TypeScript switch case \u793a\u4f8b",id:"1-\u4e00\u4e2a\u7b80\u5355\u7684-typescript-switch-case-\u793a\u4f8b",level:3},{value:"2\uff09case \u5206\u7ec4\u6837\u4f8b",id:"2case-\u5206\u7ec4\u6837\u4f8b",level:3}],o={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typescript-switch-case"},"TypeScript switch case"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6458\u8981"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript ",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u3002"),(0,r.kt)("h2",{id:"typescript-switch-case-\u8bed\u53e5\u7b80\u4ecb"},"TypeScript switch case \u8bed\u53e5\u7b80\u4ecb"),(0,r.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u7684\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"switch ( expression ) {\n   case value1:\n       // statement 1\n       break;\n   case value2:\n       // statement 2\n       break;\n   case valueN:\n       // statement N\n       break;\n   default: \n       // \n       break;\n}\n")),(0,r.kt)("p",null,"\u600e\u4e48\u8fd0\u884c\u7684\uff1a"),(0,r.kt)("p",null,"\u9996\u5148\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u8ba1\u7b97 ",(0,r.kt)("inlineCode",{parentName:"p"},"expression"),"\u3002"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u5b83\u641c\u7d22\u7b2c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\uff0c\u5176\u8868\u8fbe\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u4e0e\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"(value1, value2, \u2026valueN)")," \u76f8\u540c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u5c06\u6267\u884c\u7b2c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\u4e2d\u503c\u5339\u914d\u7684\u8bed\u53e5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u5339\u914d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u5c06\u67e5\u627e\u53ef\u9009\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \u5b50\u53e5\u3002 \u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \u5b50\u53e5\u53ef\u7528\uff0c\u5219\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \u5b50\u53e5\u4e2d\u7684\u8bed\u53e5\u3002"),(0,r.kt)("p",null,"\u4e0e\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\u5173\u8054\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u8bed\u53e5\u53ef\u786e\u4fdd\u4e00\u65e6 ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\u4e2d\u7684\u8bed\u53e5\u5b8c\u6210\uff0c\u63a7\u5236\u5c31\u4f1a\u8131\u79bb ",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5339\u914d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u8bed\u53e5\uff0c\u5219\u7a0b\u5e8f\u5c06\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u4e2d\u7684\u4e0b\u4e00\u4e2a\u8bed\u53e5\u5904\u7ee7\u7eed\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u6309\u7167\u7ea6\u5b9a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \u5b50\u53e5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u5b50\u53e5\u3002 \u7136\u800c\uff0c\u4e0d\u4e00\u5b9a\u975e\u8981\u5982\u6b64\u3002"),(0,r.kt)("h2",{id:"typescript-switch-case-\u8bed\u53e5\u793a\u4f8b"},"TypeScript switch case \u8bed\u53e5\u793a\u4f8b"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u4e3e\u4e00\u4e9b\u4f7f\u7528 switch\u2026case \u8bed\u53e5\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("h3",{id:"1-\u4e00\u4e2a\u7b80\u5355\u7684-typescript-switch-case-\u793a\u4f8b"},"1) \u4e00\u4e2a\u7b80\u5355\u7684 TypeScript switch case \u793a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u793a\u4f8b\uff0c\u8be5\u793a\u4f8b\u663e\u793a\u57fa\u4e8e\u76ee\u6807 Id \u7684\u6d88\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let targetId = 'btnDelete';\n\nswitch (targetId) {\n    case 'btnUpdate':\n        console.log('Update');\n        break;\n    case 'btnDelete':\n        console.log('Delete');\n        break;\n    case 'btnNew':\n        console.log('New');\n        break;\n}\n")),(0,r.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Delete\n")),(0,r.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"targetId")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"btnDelete"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"switch...case")," \u8bed\u53e5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"targetId")," \u4e0e\u503c\u5217\u8868\u8fdb\u884c\u6bd4\u8f83\u3002 \u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"targetId")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"'btnDelete'")," \u5339\u914d\uff0c\u56e0\u6b64\u6267\u884c\u76f8\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5b50\u53e5\u4e2d\u7684\u8bed\u53e5\u3002"),(0,r.kt)("h3",{id:"2case-\u5206\u7ec4\u6837\u4f8b"},"2\uff09case \u5206\u7ec4\u6837\u4f8b"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6709\u591a\u4e2a case \u5171\u4eab\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u5c06\u5b83\u4eec\u5206\u7ec4\u3002 \u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// change the month and year\nlet month = 2,\n    year = 2020;\n\nlet day = 0;\nswitch (month) {\n    case 1:\n    case 3:\n    case 5:\n    case 7:\n    case 8:\n    case 10:\n    case 12:\n        day = 31;\n        break;\n    case 4:\n    case 6:\n    case 9:\n    case 11:\n        day = 30;\n        break;\n    case 2:\n        // leap year\n        if (((year % 4 == 0) &&\n            !(year % 100 == 0))\n            || (year % 400 == 0))\n            day = 29;\n        else\n            day = 28;\n        break;\n    default:\n        throw Error('Invalid month');\n}\n\nconsole.log(`The month ${month} in ${year} has ${day} days`);\n")),(0,r.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The month 2 in 2020 has 29 days\n")),(0,r.kt)("p",null,"\u6b64\u793a\u4f8b\u8fd4\u56de\u7279\u5b9a\u6708\u4efd\u548c\u5e74\u4efd\u7684\u5929\u6570\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6708\u4efd\u4e3a 1,3,5,7,8,12\uff0c\u5219\u5929\u6570\u4e3a 31\u3002\u5982\u679c\u6708\u4efd\u4e3a 4,6,9,\u6216 11\uff0c\u5219\u5929\u6570\u4e3a 30\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6708\u4efd\u4e3a 2 \u5e76\u4e14\u5e74\u4efd\u4e3a\u95f0\u5e74\uff0c\u5219\u8fd4\u56de 29 \u5929\uff0c\u5426\u5219\u8fd4\u56de 28 \u5929\u3002"))}u.isMDXComponent=!0}}]);