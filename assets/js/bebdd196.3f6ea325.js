"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),k=p(a),u=n,N=k["".concat(o,".").concat(u)]||k[u]||d[u]||i;return a?r.createElement(N,l(l({ref:t},m),{},{components:a})):r.createElement(N,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},l="Multisig",s={unversionedId:"Contracts/readme-multisig",id:"Contracts/readme-multisig",title:"Multisig",description:"Public methods",source:"@site/docs/Contracts/readme-multisig.md",sourceDirName:"Contracts",slug:"/Contracts/readme-multisig",permalink:"/Contracts/readme-multisig",draft:!1,editUrl:"https://github.com/keezdao/KEEZ-Protocol-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Contracts/readme-multisig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DAO",permalink:"/Contracts/readme-dao"},next:{title:"Project Explenation",permalink:"/KEEZ Protocol-new/Project Explenation"}},o={},p=[{value:"Public methods",id:"public-methods",level:2},{value:"getNewPermissionHash",id:"getnewpermissionhash",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"claimPermission",id:"claimpermission",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"addPermissions",id:"addpermissions",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"removePermissions",id:"removepermissions",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"proposeExecution",id:"proposeexecution",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"getProposalHash",id:"getproposalhash",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"execute",id:"execute",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Events",id:"events",level:2},{value:"ProposalCreated",id:"proposalcreated",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"ProposalExecuted",id:"proposalexecuted",level:3},{value:"Parameters:",id:"parameters-8",level:4}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multisig"},"Multisig"),(0,n.kt)("h2",{id:"public-methods"},"Public methods"),(0,n.kt)("h3",{id:"getnewpermissionhash"},"getNewPermissionHash"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function getNewPermissionHash(\n  address _from,\n  address _to,\n  bytes32 _permissions\n) external view returns(bytes32 _hash)\n")),(0,n.kt)("p",null,"Get the message needed to be signed for awarding a set of permissions."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_from")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address that awards a set of permissions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_to")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address that receives a set of permissions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The set of permissions that are awarded.")))),(0,n.kt)("h4",{id:"return-values"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_hash")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The message neede to be signed for awarding a new permission.")))),(0,n.kt)("h3",{id:"claimpermission"},"claimPermission"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimPermission(\n  address _from,\n  bytes32 _permissions,\n  bytes memory _signature\n) external\n")),(0,n.kt)("p",null,"Claim a permission using a signature."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_from")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address that has awarded the set of permissions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The set of permissions that are awarded.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_signature")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The signature needed for claiming the set of permissions.")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h4",{parentName:"admonition",id:"requirements"},"Requirements:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_from")," must have the ADD_PERMISSION permission."),(0,n.kt)("li",{parentName:"ul"},"The signer of ",(0,n.kt)("inlineCode",{parentName:"li"},"_signature")," must be ",(0,n.kt)("inlineCode",{parentName:"li"},"_from"),"."))),(0,n.kt)("h3",{id:"addpermissions"},"addPermissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function addPermissions(\n  address _to,\n  bytes32 _permissions\n) external\n")),(0,n.kt)("p",null,"Add a permission."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_to")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address that will receive new permissions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The permissions that will be given to ",(0,n.kt)("inlineCode",{parentName:"td"},"_to"),".")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h4",{parentName:"admonition",id:"requirements-1"},"Requirements:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have ADD_PERMISSION permission"))),(0,n.kt)("h3",{id:"removepermissions"},"removePermissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function removePermissions(\n  address _to,\n  bytes32 _permissions\n) external\n")),(0,n.kt)("p",null,"Remove a permission."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_to")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address that will permissions removed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_permissions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The permissions that will be removed from ",(0,n.kt)("inlineCode",{parentName:"td"},"_to"),".")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h4",{parentName:"admonition",id:"requirements-2"},"Requirements:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have REMOVE_PERMISSION permission"))),(0,n.kt)("h3",{id:"proposeexecution"},"proposeExecution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function removePermissions(\n    string calldata _title,\n    bytes[] calldata _payloads\n  ) external\n")),(0,n.kt)("p",null,"Propose to execute methods on behalf of the multisig."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_title")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Title of the proposal. Used to create the proposal signature.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_payloads")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"An array of payloads that will be executed if the proposal is successful.")))),(0,n.kt)("admonition",{type:"note"}),(0,n.kt)("h3",{id:"getproposalhash"},"getProposalHash"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function getProposalHash(\n    address _signer,\n    bytes10 _proposalSignature,\n    bool _response\n  ) external view returns(bytes32 _hash);\n")),(0,n.kt)("p",null,"Create a unique hash for evert proposal which should be hashed.\nGet the  hash needed to be signed by the proposal voters."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_signer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the voter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_proposalSignature")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Signature The unique identifier of a proposal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_response")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The choice of the voter. (true")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h4",{parentName:"admonition",id:"requirements-3"},"Requirements:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have VOTE permission"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_signer")," must be the same as the address that will sign the message."))),(0,n.kt)("h3",{id:"execute"},"execute"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function execute(\n    bytes10 _proposalSignature,\n    bytes[] calldata _signatures,\n    address[] calldata _signers\n  ) external;\n")),(0,n.kt)("p",null,"Execute a proposal if you have all the necessary signatures."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_proposalSignature")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of a proposal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_signatures")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"An array of signatures representing votes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_signers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"An array of addresses that are the signers of ",(0,n.kt)("inlineCode",{parentName:"td"},"_signatures"),".")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h4",{parentName:"admonition",id:"requirements-4"},"Requirements:")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h3",{id:"proposalcreated"},"ProposalCreated"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"}," event ProposalCreated(bytes10 proposalSignature);\n")),(0,n.kt)("p",null," This event is emited every time a proposal is created."),(0,n.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"proposalSignature")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The signature of the proposal that was created.")))),(0,n.kt)("h3",{id:"proposalexecuted"},"ProposalExecuted"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"}," event ProposalCreated(bytes10 proposalSignature);\n")),(0,n.kt)("p",null," This event is emited every time a proposal is executed."),(0,n.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"proposalSignature")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The signature of the proposal that was executed.")))))}d.isMDXComponent=!0}}]);