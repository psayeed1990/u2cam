_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"+kQf":function(e,t,n){},"0Z19":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor/[id]",function(){return n("DEcu")}])},"0qRg":function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n("Uw7I"),o=n("GDVR"),c=n("xGi3"),s=n("GB7l"),l=n("jcvg"),d=n("wfTj");t.a=function(e){var t=e.children,n=Object(a.useContext)(l.a),u=n[0],b=(n[1],Object(a.useContext)(d.a)),j=b[0];b[1];return Object(r.jsxs)(a.Fragment,{children:[!u&&j?Object(r.jsx)(a.Fragment,{children:"admin"===j.role?Object(r.jsx)(o.a,{}):Object(r.jsx)(s.a,{})}):Object(r.jsx)(c.a,{}),Object(r.jsx)("main",{children:t}),Object(r.jsx)(i.a,{})]})}},"20a2":function(e,t,n){e.exports=n("nOHt")},"2WuW":function(e,t,n){e.exports={editor:"SingleEditor_editor__2INp2",convert:"SingleEditor_convert__OoFrb"}},"6b9v":function(e,t,n){"use strict";var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("HaE+"),c=n("YFqc"),s=n.n(c),l=n("q1tI"),d=n("Y1PG"),u=n.n(d),b=n("Nlzp");t.a=function(){var e=Object(l.useState)(null),t=e[0],n=e[1];return Object(l.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("get","uploads");case 2:return t=e.sent,console.log(t.data.data),e.abrupt("return",n(t.data.data));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)("div",{className:u.a.sidebar,children:Object(r.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(r.jsx)("li",{className:u.a.themeLinks,children:Object(r.jsx)(s.a,{href:"/editor/".concat(e._id,"/"),children:e.name})},e._id)}))})})}},DEcu:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("HaE+"),c=n("g4pe"),s=n.n(c),l=n("20a2"),d=n("q1tI"),u=n.n(d),b=(n("Nlzp"),n("6b9v")),j=n("0qRg"),h=n("2WuW"),p=n.n(h),f=n("Qetd"),m=n.n(f),v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},x=function(e){for(var t=e.url,n=e.allowFullScreen,r=e.position,a=e.display,i=e.height,o=e.width,c=e.overflow,s=e.styles,l=e.onLoad,d=e.onMouseOver,b=e.onMouseOut,j=e.scrolling,h=e.id,p=e.frameBorder,f=e.ariaHidden,x=e.sandbox,O=e.allow,g=e.className,w=e.title,E=e.ariaLabel,y=e.ariaLabelledby,L=e.name,k=e.target,_=e.loading,N=e.importance,T=e.referrerpolicy,C=e.allowpaymentrequest,S=e.src,B=m()({src:S||t,target:k||null,style:{position:r||null,display:a||"block",overflow:c||null},scrolling:j||null,allowpaymentrequest:C||null,importance:N||null,sandbox:x||null,loading:_||null,styles:s||null,name:L||null,className:g||null,referrerpolicy:T||null,title:w||null,allow:O||null,id:h||null,"aria-labelledby":y||null,"aria-hidden":f||null,"aria-label":E||null,width:o||null,height:i||null,onLoad:l||null,onMouseOver:d||null,onMouseOut:b||null}),q=Object.create(null),D=0,M=Object.keys(B);D<M.length;D++){var G=M[D];null!=B[G]&&(q[G]=B[G])}for(var I=0,F=Object.keys(q.style);I<F.length;I++){var P=F[I];null==q.style[P]&&delete q.style[P]}if(n)if("allow"in q){var H=q.allow.replace("fullscreen","");q.allow=("fullscreen "+H.trim()).trim()}else q.allow="fullscreen";return p>=0&&(q.style.hasOwnProperty("border")||(q.style.border=p)),u.a.createElement("iframe",v({},q))},O=n("YFqc"),g=n.n(O),w=function(){var e=document.getElementById("edit-frame");return e.contentDocument?e.contentDocument:e.contentWindow.document},E=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById("edit-frame")){e.next=11;break}return e.next=3,w();case 3:if("complete"!=e.sent.readyState){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:e.next=12;break;case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=n("wVO0"),L=n.n(y),k=function(e){var t=e.editorLoader,n=e.initialLoader,a=e.loadingIcon,i=e.popupMessage;return t||n?Object(r.jsxs)("div",{id:L.a.popupEditor,children:[Object(r.jsx)("div",{className:L.a.relative,children:a}),Object(r.jsx)("p",{children:i})]}):Object(r.jsx)(d.Fragment,{})},_=n("pnCd"),N=n.n(_),T=function(){return Object(r.jsx)("img",{src:"/images/icons/loader.svg",width:"100",className:N.a.loadingImg})},C=function(){var e=w(),t="\n        html {\n          --scrollbarBG:  #7fd09a;\n          --thumbBG: #2479ac;\n        }\n        html::-webkit-scrollbar {\n          width: 11px;\n        }\n        html {\n          scrollbar-width: thin;\n          scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n        }\n        html::-webkit-scrollbar-track {\n          background: var(--scrollbarBG);\n        }\n        html::-webkit-scrollbar-thumb {\n          background-color: var(--thumbBG) ;\n          border-radius: 6px;\n          border: 3px solid var(--scrollbarBG);\n        }\n        .editor-border { border: 1px solid #999 !important; box-shadow: 0 0 3px #444 !important}\n        .editor-options-wp-converter-78235{\n            position:absolute !important; \n            background: #ccd0c4 !important; \n            z-index:999 !important;\n            padding: 10px;\n            box-shadow: 0 0 3px #555;\n            transition: background-color 0.5s\n\n        }\n        .editor-options-wp-converter-78235 span{\n            color: #666 !important; \n            font-size: 13px !important; \n            font-weight: normal;\n            text-decoration: none;\n            padding: 5px;\n            cursor: pointer;\n            \n        }\n        .editor-options-wp-converter-78235 span:hover{\n            background: #fff\n        }\n        .draggable-wp364 {\n          cursor: pointer;\n        }\n\n    ",n=e.head||e.getElementsByTagName("head")[0],r=document.createElement("style");n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))},S=function(e){e.preventDefault()},B=function(){for(var e=w().querySelectorAll("[contenteditable]"),t=0;t<e.length;t++)e[t].setAttribute("contenteditable","false")},q=function(){for(var e=w(),t=e.getElementsByClassName("editor-border"),n=0;n<t.length;n++)t[n].classList.remove("editor-border");var r=e.getElementsByClassName("editor-options-wp-converter-78235");for(n=0;n<r.length;n++)r[n].remove();B()},D=function(e){e.currentTarget.classList.remove("editor-border"),B(),q(),w().getElementsByTagName("body")[0].removeEventListener("dragover",S)},M=function(e){var t=e.setRightMenu,n=w(),a=n.getElementsByClassName("editor-border")[0];return Object(r.jsxs)("ul",{className:"editor-options-wp-converter-78235",children:[Object(r.jsx)("li",{id:"add-w453",children:"Add"}),Object(r.jsx)("li",{id:"duplicate-w453",onClick:function(e){e.preventDefault();var r=a.cloneNode(!0);r.addEventListener("mouseover",(function(e){e.currentTarget.classList.add("editor-border")})),r.addEventListener("mouseleave",(function(e){e.currentTarget.classList.remove("editor-border")})),r.addEventListener("click",D),n.addEventListener?r.addEventListener("contextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var n=e.currentTarget;q(),n.classList.add("editor-border"),t(!0)}),!1):r.attachEvent("oncontextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var n=e.currentTarget;q(),n.classList.add("editor-border"),t(!0)})),a.parentNode.appendChild(r),t(!1)},children:"Duplicate"}),Object(r.jsx)("li",{id:"edit-w453",children:"Edit"}),Object(r.jsx)("li",{id:"move-w453",children:"Move"}),Object(r.jsx)("li",{id:"design-w453",children:"design"}),Object(r.jsx)("li",{id:"delete-w453",onClick:function(e){e.preventDefault(),a.remove(),t(!1)},children:"Delete"}),Object(r.jsx)("li",{id:"close-w453",onClick:function(e){e.preventDefault(),t(!1)},children:"Close"})]})},G=["address","p","label","button","h1","h2","h3","h4","h5","h6","span","a","b","em","i","strong","small","sup","mark","del","ins","sub","blockquote","abbr","cite","q","tr","th","td","dt","dd","img","li"];t.default=function(){var e,t,n=Object(d.useState)(!0),a=n[0],i=n[1],o=Object(d.useState)(!1),c=o[0],u=o[1],h=Object(d.useState)(!1),f=h[0],m=h[1],v=Object(d.useState)(""),O=v[0],y=v[1],L=Object(d.useState)(""),_=L[0],N=(L[1],Object(d.useState)("")),S=N[0],B=N[1],I=Object(d.useState)(null),F=I[0],P=(I[1],Object(l.useRouter)().query.id);Object(d.useEffect)((function(){if(P);}),[P]);return Object(d.useEffect)((function(){if(c){B("Making theme contents editable");var e=w();C(),B("Adding edit options on right click"),G.forEach((function(t){for(var n=e.getElementsByTagName(t),r=0;r<n.length;r++){var a=n[r];a.addEventListener("mouseover",(function(e){e.currentTarget.classList.add("editor-border")})),a.addEventListener("mouseleave",(function(e){e.currentTarget.classList.remove("editor-border")})),a.addEventListener("click",D),e.addEventListener?a.addEventListener("contextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var t=e.currentTarget;q(),t.classList.add("editor-border"),m(!0)}),!1):a.attachEvent("oncontextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var t=e.currentTarget;q(),t.classList.add("editor-border"),m(!0)}))}})),B(""),u(!1)}}),[c]),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(s.a,{children:Object(r.jsx)("title",{children:"Editor: HTML to WP theme"})}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{id:p.a.editor,children:[Object(r.jsx)(b.a,{}),Object(r.jsxs)("div",{className:"editor",children:[Object(r.jsx)("h1",{className:"heading",children:null===F||void 0===F||null===(e=F.tree)||void 0===e?void 0:e.themeName}),Object(r.jsx)("p",{className:"error",children:O}),Object(r.jsx)("p",{className:"success",children:_}),Object(r.jsxs)("h5",{children:[(null===F||void 0===F||null===(t=F.tree)||void 0===t?void 0:t.size)/1e3,"KB"]}),Object(r.jsx)(g.a,{href:"#",children:Object(r.jsx)("button",{id:p.a.convert,children:"Convert To WordPress"})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)(k,{editorLoader:c,initialLoader:a,loadingIcon:Object(r.jsx)(T,{}),popupMessage:S}),f&&Object(r.jsx)(k,{editorLoader:f,initialLoader:a,loadingIcon:Object(r.jsx)(M,{setRightMenu:m}),popupMessage:S}),Object(r.jsx)(x,{url:"/themes/eshopper/index.html",width:"100%",height:"1500",id:"edit-frame",className:"myClassname",display:"initial",position:"relative",onLoad:function(){try{return E()?(B("Fully loaded theme"),i(!1),u(!0)):(y("Theme loading failed. Please refresh"),i(!1))}catch(e){return i(!1),y("Theme loading failed. Please refresh")}},onError:function(){y("Failed to load theme")}})]})]})]})})]})}},GB7l:function(e,t,n){"use strict";var r=n("nKUr"),a=n("k0rj"),i=n("YFqc"),o=n.n(i),c=n("Sr1/"),s=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:c.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(o.a,{href:"/",children:"Home"}),Object(r.jsx)(o.a,{href:"/user/dashboard",children:"Dashboard"}),Object(r.jsx)(o.a,{href:"/user/auth/logout",children:"Logout"})]})]})},l=n("+kQf"),d=n.n(l);t.a=function(){return Object(r.jsxs)("header",{id:d.a.header,className:"header",children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(s,{})]})}},GDVR:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n("jcvg"),o=n("k0rj"),c=n("YFqc"),s=n.n(c),l=n("Sr1/"),d=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:l.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(s.a,{href:"/",children:"Home"}),Object(r.jsx)(s.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(r.jsx)(s.a,{href:"/user/auth/logout",children:"Logout"})]})]})},u=n("GMIE"),b=n.n(u);t.a=function(){var e=Object(a.useContext)(i.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:b.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(d,{})]})}},GMIE:function(e,t,n){},Nlzp:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("o0o1"),a=n.n(r),i=n("HaE+"),o=n("vDqi"),c=n.n(o),s=function(){var e=Object(i.a)(a.a.mark((function e(t,n,r,i,o){var s,l,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),s="/api/v1/".concat(n),e.prev=2,e.next=5,c.a[t](s,i);case 5:return l=e.sent,d=l.data,e.abrupt("return",d);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,r,a,i){return e.apply(this,arguments)}}()},Y1PG:function(e,t,n){e.exports={sidebar:"ThemeListSidebar_sidebar__fCf6H",themeLinks:"ThemeListSidebar_themeLinks__2WoBY",subMenu:"ThemeListSidebar_subMenu__ogPFH"}},pnCd:function(e,t,n){e.exports={loadingImg:"EditorLoaderComp_loadingImg__1KxcJ"}},wVO0:function(e,t,n){e.exports={popupEditor:"EditorPopup_popupEditor__HO9lS",relative:"EditorPopup_relative__70mNn"}},xGi3:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n("jcvg"),o=n("k0rj"),c=n("YFqc"),s=n.n(c),l=n("Sr1/"),d=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:l.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(s.a,{href:"/",children:"Home"}),Object(r.jsx)(s.a,{href:"/user/auth/login",children:"Login"}),Object(r.jsx)(s.a,{href:"/user/auth/registration",children:"Register"})]})]})},u=n("y377"),b=n.n(u);t.a=function(){var e=Object(a.useContext)(i.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:b.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(d,{})]})}},y377:function(e,t,n){}},[["0Z19",0,2,1,3,4]]]);