_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"+kQf":function(e,n,t){e.exports={header:"UserHeader_header__2kx37"}},"0m7D":function(e,n,t){e.exports={nav:"UserMenu_nav__2cbbH",menu:"UserMenu_menu__2qgrl"}},"0qRg":function(e,n,t){"use strict";var r=t("nKUr"),a=t("q1tI"),c=t("Uw7I"),o=t("GDVR"),s=t("xGi3"),u=t("GB7l"),i=t("jcvg"),l=t("wfTj");n.a=function(e){var n=e.children,t=Object(a.useContext)(i.a),f=t[0],d=(t[1],Object(a.useContext)(l.a)),j=d[0];d[1];return Object(r.jsxs)(a.Fragment,{children:[!f&&j?Object(r.jsx)(a.Fragment,{children:"admin"===j.role?Object(r.jsx)(o.a,{}):Object(r.jsx)(u.a,{})}):Object(r.jsx)(s.a,{}),Object(r.jsx)("main",{children:n}),Object(r.jsx)(c.a,{})]})}},"20a2":function(e,n,t){e.exports=t("nOHt")},"7VKf":function(e,n,t){e.exports={nav:"WebMenu_nav__rGn-c",menu:"WebMenu_menu__5GoEW"}},FPDb:function(e,n,t){e.exports={footer:"Footer_footer__ZxQMm"}},GB7l:function(e,n,t){"use strict";var r=t("nKUr"),a=t("k0rj"),c=t("YFqc"),o=t.n(c),s=t("0m7D"),u=t.n(s),i=function(){return Object(r.jsx)("menu",{id:u.a.menu,children:Object(r.jsxs)("nav",{id:u.a.nav,children:[Object(r.jsx)(o.a,{href:"/",children:"Home"}),Object(r.jsx)(o.a,{href:"/user/dashboard",children:"Dashboard"}),Object(r.jsx)(o.a,{href:"/user/auth/logout",children:"Logout"})]})})},l=t("+kQf"),f=t.n(l);n.a=function(){return Object(r.jsxs)("header",{id:f.a.header,className:"header",children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(i,{})]})}},GDVR:function(e,n,t){"use strict";var r=t("nKUr"),a=t("q1tI"),c=t("jcvg"),o=t("k0rj"),s=t("YFqc"),u=t.n(s),i=t("KIaw"),l=t.n(i),f=function(){return Object(r.jsx)("menu",{id:l.a.menu,children:Object(r.jsxs)("nav",{id:l.a.nav,children:[Object(r.jsx)(u.a,{href:"/",children:"Home"}),Object(r.jsx)(u.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(r.jsx)(u.a,{href:"/user/auth/logout",children:"Logout"})]})})},d=t("GMIE"),j=t.n(d);n.a=function(){var e=Object(a.useContext)(c.a),n=e[0];e[1];return Object(r.jsxs)("header",{id:j.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),n?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(f,{})]})}},GMIE:function(e,n,t){e.exports={header:"AdminHeader_header__2yDfM"}},Izfo:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/auth/logout",function(){return t("iycA")}])},KIaw:function(e,n,t){e.exports={nav:"AdminMenu_nav__2-7Ek",menu:"AdminMenu_menu__24ge-"}},Nlzp:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("o0o1"),a=t.n(r),c=t("HaE+"),o=t("vDqi"),s=t.n(o),u=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r,c,o){var u,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u="/api/v1/".concat(t),e.prev=1,console.log(c),e.next=5,s.a[n](u,c);case 5:return i=e.sent,l=i.data,console.log(l),e.abrupt("return",l);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n,t,r,a,c){return e.apply(this,arguments)}}()},Uw7I:function(e,n,t){"use strict";var r=t("nKUr"),a=t("FPDb"),c=t.n(a);n.a=function(){return Object(r.jsx)("footer",{id:c.a.footer,children:Object(r.jsx)("h1",{children:"Footer"})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var c=a(t("q1tI")),o=t("elyg"),s=t("nOHt"),u=t("vNVm"),i={};function l(e,n,t,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),a=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,o.resolveHref)(a,e.href,!0),t=r(n,2),c=t[0],s=t[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):s||c}}),[a,e.href,e.as]),d=f.href,j=f.as,h=e.children,b=e.replace,p=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var O=c.Children.only(h),g=O&&"object"===typeof O&&O.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),m=r(_,2),w=m[0],y=m[1],L=c.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,c.useEffect)((function(){var e=y&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof x?x:t&&t.locale,a=i[d+"%"+j+(r?"%"+r:"")];e&&!a&&l(t,d,j,{locale:r})}),[j,d,y,x,n,t]);var M={ref:L,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,c,s,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:c,locale:u,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,d,j,b,p,v,x)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(t,d,j,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var E="undefined"!==typeof x?x:t&&t.locale,I=(0,o.getDomainLocale)(j,E,t&&t.locales,t&&t.domainLocales);M.href=I||(0,o.addBasePath)((0,o.addLocale)(j,E,t&&t.defaultLocale))}return c.default.cloneElement(O,M)};n.default=f},cpSV:function(e,n,t){e.exports={logo:"Logo_logo__3vQhM",logoLast:"Logo_logoLast__WQe-D",round:"Logo_round__34V1l"}},iycA:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),a=t("o0o1"),c=t.n(a),o=t("HaE+"),s=t("q1tI"),u=t("Nlzp"),i=t("0qRg"),l=t("wfTj"),f=t("20a2");n.default=function(){var e=Object(f.useRouter)(),n=Object(s.useContext)(l.a),t=n[0],a=n[1];return Object(s.useEffect)((function(){t&&function(){var n=Object(o.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.a)("GET","users/logout","logout");case 2:return n.sent,localStorage.removeItem("token"),a(null),n.abrupt("return",e.push("/user/auth/login"));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[]),Object(r.jsx)(i.a,{children:Object(r.jsx)("div",{className:"content",children:t?Object(r.jsx)("h1",{classname:"heading",children:"Logging out..."}):Object(r.jsx)("h1",{className:"heading",children:"Logged out"})})})}},k0rj:function(e,n,t){"use strict";var r=t("nKUr"),a=t("YFqc"),c=t.n(a),o=t("cpSV"),s=t.n(o);n.a=function(){return Object(r.jsx)(c.a,{href:"/",passHref:!0,children:Object(r.jsxs)("button",{className:s.a.logo,children:["HTML",Object(r.jsxs)("span",{className:s.a.logoLast,children:[Object(r.jsx)("span",{className:s.a.round,children:"W"}),"P"]})]})})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),a=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,a=(0,c.useRef)(),i=(0,c.useState)(!1),l=r(i,2),f=l[0],d=l[1],j=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,c=r.observer,o=r.elements;return o.set(e,n),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),u.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){s||f||(0,o.default)((function(){return d(!0)}))}),[f]),[j,f]};var c=t("q1tI"),o=a(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var u=new Map},xGi3:function(e,n,t){"use strict";var r=t("nKUr"),a=t("q1tI"),c=t("jcvg"),o=t("k0rj"),s=t("YFqc"),u=t.n(s),i=t("7VKf"),l=t.n(i),f=function(){return Object(r.jsx)("menu",{id:l.a.menu,children:Object(r.jsxs)("nav",{id:l.a.nav,children:[Object(r.jsx)(u.a,{href:"/",children:"Home"}),Object(r.jsx)(u.a,{href:"/user/auth/login",children:"Login"}),Object(r.jsx)(u.a,{href:"/user/auth/registration",children:"Register"})]})})},d=t("y377"),j=t.n(d);n.a=function(){var e=Object(a.useContext)(c.a),n=e[0];e[1];return Object(r.jsxs)("header",{id:j.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),n?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(f,{})]})}},y377:function(e,n,t){e.exports={header:"AuthHeader_header__1ZQe4"}}},[["Izfo",0,2,1,3]]]);