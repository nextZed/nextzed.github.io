(this.webpackJsonpcreative_hackathon=this.webpackJsonpcreative_hackathon||[]).push([[0],{116:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(4),a=n(8),c=n(9),o=n(122),i=function(t){Object(a.a)(n,t);var e=Object(c.a)(n);function n(t,a){var c;return Object(r.a)(this,n),(c=e.call(this,a)).url=void 0,c.status=void 0,c.statusText=void 0,c.body=void 0,c.url=t.url,c.status=t.status,c.statusText=t.statusText,c.body=t.body,c}return n}(Object(o.a)(Error))},27:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return k}));var r=n(7),a=n(17),c=n(10),o=n.n(c),i=n(34),p=n(23),s=n(116),u=n(56);function x(t){return void 0!==t&&null!==t}function l(t){return"string"===typeof t}function d(t){return l(t)&&""!==t}function b(t){return t instanceof Blob}function j(e){try{return btoa(e)}catch(n){return t.from(e).toString("base64")}}function f(t){var e=u.a.ENCODE_PATH?u.a.ENCODE_PATH(t.path):t.path,n="".concat(u.a.BASE).concat(e);return t.query?"".concat(n).concat(function(t){var e=[];return Object.keys(t).forEach((function(n){var r=t[n];x(r)&&(Array.isArray(r)?r.forEach((function(t){e.push("".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(String(t))))})):e.push("".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(String(r)))))})),e.length>0?"?".concat(e.join("&")):""}(t.query)):n}function O(t,e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!==typeof n){t.next=2;break}return t.abrupt("return",n(e));case 2:return t.abrupt("return",n);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(o.a.mark((function t(e){var n,c,p,s,f,v,h;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e,u.a.TOKEN);case 2:return n=t.sent,t.next=5,O(e,u.a.USERNAME);case 5:return c=t.sent,t.next=8,O(e,u.a.PASSWORD);case 8:return p=t.sent,t.next=11,O(e,u.a.HEADERS);case 11:return s=t.sent,f=Object.entries(Object(i.a)(Object(i.a)({Accept:"application/json"},s),e.headers)).filter((function(t){var e=Object(a.a)(t,2);e[0];return x(e[1])})).reduce((function(t,e){var n=Object(a.a)(e,2),c=n[0],o=n[1];return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},c,o))}),{}),v=new Headers(f),d(n)&&v.append("Authorization","Bearer ".concat(n)),d(c)&&d(p)&&(h=j("".concat(c,":").concat(p)),v.append("Authorization","Basic ".concat(h))),e.body&&(e.mediaType?v.append("Content-Type",e.mediaType):b(e.body)?v.append("Content-Type",e.body.type||"application/octet-stream"):l(e.body)?v.append("Content-Type","text/plain"):v.append("Content-Type","application/json")),t.abrupt("return",v);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return t.formData?function(t){var e=new FormData;return Object.keys(t).forEach((function(n){var r=t[n];x(r)&&e.append(n,r)})),e}(t.formData):t.body?(null===(e=t.mediaType)||void 0===e?void 0:e.includes("/json"))?JSON.stringify(t.body):l(t.body)||b(t.body)?t.body:JSON.stringify(t.body):void 0;var e}function g(t,e){return w.apply(this,arguments)}function w(){return w=Object(p.a)(o.a.mark((function t(e,n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.method,t.next=3,h(e);case 3:return t.t1=t.sent,t.t2=m(e),r={method:t.t0,headers:t.t1,body:t.t2},u.a.WITH_CREDENTIALS&&(r.credentials="include"),t.next=9,fetch(n,r);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function F(t,e){if(e){var n=t.headers.get(e);if(l(n))return n}return null}function C(t){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(204===e.status){t.next=19;break}if(t.prev=1,!(n=e.headers.get("Content-Type"))){t.next=14;break}if(!n.toLowerCase().startsWith("application/json")){t.next=11;break}return t.next=8,e.json();case 8:return t.abrupt("return",t.sent);case 11:return t.next=13,e.text();case 13:return t.abrupt("return",t.sent);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0);case 19:return t.abrupt("return",null);case 20:case"end":return t.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function A(t,e){var n=Object(i.a)({400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable"},t.errors)[e.status];if(n)throw new s.a(e,n);if(!e.ok)throw new s.a(e,"Generic Error")}function k(t){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(o.a.mark((function t(e){var n,r,a,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f(e),t.next=3,g(e,n);case 3:return r=t.sent,t.next=6,C(r);case 6:return a=t.sent,c=F(r,e.responseHeader),i={url:n,ok:r.ok,status:r.status,statusText:r.statusText,body:c||a},A(e,i),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}).call(this,n(337).Buffer)},450:function(t,e,n){},451:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(60),o=n.n(c),i=n(183),p=n(568),s=n(560),u=n(150),x=n(34),l=n(547);function d(t,e){return"linear-gradient(to bottom, ".concat(t,", ").concat(e,")")}var b,j={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24",5008:Object(l.a)("#919EAB",.08),50012:Object(l.a)("#919EAB",.12),50016:Object(l.a)("#919EAB",.16),50024:Object(l.a)("#919EAB",.24),50032:Object(l.a)("#919EAB",.32),50048:Object(l.a)("#919EAB",.48),50056:Object(l.a)("#919EAB",.56),50080:Object(l.a)("#919EAB",.8)},f={light:"#FF8F8F",main:"#FC1212",dark:"#B50000",contrastText:"#fff"},O={light:"#D0F2FF",main:"#1890FF",dark:"#04297A",contrastText:"#fff"},v={light:"#E9FCD4",main:"#54D62C",dark:"#08660D",contrastText:j[800]},h={light:"#FFF7CD",main:"#FFC107",dark:"#7A4F01",contrastText:j[800]},y={light:"#FFE7D9",main:"#FF4842",dark:"#7A0C2E",contrastText:"#fff"},m={primary:d(f.light,f.main),info:d(O.light,O.main),success:d(v.light,v.main),warning:d(h.light,h.main),error:d(y.light,y.main)},g={common:{black:"#000",white:"#fff"},primary:Object(x.a)({},f),secondary:Object(x.a)({},{light:"#D6E4FF",main:"#3366FF",dark:"#091A7A",contrastText:"#fff"}),info:Object(x.a)({},O),success:Object(x.a)({},v),warning:Object(x.a)({},h),error:Object(x.a)({},y),grey:j,gradients:m,chart:{violet:["#826AF9","#9E86FF","#D0AEFF","#F7D2FF"],blue:["#2D99FF","#83CFFF","#A5F3FF","#CCFAFF"],green:["#2CD9C5","#60F1C8","#A4F7CC","#C0F2DC"],yellow:["#FFE700","#FFEF5A","#FFF7AE","#FFF3D6"],red:["#FF6C40","#FF8F6D","#FFBD98","#FFF2D4"]},divider:j[50024],text:{primary:j[800],secondary:j[600],disabled:j[500]},background:{paper:"#fff",default:"#fff",neutral:j[200]},action:{active:j[600],hover:j[5008],selected:j[50016],disabled:j[50080],disabledBackground:j[50024],focus:j[50024],hoverOpacity:.08,disabledOpacity:.48}},w=g.grey[500],F=(function(t){var e=Object(l.a)(t,.24);"0 1px 2px 0 ".concat(e),"0 8px 16px 0 ".concat(e),"0 0 2px 0 ".concat(e,", 0 12px 24px 0 ").concat(e),"0 0 2px 0 ".concat(e,", 0 16px 32px -4px ").concat(e),"0 0 2px 0 ".concat(e,", 0 20px 40px -4px ").concat(e),"0 0 4px 0 ".concat(e,", 0 24px 48px 0 ").concat(e),"0 8px 16px 0 ".concat(Object(l.a)(g.primary.main,.24)),"0 8px 16px 0 ".concat(Object(l.a)(g.secondary.main,.24)),"0 8px 16px 0 ".concat(Object(l.a)(g.info.main,.24)),"0 8px 16px 0 ".concat(Object(l.a)(g.success.main,.24)),"0 8px 16px 0 ".concat(Object(l.a)(g.warning.main,.24)),"0 8px 16px 0 ".concat(Object(l.a)(g.error.main,.24))}(w),function(t){var e=Object(l.a)(t,.2),n=Object(l.a)(t,.14),r=Object(l.a)(t,.12);return["none","0px 2px 1px -1px ".concat(e,",0px 1px 1px 0px ").concat(n,",0px 1px 3px 0px ").concat(r),"0px 3px 1px -2px ".concat(e,",0px 2px 2px 0px ").concat(n,",0px 1px 5px 0px ").concat(r),"0px 3px 3px -2px ".concat(e,",0px 3px 4px 0px ").concat(n,",0px 1px 8px 0px ").concat(r),"0px 2px 4px -1px ".concat(e,",0px 4px 5px 0px ").concat(n,",0px 1px 10px 0px ").concat(r),"0px 3px 5px -1px ".concat(e,",0px 5px 8px 0px ").concat(n,",0px 1px 14px 0px ").concat(r),"0px 3px 5px -1px ".concat(e,",0px 6px 10px 0px ").concat(n,",0px 1px 18px 0px ").concat(r),"0px 4px 5px -2px ".concat(e,",0px 7px 10px 1px ").concat(n,",0px 2px 16px 1px ").concat(r),"0px 5px 5px -3px ".concat(e,",0px 8px 10px 1px ").concat(n,",0px 3px 14px 2px ").concat(r),"0px 5px 6px -3px ".concat(e,",0px 9px 12px 1px ").concat(n,",0px 3px 16px 2px ").concat(r),"0px 6px 6px -3px ".concat(e,",0px 10px 14px 1px ").concat(n,",0px 4px 18px 3px ").concat(r),"0px 6px 7px -4px ".concat(e,",0px 11px 15px 1px ").concat(n,",0px 4px 20px 3px ").concat(r),"0px 7px 8px -4px ".concat(e,",0px 12px 17px 2px ").concat(n,",0px 5px 22px 4px ").concat(r),"0px 7px 8px -4px ".concat(e,",0px 13px 19px 2px ").concat(n,",0px 5px 24px 4px ").concat(r),"0px 7px 9px -4px ".concat(e,",0px 14px 21px 2px ").concat(n,",0px 5px 26px 4px ").concat(r),"0px 8px 9px -5px ".concat(e,",0px 15px 22px 2px ").concat(n,",0px 6px 28px 5px ").concat(r),"0px 8px 10px -5px ".concat(e,",0px 16px 24px 2px ").concat(n,",0px 6px 30px 5px ").concat(r),"0px 8px 11px -5px ".concat(e,",0px 17px 26px 2px ").concat(n,",0px 6px 32px 5px ").concat(r),"0px 9px 11px -5px ".concat(e,",0px 18px 28px 2px ").concat(n,",0px 7px 34px 6px ").concat(r),"0px 9px 12px -6px ".concat(e,",0px 19px 29px 2px ").concat(n,",0px 7px 36px 6px ").concat(r),"0px 10px 13px -6px ".concat(e,",0px 20px 31px 3px ").concat(n,",0px 8px 38px 7px ").concat(r),"0px 10px 13px -6px ".concat(e,",0px 21px 33px 3px ").concat(n,",0px 8px 40px 7px ").concat(r),"0px 10px 14px -6px ".concat(e,",0px 22px 35px 3px ").concat(n,",0px 8px 42px 7px ").concat(r),"0px 11px 14px -7px ".concat(e,",0px 23px 36px 3px ").concat(n,",0px 9px 44px 8px ").concat(r),"0px 11px 15px -7px ".concat(e,",0px 24px 38px 3px ").concat(n,",0px 9px 46px 8px ").concat(r)]}(w)),C=Object(u.a)({palette:g,shape:{borderRadius:8,borderRadiusSm:12,borderRadiusMd:16},shadows:F}),E="/",A=n(36),k=n(28),S=n(17),D=n(283),T=n(37),R=a.a.createContext({loaderState:!1,setLoaderState:function(){throw new Error}}),N=n(573),I=n(572),L=n(2),_=Object(r.memo)((function(t){var e=t.children,n=Object(r.useState)(!1),a=Object(S.a)(n,2),c=a[0],o=a[1];return Object(L.jsxs)(R.Provider,{value:{loaderState:c,setLoaderState:o},children:[c&&Object(L.jsx)(I.a,{sx:{top:0,position:"fixed",width:"100vw",height:"100vh",background:"white",display:"flex",alignItems:"center",justifyContent:"center",zIndex:function(t){return t.zIndex.appBar-1}},children:Object(L.jsx)(N.a,{})}),e]})})),B=a.a.createContext({setChosenRegion:function(){throw new Error}}),W=n(10),P=n.n(W),H=n(23),M=(n(116),n(56),n(4)),G=n(6),q=n(27),z=function(){function t(){Object(M.a)(this,t)}return Object(G.a)(t,null,[{key:"getCovid19WorldometersService",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.yesterday,r=e.twoDaysAgo,a=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/all",query:{yesterday:n,twoDaysAgo:r,allowNull:a}});case 3:return c=t.sent,t.abrupt("return",c.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCovid19WorldometersService1",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sort,r=e.yesterday,a=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/states",query:{sort:n,yesterday:r,allowNull:a}});case 3:return c=t.sent,t.abrupt("return",c.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCovid19WorldometersService2",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.states,r=e.yesterday,a=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/states/".concat(n),query:{yesterday:r,allowNull:a}});case 3:return c=t.sent,t.abrupt("return",c.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCovid19WorldometersService3",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c,o;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.yesterday,r=e.twoDaysAgo,a=e.sort,c=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/continents",query:{yesterday:n,twoDaysAgo:r,sort:a,allowNull:c}});case 3:return o=t.sent,t.abrupt("return",o.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCovid19WorldometersService4",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c,o,i;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.continent,r=e.yesterday,a=e.twoDaysAgo,c=e.strict,o=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/continents/".concat(n),query:{yesterday:r,twoDaysAgo:a,strict:c,allowNull:o}});case 3:return i=t.sent,t.abrupt("return",i.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCovid19WorldometersService5",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c,o;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.yesterday,r=e.twoDaysAgo,a=e.sort,c=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/countries",query:{yesterday:n,twoDaysAgo:r,sort:a,allowNull:c}});case 3:return o=t.sent,t.abrupt("return",o.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCovid19WorldometersService6",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c,o,i;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.country,r=e.yesterday,a=e.twoDaysAgo,c=e.strict,o=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/countries/".concat(n),query:{yesterday:r,twoDaysAgo:a,strict:c,allowNull:o}});case 3:return i=t.sent,t.abrupt("return",i.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCovid19WorldometersService7",value:function(){var t=Object(H.a)(P.a.mark((function t(e){var n,r,a,c,o;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.countries,r=e.yesterday,a=e.twoDaysAgo,c=e.allowNull,t.next=3,Object(q.a)({method:"GET",path:"/v3/covid-19/countries/".concat(n),query:{yesterday:r,twoDaysAgo:a,allowNull:c}});case 3:return o=t.sent,t.abrupt("return",o.body);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),U=Object(r.memo)((function(t){var e=t.children,n=Object(r.useContext)(R).setLoaderState,a=Object(r.useState)(),c=Object(S.a)(a,2),o=c[0],i=c[1],p=Object(r.useState)(),s=Object(S.a)(p,2),u=s[0],l=s[1],d=Object(r.useState)(),b=Object(S.a)(d,2),j=b[0],f=b[1],O=Object(r.useCallback)(Object(H.a)(P.a.mark((function t(){var e,r,a,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.prev=1,t.next=4,new Promise((function(t){return setTimeout(t,1e3)}));case 4:return t.next=6,fetch("/countries.geo.json").then((function(t){return t.json()}));case 6:return e=t.sent,t.next=9,z.getCovid19WorldometersService5({});case 9:return r=t.sent,a=e.features.reduce((function(t,e){var n=r.find((function(t){var n;return t.countryInfo.iso3===(null===(n=e.properties)||void 0===n?void 0:n.iso_a3)}));return n?[].concat(Object(k.a)(t),[Object(x.a)(Object(x.a)({},e),{},{properties:Object(x.a)(Object(x.a)({},e.properties),n)})]):t}),[]),t.next=13,i(a);case 13:return t.next=15,z.getCovid19WorldometersService({});case 15:c=t.sent,l(c);case 17:return t.prev=17,console.log("covid data ready"),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,,17,20]])}))),[n]);return Object(r.useEffect)((function(){O()}),[]),Object(L.jsx)(B.Provider,{value:{total:u,regions:o,setChosenRegion:f,chosenRegion:j},children:e})})),V=n(569),Y=n(563);!function(t){t.xs="xs",t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(b||(b={}));var J={xs:2,sm:4,lg:8},K={population:"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435",cases:"\u0421\u043b\u0443\u0447\u0430\u0438 \u0437\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u044f",deaths:"\u0421\u043c\u0435\u0440\u0442\u0438",recovered:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u0432\u0448\u0438\u0435",deathsPerOneMillion:"\u0421\u043c\u0435\u0440\u0442\u0438",casesPerOneMillion:"\u0421\u043b\u0443\u0447\u0430\u0438 \u0437\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u044f",recoveredPerOneMillion:"\u0421\u043b\u0443\u0447\u0430\u0438 \u0432\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u043b\u0435\u043d\u0438\u044f"},Z=n(189),Q=n.n(Z),X=n(272);Q.a.registerLocale(X);var $=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru";return t&&Q.a.getName(t,e)},tt={ALL_WORLD:"\u0412\u0435\u0441\u044c \u043c\u0438\u0440",ALL_TIME:"\u0437\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043c\u044f",LOCATION:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f",CHOOSE_LOCATION_FOR_INFO:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438",SAVE:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",TODAY_CASES:"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441\u0435\u0433\u043e\u0434\u043d\u044f",TODAY_DEATHS:"\u0421\u043c\u0435\u0440\u0442\u0435\u0439 \u0441\u0435\u0433\u043e\u0434\u043d\u044f",TODAY_RECOVERED:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u0432\u0448\u0438\u0445 \u0441\u0435\u0433\u043e\u0434\u043d\u044f",TOTAL:"\u0412\u0441\u0435\u0433\u043e"},et=n(552),nt=function(){var t=Object(T.a)();return Object(et.a)(t.breakpoints.down("sm"))},rt=n(22),at=function(t){return Object(rt.i)(">-.4s")(t)},ct=function(t){return function(t){var e;return null===t||void 0===t||null===(e=t.properties)||void 0===e?void 0:e.cases}(t)/function(t){var e;return null===t||void 0===t||null===(e=t.properties)||void 0===e?void 0:e.population}(t)*100},ot=n(580),it=n(582),pt=n(583),st=n(146),ut=n.n(st),xt=n(574),lt=n(284),dt=function(t,e){return{id:e,value:t[e],label:(null===K||void 0===K?void 0:K[e])||""}},bt=function(t){var e=t.value,n=t.label;return t.disable?null:Object(L.jsxs)(ot.a,{elevation:6,sx:{p:2,display:"inline-flex",alignItems:"center",zIndex:99},children:[Object(L.jsx)(ut.a,{sx:{mr:1}}),Object(L.jsx)(xt.a,{variant:"body1",component:"span",children:"".concat(n,":")}),Object(L.jsx)(xt.a,{variant:"body1",component:"span",sx:{ml:.5},children:Object(L.jsx)("b",{children:at(e)})})]})},jt=n(581),ft=n(587),Ot=n(586),vt=n(584),ht=n(585),yt=n(562),mt=n(561),gt=n(276),wt=n.n(gt),Ft=n(275),Ct=n.n(Ft),Et="allWorld",At=function(t){var e=Object(r.useContext)(B),n=e.regions,a=e.setChosenRegion,c=Object(r.useState)(null),o=Object(S.a)(c,2),i=o[0],p=o[1],s=Object(r.useMemo)((function(){return[{id:Et,label:tt.ALL_WORLD}].concat(Object(k.a)(Ct()((null===n||void 0===n?void 0:n.map((function(t){var e=t.properties;return{id:e.iso_n3,label:$(e.iso_n3)}})))||[],(function(t){return t.label}))))}),[n]),u=Object(r.useCallback)((function(t,e){p(e)}),[]),l=Object(r.useCallback)((function(){var e;i&&i.id!==Et?a(null===n||void 0===n?void 0:n.find((function(t){return t.properties.iso_n3===i.id}))):a(void 0),null===(e=t.onClose)||void 0===e||e.call(t,{},"escapeKeyDown")}),[i,a,n]);return Object(L.jsxs)(vt.a,Object(x.a)(Object(x.a)({},t),{},{children:[Object(L.jsx)(ht.a,{children:tt.CHOOSE_LOCATION_FOR_INFO}),Object(L.jsx)(Ot.a,{children:Object(L.jsx)(mt.a,{id:"countrySelect",options:s,sx:{mt:1,mb:1},fullWidth:!0,onChange:u,value:i,onKeyPress:function(t){"Enter"===t.key&&(l(),t.preventDefault())},renderInput:function(t){return Object(L.jsx)(yt.a,Object(x.a)(Object(x.a)({},t),{},{label:tt.LOCATION,autoFocus:!0}))}})}),Object(L.jsx)(ft.a,{children:Object(L.jsx)(jt.a,{onClick:l,endIcon:Object(L.jsx)(wt.a,{}),children:tt.SAVE})})]}))},kt=function(){var t=Object(r.useState)(!1),e=Object(S.a)(t,2),n=e[0],a=e[1],c=Object(r.useContext)(B).chosenRegion,o=nt(),i=Object(r.useCallback)((function(){a((function(t){return!t}))}),[]),p=Object(r.useMemo)((function(){var t=$(null===c||void 0===c?void 0:c.properties.iso_n3);return t?"\u041a\u041d\u0420 (\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430)"===t?"\u041a\u041d\u0420":$(null===c||void 0===c?void 0:c.properties.iso_n3):tt.ALL_WORLD}),[c]);return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(I.a,{sx:{display:"flex",alignItems:"center"},children:Object(L.jsx)(jt.a,{variant:"outlined",onClick:i,children:p})}),Object(L.jsx)(At,{fullScreen:o,open:n,onClose:i})]})},St=function(){var t,e=Object(r.useContext)(B),n=e.chosenRegion,a=e.total,c=Object(T.a)(),o=[c.palette.warning.main,c.palette.error.main,c.palette.success.main],i=(t=c.spacing(4),parseInt(t,10)),p=nt(),s=Object(r.useMemo)((function(){var t=(null===n||void 0===n?void 0:n.properties)||a;return t?[dt(t,"cases"),dt(t,"deaths"),dt(t,"recovered")]:void 0}),[n,a]);return Object(L.jsx)(ot.a,{elevation:6,children:Object(L.jsxs)(it.a,{children:[Object(L.jsxs)(pt.a,{children:[Object(L.jsx)(xt.a,{variant:"caption",sx:{textTransform:"lowercase",display:"block"},children:tt.TOTAL}),p&&Object(L.jsx)(I.a,{sx:{px:1,pt:2,pb:2},children:null===s||void 0===s?void 0:s.map((function(t,e){return Object(L.jsxs)(I.a,{sx:{display:"flex",alignItems:"center",mb:1},children:[Object(L.jsx)(ut.a,{sx:{color:o[e],mr:.5}}),Object(L.jsxs)(xt.a,{children:[t.label,": ",Object(L.jsx)("b",{children:at(t.value)})]})]})}))})]}),Object(L.jsx)(pt.a,{sx:{height:"400px"},id:"pie",children:s&&Object(L.jsx)(lt.a,{data:s,margin:{top:i,right:i,bottom:i,left:i},valueFormat:">-.4s",colors:o,motionConfig:"wobbly",enableArcLabels:p,arcLinkLabel:"label",innerRadius:.5,padAngle:1,cornerRadius:4,activeOuterRadiusOffset:8,enableArcLinkLabels:!p,tooltip:function(t){return Object(L.jsx)(bt,{value:t.datum.value,label:t.datum.label,disable:p})}})})]})})},Dt=n(277),Tt=n.n(Dt),Rt=n(278),Nt=n.n(Rt),It=n(279),Lt=n.n(It),_t=function(t){var e=t.label,n=t.value,r=t.icon,a=t.color;return Object(L.jsx)(ot.a,{elevation:6,children:Object(L.jsx)(it.a,{children:Object(L.jsxs)(pt.a,{children:[Object(L.jsx)(xt.a,{variant:"caption",sx:{textTransform:"lowercase",display:"block"},children:e}),Object(L.jsx)(I.a,{sx:{fontSize:function(t){return 2*t.typography.fontSize},display:"flex",justifyContent:"center",alignItems:"center"},children:n?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(r,{sx:{color:a,mr:1},fontSize:"inherit"}),Object(L.jsx)(xt.a,{variant:"body1",fontSize:"inherit",sx:{color:a},children:at(n)})]}):Object(L.jsx)(xt.a,{variant:"body1",sx:{mt:1},children:"\u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442"})})]})})})},Bt=function(){var t=Object(T.a)(),e=Object(r.useContext)(B),n=e.total,a=e.chosenRegion,c=(null===a||void 0===a?void 0:a.properties)||n||{},o=c.todayCases,i=c.todayRecovered,p=c.todayDeaths;return Object(L.jsxs)(V.a,{container:!0,spacing:2,alignItems:"stretch",children:[Object(L.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(L.jsx)(_t,{color:t.palette.success.main,icon:Tt.a,label:tt.TODAY_RECOVERED,value:i})}),Object(L.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(L.jsx)(_t,{color:t.palette.warning.main,icon:Nt.a,label:tt.TODAY_CASES,value:o})}),Object(L.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(L.jsx)(_t,{color:t.palette.error.main,icon:Lt.a,label:tt.TODAY_DEATHS,value:p})})]})},Wt=function(){var t,e=Object(r.useContext)(B),n=e.regions,a=e.setChosenRegion,c=e.chosenRegion,o=Object(r.useContext)(R).setLoaderState,i=Object(r.useState)(!1),p=Object(S.a)(i,2),s=p[0],u=p[1],x=Object(r.useState)(null),l=Object(S.a)(x,2),d=l[0],b=l[1],j=Object(T.a)(),f=nt(),O=Object(r.useRef)(),v=Object(r.useRef)(null),h=Object(r.useMemo)((function(){return n&&Math.max.apply(Math,Object(k.a)(n.map(ct)))}),[n]),y=Object(Y.a)().domain([0,h||0]).range([j.palette.primary.light,j.palette.primary.dark]),m=Object(r.useCallback)((function(t){a(t)}),[a]);return Object(r.useEffect)((function(){var t,e,n,r,a,o=null===c||void 0===c||null===(t=c.properties)||void 0===t||null===(e=t.countryInfo)||void 0===e?void 0:e.lat,i=null===c||void 0===c||null===(n=c.properties)||void 0===n||null===(r=n.countryInfo)||void 0===r?void 0:r.long;o&&i&&(O.current.controls().autoRotate=!1,null===(a=O.current)||void 0===a||a.pointOfView({lat:o,lng:i},300))}),[c]),Object(r.useEffect)((function(){O.current&&!s&&(O.current.controls().enableZoom=!1,O.current.controls().autoRotate=!0,O.current.pointOfView({lat:37,lng:55,altitude:1.5}),u(!0))}),[O.current,s]),n?Object(L.jsxs)(V.a,{container:!0,spacing:J,children:[Object(L.jsx)(V.a,{item:!0,xs:12,lg:6,id:"globe",ref:v,children:Object(L.jsx)(D.a,{showGlobe:!1,showAtmosphere:!1,width:null===(t=v.current)||void 0===t?void 0:t.clientWidth,height:f?window.innerWidth:window.innerHeight-200,backgroundColor:j.palette.background.default,onGlobeReady:function(){return o(!1)},ref:O,polygonSideColor:function(){return"rgba(0, 0, 0, 0)"},polygonCapColor:function(t){return t!==d||f?y(ct(t)):j.palette.primary.main},polygonsData:n,polygonStrokeColor:function(){return j.palette.background.default},polygonLabel:function(t){return f?"":'<div id="globeTooltip">\n              '.concat($(t.properties.iso_n3),"\n              <div>").concat(at(t.properties.cases),"</div>\n              <div>").concat(ct(t).toFixed(2),"%</div>\n            </div>")},onPolygonClick:m,onPolygonHover:b})}),Object(L.jsxs)(V.a,{item:!0,xs:12,lg:6,children:[Object(L.jsx)(St,{}),Object(L.jsx)(I.a,{sx:{mt:2}}),Object(L.jsx)(Bt,{})]})]}):null},Pt=function(){return Object(L.jsx)(A.c,{children:Object(L.jsx)(A.a,{path:E,exact:!0,component:Wt})})},Ht=n(576),Mt=n(577),Gt={mb:J},qt=(n(575),n(565),n(578),n(579),n(281),n(282),n(570),function(){return Object(L.jsx)(Ht.a,{position:"sticky",color:"default",sx:Gt,children:Object(L.jsxs)(Mt.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(L.jsxs)(xt.a,{variant:"h5",noWrap:!0,component:"div",children:["corona.",Object(L.jsx)(xt.a,{component:"span",variant:"h5",color:"primary",children:"virus"})]}),Object(L.jsx)(kt,{})]})})}),zt={px:J,pb:J},Ut=function(t){var e=t.children;return Object(L.jsx)(I.a,{component:"main",sx:zt,children:e})},Vt=(n(450),function(){return Object(L.jsxs)(p.a,{theme:C,children:[Object(L.jsx)(s.a,{}),Object(L.jsx)(_,{children:Object(L.jsx)(U,{children:Object(L.jsxs)(i.a,{children:[Object(L.jsx)(qt,{}),Object(L.jsx)(Ut,{children:Object(L.jsx)(Pt,{})})]})})})]})}),Yt=function(t){t&&n.e(3).then(n.bind(null,588)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};o.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(Vt,{})}),document.getElementById("root")),Yt()},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={BASE:"https://disease.sh",VERSION:"3.0.0",WITH_CREDENTIALS:!1,TOKEN:void 0,USERNAME:void 0,PASSWORD:void 0,HEADERS:void 0,ENCODE_PATH:void 0}}},[[451,1,2]]]);
//# sourceMappingURL=main.a30ac461.chunk.js.map