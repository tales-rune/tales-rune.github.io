"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{72767:function(e,t,a){a.d(t,{_f:function(){return n._}});var n=a(29579);a(73772)},83566:function(e,t,a){a.d(t,{Z:function(){return ec}});var n=a(12691),i=a(75271),r=a(26686),o=a(62458),l=a(77818),s=a(56309),d=a(89350),c=a(28017),p=a(81490),m=a(5009),h=a(4535),g=a(29660),u=a(49362),_=a(21287),f=a(96257),Z=a(76056),x=a(74399),b=a(3989),w=a(83105),y=a(74724),v=a(62984);function k(){let e=(0,d.Z)();return(0,n.tZ)(c.Z,{sx:{px:2,py:3,textAlign:"center"},children:(0,n.BX)(v.Z,{color:e.palette.grey[500],fontSize:14,children:["2024 ",l.ENV_CONFIG.BRAND_NAME_EN]})})}var R=a(29597),C=a(64880);let S=e=>({itemGap:(null==e?void 0:e.itemGap)||4,iconSize:(null==e?void 0:e.iconSize)||24,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||44,itemSubHeight:(null==e?void 0:e.itemSubHeight)||36,itemPadding:(null==e?void 0:e.itemPadding)||"4px 8px 4px 12px",itemRadius:(null==e?void 0:e.itemRadius)||8,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1}),P=e=>({itemGap:(null==e?void 0:e.itemGap)||7,iconSize:(null==e?void 0:e.iconSize)||22,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||32,itemSubHeight:(null==e?void 0:e.itemSubHeight)||34,itemPadding:(null==e?void 0:e.itemPadding)||"0 6px 0 6px",itemBorderBottom:(null==e?void 0:e.itemBorderBottom)||"2px solid transparent",itemRadius:(null==e?void 0:e.itemRadius)||0,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1});var B=a(64550),H=a(65201),N=a(39368),E=a(2846),z=a(14274),F=a(14832),W=a(92941);let L=(0,N.ZP)(F.Z,{shouldForwardProp:e=>"active"!==e&&"config"!==e})(e=>{let{active:t,depth:a,config:n,theme:i}=e,r=1!==a,o=a>2,l={root:{color:"light"===i.palette.mode?i.palette.primary.main:i.palette.primary.light,backgroundColor:(0,E.Fq)(i.palette.primary.main,.08),"&:hover":{backgroundColor:(0,E.Fq)(i.palette.primary.main,.16)}},sub:{color:i.palette.text.primary,backgroundColor:"transparent","&:hover":{backgroundColor:i.palette.action.hover}}};return{padding:n.itemPadding,borderRadius:n.itemRadius,minHeight:n.itemRootHeight,color:i.palette.text.secondary,...t&&{...l.root},...r&&{minHeight:n.itemSubHeight,...t&&{...l.sub}},...o&&{paddingLeft:i.spacing(a)}}}),I=(0,N.ZP)(z.Z)(e=>{let{size:t}=e;return{width:t,height:t,alignItems:"center",justifyContent:"center"}}),M=(0,N.ZP)("span",{shouldForwardProp:e=>"active"!==e})(e=>{let{active:t,theme:a}=e;return{width:4,height:4,borderRadius:"50%",backgroundColor:a.palette.text.disabled,transition:a.transitions.create(["transform"],{duration:a.transitions.duration.shorter}),...t&&{transform:"scale(2)",backgroundColor:a.palette.primary.main}}}),T=(0,N.ZP)(W.Z,{shouldForwardProp:e=>"config"!==e})(e=>{let{config:t,theme:a}=e;return{...a.typography.overline,fontSize:12,cursor:"pointer",display:"inline-flex",padding:t.itemPadding,paddingTop:a.spacing(2),marginBottom:t.itemGap,paddingBottom:a.spacing(1),color:a.palette.text.disabled,transition:a.transitions.create(["color"],{duration:a.transitions.duration.shortest}),"&:hover":{color:a.palette.text.primary}}});var G=a(82691),q=a.n(G);function X(e,t,a){let{pathname:n,asPath:r}=(0,Z.useRouter)();return(0,i.useMemo)(()=>{let i=t.length>0;return 1===a&&i?function e(t,a,n){let{length:i}=t||[];for(let r=0;r<i;r++){let i=t[r];if(!q()(i.children))return e(i.children,a,n);if(O(i.path||"",a,n))return!0}return!1}(t,n,r):O(e,n,r)},[e,n,r])}function O(e,t,a){let n=e.startsWith("#"),i="/"===e?"/":"".concat(e);return!n&&t===i||!n&&a===i}var D=a(44018),Y=a(86048),A=a(28270);function K(e){let{item:t,open:a,depth:i,active:r,config:o,externalLink:l,...s}=e,{name:d,path:c,icon:p,info:m,children:h,disabled:g,caption:u,roles:_}=t,f=1!==i,Z=!!p&&!(null==p?void 0:p.includes("/")),x=!q()(_)&&!_.includes("".concat(o.currentRole)),b=(0,n.BX)(L,{disableGutters:!0,disabled:!!g,active:r,depth:i,config:o,...s,children:[Z&&!f&&(0,n.tZ)(I,{size:o.iconSize,children:(0,n.tZ)(R.Z,{icon:p||""})}),f&&(0,n.tZ)(I,{size:o.iconSize,children:(0,n.tZ)(M,{active:r})}),!(o.hiddenLabel&&!f)&&(0,n.tZ)(Y.Z,{primary:d,secondary:u?(0,n.tZ)(D.Z,{title:u,placement:"top-start",children:(0,n.tZ)("span",{children:u})}):null,primaryTypographyProps:{noWrap:!0,typography:"body2",textTransform:"capitalize",fontWeight:r?"fontWeightSemiBold":"fontWeightMedium"},secondaryTypographyProps:{noWrap:!0,component:"span",typography:"caption",color:"text.disabled"}}),m&&(0,n.tZ)(w.Z,{component:"span",sx:{ml:1,lineHeight:0},children:m}),!q()(h)&&(0,n.tZ)(R.Z,{width:16,icon:a?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill",sx:{ml:1,flexShrink:0}})]});return x?null:l?(0,n.tZ)(A.Z,{href:c||"",target:"_blank",rel:"noopener",underline:"none",color:"inherit",sx:{...g&&{cursor:"default"}},children:b}):h.length>0?b:(0,n.tZ)(A.Z,{href:c||"",underline:"none",color:"inherit",sx:{...g&&{cursor:"default"}},children:b})}function V(e){let{data:t,depth:a,hasChild:r,config:o}=e,{pathname:l}=(0,Z.useRouter)(),s=X(t.path||"",t.children,a),[d,c]=(0,i.useState)(s),p=(t.path||"").includes("http")||(t.path||"").includes("https"),m=(0,i.useCallback)(()=>{c(e=>!e)},[]),h=(0,i.useCallback)(()=>{c(!1)},[]);return(0,i.useEffect)(()=>{s||h()},[l]),(0,n.BX)(n.HY,{children:[(0,n.tZ)(K,{item:t,depth:a,open:d,active:s,externalLink:p,onClick:m,config:o}),r&&(0,n.tZ)(H.Z,{in:d,unmountOnExit:!0,children:(0,n.tZ)(j,{data:t.children,depth:a,config:o})})]})}function j(e){let{data:t,depth:a,config:i}=e;return(0,n.tZ)(w.Z,{component:"ul",sx:{display:"flex",flexDirection:"column",gap:"".concat(i.itemGap,"px"),m:0,p:0},children:t.map(e=>(0,n.tZ)(B.ZP,{disablePadding:!0,sx:{display:"block"},children:(0,n.tZ)(V,{data:e,depth:a+1,hasChild:!!e.children.length,config:i})},e.name+e.path))})}var U=(0,i.memo)(function(e){let{data:t,config:a,sx:i,...r}=e;return(0,n.tZ)(c.Z,{component:"nav",sx:{display:"flex",px:"16px",flex:"1 1 auto",...i},...r,children:(0,n.tZ)(w.Z,{component:"ul",sx:{m:0,p:0},children:t.map((e,t)=>(0,n.tZ)(J,{subheader:e.subHeader,items:e.list,config:S(a)},e.subHeader||t))})})});function J(e){let{subheader:t,items:a,config:r}=e,[o,l]=(0,i.useState)(!0),s=(0,i.useCallback)(()=>{l(e=>!e)},[]),d=(0,n.tZ)(w.Z,{component:"ul",sx:{display:"flex",flexDirection:"column",gap:"".concat(r.itemGap,"px"),m:0,p:0},children:a.map(e=>(0,n.tZ)(B.ZP,{disablePadding:!0,sx:{display:"block"},children:(0,n.tZ)(V,{data:e,depth:1,hasChild:!!e.children.length,config:r})},e.name+e.path))});return(0,n.tZ)(B.ZP,{disablePadding:!0,sx:{display:"block"},children:t?(0,n.BX)(n.HY,{children:[(0,n.tZ)(T,{component:"div",disableSticky:!0,config:r,onClick:s,children:t}),(0,n.tZ)(H.Z,{in:o,children:d})]}):d})}var $=a(70029),Q=a(42354),ee=a(55737),et=a(7725);let ea=(0,N.ZP)(F.Z,{shouldForwardProp:e=>"active"!==e&&"config"!==e})(e=>{let{active:t,open:a,depth:n,config:i,theme:r}=e,o={color:"light"===r.palette.mode?r.palette.primary.main:r.palette.primary.light,backgroundColor:(0,E.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity),borderRadius:r.shape.borderRadius},l={color:r.palette.text.primary,borderBottom:"2px solid ".concat(r.palette.primary.main),backgroundColor:"transparent"},s={color:r.palette.text.primary,backgroundColor:r.palette.action.selected};return 1!==n?{flexShrink:0,margin:0,padding:r.spacing(0,1),paddingTop:4,borderRadius:8,minHeight:i.itemSubHeight,color:r.palette.text.secondary,...t&&{...s},...a&&!t&&{color:r.palette.text.primary,backgroundColor:r.palette.action.hover}}:{flexShrink:0,marginRight:i.itemGap,padding:i.itemPadding,borderBottom:i.itemBorderBottom,borderRadius:i.itemRadius,minHeight:i.itemRootHeight,color:r.palette.text.primary,transition:r.transitions.create("border-bottom",{easing:r.transitions.easing.easeInOut}),"&:hover":l,...t&&{...o,"&:hover":{...o}},...a&&!t&&{borderBottom:"2px solid ".concat(r.palette.primary.main)}}});(0,N.ZP)(z.Z)(e=>{let{size:t}=e;return{width:t,height:t,flexShrink:0,marginRight:0}});let en=(0,i.forwardRef)((e,t)=>{let{item:a,depth:i,open:r,active:o,externalLink:l,config:s,...d}=e,{name:c,path:p,icon:m,info:h,children:g,disabled:u,caption:_,roles:f}=a,Z=1!==i,x=!q()(f)&&!f.includes("".concat(s.currentRole)),b=(0,n.BX)(ea,{disableRipple:!0,ref:t,open:r,depth:i,active:o,disabled:!!u,config:s,...d,children:[!(s.hiddenLabel&&!Z)&&(0,n.tZ)(Y.Z,{primary:c,primaryTypographyProps:{noWrap:!0,textTransform:"capitalize",fontWeight:o?"fontWeightBold":"fontWeightMedium",...Z&&{fontWeight:o?"fontWeightSemiBold":"fontWeightMedium"}}}),h&&(0,n.tZ)(w.Z,{component:"span",sx:{ml:.5,lineHeight:0},children:h}),_&&(0,n.tZ)(D.Z,{title:_,arrow:!0,children:(0,n.tZ)(R.Z,{width:16,icon:"eva:info-outline",sx:{ml:.5,color:"text.disabled"}})}),!q()(g)&&(0,n.tZ)(R.Z,{icon:Z?"eva:arrow-ios-forward-fill":"eva:arrow-ios-downward-fill",width:16,sx:{flexShrink:0,ml:.5}})]});return x?null:l?(0,n.tZ)(A.Z,{href:p||"",target:"_blank",rel:"noopener",underline:"none",color:"inherit",sx:{...u&&{cursor:"default"}},children:b}):(0,n.tZ)(A.Z,{href:p||"",underline:"none",sx:{...u&&{cursor:"default"}},children:b})});function ei(e){let{data:t,depth:a,hasChild:r,config:o}=e,l=(0,i.useRef)(null),{pathname:s}=(0,Z.useRouter)(),d=X(t.path||"",t.children,a),c=(t.path||"").includes("http")||(t.path||"").includes("https"),[p,m]=(0,i.useState)(!1);(0,i.useEffect)(()=>{p&&g()},[s]),(0,i.useEffect)(()=>{let e=Array.from(document.querySelectorAll(".".concat(Q.Z.root)));document.body.style.overflow="",document.body.style.padding="",e.forEach(e=>{e.style.padding=""})},[p]);let h=()=>{m(!0)},g=()=>{m(!1)};return(0,n.BX)(n.HY,{children:[(0,n.tZ)(en,{ref:l,item:t,depth:a,open:p,active:d,externalLink:c,onMouseEnter:h,onMouseLeave:g,config:o}),r&&(0,n.tZ)(ee.ZP,{open:p,anchorEl:l.current,anchorOrigin:1===a?{vertical:"bottom",horizontal:"left"}:{vertical:"center",horizontal:"right"},transformOrigin:1===a?{vertical:"top",horizontal:"left"}:{vertical:"center",horizontal:"left"},slotProps:{paper:{onMouseEnter:h,onMouseLeave:g}},disableRestoreFocus:!0,sx:{pointerEvents:"none",["& .".concat(et.Z.paper)]:{width:160,...p&&{pointerEvents:"auto"}}},children:(0,n.tZ)(er,{data:t.children,depth:a,config:o})})]})}function er(e){let{data:t,depth:a,config:i}=e;return(0,n.tZ)(c.Z,{spacing:.5,children:t.map(e=>(0,n.tZ)(ei,{data:e,depth:a+1,hasChild:e.children.length>0,config:i},e.name+e.path))})}var eo=(0,i.memo)(function(e){let{data:t,config:a,sx:i,...r}=e;return(0,n.tZ)(c.Z,{direction:"row",sx:{mx:"auto",...$.O1.y,...i},...r,children:t.map((e,t)=>(0,n.tZ)(el,{items:e.list,config:P(a)},e.subHeader||t))})});function el(e){let{items:t,config:a}=e;return(0,n.tZ)(n.HY,{children:t.map(e=>(0,n.tZ)(ei,{data:e,depth:1,hasChild:e.children.length>0,config:a},e.name+e.path))})}function es(e){let{openNav:t,onCloseNav:a}=e,{pathname:r}=(0,Z.useRouter)(),{data:o=[]}=(0,x.gW)();(0,i.useEffect)(()=>{t&&a()},[r]);let d=(0,n.BX)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pt:"20px",pb:"8px",pl:"28px",pr:"16px"},children:[(0,n.tZ)(_.Z,{href:"".concat(l.ENV_CONFIG.URL).concat(s.nM.HOME)}),(0,n.tZ)(g.Z,{onClick:a,children:(0,n.tZ)(R.Z,{icon:"mingcute:close-line"})})]}),p=(0,n.BX)(C.Z,{sx:{"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"},height:1},children:[(0,n.tZ)(U,{data:o}),(0,n.tZ)(k,{})]});return(0,n.BX)(w.Z,{component:"nav",sx:{flexShrink:{lg:0},width:{lg:b.w.W_VERTICAL}},children:[(0,n.tZ)(u.S_,{}),(0,n.BX)(y.ZP,{open:t,onClose:a,anchor:"left",PaperProps:{sx:{width:b.w.W_VERTICAL}},children:[d,p]})]})}var ed=(0,i.memo)(function(e){let{openNav:t,onCloseNav:a}=e,{data:r=[]}=(0,x.gW)();return(0,i.useEffect)(()=>{t&&a()},[a,t]),(0,n.tZ)(p.Z,{component:"nav",position:"static",color:"transparent",sx:{width:"auto",boxShadow:0},children:(0,n.tZ)(m.Z,{sx:{padding:"0 !important"},children:(0,n.tZ)(eo,{data:r})})})});function ec(){let e=(0,d.Z)(),t=function(e){let[t,a]=(0,i.useState)(!1);return{value:t,onTrue:(0,i.useCallback)(()=>{a(!0)},[]),onFalse:(0,i.useCallback)(()=>{a(!1)},[]),onToggle:(0,i.useCallback)(()=>{a(e=>!e)},[]),setValue:a}}(),a=(0,r.F)("up","lg"),{themeStretch:Z}=(0,o.K$)(),x=(0,n.tZ)(n.HY,{children:a&&(0,n.tZ)(_.Z,{href:"".concat(l.ENV_CONFIG.URL).concat(s.nM.HOME),sx:{mr:2.5}})}),b=(0,n.tZ)(n.HY,{children:a?(0,n.tZ)(ed,{openNav:t.value,onCloseNav:t.onFalse}):(0,n.BX)(n.HY,{children:[(0,n.tZ)(g.Z,{onClick:t.onTrue,children:(0,n.tZ)(f.Z,{src:"/assets/icons/navbar/ic_menu_item.svg"})}),(0,n.tZ)(es,{openNav:t.value,onCloseNav:t.onFalse})]})}),w=(0,n.tZ)(c.Z,{flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:{xs:.5,sm:1.5},children:(0,n.tZ)(u.ls,{})});return(0,n.tZ)(p.Z,{sx:{alignItems:"center",flexDirection:"row",zIndex:e.zIndex.appBar+1,transition:e.transitions.create(["height"],{duration:e.transitions.duration.shorter}),bgcolor:"background.default",borderBottom:"solid 1px ".concat(e.palette.divider),boxShadow:e.customShadows.z8},children:(0,n.tZ)(h.Z,{maxWidth:!Z&&"xl",children:(0,n.BX)(m.Z,{sx:{padding:"0 !important"},children:[x,b,w]})})})}},10646:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(12691),i=a(83105),r=a(26686);function o(e){let{children:t}=e,a=(0,r.F)("up","lg");return(0,n.tZ)(i.Z,{component:"main",sx:{pt:"104px",pb:"40px",...a&&{pt:"104px",pb:"40px"}},children:t})}},74399:function(e,t,a){a.d(t,{mT:function(){return d},KY:function(){return m},gW:function(){return o},pV:function(){return u}});var n=a(39846);let i=[{subHeader:"일반",list:[{id:1,name:"보스알리미",path:"/notification/boss",depth:1,children:[],roles:[],type:"",disabled:!1,sort:0},{id:5,name:"시뮬레이션",path:"/simulations",depth:1,children:[],roles:[],type:"",disabled:!1,sort:0},{id:6,name:"계산기",path:"/calculators",depth:1,children:[],roles:[],type:"",disabled:!1,sort:0},{id:8,name:"정보모아",path:"/information",depth:1,children:[],roles:[],type:"",disabled:!1,sort:0},{id:9,name:"업데이트로그",path:"/update",depth:1,children:[],roles:[],type:"",disabled:!1,sort:0}]}],r=()=>i,o=()=>(0,n.a)({queryKey:["menus"],queryFn:r,enabled:!1}),l=[{id:1,name:"골론",image:"gorlon.png",location:"베리넨 루미",drop_link:"https://tales.nexon.com/News/DevNote/668",appearance_times:[{time:"00:00"},{time:"06:00"},{time:"12:00"},{time:"18:00"}]},{id:2,name:"골모답",image:"gormodap.png",location:"베리넨 루미",drop_link:"https://tales.nexon.com/News/DevNote/668",appearance_times:[{time:"05:00"},{time:"13:00"},{time:"21:00"}]},{id:3,name:"아칸",image:"akan.png",location:"아크론 요새",drop_link:"https://tales.nexon.com/News/DevNote/708",appearance_times:[{time:"14:30"},{time:"21:30"}]},{id:4,name:"스페르첸드",image:"sperchend.png",location:"아크론 지하 요새",drop_link:"https://tales.nexon.com/News/DevNote/682",appearance_times:[{time:"01:00"},{time:"04:00"},{time:"08:00"},{time:"16:00"},{time:"19:00"},{time:"23:00"}]},{id:5,name:"파멸의 기원",image:"originofruin.png",location:"중앙 군영",drop_link:"https://tales.nexon.com/News/DevNote/723",appearance_times:[{time:"00:30"},{time:"11:00"},{time:"20:00"}]}],s=()=>l,d=()=>(0,n.a)({queryKey:["bosses"],queryFn:s,enabled:!1}),c=[{id:"1",name:"루시안 칼츠",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Lucian.png",birthday:"04.04"},{id:"2",name:"보리스 진네만",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Boris.png",birthday:"07.12"},{id:"3",name:"막시민 리프크네",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Maximin.png",birthday:"06.07"},{id:"4",name:"시벨린 우",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Sivelin.png",birthday:"12.20"},{id:"5",name:"조슈아 폰 아르님",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Josua.png",birthday:"02.28"},{id:"6",name:"란지에 로젠 크란츠",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Lanziee.png",birthday:"02.19"},{id:"7",name:"이자크 듀카스텔",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Issac.png",birthday:"05.05"},{id:"8",name:"밀라 네브라스카",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Mila.png",birthday:"12.02"},{id:"9",name:"티치엘 쥬스피앙",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Tichiel.png",birthday:"09.01"},{id:"10",name:"이스핀 샤를",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Ispin.png",birthday:"10.06"},{id:"11",name:"나야트레이",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Naya.png",birthday:"01.15"},{id:"12",name:"아나이스 델 카릴 (아나벨)",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Anais.png",birthday:"08.14"},{id:"13",name:"클로에 다 폰티나",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Cloe.png",birthday:"11.11"},{id:"14",name:"벤야",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Benya.png",birthday:"03.31"},{id:"15",name:"이솔렛",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Isolet.png",birthday:"04.21"},{id:"16",name:"로아미니",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Roamini.png",birthday:"05.25"},{id:"17",name:"녹턴 드 뷔엥",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Nocturne.png",birthday:"09.15"},{id:"18",name:"클라리체 데 아브릴",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Clarice.png",birthday:"08.21"},{id:"19",name:"예프넨 진네만",image:"https://ssl.nexon.com/s2/game/tales/renewal_2018/character/img_char_list_Yevgnen.png",birthday:"03.10"}],p=()=>c,m=()=>(0,n.a)({queryKey:["characters"],queryFn:p,enabled:!1}),h=[{id:"1",name:"사념의 조각",wandering_sale:1545,cantaparse_sale:2163,woods_sale:2472,fling_sale:2781},{id:"16",name:"정령의신전(파편)",wandering_sale:2008,cantaparse_sale:2163,woods_sale:2472,fling_sale:2781},{id:"2",name:"무스펠 파편",wandering_sale:4500,cantaparse_sale:6300,woods_sale:7200,fling_sale:8100},{id:"3",name:"카타콤 석화 조각",wandering_sale:4500,cantaparse_sale:6300,woods_sale:7200,fling_sale:8100},{id:"4",name:"악마의 흔적",wandering_sale:4500,cantaparse_sale:6300,woods_sale:7200,fling_sale:8100},{id:"5",name:"프시키의 잔해",wandering_sale:4875,cantaparse_sale:6825,woods_sale:7800,fling_sale:8775},{id:"6",name:"저주받은 언데드의 심장",wandering_sale:18750,cantaparse_sale:26250,woods_sale:3e4,fling_sale:33750},{id:"17",name:"신비한 보석",wandering_sale:284375,cantaparse_sale:306250,woods_sale:35e4,fling_sale:393750},{id:"8",name:"아크론 요새의 잔해",wandering_sale:625e3,cantaparse_sale:875e3,woods_sale:1e6,fling_sale:1125e3},{id:"7",name:"키메라의 잔해",wandering_sale:625e3,cantaparse_sale:875e3,woods_sale:1e6,fling_sale:1125e3},{id:"10",name:"아카드 아티팩트",wandering_sale:787500,cantaparse_sale:1102500,woods_sale:126e4,fling_sale:1417500},{id:"13",name:"심연의 보물창고 열쇠",wandering_sale:1625e3,cantaparse_sale:175e4,woods_sale:2e6,fling_sale:225e4},{id:"11",name:"엔키라 장비",wandering_sale:1443750,cantaparse_sale:2021250,woods_sale:231e4,fling_sale:2598750},{id:"12",name:"엔키라 칼라그 장비",wandering_sale:1968750,cantaparse_sale:2756250,woods_sale:315e4,fling_sale:3543750},{id:"9",name:"마력 결정 조각",wandering_sale:625e4,cantaparse_sale:875e4,woods_sale:1e7,fling_sale:1125e4},{id:"14",name:"改-활력 포션(대)",wandering_sale:16249999,cantaparse_sale:175e5,woods_sale:2e7,fling_sale:225e5},{id:"15",name:"改-에너지 포션(대)",wandering_sale:16249999,cantaparse_sale:175e5,woods_sale:2e7,fling_sale:225e5}],g=()=>h,u=()=>(0,n.a)({queryKey:["wastePapers"],queryFn:g,enabled:!1})}}]);