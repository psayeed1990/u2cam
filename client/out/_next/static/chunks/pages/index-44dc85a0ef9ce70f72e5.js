_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"+kQf":function(e,n,r){e.exports={header:"UserHeader_header__2kx37"}},"0m7D":function(e,n,r){e.exports={nav:"UserMenu_nav__2cbbH",menu:"UserMenu_menu__2qgrl"}},"0qRg":function(e,n,r){"use strict";var t=r("nKUr"),a=r("q1tI"),o=r("Uw7I"),c=r("GDVR"),i=r("xGi3"),s=r("GB7l"),u=r("jcvg"),d=r("wfTj");n.a=function(e){var n=e.children,r=Object(a.useContext)(u.a),p=r[0],j=(r[1],Object(a.useContext)(d.a)),l=j[0];j[1];return Object(t.jsxs)(a.Fragment,{children:[!p&&l?Object(t.jsx)(a.Fragment,{children:"admin"===l.role?Object(t.jsx)(c.a,{}):Object(t.jsx)(s.a,{})}):Object(t.jsx)(i.a,{}),Object(t.jsx)("main",{children:n}),Object(t.jsx)(o.a,{})]})}},"7VKf":function(e,n,r){e.exports={nav:"WebMenu_nav__rGn-c",menu:"WebMenu_menu__5GoEW"}},GB7l:function(e,n,r){"use strict";var t=r("nKUr"),a=r("k0rj"),o=r("YFqc"),c=r.n(o),i=r("0m7D"),s=r.n(i),u=function(){return Object(t.jsx)("menu",{id:s.a.menu,children:Object(t.jsxs)("nav",{id:s.a.nav,children:[Object(t.jsx)(c.a,{href:"/",children:"Home"}),Object(t.jsx)(c.a,{href:"/user/dashboard",children:"Dashboard"}),Object(t.jsx)(c.a,{href:"/user/auth/logout",children:"Logout"})]})})},d=r("+kQf"),p=r.n(d);n.a=function(){return Object(t.jsxs)("header",{id:p.a.header,className:"header",children:[Object(t.jsx)(a.a,{}),Object(t.jsx)(u,{})]})}},GDVR:function(e,n,r){"use strict";var t=r("nKUr"),a=r("q1tI"),o=r("jcvg"),c=r("k0rj"),i=r("YFqc"),s=r.n(i),u=r("KIaw"),d=r.n(u),p=function(){return Object(t.jsx)("menu",{id:d.a.menu,children:Object(t.jsxs)("nav",{id:d.a.nav,children:[Object(t.jsx)(s.a,{href:"/",children:"Home"}),Object(t.jsx)(s.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(t.jsx)(s.a,{href:"/user/auth/logout",children:"Logout"})]})})},j=r("GMIE"),l=r.n(j);n.a=function(){var e=Object(a.useContext)(o.a),n=e[0];e[1];return Object(t.jsxs)("header",{id:l.a.header,className:"header",children:[Object(t.jsx)(c.a,{}),n?Object(t.jsx)(a.Fragment,{}):Object(t.jsx)(p,{})]})}},GMIE:function(e,n,r){e.exports={header:"AdminHeader_header__2yDfM"}},KIaw:function(e,n,r){e.exports={nav:"AdminMenu_nav__2-7Ek",menu:"AdminMenu_menu__24ge-"}},RXBc:function(e,n,r){"use strict";r.r(n);var t=r("nKUr"),a=r("rePB"),o=r("q1tI"),c=r("g4pe"),i=r.n(c),s=r("UAqm"),u=r.n(s),d=r("0qRg"),p=r("o0o1"),j=r.n(p),l=r("HaE+"),h=r("vDqi"),O=r.n(h),f=r("plcp"),b=r.n(f),_=function(e){var n=e.data,r=e.dispatch,a=function(){var e=Object(l.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.stopPropagation(),document.getElementById("fileInput"),1===(t=n.dataTransfer.files).length){e.next=7;break}return console.log("wrong"),e.abrupt("return",r({type:"SET_ERROR",ERROR:"Too many files. Upload one zip file"}));case 7:if(!(t&&t.length>0)){e.next=17;break}return r({type:"SET_ERROR",ERROR:"File uploading"}),r({type:"SET_DROP_DEPTH",dropDepth:0}),r({type:"SET_IN_DROP_ZONE",inDropZone:!1}),(a=new FormData).append("zippedTheme",t[0]),e.next=15,O.a.post("/api/v1/uploads/zipped-html-theme",a,{onUploadProgress:function(e){var n=Math.floor(e.loaded/e.total*100);r({type:"SET_ERROR",ERROR:"File uploading ".concat(n,"%")})}});case 15:return e.sent,e.abrupt("return",r({type:"SET_ERROR",ERROR:"Your theme is uploaded"}));case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(t.jsx)(o.Fragment,{children:Object(t.jsx)("div",{className:n.inDropZone?"".concat(b.a.dragDropZone," ").concat(b.a.insideDragArea):b.a.dragDropZone,onDrop:function(e){return a(e)},onDragOver:function(e){return function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",r({type:"SET_IN_DROP_ZONE",inDropZone:!0})}(e)},onDragEnter:function(e){return function(e){e.preventDefault(),e.stopPropagation(),r({type:"SET_DROP_DEPTH",dropDepth:n.dropDepth+1})}(e)},onDragLeave:function(e){return function(e){e.preventDefault(),e.stopPropagation(),r({type:"SET_DROP_DEPTH",dropDepth:n.dropDepth-1}),n.dropDepth>0||r({type:"SET_IN_DROP_ZONE",inDropZone:!1})}(e)},children:Object(t.jsx)("p",{children:"Drag files here to upload"})})})};function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function D(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){Object(a.a)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.default=function(e){var n=e.message,r=Object(o.useReducer)((function(e,n){switch(n.type){case"SET_DROP_DEPTH":return D(D({},e),{},{dropDepth:n.dropDepth});case"SET_IN_DROP_ZONE":return D(D({},e),{},{inDropZone:n.inDropZone});case"SET_ERROR":return D(D({},e),{},{ERROR:n.ERROR});default:return e}}),{dropDepth:0,inDropZone:!1,ERROR:""}),a=r[0],c=r[1];return Object(t.jsxs)(d.a,{children:[Object(t.jsxs)(i.a,{children:[Object(t.jsx)("title",{children:"HTML to WP theme"}),Object(t.jsx)("p",{className:"error",children:n})]}),Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)("h1",{className:"heading",children:"Home page"}),Object(t.jsxs)("div",{id:u.a.drop,children:[Object(t.jsx)(_,{data:a,dispatch:c}),Object(t.jsx)("p",{className:"error",children:a.ERROR})]})]})]})}},UAqm:function(e,n,r){e.exports={droppedFiles:"Home_droppedFiles__1gO9f",drop:"Home_drop__1z6Hr"}},plcp:function(e,n,r){e.exports={fileExists:"DragAndDropUpload_fileExists__F-vxa",dragDropZone:"DragAndDropUpload_dragDropZone__3T6l3",insideDragArea:"DragAndDropUpload_insideDragArea__3UJNk"}},rePB:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,"a",(function(){return t}))},vlRD:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RXBc")}])},xGi3:function(e,n,r){"use strict";var t=r("nKUr"),a=r("q1tI"),o=r("jcvg"),c=r("k0rj"),i=r("YFqc"),s=r.n(i),u=r("7VKf"),d=r.n(u),p=function(){return Object(t.jsx)("menu",{id:d.a.menu,children:Object(t.jsxs)("nav",{id:d.a.nav,children:[Object(t.jsx)(s.a,{href:"/",children:"Home"}),Object(t.jsx)(s.a,{href:"/user/auth/login",children:"Login"}),Object(t.jsx)(s.a,{href:"/user/auth/registration",children:"Register"})]})})},j=r("y377"),l=r.n(j);n.a=function(){var e=Object(a.useContext)(o.a),n=e[0];e[1];return Object(t.jsxs)("header",{id:l.a.header,className:"header",children:[Object(t.jsx)(c.a,{}),n?Object(t.jsx)(a.Fragment,{}):Object(t.jsx)(p,{})]})}},y377:function(e,n,r){e.exports={header:"AuthHeader_header__1ZQe4"}}},[["vlRD",0,2,1,3,4]]]);