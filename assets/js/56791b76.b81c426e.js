"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[772],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>w,frontMatter:()=>v,metadata:()=>k,toc:()=>P});var r=a(7462),o=a(7294),n=a(3905),l=a(6010),s=a(2389),i=a(7392),p=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:n,block:s,defaultValue:m,values:h,groupId:f,className:b}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:P,setTabGroupChoices:T}=(0,p.U)(),[w,O]=(0,o.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=f){const e=P[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,a=_.indexOf(t),r=g[a].value;r!==w&&(E(t),O(r),null!=f&&T(f,String(r)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=_.indexOf(e.currentTarget)+1;a=null!=(r=_[t])?r:_[0];break}case"ArrowLeft":{var o;const t=_.indexOf(e.currentTarget)-1;a=null!=(o=_[t])?o:_[_.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},g.map((e=>{let{value:t,label:a,attributes:n}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:x,onFocus:C,onClick:C},n,{className:(0,l.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,s.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function b(e){let{children:t,hidden:a,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(f,r),hidden:a},t)}const v={},g="Step 4 - Create A Proposal",k={unversionedId:"Guide/step-04",id:"Guide/step-04",title:"Step 4 - Create A Proposal",description:"Step 4A - Click the Create Proposal button",source:"@site/docs/Guide/step-04.md",sourceDirName:"Guide",slug:"/Guide/step-04",permalink:"/KEEZ-Protocol-Documentation/Guide/step-04",draft:!1,editUrl:"https://github.com/keezdao/KEEZ-Protocol-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Guide/step-04.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Step 3 - Governance",permalink:"/KEEZ-Protocol-Documentation/Guide/step-03"},next:{title:"Step 5 - Discover DAOs",permalink:"/KEEZ-Protocol-Documentation/Guide/step-05"}},y={},P=[{value:"Step 4A - Click the <strong>Create Proposal</strong> button",id:"step-4a---click-the-create-proposal-button",level:3},{value:"Step 4B - Select a Proposal Template",id:"step-4b---select-a-proposal-template",level:3},{value:"Voting Parameters Template",id:"voting-parameters-template",level:4},{value:"Send Tokens From DAO Template",id:"send-tokens-from-dao-template",level:4},{value:"Add &amp; Revoke Permissions Template",id:"add--revoke-permissions-template",level:4},{value:"General",id:"general",level:4},{value:"Step 4C - Edit and Submit",id:"step-4c---edit-and-submit",level:3}],T={toc:P};function w(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},T,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"step-4---create-a-proposal"},"Step 4 - Create A Proposal"),(0,n.kt)("h3",{id:"step-4a---click-the-create-proposal-button"},"Step 4A - Click the ",(0,n.kt)("strong",{parentName:"h3"},"Create Proposal")," button"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4-0",src:a(7560).Z,width:"1559",height:"802"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To create a new proposal, a member must have the proposal key permission.")),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Create Proposal")," button. "),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"step-4b---select-a-proposal-template"},"Step 4B - Select a Proposal Template"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4-1",src:a(6395).Z,width:"1904",height:"976"})),(0,n.kt)("p",null,"There are four proposal templates to choose from. Select a template from the tab below:"),(0,n.kt)(h,{mdxType:"Tabs"},(0,n.kt)(b,{value:"voting-parameters",label:"Voting Parameters",mdxType:"TabItem"},(0,n.kt)("h4",{id:"voting-parameters-template"},"Voting Parameters Template"),(0,n.kt)("p",null,"This proposal will allow you to change the default voting parameters of the DAO. For more information, see the information boxes next to the choices. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4-2",src:a(5995).Z,width:"1904",height:"981"}))),(0,n.kt)(b,{value:"send-token-from-dao",label:"Send Tokens From DAO",mdxType:"TabItem"},(0,n.kt)("h4",{id:"send-tokens-from-dao-template"},"Send Tokens From DAO Template"),(0,n.kt)("p",null,"This proposal allows you to send tokens from a vault to another Universal Profile Address. For more information, see the information boxes next to the choices. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4-3",src:a(4128).Z,width:"1906",height:"979"}))),(0,n.kt)(b,{value:"add-revoke",label:"Add & Revoke Permissions",mdxType:"TabItem"},(0,n.kt)("h4",{id:"add--revoke-permissions-template"},"Add & Revoke Permissions Template"),(0,n.kt)("p",null,"This proposal will allow you to add and revoke key permissions from members of the DAO. For more information, see the information boxes next to the choices. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4-4",src:a(7638).Z,width:"1907",height:"980"}))),(0,n.kt)(b,{value:"general",label:"General",mdxType:"TabItem"},(0,n.kt)("h4",{id:"general"},"General"),(0,n.kt)("p",null,"This proposal is a general template for decisions that don't have smart contract execution. For more information, see the information boxes next to the choices. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4-5",src:a(1180).Z,width:"1908",height:"977"})))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"step-4c---edit-and-submit"},"Step 4C - Edit and Submit"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4-6",src:a(482).Z,width:"1902",height:"978"})),(0,n.kt)("p",null,"This page will show the proposal preview before posting it to the DAO profile page. "),(0,n.kt)("p",null,"Here you will see the parameters entered in the Proposal Template, which can be edited via the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button in the top right of the Proposal Preview."))}w.isMDXComponent=!0},7560:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create_A_Proposal_Page_0-e264d90e9d6d6c0057889e3e6430f1c0.png"},6395:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create_A_Proposal_Page_1-b6e99a3e1ba161cf0d0e4477d7735e80.png"},5995:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create_A_Proposal_Page_2-d77cc39349157d35ec0d5837fc8b7e88.png"},4128:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create_A_Proposal_Page_3-85327020f12999a0c8eed5a20b864c95.png"},7638:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create_A_Proposal_Page_4-0f55cf66dec5a764293a32568b1c7487.png"},1180:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create_A_Proposal_Page_5-8d8baf2ed4d8e59131f1ff1c91257e28.png"},482:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create_A_Proposal_Page_6-1b0d31648ed0361f017d77c6ddbeb660.png"}}]);