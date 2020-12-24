(this.webpackJsonpmyApp=this.webpackJsonpmyApp||[]).push([[1],{109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),c=n.n(o),i=n(23),u=n(2),s=n(64),l=n(4),d=n.n(l),f=n(12),p=n(13),m=n(15),v=function(e){var t=e._id,n=e.text,a=e.breed,o=e.onEdit;return r.a.createElement(u.k,{onClick:function(){return o(t)}},r.a.createElement(u.l,null,n),r.a.createElement(u.l,null,a))},E="localhost:3000",h=function(e){return function(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=console).log.apply(t,[e].concat(a))}},g=h("api");function b(e,t){return g("".concat(t," - started")),e.then((function(e){return g("".concat(t," - succeeded")),Promise.resolve(e.data)})).catch((function(e){return g("".concat(t," - failed")),Promise.reject(e)}))}var j={headers:{"Content-Type":"application/json"}},y=function(e){return{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}},O=n(41),k=n(6),x=n(29),_=n.n(x),S="http://".concat(E,"/api/item"),w=function(e){return b(_.a.get(S,y(e)),"getItems")},A=function(e,t){return b(_.a.post(S,t,y(e)),"createItem")},C=function(e,t){return b(_.a.put("".concat(S,"/").concat(t._id),t,y(e)),"updateItem")},I=h("ws"),T="http://".concat(E,"/api/auth/login"),D=function(e,t){return b(_.a.post(T,{username:e,password:t},j),"login")},F=n(26),N=h("AuthProvider"),M={isAuthenticated:!1,isAuthenticating:!1,authenticationError:null,pendingAuthentication:!1,tokenFound:!1,username:"",storage:F.b},L=r.a.createContext(M),J=function(e){var t=e.children,n=Object(a.useState)(M),o=Object(p.a)(n,2),c=o[0],i=o[1],u=c.isAuthenticated,s=c.tokenFound,l=c.isAuthenticating,m=c.authenticationError,v=c.pendingAuthentication,E=c.username,h=c.password,g=F.b,b=Object(a.useCallback)((function(e,t){return x.apply(this,arguments)}),[]),j=Object(a.useCallback)((function(){return O.apply(this,arguments)}),[]);Object(a.useEffect)((function(){var e=!1;return function(){t.apply(this,arguments)}(),function(){e=!0};function t(){return(t=Object(f.a)(d.a.mark((function t(){var n,a,r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v){t.next=3;break}return N("authenticate, !pendingAuthentication, return"),t.abrupt("return");case 3:if(t.prev=3,N("authenticate..."),i(Object(k.a)(Object(k.a)({},c),{},{isAuthenticating:!0})),!e){t.next=8;break}return t.abrupt("return");case 8:return n=c.username,a=c.password,t.next=11,D(n,a);case 11:return r=t.sent,o=r.token,t.next=15,g.set({key:"token",value:o});case 15:N("authenticate succeeded"),i(Object(k.a)(Object(k.a)({},c),{},{pendingAuthentication:!1,isAuthenticated:!0,isAuthenticating:!1,tokenFound:!0})),t.next=25;break;case 19:if(t.prev=19,t.t0=t.catch(3),!e){t.next=23;break}return t.abrupt("return");case 23:N("authenticate failed"),i(Object(k.a)(Object(k.a)({},c),{},{authenticationError:t.t0,pendingAuthentication:!1,isAuthenticating:!1,tokenFound:!1}));case 25:case"end":return t.stop()}}),t,null,[[3,19]])})))).apply(this,arguments)}}),[v]),Object(a.useEffect)((function(){g.get({key:"token"}).then(function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t.value&&i(Object(k.a)(Object(k.a)({},c),{},{pendingAuthentication:!1,username:E,password:h,isAuthenticated:!0,isAuthenticating:!1,tokenFound:!0}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var y={username:E,isAuthenticated:u,tokenFound:s,login:b,logout:j,isAuthenticating:l,authenticationError:m,storage:g,password:h};return N("render"),r.a.createElement(L.Provider,{value:y},t);function O(){return(O=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.clear();case 2:i(Object(k.a)(Object(k.a)({},c),{},{isAuthenticated:!1,isAuthenticating:!1,authenticationError:null,pendingAuthentication:!1,username:"",password:"",tokenFound:!1}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(f.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N("login"),s||i(Object(k.a)(Object(k.a)({},c),{},{pendingAuthentication:!0,username:t,password:n}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},U=n(69),P=h("Login"),B=function(e){var t=e.component,n=Object(U.a)(e,["component"]),o=Object(a.useContext)(L).isAuthenticated;return P("render, isAuthenticated",o),r.a.createElement(i.b,Object.assign({},n,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login"}})}}))},H=F.a.App,V={isActive:!0},R=F.a.Network,z={connected:!1,connectionType:"unknown"},W=F.a.BackgroundTask,q=function(){var e,t=function(){var e=Object(a.useState)(V),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=H.addListener("appStateChange",n);H.getState().then(n);var t=!1;return function(){t=!0,e.remove()};function n(e){console.log("useAppState - state change",e),t||r(e)}}),[]),{appState:n}}().appState,n=function(){var e=Object(a.useState)(z),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=R.addListener("networkStatusChange",n);R.getStatus().then(n);var t=!1;return function(){t=!0,e.remove()};function n(e){console.log("useNetwork - status change",e),t||r(e)}}),[]),{networkStatus:n}}().networkStatus,o=Object(a.useState)(!1),c=Object(p.a)(o,2),i=c[0],s=c[1];return e=function(){return new Promise((function(e){console.log("My Background Task"),e()}))},Object(a.useEffect)((function(){var t=W.beforeExit(Object(f.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("useBackgroundTask - executeTask started"),n.next=3,e();case 3:console.log("useBackgroundTask - executeTask finished"),W.finish({taskId:t});case 5:case"end":return n.stop()}}),n)}))))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,{onClick:function(){return s(!0)},expand:"block"},"Show Alert 1"),r.a.createElement(u.a,{isOpen:i,onDidDismiss:function(){return s(!1)},header:"App state & Network status",message:"App state is  ".concat(JSON.stringify(t),".Network status is ").concat(JSON.stringify(n)," "),buttons:["OK"]}),r.a.createElement("div",null,"App state is ",JSON.stringify(t)),r.a.createElement("div",null,"Network status is ",JSON.stringify(n)))},K=h("Login"),$=function(e){e.history;var t=Object(a.useContext)(L),n=t.isAuthenticated,o=t.isAuthenticating,c=t.login,s=t.authenticationError,l=Object(a.useState)({}),d=Object(p.a)(l,2),f=d[0],m=d[1],v=f.username,E=f.password;return K("render"),n?(console.log("IT IS AUTHEN"),r.a.createElement(i.a,{to:{pathname:"/"}})):r.a.createElement(u.o,null,r.a.createElement(u.h,null,r.a.createElement(u.v,null,r.a.createElement(u.u,null,"Login"))),r.a.createElement(u.e,null,r.a.createElement(q,null),r.a.createElement(u.j,{placeholder:"Username",value:v,onIonChange:function(e){return m(Object(k.a)(Object(k.a)({},f),{},{username:e.detail.value||""}))}}),r.a.createElement(u.j,{placeholder:"Password",value:E,onIonChange:function(e){return m(Object(k.a)(Object(k.a)({},f),{},{password:e.detail.value||""}))}}),r.a.createElement(u.n,{isOpen:o}),s&&r.a.createElement("div",null,s.message||"Failed to authenticate"),r.a.createElement(u.c,{onClick:function(){K("handleLogin..."),null===c||void 0===c||c(v,E)}},"Login")))},G=h("ItemProvider"),Q={fetching:!1,saving:!1},X=function(e,t){var n=t.type,a=t.payload;switch(n){case"FETCH_ITEMS_STARTED":return Object(k.a)(Object(k.a)({},e),{},{fetching:!0,fetchingError:null});case"FETCH_ITEMS_SUCCEEDED":return Object(k.a)(Object(k.a)({},e),{},{items:a.items,fetching:!1});case"FETCH_ITEMS_FAILED":return Object(k.a)(Object(k.a)({},e),{},{fetchingError:a.error,fetching:!1});case"SAVE_ITEM_STARTED":return Object(k.a)(Object(k.a)({},e),{},{savingError:null,saving:!0});case"SAVE_ITEM_SUCCEEDED":var r=Object(O.a)(e.items||[]),o=a.item,c=r.findIndex((function(e){return e._id===o._id}));return-1===c?r.splice(0,0,o):r[c]=o,Object(k.a)(Object(k.a)({},e),{},{items:r,saving:!1});case"SAVE_ITEM_FAILED":return Object(k.a)(Object(k.a)({},e),{},{savingError:a.error,saving:!1});default:return e}},Y=r.a.createContext(Q),Z=function(e){var t=e.children,n=Object(a.useContext)(L),o=n.storage,c=n.tokenFound,i=Object(a.useReducer)(X,Q),u=Object(p.a)(i,2),s=u[0],l=u[1],m=s.items,v=s.fetching,h=s.fetchingError,g=s.saving,b=s.savingError;Object(a.useEffect)((function(){var e=!1;return console.log("hey from here"),function(){t.apply(this,arguments)}(),function(){e=!0};function t(){return(t=Object(f.a)(d.a.mark((function t(){var n,a,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get({key:"token"});case 2:if(a=t.sent,console.log(a),null===a||void 0===a||null===(n=a.value)||void 0===n?void 0:n.trim()){t.next=6;break}return t.abrupt("return");case 6:if(t.prev=6,!(null===a||void 0===a?void 0:a.value)){t.next=20;break}return G("fetchItems started"),l({type:"FETCH_ITEMS_STARTED"}),t.next=12,w(null===a||void 0===a?void 0:a.value);case 12:if(r=t.sent,console.log(r,JSON.stringify(r)),G("fetchItems succeeded"),e){t.next=20;break}return console.log(r),t.next=19,o.set({key:"items",value:JSON.stringify(r)});case 19:l({type:"FETCH_ITEMS_SUCCEEDED",payload:{items:r}});case 20:t.next=29;break;case 22:return t.prev=22,t.t0=t.catch(6),G("fetchItems failed"),t.next=27,o.get({key:"items"});case 27:c=t.sent,l(void 0===c?{type:"FETCH_ITEMS_SUCCEEDED",payload:[]}:{type:"FETCH_ITEMS_SUCCEEDED",payload:{itemsStorage:c}});case 29:case"end":return t.stop()}}),t,null,[[6,22]])})))).apply(this,arguments)}}),[o,c]),Object(a.useEffect)((function(){o.get({key:"token"}).then((function(e){var t,n,a=!1;return G("wsEffect - connecting"),(null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.trim())&&(n=function(e,t){var n=new WebSocket("ws://".concat(E));return n.onopen=function(){I("web socket onopen"),n.send(JSON.stringify({type:"authorization",payload:{token:e}}))},n.onclose=function(){I("web socket onclose")},n.onerror=function(e){I("web socket onerror",e)},n.onmessage=function(e){I("web socket onmessage"),t(JSON.parse(e.data))},function(){n.close()}}(null===e||void 0===e?void 0:e.value,(function(e){if(!a){var t=e.type,n=e.payload;G("ws message, item ".concat(t)),"created"!==t&&"updated"!==t||l({type:"SAVE_ITEM_SUCCEEDED",payload:{item:n}})}}))),function(){var e;G("wsEffect - disconnecting"),a=!0,null===(e=n)||void 0===e||e()}}))}),[o,c]);var j={items:m,fetching:v,fetchingError:h,saving:g,savingError:b,saveItem:Object(a.useCallback)((function(e){return y.apply(this,arguments)}),[o,c]),storage:o};return G("returns"),r.a.createElement(Y.Provider,{value:j},t);function y(){return(y=Object(f.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G("saveItem started"),l({type:"SAVE_ITEM_STARTED"}),e.next=5,o.get({key:"token"});case 5:return n=e.sent,e.next=8,t._id?C(null===n||void 0===n?void 0:n.value,t):A(null===n||void 0===n?void 0:n.value,t);case 8:return a=e.sent,e.next=11,w(null===n||void 0===n?void 0:n.value);case 11:return r=e.sent,console.log(r),e.next=15,o.set({key:"items",value:JSON.stringify(r)});case 15:G("saveItem succeeded"),l({type:"SAVE_ITEM_SUCCEEDED",payload:{item:a}}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),G("saveItem failed"),l({type:"SAVE_ITEM_FAILED",payload:{error:e.t0}});case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}},ee=h("ItemList"),te=function(e){var t=e.history,n=Object(a.useState)(void 0),o=Object(p.a)(n,2),c=o[0],i=o[1],s=Object(a.useContext)(Y),l=s.items,E=s.fetching,h=s.fetchingError,g=Object(a.useState)(l),b=Object(p.a)(g,2),j=b[0],y=b[1],O=Object(a.useState)(""),k=Object(p.a)(O,2),x=k[0],_=k[1],S=Object(a.useContext)(L).storage,w=[];Object(a.useEffect)((function(){l?(console.log(l),y(l)):S.get({key:"items"}).then((function(e){console.log(null===e||void 0===e?void 0:e.value),w=JSON.parse(null===e||void 0===e?void 0:e.value),y(w)}))}),[l]),ee("render");var A=Object(a.useContext)(L).logout;function C(){return(C=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],l?(console.log(l),null===l||void 0===l||l.filter((function(e){var t=Object.assign({},e);t.breed===c&&n.push(t)})),y(n)):j&&(console.log(w),null===j||void 0===j||j.filter((function(e){var t=Object.assign({},e);t.breed===c&&n.push(t)})),y(n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e){C.apply(this,arguments)}(!0)}),[c]),r.a.createElement(u.o,null,r.a.createElement(u.h,null,r.a.createElement(u.v,null,r.a.createElement(u.u,null,"Item List"),r.a.createElement(u.g,{onClick:function(){ee("handleLogout..."),null===A||void 0===A||A()}},r.a.createElement(u.i,{icon:m.j})))),r.a.createElement(u.e,null,r.a.createElement(u.n,{isOpen:E,message:"Fetching items"}),r.a.createElement(u.s,{value:c,placeholder:"Select smthg",onIonChange:function(e){return i(e.detail.value)}},j&&(null===j||void 0===j?void 0:j.map((function(e){var t=e._id,n=e.breed;return r.a.createElement(u.t,{key:t,value:n},n)})))),r.a.createElement(u.g,{onClick:function(){l?y(l):S.get({key:"items"}).then((function(e){console.log(null===e||void 0===e?void 0:e.value),w=JSON.parse(null===e||void 0===e?void 0:e.value),y(w)}))}},r.a.createElement(u.i,{icon:m.h})),r.a.createElement(u.r,{value:x,debounce:1e3,onIonChange:function(e){return _(e.detail.value)}}),j&&r.a.createElement(u.m,null,j.filter((function(e){e._id;return e.text.indexOf(x)>=0})).map((function(e){var n=e._id,a=e.text,o=e.breed;return r.a.createElement(v,{key:n,_id:n,text:a,onEdit:function(e){return t.push("/item/".concat(e))},breed:o})}))),h&&r.a.createElement("div",null,h.message||"Failed to fetch items"),l&&r.a.createElement(u.f,{vertical:"bottom",horizontal:"end",slot:"fixed"},r.a.createElement(u.g,{onClick:function(){return t.push("/item")}},r.a.createElement(u.i,{icon:m.a})))))},ne=h("ItemEdit"),ae=function(e){var t=e.history,n=e.match,o=Object(a.useContext)(Y),c=o.items,i=o.saving,s=o.savingError,l=o.saveItem,d=Object(a.useState)(""),f=Object(p.a)(d,2),m=f[0],v=f[1],E=Object(a.useState)(""),h=Object(p.a)(E,2),g=h[0],b=h[1],j=Object(a.useState)(),y=Object(p.a)(j,2),O=y[0],x=y[1];Object(a.useEffect)((function(){ne("useEffect");var e=n.params.id||"",t=null===c||void 0===c?void 0:c.find((function(t){return t._id===e}));x(t),t&&(v(t.text),b(t.breed))}),[n.params.id,c]);return ne("render"),r.a.createElement(u.o,null,r.a.createElement(u.h,null,r.a.createElement(u.v,null,r.a.createElement(u.u,null,"Edit"),r.a.createElement(u.d,{slot:"end"},r.a.createElement(u.c,{onClick:function(){var e=O?Object(k.a)(Object(k.a)({},O),{},{text:m,breed:g}):{text:m,breed:g};l&&l(e).then((function(){return t.goBack()}))}},"Save")))),r.a.createElement(u.e,null,r.a.createElement(u.l,null,"description"),r.a.createElement(u.j,{value:m,onIonChange:function(e){return v(e.detail.value||"")}}),r.a.createElement(u.l,null,"breed"),r.a.createElement(u.j,{value:g,onIonChange:function(e){return b(e.detail.value||"")}}),r.a.createElement(u.n,{isOpen:i}),s&&r.a.createElement("div",null,s.message||"Failed to save item")))},re=(n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(109),function(){return r.a.createElement(u.b,null,r.a.createElement(s.a,null,r.a.createElement(u.q,null,r.a.createElement(J,null,r.a.createElement(i.b,{path:"/login",component:$,exact:!0}),r.a.createElement(Z,null,r.a.createElement(B,{path:"/items",component:te,exact:!0}),r.a.createElement(B,{path:"/item",component:ae,exact:!0}),r.a.createElement(B,{path:"/item/:id",component:ae,exact:!0})),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/items"})}})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,n){e.exports=n(110)},76:function(e,t,n){var a={"./ion-action-sheet.entry.js":[112,5],"./ion-alert.entry.js":[113,6],"./ion-app_8.entry.js":[114,7],"./ion-avatar_3.entry.js":[115,18],"./ion-back-button.entry.js":[116,19],"./ion-backdrop.entry.js":[117,43],"./ion-button_2.entry.js":[118,20],"./ion-card_5.entry.js":[119,21],"./ion-checkbox.entry.js":[120,22],"./ion-chip.entry.js":[121,23],"./ion-col_3.entry.js":[122,44],"./ion-datetime_3.entry.js":[123,10],"./ion-fab_3.entry.js":[124,24],"./ion-img.entry.js":[125,45],"./ion-infinite-scroll_2.entry.js":[126,46],"./ion-input.entry.js":[127,25],"./ion-item-option_3.entry.js":[128,26],"./ion-item_8.entry.js":[129,27],"./ion-loading.entry.js":[130,28],"./ion-menu_3.entry.js":[131,29],"./ion-modal.entry.js":[132,8],"./ion-nav_2.entry.js":[133,15],"./ion-popover.entry.js":[134,9],"./ion-progress-bar.entry.js":[135,30],"./ion-radio_2.entry.js":[136,31],"./ion-range.entry.js":[137,32],"./ion-refresher_2.entry.js":[138,11],"./ion-reorder_2.entry.js":[139,17],"./ion-ripple-effect.entry.js":[140,47],"./ion-route_4.entry.js":[141,33],"./ion-searchbar.entry.js":[142,34],"./ion-segment_2.entry.js":[143,35],"./ion-select_3.entry.js":[144,36],"./ion-slide_2.entry.js":[145,48],"./ion-spinner.entry.js":[146,13],"./ion-split-pane.entry.js":[147,49],"./ion-tab-bar_2.entry.js":[148,37],"./ion-tab_2.entry.js":[149,16],"./ion-text.entry.js":[150,38],"./ion-textarea.entry.js":[151,39],"./ion-toast.entry.js":[152,40],"./ion-toggle.entry.js":[153,12],"./ion-virtual-scroll.entry.js":[154,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=76,e.exports=r},78:function(e,t,n){var a={"./ion-icon.entry.js":[158,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=78,e.exports=r}},[[70,3,4]]]);
//# sourceMappingURL=main.e503ce8a.chunk.js.map