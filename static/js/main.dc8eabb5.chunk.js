(this["webpackJsonpsnake-admin-panel"]=this["webpackJsonpsnake-admin-panel"]||[]).push([[0],{110:function(e,a,t){"use strict";t.r(a);var c,r=t(3),n=t(150),i=t(151),s=t(0),d=t(10),l=t.n(d),o=t(72),j=t.n(o),b=t(71),A=t.n(b),h=t(153),u=t(155),x=t(149),O=t(139),p=t(140),m=t(13),v=t(41),f=t.n(v),y=t(141),g=t(142),k=t(143),w=t(144),C=t(145),N=t(146),I=t(147),L=t(148),K=t(152),W=t(156),P=t(157),F=function(e){var a=[],t=e;return e.map((function(e){var c=0;if(t.map((function(a,r){e.Record.advertisementId===a.Record.advertisementId&&(c=c+=1,delete t[r])})),c>0){var r={};r.id=e.Record.advertisementId,r.advertiserId=e.Record.advertiserId,r.publisherId=e.Record.publisherId,r.clicks=c,a.push(r)}})),a},R=t(69),S=t.n(R),G=t(70),J=t.n(G),V=t(136),M=t(138),B=t(134),q=Object(B.a)((function(e){return{appBar:{marginBottom:e.spacing(5)},button:{marginLeft:e.spacing(1.5)}}})),T=Object(s.createContext)(),Z=function(e){var a=e.children,t=Object(s.useState)(null),c=Object(m.a)(t,2),n=c[0],i=c[1];return Object(r.jsx)(T.Provider,{value:{role:n,setNewRole:function(e){i(e)}},children:a})},E=function(e){var a=e.onRefresh,t=Object(s.useContext)(T),c=(t.role,t.setNewRole),n=q();return Object(r.jsx)(V.a,{position:"static",className:n.appBar,children:Object(r.jsx)(M.a,{children:Object(r.jsxs)(h.a,{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",children:[Object(r.jsx)(O.a,{variant:"h6",color:"secondary",children:"SnakeAds Admin panel"}),Object(r.jsxs)(h.a,{children:[Object(r.jsx)(p.a,{className:n.button,color:"secondary",variant:"outlined",startIcon:Object(r.jsx)(S.a,{}),onClick:a,children:"Update"}),Object(r.jsx)(p.a,{className:n.button,color:"secondary",variant:"outlined",startIcon:Object(r.jsx)(J.a,{}),onClick:function(){return c(null)},children:"Switch role"})]})]})})})},X=Object(B.a)((function(e){return{card:{backgroundColor:e.palette.primary.main,width:"100%",padding:e.spacing(6),maxWidth:1280,minHeight:"max-content"},divider:{backgroundColor:e.palette.secondary.main,marginBottom:e.spacing(3)},dialogContent:{padding:e.spacing(5),backgroundColor:e.palette.primary.main,display:"flex",justifyContent:"space-evenly",alignItems:"center","&:first-child":{paddingTop:e.spacing(5)}},select:{width:"50%"},avatar:{width:25,height:25,marginRight:e.spacing(2)}}})),Y=t.p+"static/media/coolblue.b8406ff9.svg",H=t.p+"static/media/daisycon.6ef79237.png",D=function(){var e=X(),a=Object(s.useState)({id:"",name:""}),t=Object(m.a)(a,2),c=t[0],n=t[1],i=Object(s.useState)(null),d=Object(m.a)(i,2),l=d[0],o=d[1],j=function(e){f.a.get("https://proxy.server7.omega2.nl/").then((function(a){var t=a.data.filter((function(a){return a.Record.advertiserId===e})),c=F(t);o(c)}))};return Object(s.useEffect)((function(){j(c.id)}),[""!==c.id]),console.log(l),Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(E,{onRefresh:function(){return j}}),""!==c.id&&Object(r.jsx)(y.a,{in:""!==c.id,children:Object(r.jsxs)(g.a,{classes:{root:e.card},children:[Object(r.jsx)(O.a,{variant:"h6",color:"secondary",paragraph:!0,children:"Advertiser ".concat(c.name)}),Object(r.jsx)(k.a,{classes:{root:e.divider}}),Object(r.jsx)(h.a,{width:"100%",children:l.length>0?Object(r.jsxs)(w.a,{children:[Object(r.jsx)(C.a,{children:Object(r.jsxs)(N.a,{children:[Object(r.jsx)(I.a,{children:"Advertisement ID"}),Object(r.jsx)(I.a,{children:"Clicks"}),Object(r.jsx)(I.a,{children:"Publisher"})]})}),Object(r.jsx)(L.a,{children:l.map((function(e){return Object(r.jsxs)(N.a,{children:[Object(r.jsx)(I.a,{children:e.id}),Object(r.jsx)(I.a,{children:e.clicks}),Object(r.jsx)(I.a,{children:e.publisherId})]},e.id)}))})]}):Object(r.jsx)(O.a,{variant:"body1",color:"secondary",children:"No data to display yet!"})})]})}),Object(r.jsx)(u.a,{open:""===c.id,maxWidth:"sm",fullWidth:!0,disableBackdropClick:!0,children:Object(r.jsxs)(x.a,{classes:{root:e.dialogContent},children:[Object(r.jsx)(O.a,{children:"Select your user account:"}),Object(r.jsxs)(K.a,{className:e.select,displayEmpty:!0,value:c,onChange:function(e){return a=e.target.value,void n(a);var a},children:[Object(r.jsx)(W.a,{value:"",disabled:!0,children:"Select.."}),Object(r.jsxs)(W.a,{value:{id:"adver1_10/2020/Coolbue",name:"Bob"},children:[Object(r.jsx)(P.a,{src:Y,className:e.avatar}),Object(r.jsx)(O.a,{variant:"body1",color:"secondary",children:"Bob"})]}),Object(r.jsxs)(W.a,{value:{id:"adver2_10/2020/Bol.com",name:"Mary"},children:[Object(r.jsx)(P.a,{src:"data:image/png;base64,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",className:e.avatar}),Object(r.jsx)(O.a,{variant:"body1",color:"secondary",children:"Mary"})]}),Object(r.jsxs)(W.a,{value:{id:"adver3_10/2020/Daisycon",name:"John"},children:[Object(r.jsx)(P.a,{src:H,className:e.avatar}),Object(r.jsx)(O.a,{variant:"body1",color:"secondary",children:"John"})]})]})]})})]})},Q=function(){var e=X(),a=Object(s.useState)({id:"",name:""}),t=Object(m.a)(a,2),c=t[0],n=t[1],i=Object(s.useState)(null),d=Object(m.a)(i,2),l=d[0],o=d[1],j=function(e){f.a.get("https://proxy.server7.omega2.nl/").then((function(a){var t=a.data.filter((function(a){return a.Record.publisherId===e})),c=F(t);o(c)}))};return Object(s.useEffect)((function(){j(c.id)}),[""!==c.id]),Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(E,{onRefresh:function(){return j}}),""!==c.id&&Object(r.jsx)(y.a,{in:""!==c.id,children:Object(r.jsxs)(g.a,{classes:{root:e.card},children:[Object(r.jsx)(O.a,{variant:"h6",color:"secondary",paragraph:!0,children:"Publisher ".concat(c.name)}),Object(r.jsx)(k.a,{classes:{root:e.divider}}),Object(r.jsx)(h.a,{width:"100%",children:l.length>0?Object(r.jsxs)(w.a,{children:[Object(r.jsx)(C.a,{children:Object(r.jsxs)(N.a,{children:[Object(r.jsx)(I.a,{children:"Advertisement ID"}),Object(r.jsx)(I.a,{children:"Clicks"}),Object(r.jsx)(I.a,{children:"Advertiser"})]})}),Object(r.jsx)(L.a,{children:l.map((function(e){return Object(r.jsxs)(N.a,{children:[Object(r.jsx)(I.a,{children:e.id}),Object(r.jsx)(I.a,{children:e.clicks}),Object(r.jsx)(I.a,{children:e.advertiserId})]},e.id)}))})]}):Object(r.jsx)(O.a,{variant:"body1",color:"secondary",children:"No data to display yet!"})})]})}),Object(r.jsx)(u.a,{open:""===c.id,maxWidth:"sm",fullWidth:!0,disableBackdropClick:!0,children:Object(r.jsxs)(x.a,{classes:{root:e.dialogContent},children:[Object(r.jsx)(O.a,{children:"Select your user account:"}),Object(r.jsxs)(K.a,{className:e.select,displayEmpty:!0,value:c,onChange:function(e){return a=e.target.value,void n(a);var a},children:[Object(r.jsx)(W.a,{value:"",disabled:!0,children:"Select.."}),Object(r.jsx)(W.a,{value:{id:"pub1_10/2020",name:"Jane"},children:"Jane"}),Object(r.jsx)(W.a,{value:{id:"pub2_10/2020",name:"Mark"},children:"Mark"}),Object(r.jsx)(W.a,{value:{id:"pub3_10/2020",name:"Joe"},children:"Joe"})]})]})})]})},z=function(){var e=Object(s.useContext)(T),a=e.role,t=e.setNewRole;return Object(r.jsxs)(s.Fragment,{children:[Object(r.jsxs)(h.a,{height:"100vh",width:"100vw",flexDirection:"column",overflow:"hidden",bgcolor:"#465659",display:"flex",alignItems:"center",children:[a&&"publisher"===a&&Object(r.jsx)(Q,{}),a&&"advertiser"===a&&Object(r.jsx)(D,{})]}),Object(r.jsx)(u.a,{open:!a,maxWidth:"sm",fullWidth:!0,disableBackdropClick:!0,children:Object(r.jsx)(x.a,{style:{backgroundColor:"#233840"},children:Object(r.jsxs)(h.a,{display:"flex",flexDirection:"column",width:"100%",px:5,py:3,children:[Object(r.jsx)(O.a,{variant:"h6",paragraph:!0,color:"secondary",children:"Welcome back!"}),Object(r.jsxs)(h.a,{display:"flex",pb:3,alignItems:"center",children:[Object(r.jsx)(O.a,{variant:"body1",noWrap:!0,children:"I am here as:"}),Object(r.jsxs)(h.a,{display:"flex",justifyContent:"space-evenly",width:"75%",children:[Object(r.jsx)(p.a,{onClick:function(){return t("publisher")},variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(A.a,{}),children:"Publisher"}),Object(r.jsx)(p.a,{onClick:function(){return t("advertiser")},variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(j.a,{}),children:"Advertiser"})]})]})]})})})]})},U=t(37),_=t(11),$=t(73),ee={primary:{main:"#233840"},secondary:{main:"#BBDDF2"},error:{main:"#fa2d48"},warning:{main:"#ff9e00"},success:{main:"#00983c"},grey:{0:"#ffffff",25:"#f2f2f2",50:"#e3e5e9",100:"#c3c7d0",200:"#959caa",300:"#7b8598",400:"#6b7689",500:"#5e6778",600:"#515867",700:"#434a56",800:"#363b45",900:"#282c33",1e3:"#000000",A100:"#e2e8f3",A200:"#99aed6",A400:"#637aa6",A700:"#63718c"}},ae=Object(U.a)(Object(U.a)({},ee),{},{text:{primary:ee.secondary.main,secondary:ee.grey[800]}}),te=Object(_.a)({},"defaultTheme",ae);l.a.render(Object(r.jsx)(n.a,{theme:(c="defaultTheme",Object($.a)({palette:Object(U.a)({},te[c]),overrides:{MuiPaper:{root:{backgroundColor:ae.primary.main}}},scrollbar:{"&::-webkit-scrollbar":{width:10,background:"rgba(0, 0, 0, 0.12) !important"},"&::-webkit-scrollbar-thumb":{background:"rgba(43, 64, 64, 0.21) !important",borderRadius:2}},border:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"solid";return"".concat(a,"px ").concat(t," ").concat(e)}})),children:Object(r.jsx)(Z,{children:Object(r.jsx)(i.a,{children:Object(r.jsx)(z,{})})})}),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.dc8eabb5.chunk.js.map