"use strict";(self.webpackChunkts_docs=self.webpackChunkts_docs||[]).push([[7159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,k=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},p="TypeScript \u62bd\u8c61\u7c7b",i={unversionedId:"classes/typescript-abstract-classes",id:"classes/typescript-abstract-classes",title:"TypeScript \u62bd\u8c61\u7c7b",description:"\u6458\u8981\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u62bd\u8c61\u7c7b\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6765\u5b9a\u4e49\u6d3e\u751f\u7c7b\u7684\u5e38\u89c1\u884c\u4e3a\u3002",source:"@site/docs/classes/typescript-abstract-classes.md",sourceDirName:"classes",slug:"/classes/typescript-abstract-classes",permalink:"/classes/typescript-abstract-classes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript \u9759\u6001\u65b9\u6cd5\u548c\u5c5e\u6027",permalink:"/classes/typescript-static-methods-and-properties"},next:{title:"TypeScript \u63a5\u53e3",permalink:"/interfaces/typescript-interface"}},o={},s=[{value:"TypeScript \u62bd\u8c61\u7c7b\u7b80\u4ecb",id:"typescript-\u62bd\u8c61\u7c7b\u7b80\u4ecb",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-\u62bd\u8c61\u7c7b"},"TypeScript \u62bd\u8c61\u7c7b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6458\u8981"),"\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3 TypeScript \u62bd\u8c61\u7c7b\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6765\u5b9a\u4e49\u6d3e\u751f\u7c7b\u7684\u5e38\u89c1\u884c\u4e3a\u3002"),(0,a.kt)("h2",{id:"typescript-\u62bd\u8c61\u7c7b\u7b80\u4ecb"},"TypeScript \u62bd\u8c61\u7c7b\u7b80\u4ecb"),(0,a.kt)("p",null,"\u62bd\u8c61\u7c7b\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u6d3e\u751f\u7c7b\u7684\u5e38\u89c1\u884c\u4e3a\u3002 \u4e0e\u5e38\u89c4\u7c7b\u4e0d\u540c\uff0c\u62bd\u8c61\u7c7b\u4e0d\u80fd\u76f4\u63a5\u5b9e\u4f8b\u5316\u3002"),(0,a.kt)("p",null,"\u8981\u58f0\u660e\u62bd\u8c61\u7c7b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"abstract")," \u5173\u952e\u5b57\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract class Employee {\n    //...\n}\n")),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u62bd\u8c61\u7c7b\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u62bd\u8c61\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u62bd\u8c61\u65b9\u6cd5\u4e0d\u5305\u542b\u5b9e\u73b0\u3002 \u5b83\u53ea\u5b9a\u4e49\u4e86\u65b9\u6cd5\u7684\u7b7e\u540d\uff0c\u4e0d\u5305\u62ec\u65b9\u6cd5\u4f53\u3002 \u62bd\u8c61\u65b9\u6cd5\u5fc5\u987b\u5728\u6d3e\u751f\u7c7b\u4e2d\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u4e86\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"getSalary()")," \u62bd\u8c61\u65b9\u6cd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Employee")," \u62bd\u8c61\u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract class Employee {\n    constructor(private firstName: string, private lastName: string) {\n    }\n    abstract getSalary(): number\n    get fullName(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n    compensationStatement(): string {\n        return `${this.fullName} makes ${this.getSalary()} a month.`;\n    }\n}\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Employee")," \u7c7b\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"li"},"firstName")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"lastName")," \u5c5e\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getSalary()")," \u65b9\u6cd5\u662f\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\u3002 \u6d3e\u751f\u7c7b\u5c06\u6839\u636e\u5458\u5de5\u7684\u7c7b\u578b\u5b9e\u73b0\u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getFullName()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"compensationStatement()")," \u65b9\u6cd5\u5305\u542b\u8be6\u7ec6\u7684\u5b9e\u73b0\u3002 \u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"compensationStatement()")," \u65b9\u6cd5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"getSalary()")," \u65b9\u6cd5\u3002")),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Employee")," \u7c7b\u662f\u62bd\u8c61\u7c7b\uff0c\u56e0\u6b64\u65e0\u6cd5\u4ece\u4e2d\u521b\u5efa\u65b0\u5bf9\u8c61\u3002 \u4ee5\u4e0b\u8bed\u53e5\u4f1a\u5bfc\u81f4\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let employee = new Employee('John','Doe');\n")),(0,a.kt)("p",null,"\u62a5\u9519\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"error TS2511: Cannot create an instance of an abstract class.\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"FullTimeEmployee")," \u7c7b\u7ee7\u627f\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"Employee")," \u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class FullTimeEmployee extends Employee {\n    constructor(firstName: string, lastName: string, private salary: number) {\n        super(firstName, lastName);\n    }\n    getSalary(): number {\n        return this.salary;\n    }\n}\n")),(0,a.kt)("p",null,"\u5728\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"FullTimeEmployee")," \u7c7b\u4e2d\uff0c\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"salary"),"\u3002 \u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"getSalary()")," \u662f Employee \u7c7b\u7684\u62bd\u8c61\u65b9\u6cd5\uff0c\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"FullTimeEmployee")," \u7c7b\u9700\u8981\u5b9e\u73b0\u8be5\u65b9\u6cd5\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b83\u53ea\u662f\u8fd4\u56de\u5de5\u8d44\uff0c\u6ca1\u6709\u4efb\u4f55\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u4e86\u540c\u6837\u7ee7\u627f\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"Employee")," \u7c7b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Contractor")," \u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Contractor extends Employee {\n    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {\n        super(firstName, lastName);\n    }\n    getSalary(): number {\n        return this.rate * this.hours;\n    }\n}\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Contractor")," \u7c7b\u4e2d\uff0c\u6784\u9020\u51fd\u6570\u521d\u59cb\u5316\u4e86\u8d39\u7387\u548c\u5de5\u65f6\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"getSalary()")," \u65b9\u6cd5\u901a\u8fc7\u5c06\u8d39\u7387\u4e58\u4ee5\u5c0f\u65f6\u6765\u8ba1\u7b97\u5de5\u8d44\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u9996\u5148\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"FullTimeEmployee")," \u5bf9\u8c61\u548c\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Contractor")," \u5bf9\u8c61\uff0c\u7136\u540e\u5c06\u85aa\u916c\u8bed\u53e5\u663e\u793a\u5230\u63a7\u5236\u53f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let john = new FullTimeEmployee('John', 'Doe', 12000);\nlet jane = new Contractor('Jane', 'Doe', 100, 160);\n\nconsole.log(john.compensationStatement());\nconsole.log(jane.compensationStatement());\n")),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"John Doe makes 12000 a month.\nJane Doe makes 16000 a month.\n")),(0,a.kt)("p",null,"\u5f53\u4f60\u60f3\u5728\u4e00\u4e9b\u76f8\u5173\u7c7b\u4e4b\u95f4\u5171\u4eab\u4ee3\u7801\u65f6\uff0c\u4f7f\u7528\u62bd\u8c61\u7c7b\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u505a\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u81f3\u5c11\u6709\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u4f7f\u7528\u62bd\u8c61\u7c7b\uff0c\u4f60\u9700\u8981\u7ee7\u627f\u5b83\u5e76\u63d0\u4f9b\u62bd\u8c61\u65b9\u6cd5\u7684\u5b9e\u73b0\u3002")))}u.isMDXComponent=!0}}]);