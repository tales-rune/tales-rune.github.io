(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{60849:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculators/abendon-road",function(){return t(51603)}])},51634:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var i=t(12691),l=t(10646),r=t(83566),c=t(56309),a=t(83105),Z=t(46244),o=t(4535),d=t(62984),h=t(89350),g=t(28270),s=t(62458);let u=[{name:"공식 홈페이지",href:c.S_.TWHOMEPAGE,target:"_blank",rel:"noopener noreferrer"},{name:"고객센터",href:c.S_.SERVICECENTER,target:"_blank",rel:"noopener noreferrer"}];function f(){let{themeStretch:e}=(0,s.K$)(),{palette:n}=(0,h.Z)(),t=(0,i.tZ)(a.Z,{sx:{padding:"10px",borderWidth:"1px 0",borderStyle:"solid",borderColor:n.divider},children:(0,i.tZ)(o.Z,{maxWidth:!e&&"lg",children:(0,i.tZ)(Z.ZP,{container:!0,spacing:2,children:u.map(e=>(0,i.tZ)(Z.ZP,{item:!0,xs:12,sm:6,textAlign:"center",alignItems:{xs:"center",md:"flex-start"},children:(0,i.tZ)(g.Z,{href:e.href,target:e.target,rel:e.rel,variant:"body2",color:"inherit",fontSize:17,children:e.name})},e.name))})})}),l=(0,i.tZ)(o.Z,{maxWidth:!e&&"lg",children:(0,i.tZ)(d.Z,{variant:"caption",component:"div",sx:{padding:"10px 0",textAlign:{xs:"center",md:"left"}},children:"\xa9 2023 Tales Rune. Tales Rune isn’t endorsed by Nexon Korea and doesn’t reflect the views or opinions of Nexon Korea or anyone officially involved in producing or managing Tales Weaver. Tales Weaver and Nexon Korea are trademarks or registered trademarks of Nexon Korea , Inc. Tales Weaver \xa9 Nexon Korea, Inc."})});return(0,i.BX)(a.Z,{component:"footer",children:[t,l]})}function m(e){let{children:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(r.Z,{}),(0,i.tZ)(l.Z,{children:n}),(0,i.tZ)(f,{})]})}},13492:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(12691),l=t(75271),r=t(76056);let c=[{value:"/calculators/waste-paper",label:"폐지 계산기",href:"/calculators/waste-paper"},{value:"/calculators/abendon-road",label:"어밴던로드 마정석 계산기",href:"/calculators/abendon-road"},{value:"/calculators/equipment-material",label:"장비 제작 재료 계산기",href:"/calculators/equipment-material"}];var a=t(10677),Z=t(24570),o=t(28270);function d(){let{pathname:e}=(0,r.useRouter)(),[n,t]=(0,l.useState)("/calculators"===e?"/calculators/waste-paper":e);return(0,i.tZ)(Z.Z,{value:n,onChange:(e,n)=>t(n),sx:{marginBottom:5},children:c.map(e=>(0,i.tZ)(a.Z,{LinkComponent:o.Z,href:e.href,label:e.label,value:e.value},e.value))})}},51603:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return N},default:function(){return y}});var i=t(12691),l=t(51634),r=t(75271);let c=[{value:"1",label:"1단계"},{value:"2",label:"2단계"},{value:"3",label:"3단계"},{value:"4",label:"4단계"},{value:"5",label:"5단계"},{value:"6",label:"6단계"}];var a=t(53759),Z=t(4535),o=t(62984),d=t(24570),h=t(10677),g=t(2846),s=t(72767),u=t(62458),f=t(13492),m=t(7137),p=t(49532),x=t(35611),B=t(4686),w=t(25515),X=t(41200),v=t(56194),b=t(4587),W=t.n(b);function S(e){return W()(e).format()}let M=[{admissionFee:[4e5,8e5,12e5,16e5,2e6,24e5,28e5,32e5,36e5,4e6],minMagicStone:7,maxMagicStone:8},{admissionFee:[8e5,2e6,28e5,4e6,48e5,6e6,68e5,8e6,88e5,1e7],minMagicStone:24,maxMagicStone:28},{admissionFee:[28e5,4e6,48e5,6e6,68e5,8e6,88e5,1e7,108e5,12e6],minMagicStone:42,maxMagicStone:47},{admissionFee:[228e5,24e6,248e5,26e6,268e5,28e6,288e5,3e7,308e5,32e6],minMagicStone:92,maxMagicStone:104},{admissionFee:[528e5,54e6,548e5,56e6,568e5,58e6,588e5,6e7,608e5,62e6],minMagicStone:162,maxMagicStone:176},{admissionFee:[808e5,82e6,828e5,84e6,848e5,86e6,868e5,88e6,888e5,9e7],minMagicStone:225,maxMagicStone:250}];function _(e){let{step:n}=e,t=Array.from({length:10},(e,n)=>n),[l,c]=(0,r.useState)([]),[a,Z]=(0,r.useState)([]),d=e=>n=>{let{value:t}=n.target,i=t.replace(/[^0-9]/g,"");if(i.length<=12){let n=Number(i||0),t=[...l];t[e]=n,c(t)}};return(0,r.useEffect)(()=>{Z(Array.from({length:8},()=>0))},[]),(0,r.useEffect)(()=>{let e=[],{minMagicStone:t}=M[n];for(let n=0;n<10;n++)e.push(t);c(e)},[n]),(0,r.useEffect)(()=>{Z([0,0,0,0,0,0,0,0]);let e=M[n];for(let n=0;n<10;n++)Z(t=>(t[0]=30,t[1]+=e.admissionFee[n],t[2]+=e.minMagicStone,t[3]+=5e5*e.minMagicStone-e.admissionFee[n],t[4]+=e.maxMagicStone,t[5]+=5e5*e.maxMagicStone-e.admissionFee[n],[...t]));let{length:t}=l;for(let n=0;n<t;n++){let t=l[n];Z(i=>(i[6]+=t,i[7]+=5e5*t-e.admissionFee[n],[...i]))}},[l,n]),(0,i.BX)(m.Z,{children:[(0,i.BX)(p.Z,{sx:{minWidth:1150},"aria-label":"waste paper table",children:[(0,i.BX)("colgroup",{children:[(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"7%"}),(0,i.tZ)("col",{width:"13%"})]}),(0,i.tZ)(x.Z,{children:(0,i.BX)(B.Z,{children:[(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"입장 횟수"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"입장료"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최소 마정석"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최소 순이익"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최대 마정석"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최대 순이익"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"수량"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"순이익"})})]})}),(0,i.tZ)(w.Z,{children:t.map(e=>(0,i.BX)(B.Z,{hover:!0,children:[(0,i.tZ)(X.Z,{align:"center",children:e+1}),(0,i.BX)(X.Z,{align:"center",children:[S(M[n].admissionFee[e])," 시드"]}),(0,i.BX)(X.Z,{align:"center",children:[M[n].minMagicStone,"개"]}),(0,i.BX)(X.Z,{align:"center",children:[S(5e5*M[n].minMagicStone-M[n].admissionFee[e])," ","시드"]}),(0,i.BX)(X.Z,{align:"center",children:[M[n].maxMagicStone,"개"]}),(0,i.BX)(X.Z,{align:"center",children:[S(5e5*M[n].maxMagicStone-M[n].admissionFee[e])," ","시드"]}),(0,i.tZ)(X.Z,{sx:{padding:0},align:"center",children:(0,i.tZ)(v.Z,{value:l[e],onChange:d(e),placeholder:"수량",sx:{width:85},inputProps:{sx:{padding:1.2}}})}),(0,i.BX)(X.Z,{align:"right",children:[S(5e5*l[e]-M[n].admissionFee[e]),"시드"]})]},e))})]}),(0,i.BX)(p.Z,{sx:{minWidth:1150},"aria-label":"waste paper table",children:[(0,i.BX)("colgroup",{children:[(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"7%"}),(0,i.tZ)("col",{width:"13%"})]}),(0,i.tZ)(x.Z,{children:(0,i.BX)(B.Z,{children:[(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"총 입장 횟수"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"입장료"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최소 마정석"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최소 순이익"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최대 마정석"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최대 순이익"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"총 수량"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"순이익"})})]})}),(0,i.tZ)(w.Z,{children:(0,i.BX)(B.Z,{hover:!0,children:[(0,i.tZ)(X.Z,{align:"center",children:"10"}),(0,i.BX)(X.Z,{align:"center",children:[S(a[1])," 시드"]}),(0,i.BX)(X.Z,{align:"center",children:[a[2],"개"]}),(0,i.BX)(X.Z,{align:"center",children:[S(a[3])," 시드"]}),(0,i.BX)(X.Z,{align:"center",children:[a[4],"개"]}),(0,i.BX)(X.Z,{align:"center",children:[S(a[5])," 시드"]}),(0,i.BX)(X.Z,{align:"center",children:[S(a[6]),"개"]}),(0,i.BX)(X.Z,{align:"right",children:[S(a[7])," 시드"]})]})})]}),(0,i.BX)(p.Z,{sx:{minWidth:1150},"aria-label":"waste paper table",children:[(0,i.BX)("colgroup",{children:[(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"8%"}),(0,i.tZ)("col",{width:"7%"}),(0,i.tZ)("col",{width:"13%"})]}),(0,i.tZ)(x.Z,{children:(0,i.BX)(B.Z,{children:[(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"총 입장 횟수"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"입장료"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최소 마정석"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최소 순이익"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최대 마정석"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"최대 순이익"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"총 수량"})}),(0,i.tZ)(X.Z,{align:"center",children:(0,i.tZ)(o.Z,{fontWeight:600,children:"순이익"})})]})}),(0,i.tZ)(w.Z,{children:(0,i.BX)(B.Z,{hover:!0,children:[(0,i.tZ)(X.Z,{align:"center",children:a[0]}),(0,i.BX)(X.Z,{align:"center",children:[S(3*a[1])," 시드"]}),(0,i.BX)(X.Z,{align:"center",children:[3*a[2],"개"]}),(0,i.BX)(X.Z,{align:"center",children:[S(3*a[3])," 시드"]}),(0,i.BX)(X.Z,{align:"center",children:[3*a[4],"개"]}),(0,i.BX)(X.Z,{align:"center",children:[S(3*a[5])," 시드"]}),(0,i.BX)(X.Z,{align:"center",children:[S(3*a[6]),"개"]}),(0,i.BX)(X.Z,{align:"right",children:[S(3*a[7])," 시드"]})]})})]})]})}function F(){let{themeStretch:e}=(0,u.K$)(),[n,t]=(0,r.useState)("1");return(0,i.BX)(Z.Z,{component:"section",maxWidth:!e&&"xl",children:[(0,i.tZ)(s._f,{style:{display:"block",width:"100%",marginBottom:30},client:"ca-pub-4630727689655943",slot:"4321772552",format:"horizontal",responsive:"true"}),(0,i.tZ)(o.Z,{component:"h1",fontSize:25,marginBottom:2,children:"계산기"}),(0,i.tZ)(f.Z,{}),(0,i.BX)(a.Z,{children:[(0,i.tZ)(d.Z,{value:n,onChange:(e,n)=>{t(n)},sx:{px:2.5,boxShadow:e=>"inset 0 -2px 0 0 ".concat((0,g.Fq)(e.palette.grey[500],.08))},children:c.map(e=>(0,i.tZ)(h.Z,{iconPosition:"end",value:e.value,label:e.label},e.value))}),(0,i.tZ)(_,{step:parseInt(n,10)-1})]})]})}var E=t(40011);y.getLayout=(e,n)=>(0,i.tZ)(l.Z,{...n,children:e});var N=!0;function y(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(E.Z,{title:"어밴던로드 마정석 계산기 - 테일즈룬",description:"테일즈위버 어밴던로드 마정석 계산기 입니다."}),(0,i.tZ)(F,{})]})}}},function(e){e.O(0,[478,244,445,194,845,477,772,888,774,179],function(){return e(e.s=60849)}),_N_E=e.O()}]);