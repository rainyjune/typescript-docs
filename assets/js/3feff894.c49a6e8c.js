"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=o,f=u["".concat(c,".").concat(b)]||u[b]||y[b]||p;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const p={},a="TypeScript Boolean \u7c7b\u578b",i={unversionedId:"basic-types/typescript-boolean",id:"basic-types/typescript-boolean",title:"TypeScript Boolean \u7c7b\u578b",description:"\u7b80\u4ecb\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684 boolean \u6570\u636e\u7c7b\u578b\u3002",source:"@site/docs/basic-types/typescript-boolean.md",sourceDirName:"basic-types",slug:"/basic-types/typescript-boolean",permalink:"/basic-types/typescript-boolean",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript String \u7c7b\u578b",permalink:"/basic-types/typescript-string"},next:{title:"TypeScript object \u7c7b\u578b",permalink:"/basic-types/typescript-object-type"}},c={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript-boolean-\u7c7b\u578b"},"TypeScript Boolean \u7c7b\u578b"),(0,o.kt)("p",null,"\u7b80\u4ecb\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," \u6570\u636e\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"TypeScript \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," \u7c7b\u578b\u5141\u8bb8\u4e24\u4e2a\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u5b83\u662f TypeScript \u4e2d\u7684\u539f\u59cb\u7c7b\u578b\u4e4b\u4e00\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let pending: boolean;\npending = true;\n// after a while\n// ..\npending = false;\n")),(0,o.kt)("p",null,"JavaScript \u4e2d\u8fd8\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," \u7c7b\u578b\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," \u7c7b\u578b\u7684\u5b57\u6bcd ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," \u662f\u5927\u5199\u7684\uff0c\u8fd9\u70b9\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," \u7c7b\u578b\u4e0d\u540c\u3002"),(0,o.kt)("p",null,"\u6700\u597d\u907f\u514d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," \u7c7b\u578b\u3002"))}u.isMDXComponent=!0}}]);