_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"+kQf":function(e,t,n){},"0Z19":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor/[id]",function(){return n("DEcu")}])},"0qRg":function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n("Uw7I"),o=n("GDVR"),c=n("xGi3"),l=n("GB7l"),s=n("jcvg"),d=n("wfTj");t.a=function(e){var t=e.children,n=Object(a.useContext)(s.a),u=n[0],b=(n[1],Object(a.useContext)(d.a)),h=b[0];b[1];return Object(r.jsxs)(a.Fragment,{children:[!u&&h?Object(r.jsx)(a.Fragment,{children:"admin"===h.role?Object(r.jsx)(o.a,{}):Object(r.jsx)(l.a,{})}):Object(r.jsx)(c.a,{}),Object(r.jsx)("main",{children:t}),Object(r.jsx)(i.a,{})]})}},"20a2":function(e,t,n){e.exports=n("nOHt")},"2WuW":function(e,t,n){e.exports={editor:"SingleEditor_editor__2INp2",convert:"SingleEditor_convert__OoFrb"}},"6b9v":function(e,t,n){"use strict";var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("HaE+"),c=n("YFqc"),l=n.n(c),s=n("q1tI"),d=n("Y1PG"),u=n.n(d),b=n("Nlzp");t.a=function(){var e=Object(s.useState)(null),t=e[0],n=e[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("get","uploads");case 2:return t=e.sent,console.log(t.data.data),e.abrupt("return",n(t.data.data));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)("div",{className:u.a.sidebar,children:Object(r.jsx)("ul",{id:"theme-name-sidebar",children:null===t||void 0===t?void 0:t.map((function(e){return Object(r.jsx)("li",{className:u.a.themeLinks,children:Object(r.jsx)(l.a,{href:"/editor/".concat(e._id,"/"),children:e.name})},e._id)}))})})}},DEcu:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("HaE+"),c=n("g4pe"),l=n.n(c),s=n("20a2"),d=n("q1tI"),u=n.n(d),b=n("Nlzp"),h=n("6b9v"),j=n("0qRg"),v=n("2WuW"),p=n.n(v),m=n("Qetd"),f=n.n(m),x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},O=function(e){for(var t=e.url,n=e.allowFullScreen,r=e.position,a=e.display,i=e.height,o=e.width,c=e.overflow,l=e.styles,s=e.onLoad,d=e.onMouseOver,b=e.onMouseOut,h=e.scrolling,j=e.id,v=e.frameBorder,p=e.ariaHidden,m=e.sandbox,O=e.allow,g=e.className,w=e.title,y=e.ariaLabel,E=e.ariaLabelledby,L=e.name,k=e.target,_=e.loading,N=e.importance,C=e.referrerpolicy,T=e.allowpaymentrequest,S=e.src,B=f()({src:S||t,target:k||null,style:{position:r||null,display:a||"block",overflow:c||null},scrolling:h||null,allowpaymentrequest:T||null,importance:N||null,sandbox:m||null,loading:_||null,styles:l||null,name:L||null,className:g||null,referrerpolicy:C||null,title:w||null,allow:O||null,id:j||null,"aria-labelledby":E||null,"aria-hidden":p||null,"aria-label":y||null,width:o||null,height:i||null,onLoad:s||null,onMouseOver:d||null,onMouseOut:b||null}),q=Object.create(null),D=0,M=Object.keys(B);D<M.length;D++){var G=M[D];null!=B[G]&&(q[G]=B[G])}for(var I=0,F=Object.keys(q.style);I<F.length;I++){var P=F[I];null==q.style[P]&&delete q.style[P]}if(n)if("allow"in q){var H=q.allow.replace("fullscreen","");q.allow=("fullscreen "+H.trim()).trim()}else q.allow="fullscreen";return v>=0&&(q.style.hasOwnProperty("border")||(q.style.border=v)),u.a.createElement("iframe",x({},q))},g=n("YFqc"),w=n.n(g),y=function(){var e=document.getElementById("edit-frame");return e.contentDocument?e.contentDocument:e.contentWindow.document},E=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById("edit-frame")){e.next=11;break}return e.next=3,y();case 3:if("complete"!=e.sent.readyState){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:e.next=12;break;case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=n("wVO0"),k=n.n(L),_=function(e){var t=e.editorLoader,n=e.initialLoader,a=e.loadingIcon,i=e.popupMessage;return t||n?Object(r.jsxs)("div",{id:k.a.popupEditor,children:[Object(r.jsx)("div",{className:k.a.relative,children:a}),Object(r.jsx)("p",{children:i})]}):Object(r.jsx)(d.Fragment,{})},N=n("pnCd"),C=n.n(N),T=function(){return Object(r.jsx)("img",{src:"/images/icons/loader.svg",width:"100",className:C.a.loadingImg})},S=function(){var e=y(),t="\n        html {\n          --scrollbarBG:  #7fd09a;\n          --thumbBG: #2479ac;\n        }\n        html::-webkit-scrollbar {\n          width: 11px;\n        }\n        html {\n          scrollbar-width: thin;\n          scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n        }\n        html::-webkit-scrollbar-track {\n          background: var(--scrollbarBG);\n        }\n        html::-webkit-scrollbar-thumb {\n          background-color: var(--thumbBG) ;\n          border-radius: 6px;\n          border: 3px solid var(--scrollbarBG);\n        }\n        .editor-border { border: 1px solid #999 !important; box-shadow: 0 0 3px #444 !important}\n        .editor-options-wp-converter-78235{\n            position:absolute !important; \n            background: #ccd0c4 !important; \n            z-index:999 !important;\n            padding: 10px;\n            box-shadow: 0 0 3px #555;\n            transition: background-color 0.5s\n\n        }\n        .editor-options-wp-converter-78235 span{\n            color: #666 !important; \n            font-size: 13px !important; \n            font-weight: normal;\n            text-decoration: none;\n            padding: 5px;\n            cursor: pointer;\n            \n        }\n        .editor-options-wp-converter-78235 span:hover{\n            background: #fff\n        }\n        .draggable-wp364 {\n          cursor: pointer;\n        }\n\n    ",n=e.head||e.getElementsByTagName("head")[0],r=document.createElement("style");n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))},B=function(e){e.preventDefault()},q=function(){for(var e=y().querySelectorAll("[contenteditable]"),t=0;t<e.length;t++)e[t].setAttribute("contenteditable","false")},D=function(){for(var e=y(),t=e.getElementsByClassName("editor-border"),n=0;n<t.length;n++)t[n].classList.remove("editor-border");var r=e.getElementsByClassName("editor-options-wp-converter-78235");for(n=0;n<r.length;n++)r[n].remove();q()},M=function(e){e.currentTarget.classList.remove("editor-border"),q(),D(),y().getElementsByTagName("body")[0].removeEventListener("dragover",B)},G=function(e){var t=e.setRightMenu,n=y(),a=n.getElementsByClassName("editor-border")[0];return Object(r.jsxs)("ul",{className:"editor-options-wp-converter-78235",children:[Object(r.jsx)("li",{id:"add-w453",children:"Add"}),Object(r.jsx)("li",{id:"duplicate-w453",onClick:function(e){e.preventDefault();var r=a.cloneNode(!0);r.addEventListener("mouseover",(function(e){e.currentTarget.classList.add("editor-border")})),r.addEventListener("mouseleave",(function(e){e.currentTarget.classList.remove("editor-border")})),r.addEventListener("click",M),n.addEventListener?r.addEventListener("contextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var n=e.currentTarget;D(),n.classList.add("editor-border"),t(!0)}),!1):r.attachEvent("oncontextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var n=e.currentTarget;D(),n.classList.add("editor-border"),t(!0)})),a.parentNode.appendChild(r),t(!1)},children:"Duplicate"}),Object(r.jsx)("li",{id:"edit-w453",children:"Edit"}),Object(r.jsx)("li",{id:"move-w453",children:"Move"}),Object(r.jsx)("li",{id:"design-w453",children:"design"}),Object(r.jsx)("li",{id:"delete-w453",onClick:function(e){e.preventDefault(),a.remove(),t(!1)},children:"Delete"}),Object(r.jsx)("li",{id:"close-w453",onClick:function(e){e.preventDefault(),t(!1)},children:"Close"})]})},I=["address","p","label","button","h1","h2","h3","h4","h5","h6","span","a","b","em","i","strong","small","sup","mark","del","ins","sub","blockquote","abbr","cite","q","tr","th","td","dt","dd","img","li"];t.default=function(){var e,t,n,a,c,u,v,m,f,x,g=Object(d.useState)(!0),L=g[0],k=g[1],N=Object(d.useState)(!1),C=N[0],B=N[1],q=Object(d.useState)(!1),F=q[0],P=q[1],H=Object(d.useState)(""),K=H[0],R=H[1],V=Object(d.useState)(""),W=V[0],Y=(V[1],Object(d.useState)("")),U=Y[0],z=Y[1],A=Object(d.useState)(null),J=A[0],Q=A[1],X=Object(s.useRouter)().query.id;Object(d.useEffect)((function(){X&&function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("get","themes/".concat(X));case 2:t=e.sent,Q(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[X]);var Z=function(){try{return E()?(z("Fully loaded theme"),k(!1),B(!0)):(R("Theme loading failed. Please refresh"),k(!1))}catch(e){return k(!1),R("Theme loading failed. Please refresh")}};return Object(d.useEffect)((function(){if(C){z("Making theme contents editable");var e=y();S(),z("Adding edit options on right click"),I.forEach((function(t){for(var n=e.getElementsByTagName(t),r=0;r<n.length;r++){var a=n[r];a.addEventListener("mouseover",(function(e){e.currentTarget.classList.add("editor-border")})),a.addEventListener("mouseleave",(function(e){e.currentTarget.classList.remove("editor-border")})),a.addEventListener("click",M),e.addEventListener?a.addEventListener("contextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var t=e.currentTarget;D(),t.classList.add("editor-border"),P(!0)}),!1):a.attachEvent("oncontextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var t=e.currentTarget;D(),t.classList.add("editor-border"),P(!0)}))}})),z(""),B(!1)}}),[C]),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(l.a,{children:Object(r.jsx)("title",{children:"Editor: HTML to WP theme"})}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{id:p.a.editor,children:[Object(r.jsx)(h.a,{}),Object(r.jsxs)("div",{className:"editor",children:[Object(r.jsx)("h1",{className:"heading",children:null===J||void 0===J||null===(e=J.tree)||void 0===e?void 0:e.themeName}),Object(r.jsx)("p",{className:"error",children:K}),Object(r.jsx)("p",{className:"success",children:W}),Object(r.jsxs)("h5",{children:[(null===J||void 0===J||null===(t=J.tree)||void 0===t?void 0:t.size)/1e3,"KB"]}),Object(r.jsx)(w.a,{href:"#",children:Object(r.jsx)("button",{id:p.a.convert,children:"Convert To WordPress"})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)(_,{editorLoader:C,initialLoader:L,loadingIcon:Object(r.jsx)(T,{}),popupMessage:U}),F&&Object(r.jsx)(_,{editorLoader:F,initialLoader:L,loadingIcon:Object(r.jsx)(G,{setRightMenu:P}),popupMessage:U}),1===(null===J||void 0===J||null===(n=J.tree)||void 0===n||null===(a=n.children)||void 0===a?void 0:a.length)&&"directory"===(null===J||void 0===J||null===(c=J.tree)||void 0===c||null===(u=c.children[0])||void 0===u?void 0:u.type)?Object(r.jsx)(O,{url:"/html-preview/".concat(null===J||void 0===J||null===(v=J.upload)||void 0===v?void 0:v.filename,"/").concat(null===J||void 0===J||null===(m=J.tree)||void 0===m||null===(f=m.children[0])||void 0===f?void 0:f.name,"/index.html"),width:"100%",height:"1500",id:"edit-frame",className:"myClassname",display:"initial",position:"relative",onLoad:Z,onError:function(){R("Failed to load theme")}}):Object(r.jsx)(O,{url:"/html-preview/".concat(null===J||void 0===J||null===(x=J.upload)||void 0===x?void 0:x.filename,"/index.html"),width:"100%",height:"1500",id:"edit-frame",className:"myClassname",display:"initial",position:"relative",onLoad:Z,onError:function(){R("Failed to load theme")}})]})]})]})})]})}},GB7l:function(e,t,n){"use strict";var r=n("nKUr"),a=n("k0rj"),i=n("YFqc"),o=n.n(i),c=n("Sr1/"),l=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:c.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(o.a,{href:"/",children:"Home"}),Object(r.jsx)(o.a,{href:"/user/dashboard",children:"Dashboard"}),Object(r.jsx)(o.a,{href:"/user/auth/logout",children:"Logout"})]})]})},s=n("+kQf"),d=n.n(s);t.a=function(){return Object(r.jsxs)("header",{id:d.a.header,className:"header",children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(l,{})]})}},GDVR:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n("jcvg"),o=n("k0rj"),c=n("YFqc"),l=n.n(c),s=n("Sr1/"),d=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(l.a,{href:"/",children:"Home"}),Object(r.jsx)(l.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(r.jsx)(l.a,{href:"/user/auth/logout",children:"Logout"})]})]})},u=n("GMIE"),b=n.n(u);t.a=function(){var e=Object(a.useContext)(i.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:b.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(d,{})]})}},GMIE:function(e,t,n){},Nlzp:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("o0o1"),a=n.n(r),i=n("HaE+"),o=n("vDqi"),c=n.n(o),l=function(){var e=Object(i.a)(a.a.mark((function e(t,n,r,i,o){var l,s,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),l="/api/v1/".concat(n),e.prev=2,e.next=5,c.a[t](l,i);case 5:return s=e.sent,d=s.data,e.abrupt("return",d);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,r,a,i){return e.apply(this,arguments)}}()},Y1PG:function(e,t,n){e.exports={sidebar:"ThemeListSidebar_sidebar__fCf6H",themeLinks:"ThemeListSidebar_themeLinks__2WoBY",subMenu:"ThemeListSidebar_subMenu__ogPFH"}},pnCd:function(e,t,n){e.exports={loadingImg:"EditorLoaderComp_loadingImg__1KxcJ"}},wVO0:function(e,t,n){e.exports={popupEditor:"EditorPopup_popupEditor__HO9lS",relative:"EditorPopup_relative__70mNn"}},xGi3:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n("jcvg"),o=n("k0rj"),c=n("YFqc"),l=n.n(c),s=n("Sr1/"),d=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(l.a,{href:"/",children:"Home"}),Object(r.jsx)(l.a,{href:"/user/auth/login",children:"Login"}),Object(r.jsx)(l.a,{href:"/user/auth/registration",children:"Register"})]})]})},u=n("y377"),b=n.n(u);t.a=function(){var e=Object(a.useContext)(i.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:b.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(d,{})]})}},y377:function(e,t,n){}},[["0Z19",0,2,1,3,4]]]);