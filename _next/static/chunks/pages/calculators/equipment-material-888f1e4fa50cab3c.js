(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{18173:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculators/equipment-material",function(){return n(34267)}])},45703:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(12691),i=n(75271),a=n(91946),l=n(89350),o=n(2846),c=n(83105),d=(0,i.forwardRef)((e,t)=>{let{ratio:n,overlay:i,disabledEffect:d=!1,alt:s,src:u,afterLoad:Z,delayTime:m,threshold:p,beforeLoad:h,delayMethod:f,placeholder:g,wrapperProps:v,scrollPosition:b,effect:x="blur",visibleByDefault:w,wrapperClassName:_,useIntersectionObserver:y,sx:B,...P}=e,N=(0,l.Z)(),S=!!i&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:i||(0,o.Fq)(N.palette.grey[900],.48)}},X=(0,r.tZ)(c.Z,{component:a.LazyLoadImage,alt:s,src:u,afterLoad:Z,delayTime:m,threshold:p,beforeLoad:h,delayMethod:f,placeholder:g,wrapperProps:v,scrollPosition:b,visibleByDefault:w,effect:d?void 0:x,useIntersectionObserver:y,wrapperClassName:_||"component-image-wrapper",placeholderSrc:d?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",...!!n&&{top:0,left:0,position:"absolute"}}});return(0,r.tZ)(c.Z,{ref:t,component:"span",className:"component-image",sx:{overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",...!!n&&{width:1},"& span.component-image-wrapper":{width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important",...!!n&&{pt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1";return({"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"})[e]}(n)}},...S,...B},...P,children:X})})},51634:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(12691),i=n(10646),a=n(83566),l=n(56309),o=n(83105),c=n(46244),d=n(4535),s=n(62984),u=n(89350),Z=n(28270),m=n(62458);let p=[{name:"공식 홈페이지",href:l.S_.TWHOMEPAGE,target:"_blank",rel:"noopener noreferrer"},{name:"고객센터",href:l.S_.SERVICECENTER,target:"_blank",rel:"noopener noreferrer"}];function h(){let{themeStretch:e}=(0,m.K$)(),{palette:t}=(0,u.Z)(),n=(0,r.tZ)(o.Z,{sx:{padding:"10px",borderWidth:"1px 0",borderStyle:"solid",borderColor:t.divider},children:(0,r.tZ)(d.Z,{maxWidth:!e&&"lg",children:(0,r.tZ)(c.ZP,{container:!0,spacing:2,children:p.map(e=>(0,r.tZ)(c.ZP,{item:!0,xs:12,sm:6,textAlign:"center",alignItems:{xs:"center",md:"flex-start"},children:(0,r.tZ)(Z.Z,{href:e.href,target:e.target,rel:e.rel,variant:"body2",color:"inherit",fontSize:17,children:e.name})},e.name))})})}),i=(0,r.tZ)(d.Z,{maxWidth:!e&&"lg",children:(0,r.tZ)(s.Z,{variant:"caption",component:"div",sx:{padding:"10px 0",textAlign:{xs:"center",md:"left"}},children:"\xa9 2023 Tales Rune. Tales Rune isn’t endorsed by Nexon Korea and doesn’t reflect the views or opinions of Nexon Korea or anyone officially involved in producing or managing Tales Weaver. Tales Weaver and Nexon Korea are trademarks or registered trademarks of Nexon Korea , Inc. Tales Weaver \xa9 Nexon Korea, Inc."})});return(0,r.BX)(o.Z,{component:"footer",children:[n,i]})}function f(e){let{children:t}=e;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(a.Z,{}),(0,r.tZ)(i.Z,{children:t}),(0,r.tZ)(h,{})]})}},13492:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(12691),i=n(75271),a=n(76056);let l=[{value:"/calculators/waste-paper",label:"폐지 계산기",href:"/calculators/waste-paper"},{value:"/calculators/abendon-road",label:"어밴던로드 마정석 계산기",href:"/calculators/abendon-road"},{value:"/calculators/equipment-material",label:"장비 재료 계산기",href:"/calculators/equipment-material"}];var o=n(10677),c=n(24570),d=n(28270);function s(){let{pathname:e}=(0,a.useRouter)(),[t,n]=(0,i.useState)("/calculators"===e?"/calculators/waste-paper":e);return(0,r.tZ)(c.Z,{value:t,onChange:(e,t)=>n(t),sx:{marginBottom:5},children:l.map(e=>(0,r.tZ)(o.Z,{LinkComponent:d.Z,href:e.href,label:e.label,value:e.value},e.value))})}},34267:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return B}});var r=n(12691),i=n(51634),a=n(62458),l=n(22170),o=n(28017),c=n(4535),d=n(62984),s=n(72767),u=n(13492),Z=n(46244),m=n(75271),p=n(93338),h=n(98303),f=n(75746),g=n(56194),v=n(45703);function b(e){let{equipment:t}=e,[n,i]=(0,m.useState)((null==t?void 0:t.materials)||[]),[a,l]=(0,m.useState)(0),c=e=>t=>{let{value:r}=t.target,a=r.replace(/[^0-9]/g,""),o=[...n];o[e].price=Number(a),i(o),l(o.reduce((e,t)=>e+t.price,0))};return(0,r.BX)(h.Z,{sx:{p:2},children:[(0,r.BX)(o.Z,{direction:"row",spacing:.5,alignItems:"center",justifyContent:"center",children:[(0,r.tZ)(v.Z,{src:t.image}),(0,r.tZ)(d.Z,{textAlign:"center",fontWeight:600,children:t.name})]}),(0,r.tZ)(f.Z,{sx:{my:2}}),(0,r.tZ)(o.Z,{spacing:2,children:n.map((e,t)=>(0,r.BX)(o.Z,{spacing:1,children:[(0,r.BX)(o.Z,{direction:"row",alignItems:"center",spacing:.5,children:[(0,r.tZ)(v.Z,{src:e.image}),(0,r.tZ)(d.Z,{children:e.name})]}),(0,r.tZ)(g.Z,{value:e.price,size:"small",fullWidth:!0,onChange:c(t)})]},t))}),(0,r.tZ)(f.Z,{sx:{my:2}}),(0,r.tZ)(d.Z,{textAlign:"right",children:"총 ".concat((0,p.FK)(a),"시드")})]})}function x(e){let{weapon:t,pitching:n,armor:i,head:a,wrist:l,hand:o,wings:c,shoes:d}=e;return(0,r.BX)(Z.ZP,{container:!0,spacing:3,children:[(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:t})}),(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:n})}),(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:i})}),(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:a})}),(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:l})}),(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:o})}),(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:c})}),(0,r.tZ)(Z.ZP,{item:!0,md:3,children:(0,r.tZ)(b,{equipment:d})})]})}function w(){let{themeStretch:e}=(0,a.K$)(),{data:t}=(0,l.c2)();return(0,r.BX)(c.Z,{component:"section",maxWidth:!e&&"xl",children:[(0,r.tZ)(s._f,{style:{display:"block",width:"100%",marginBottom:30},client:"ca-pub-4630727689655943",slot:"4321772552",format:"horizontal",responsive:"true"}),(0,r.tZ)(d.Z,{component:"h1",fontSize:25,marginBottom:2,children:"계산기"}),(0,r.tZ)(u.Z,{}),(0,r.BX)(o.Z,{spacing:8,children:[(0,r.BX)(o.Z,{spacing:2,children:[(0,r.tZ)(d.Z,{component:"h2",fontSize:30,children:"아퀼루스 장비"}),(0,r.tZ)(x,{...null==t?void 0:t.aquilus})]}),(0,r.BX)(o.Z,{spacing:2,children:[(0,r.tZ)(d.Z,{component:"h2",fontSize:30,children:"어비스 장비"}),(0,r.tZ)(x,{...null==t?void 0:t.abyss})]})]})]})}var _=n(40011);B.getLayout=(e,t)=>(0,r.tZ)(i.Z,{...t,children:e});var y=!0;function B(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(_.Z,{title:"장비 제작 재료 계산기 - 테일즈룬",description:"테일즈위버 장비 제작 재료 계산기 입니다."}),(0,r.tZ)(w,{})]})}},93338:function(e,t,n){"use strict";n.d(t,{FK:function(){return a}});var r=n(4587),i=n.n(r);function a(e){return i()(e).format()}}},function(e){e.O(0,[478,244,445,194,587,946,772,888,774,179],function(){return e(e.s=18173)}),_N_E=e.O()}]);