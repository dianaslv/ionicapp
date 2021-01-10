(this.webpackJsonpmyApp=this.webpackJsonpmyApp||[]).push([[1],{106:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){var a={"./pwa-action-sheet.entry.js":[169,59],"./pwa-camera-modal-instance.entry.js":[170,60],"./pwa-camera-modal.entry.js":[171,61],"./pwa-camera.entry.js":[172,62],"./pwa-toast.entry.js":[173,63]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=118,e.exports=r},119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(39),c=n.n(o),i=n(26),s=n(2),u=n(68),l=n(3),p=n.n(l),d=n(4),f=n(9),m=n(15),h=function(e){var t=e._id,n=e.text,a=e.breed,o=e.photos,c=e.onEdit;return r.a.createElement(s.p,{onClick:function(){return c(t)}},r.a.createElement(s.q,null,n),r.a.createElement(s.q,null,a),r.a.createElement(s.i,null,r.a.createElement(s.x,null,o.map((function(e,t){return r.a.createElement(s.e,{size:"6",key:t},r.a.createElement(s.l,{src:e.webviewPath}))})))))},v="192.168.0.100:3001",E=function(e){return function(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=console).log.apply(t,[e].concat(a))}},b=E("api");function j(e,t){return b("".concat(t," - started")),e.then((function(e){return b("".concat(t," - succeeded")),Promise.resolve(e.data)})).catch((function(e){return b("".concat(t," - failed")),Promise.reject(e)}))}var g={headers:{"Content-Type":"application/json"}},y=function(e){return{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}},O=n(23),k=n(7),w=n(30),S=n.n(w),x="http://".concat(v,"/api/item"),_=function(e){return j(S.a.get(x,y(e)),"getItems")},C=function(e,t,n){return j(S.a.post("".concat(x,"/pagination"),{skip:t,length:n},y(e)),"getPagination")},A=function(e,t){return j(S.a.post(x,t,y(e)),"createItem")},T=function(e,t){return j(S.a.put("".concat(x,"/").concat(t._id),t,y(e)),"updateItem")},I=E("ws"),D="http://".concat(v,"/api/auth/login"),P=function(e,t){return j(S.a.post(D,{username:e,password:t},g),"login")},N=n(13),M=E("AuthProvider"),F={isAuthenticated:!1,isAuthenticating:!1,authenticationError:null,pendingAuthentication:!1,tokenFound:!1,username:"",storage:N.f},U=r.a.createContext(F),J=function(e){var t=e.children,n=Object(a.useState)(F),o=Object(f.a)(n,2),c=o[0],i=o[1],s=c.isAuthenticated,u=c.tokenFound,l=c.isAuthenticating,m=c.authenticationError,h=c.pendingAuthentication,v=c.username,E=c.password,b=N.f,j=Object(a.useCallback)((function(e,t){return w.apply(this,arguments)}),[]),g=Object(a.useCallback)((function(){return O.apply(this,arguments)}),[]);Object(a.useEffect)((function(){var e=!1;return function(){t.apply(this,arguments)}(),function(){e=!0};function t(){return(t=Object(d.a)(p.a.mark((function t(){var n,a,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=3;break}return M("authenticate, !pendingAuthentication, return"),t.abrupt("return");case 3:if(t.prev=3,M("authenticate..."),i(Object(k.a)(Object(k.a)({},c),{},{isAuthenticating:!0})),!e){t.next=8;break}return t.abrupt("return");case 8:return n=c.username,a=c.password,t.next=11,P(n,a);case 11:return r=t.sent,o=r.token,t.next=15,b.set({key:"token",value:o});case 15:M("authenticate succeeded"),i(Object(k.a)(Object(k.a)({},c),{},{pendingAuthentication:!1,isAuthenticated:!0,isAuthenticating:!1,tokenFound:!0})),t.next=25;break;case 19:if(t.prev=19,t.t0=t.catch(3),!e){t.next=23;break}return t.abrupt("return");case 23:M("authenticate failed"),i(Object(k.a)(Object(k.a)({},c),{},{authenticationError:t.t0,pendingAuthentication:!1,isAuthenticating:!1,tokenFound:!1}));case 25:case"end":return t.stop()}}),t,null,[[3,19]])})))).apply(this,arguments)}}),[h]),Object(a.useEffect)((function(){b.get({key:"token"}).then(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t.value&&i(Object(k.a)(Object(k.a)({},c),{},{pendingAuthentication:!1,username:v,password:E,isAuthenticated:!0,isAuthenticating:!1,tokenFound:!0}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var y={username:v,isAuthenticated:s,tokenFound:u,login:j,logout:g,isAuthenticating:l,authenticationError:m,storage:b,password:E};return M("render"),r.a.createElement(U.Provider,{value:y},t);function O(){return(O=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.clear();case 2:i(Object(k.a)(Object(k.a)({},c),{},{isAuthenticated:!1,isAuthenticating:!1,authenticationError:null,pendingAuthentication:!1,username:"",password:"",tokenFound:!1}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(d.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M("login"),u||i(Object(k.a)(Object(k.a)({},c),{},{pendingAuthentication:!0,username:t,password:n}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},L=n(74),q=E("Login"),B=function(e){var t=e.component,n=Object(L.a)(e,["component"]),o=Object(a.useContext)(U).isAuthenticated;return q("render, isAuthenticated",o),r.a.createElement(i.b,Object.assign({},n,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login"}})}}))},R=N.e.App,V={isActive:!0},z=N.e.Network,H={connected:!1,connectionType:"unknown"},W=function(){var e=Object(a.useState)(H),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=z.addListener("networkStatusChange",n);z.getStatus().then(n);var t=!1;return function(){t=!0,e.remove()};function n(e){console.log("useNetwork - status change",e),t||r(e)}}),[]),{networkStatus:n}},$=N.e.BackgroundTask,G=function(e){return Object(a.useEffect)((function(){var t=$.beforeExit(Object(d.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("useBackgroundTask - executeTask started"),n.next=3,e();case 3:console.log("useBackgroundTask - executeTask finished"),$.finish({taskId:t});case 5:case"end":return n.stop()}}),n)}))))}),[]),{}},K=(n(106),function(e){return Object(a.useEffect)((function(){var e=document.querySelector(".square-a");if(e){Object(s.J)().addElement(e).duration(1e3).direction("alternate").iterations(1/0).keyframes([{offset:0,transform:"scale(1.5)",opacity:"1"},{offset:1,transform:"scale(0.5)",opacity:"0.5"}]).play()}}),[e.allMandatory]),Object(a.useEffect)((function(){var e=document.querySelector(".square-b"),t=document.querySelector(".square-c");if(e&&t){var n=Object(s.J)().addElement(e).duration(5e3).fromTo("transform","scale(1)","scale(1.5)").afterStyles({color:"red"}),a=Object(s.J)().addElement(t).duration(7e3).fromTo("transform","scale(1)","scale(0.5)").afterStyles({color:"red"});Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.play();case 2:return e.next=4,a.play();case 4:case"end":return e.stop()}}),e)})))()}}),[e.usernameMandatory]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"square-a"},r.a.createElement("p",null,e.allMandatory)),r.a.createElement("div",{className:"square-b"},r.a.createElement("p",null,e.usernameMandatory)),r.a.createElement("div",{className:"square-c"},r.a.createElement("p",null,e.passwordMandatory)))}),Q=E("Login"),X=function(e){e.history;var t=Object(a.useContext)(U),n=t.isAuthenticated,o=t.isAuthenticating,c=t.login,u=t.authenticationError,l=Object(a.useState)({}),p=Object(f.a)(l,2),d=p[0],m=p[1],h=Object(a.useState)(!1),v=Object(f.a)(h,2),E=v[0],b=v[1],j=Object(a.useState)(!1),g=Object(f.a)(j,2),y=g[0],O=g[1],w=d.username,S=d.password,x=function(){var e=Object(a.useState)(V),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=R.addListener("appStateChange",n);R.getState().then(n);var t=!1;return function(){t=!0,e.remove()};function n(e){console.log("useAppState - state change",e),t||r(e)}}),[]),{appState:n}}().appState,_=W().networkStatus;G((function(){return new Promise((function(e){console.log("My Background Task"),e()}))}));if(Q("render"),n)return console.log("IT IS AUTHEN"),r.a.createElement(i.a,{to:{pathname:"/"}});var C=function(e){var t=Object(s.J)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","0.01","var(--backdrop-opacity)"),n=Object(s.J)().addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:"0",transform:"scale(0)"},{offset:1,opacity:"0.99",transform:"scale(1)"}]);return Object(s.J)().addElement(e).easing("ease-out").duration(500).addAnimation([t,n])};return r.a.createElement(s.u,null,r.a.createElement(s.j,null,r.a.createElement(s.C,null,r.a.createElement(s.B,null,"Login"))),r.a.createElement(s.f,null,r.a.createElement(s.c,{onClick:function(){return b(!0)},expand:"block"},"Show Network status"),r.a.createElement(s.t,{isOpen:E,enterAnimation:C,leaveAnimation:function(e){return C(e).direction("reverse")}},x.isActive?r.a.createElement("p",null,"App is active."):r.a.createElement("p",null,"App is not active."),_.connected?r.a.createElement("p",null,"Network status: Connected to ",_.connectionType):r.a.createElement("p",null,"Not connected to a network."),r.a.createElement(s.c,{onClick:function(){return b(!1)}},"Close Modal")),r.a.createElement("div",null,"App state is ",JSON.stringify(x)),r.a.createElement("div",null,"Network status is ",JSON.stringify(_)),y&&r.a.createElement(K,{allMandatory:"all fields are mandatory",usernameMandatory:w?"checked":"enter username",passwordMandatory:S?"checked":"enter password"}),r.a.createElement(s.o,{placeholder:"Username",value:w,onIonChange:function(e){return m(Object(k.a)(Object(k.a)({},d),{},{username:e.detail.value||""}))}}),r.a.createElement(s.o,{placeholder:"Password",value:S,onIonChange:function(e){return m(Object(k.a)(Object(k.a)({},d),{},{password:e.detail.value||""}))}}),r.a.createElement(s.s,{isOpen:o}),u&&r.a.createElement("div",null,u.message||"Failed to authenticate"),r.a.createElement(s.c,{onClick:function(){Q("handleLogin..."),console.log({username:w,password:S}),w&&S?(O(!1),null===c||void 0===c||c(w,S)):O(!0)}},"Login")))},Y=n(71),Z=n(75),ee=n(49),te=n(76);var ne=E("ItemProvider"),ae={fetching:!1,saving:!1,unsavedData:[],noSkipped:0},re=function(e,t){var n=t.type,a=t.payload;switch(n){case"FETCH_ITEMS_STARTED":return Object(k.a)(Object(k.a)({},e),{},{fetching:!0,fetchingError:null});case"FETCH_ITEMS_SUCCEEDED":return Object(k.a)(Object(k.a)({},e),{},{items:a.items,noSkipped:a.noSkipped,fetching:!1});case"FETCH_ITEMS_FAILED":return Object(k.a)(Object(k.a)({},e),{},{fetchingError:a.error,fetching:!1});case"SAVE_ITEM_STARTED":return Object(k.a)(Object(k.a)({},e),{},{savingError:null,saving:!0});case"SAVE_ITEM_SUCCEEDED":var r=Object(O.a)(e.items||[]),o=a.item,c=r.findIndex((function(e){return e._id===o._id}));return-1===c?r.splice(0,0,o):r[c]=o,Object(k.a)(Object(k.a)({},e),{},{items:r,saving:!1});case"CLEAN_UNPROCESSED_ITEMS":return Object(k.a)(Object(k.a)({},e),{},{unsavedData:[],saving:!1});case"SAVE_ITEM_FAILED":return Object(k.a)(Object(k.a)({},e),{},{savingError:a.error,saving:!1});case"SAVE_UNPROCESSED_ITEM":var i=Object(O.a)(e.unsavedData||[]);return i.push(a.item),console.log("SAVE_UNPROCESSED_ITEM"),console.log({unsavedData:i}),Object(k.a)(Object(k.a)({},e),{},{unsavedData:i,saving:!1});default:return e}},oe=r.a.createContext(ae),ce=function(e){var t=e.children,n=Object(a.useContext)(U),o=n.storage,c=n.tokenFound,i=Object(a.useReducer)(re,ae),s=Object(f.a)(i,2),u=s[0],l=s[1],m=u.items,h=u.fetching,E=u.fetchingError,b=u.saving,j=u.savingError,g=u.unsavedData,y=u.noSkipped,k=W().networkStatus,w=function(){var e=Object(Z.a)().getPhoto,t=Object(a.useState)([]),n=Object(f.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)([]),i=Object(f.a)(c,2),s=i[0],u=i[1],l=function(){var t=Object(d.a)(p.a.mark((function t(){var n,a,c,i,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log({photos:r,tempPhotos:s}),t.next=3,e({resultType:N.a.Uri,source:N.b.Camera,quality:100});case 3:return n=t.sent,a=(new Date).getTime()+".jpeg",t.next=7,j(n,a);case 7:c=t.sent,i=[c].concat(Object(O.a)(s)),l=[c].concat(Object(O.a)(r)),o(l),k("photos",JSON.stringify(l)),u(i);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u([]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=Object(ee.b)(),v=h.deleteFile,E=h.readFile,b=h.writeFile,j=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)(t.webPath);case 2:return a=e.sent,e.next=5,b({path:n,data:a,directory:N.d.Data});case 5:return e.abrupt("return",{filepath:n,webviewPath:a});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=Object(te.a)(),y=g.get,k=g.set;Object(a.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,a,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("photos");case 2:t=e.sent,n=t?JSON.parse(t):[],a=Object(Y.a)(n),e.prev=5,a.s();case 7:if((r=a.n()).done){e.next=15;break}return c=r.value,e.next=11,E({path:c.filepath,directory:N.d.Data});case 11:i=e.sent,c.webviewPath="data:image/jpeg;base64,".concat(i.data);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:o(n);case 24:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})));return function(){return e.apply(this,arguments)}})()()}),[y,E]);var w=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.filter((function(e){return e.filepath!==t.filepath})),k("photos",JSON.stringify(n)),a=t.filepath.substr(t.filepath.lastIndexOf("/")+1),e.next=5,v({path:a,directory:N.d.Data});case 5:o(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{photos:r,takePhoto:l,deletePhoto:w,tempPhotos:s,saveTempPhotos:m}}(),S=w.photos,x=w.takePhoto,D=w.deletePhoto,P=w.tempPhotos,M=w.saveTempPhotos;G((function(){return new Promise(function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(k.connected),!k.connected){e.next=11;break}return e.next=4,o.get({key:"token"});case 4:n=e.sent,console.log({unsavedData:g}),null===g||void 0===g||g.map(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._id?T(null===n||void 0===n?void 0:n.value,t):A(null===n||void 0===n?void 0:n.value,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l({type:"CLEAN_UNPROCESSED_ITEMS"}),console.log({unsavedData:g}),console.log("My Background Task"),t();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Object(a.useEffect)((function(){return console.log("hey from here"),L(!1),function(){!0}}),[o,c]),Object(a.useEffect)((function(){o.get({key:"token"}).then((function(e){var t,n,a=!1;return ne("wsEffect - connecting"),(null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.trim())&&(n=function(e,t){var n=new WebSocket("ws://".concat(v));return n.onopen=function(){I("web socket onopen"),n.send(JSON.stringify({type:"authorization",payload:{token:e}}))},n.onclose=function(){I("web socket onclose")},n.onerror=function(e){I("web socket onerror",e)},n.onmessage=function(e){I("web socket onmessage"),t(JSON.parse(e.data))},function(){n.close()}}(null===e||void 0===e?void 0:e.value,(function(e){if(!a){var t=e.type,n=e.payload;ne("ws message, item ".concat(t)),"created"!==t&&"updated"!==t||l({type:"SAVE_ITEM_SUCCEEDED",payload:{item:n}})}}))),function(){var e;ne("wsEffect - disconnecting"),a=!0,null===(e=n)||void 0===e||e()}}))}),[o,c]);var F=Object(a.useCallback)((function(e){return B.apply(this,arguments)}),[o,c]),J={noSkipped:y,fetchItems:L,items:m,fetching:h,fetchingError:E,saving:b,savingError:j,saveItem:F,storage:o,unsavedData:g,clearUnsavedData:function(){l({type:"CLEAN_UNPROCESSED_ITEMS"})},photos:S,takePhoto:x,deletePhoto:D,tempPhotos:P,saveTempPhotos:M};return ne("returns"),r.a.createElement(oe.Provider,{value:J},t);function L(e){return q.apply(this,arguments)}function q(){return(q=Object(d.a)(p.a.mark((function e(t){var n,a,r,c,i,s,u,d,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get({key:"token"});case 2:if(a=e.sent,console.log(a),null===a||void 0===a||null===(n=a.value)||void 0===n?void 0:n.trim()){e.next=6;break}return e.abrupt("return");case 6:if(e.prev=6,!(null===a||void 0===a?void 0:a.value)){e.next=25;break}return console.log({noSkipped:y,limit:10}),ne("fetchItems started"),l({type:"FETCH_ITEMS_STARTED"}),e.next=13,C(null===a||void 0===a?void 0:a.value,y,10);case 13:if(r=e.sent,console.log(r,JSON.stringify(r)),c=[],m)for(i=0,s=m.length;i<s;i++)c.push(m[i]);for(u=0,d=r.length;u<d;u++)c.push(r[u]);if(console.log({newData:c}),ne("fetchItems succeeded"),t){e.next=25;break}return console.log(r),e.next=24,o.set({key:"items",value:JSON.stringify(r)});case 24:l({type:"FETCH_ITEMS_SUCCEEDED",payload:{items:c,noSkipped:y+10}});case 25:e.next=34;break;case 27:return e.prev=27,e.t0=e.catch(6),ne("fetchItems failed"),e.next=32,o.get({key:"items"});case 32:f=e.sent,l(void 0===f?{type:"FETCH_ITEMS_SUCCEEDED",payload:[]}:{type:"FETCH_ITEMS_SUCCEEDED",payload:{itemsStorage:f,noSkipped:y+10}});case 34:case"end":return e.stop()}}),e,null,[[6,27]])})))).apply(this,arguments)}function B(){return(B=Object(d.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(k.connected),!k.connected){e.next=22;break}return ne("saveItem started"),l({type:"SAVE_ITEM_STARTED"}),e.next=7,o.get({key:"token"});case 7:return n=e.sent,e.next=10,t._id?T(null===n||void 0===n?void 0:n.value,t):A(null===n||void 0===n?void 0:n.value,t);case 10:return a=e.sent,setPhotosForItem(a._id),e.next=14,_(null===n||void 0===n?void 0:n.value);case 14:return r=e.sent,console.log(r),e.next=18,o.set({key:"items",value:JSON.stringify(r)});case 18:ne("saveItem succeeded"),l({type:"SAVE_ITEM_SUCCEEDED",payload:{item:a}}),e.next=23;break;case 22:l({type:"SAVE_UNPROCESSED_ITEM",payload:{item:t}});case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(0),ne("saveItem failed"),l({type:"SAVE_ITEM_FAILED",payload:{error:e.t0}});case 29:case"end":return e.stop()}}),e,null,[[0,25]])})))).apply(this,arguments)}},ie=E("ItemList"),se=function(e){var t=e.history,n=Object(a.useState)(void 0),o=Object(f.a)(n,2),c=o[0],i=o[1],u=Object(a.useContext)(oe),l=u.items,v=u.fetching,E=u.fetchingError,b=u.unsavedData,j=u.clearUnsavedData,g=u.saveItem,y=(u.photos,u.deletePhoto),O=u.fetchItems,k=Object(a.useState)(l),w=Object(f.a)(k,2),S=w[0],x=w[1],_=Object(a.useState)(""),C=Object(f.a)(_,2),A=C[0],T=C[1],I=Object(a.useContext)(U).storage,D=[],P=Object(a.useState)(),N=Object(f.a)(P,2),M=N[0],F=N[1],J=W().networkStatus,L=Object(a.useState)(!1),q=Object(f.a)(L,2),B=q[0];q[1];G((function(){return new Promise(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(J.connected),J.connected&&(console.log({unsavedData:b}),null===b||void 0===b||b.map(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=3;break}return e.next=3,g(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j(),console.log({unsavedData:b}),console.log("My Background Task"),t());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Object(a.useEffect)((function(){l?(console.log(l),x(l)):I.get({key:"items"}).then((function(e){console.log(null===e||void 0===e?void 0:e.value),D=JSON.parse(null===e||void 0===e?void 0:e.value),x(D)}))}),[l]),ie("render");var R=Object(a.useContext)(U).logout;function V(){return(V=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],l?(console.log(l),null===l||void 0===l||l.filter((function(e){var t=Object.assign({},e);t.breed===c&&n.push(t)})),x(n)):S&&(console.log(D),null===S||void 0===S||S.filter((function(e){var t=Object.assign({},e);t.breed===c&&n.push(t)})),x(n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("hei from scroll"),O(!1),t.target.complete();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e){V.apply(this,arguments)}(!0)}),[c]),r.a.createElement(s.u,null,r.a.createElement(s.j,null,r.a.createElement(s.C,null,r.a.createElement(s.B,null,"Item List"),r.a.createElement(s.h,{onClick:function(){ie("handleLogout..."),null===R||void 0===R||R()}},r.a.createElement(s.k,{icon:m.k})))),r.a.createElement(s.f,null,r.a.createElement(s.s,{isOpen:v,message:"Fetching items"}),r.a.createElement(s.z,{value:c,placeholder:"Select smthg",onIonChange:function(e){return i(e.detail.value)}},S&&(null===S||void 0===S?void 0:S.map((function(e){var t=e._id,n=e.breed;return r.a.createElement(s.A,{key:t,value:n},n)})))),r.a.createElement(s.h,{onClick:function(){l?x(l):I.get({key:"items"}).then((function(e){console.log(null===e||void 0===e?void 0:e.value),D=JSON.parse(null===e||void 0===e?void 0:e.value),x(D)}))}},r.a.createElement(s.k,{icon:m.i})),r.a.createElement(s.y,{value:A,debounce:1e3,onIonChange:function(e){return T(e.detail.value)}}),l&&r.a.createElement(s.r,null,l.filter((function(e){e._id;return e.text.indexOf(A)>=0})).map((function(e){var n,a=e._id,o=e.text,c=e.breed,i=e.photos;return r.a.createElement(h,{key:a,_id:a,text:o,onEdit:function(e){return t.push("/item/".concat(e))},breed:c,photos:(n=i,n||[])})}))),E&&r.a.createElement("div",null,E.message||"Failed to fetch items"),r.a.createElement(s.g,{vertical:"bottom",horizontal:"end",slot:"fixed"},r.a.createElement(s.h,{onClick:function(){return t.push("/item")}},r.a.createElement(s.k,{icon:m.a}))),r.a.createElement(s.a,{isOpen:!!M,buttons:[{text:"Delete",role:"destructive",icon:m.r,handler:function(){M&&(y(M),F(void 0))}},{text:"Cancel",icon:m.g,role:"cancel"}],onDidDismiss:function(){return F(void 0)}}),r.a.createElement(s.m,{threshold:"100px",disabled:B,onIonInfinite:function(e){return function(e){return z.apply(this,arguments)}(e)}},r.a.createElement(s.n,{loadingText:"Loading more good doggos..."}))))},ue=E("ItemEdit"),le=function(e){var t=e.history,n=e.match,o=Object(a.useContext)(oe),c=o.items,i=o.saving,u=o.savingError,l=o.saveItem,p=o.tempPhotos,d=(o.photos,o.saveTempPhotos),h=o.takePhoto,v=(o.deletePhoto,Object(a.useState)("")),E=Object(f.a)(v,2),b=E[0],j=E[1],g=Object(a.useState)(""),y=Object(f.a)(g,2),w=y[0],S=y[1],x=Object(a.useState)(),_=Object(f.a)(x,2),C=_[0],A=_[1];G((function(){return new Promise((function(e){console.log("My Background Task"),e()}))})),Object(a.useEffect)((function(){ue("useEffect");var e=n.params.id||"",t=null===c||void 0===c?void 0:c.find((function(t){return t._id===e}));A(t),t&&(j(t.text),S(t.breed))}),[n.params.id,c]);return ue("render"),r.a.createElement(s.u,null,r.a.createElement(s.j,null,r.a.createElement(s.C,null,r.a.createElement(s.B,null,"Edit"),r.a.createElement(s.d,{slot:"end"},r.a.createElement(s.c,{onClick:function(){if(C){console.log({item:C,tempPhotos:p});var e=Object(k.a)({},C);C.photos?(e.photos=[].concat(Object(O.a)(C.photos),Object(O.a)(p)),console.log("yes copyItem.photos"),console.log(e.photos)):(console.log("copyItem.photos"),console.log(e.photos),e.photos=p),e.text=b,e.breed=w,console.log({copyItem:e}),l&&l(e).then((function(){d(),t.push("/items")}))}else{l&&l({text:b,breed:w,photos:p}).then((function(){d(),t.push("/items")}))}}},"Save")))),r.a.createElement(s.f,null,r.a.createElement(s.q,null,"description"),r.a.createElement(s.o,{value:b,onIonChange:function(e){return j(e.detail.value||"")}}),r.a.createElement(s.q,null,"breed"),r.a.createElement(s.o,{value:w,onIonChange:function(e){return S(e.detail.value||"")}}),r.a.createElement(s.i,null,r.a.createElement(s.x,null,(null===C||void 0===C?void 0:C.photos)&&(null===C||void 0===C?void 0:C.photos.map((function(e,t){return r.a.createElement(s.e,{size:"6",key:t},r.a.createElement(s.l,{src:e.webviewPath}))}))),p.map((function(e,t){return r.a.createElement(s.e,{size:"6",key:t},r.a.createElement(s.l,{src:e.webviewPath}))})))),r.a.createElement(s.g,{vertical:"bottom",horizontal:"center",slot:"fixed"},r.a.createElement(s.h,{onClick:function(){return h()}},r.a.createElement(s.k,{icon:m.c}))),r.a.createElement(s.s,{isOpen:i}),u&&r.a.createElement("div",null,u.message||"Failed to save item")))},pe=(n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),function(){return r.a.createElement(s.b,null,r.a.createElement(u.a,null,r.a.createElement(s.w,null,r.a.createElement(J,null,r.a.createElement(i.b,{path:"/login",component:X,exact:!0}),r.a.createElement(ce,null,r.a.createElement(B,{path:"/items",component:se,exact:!0}),r.a.createElement(B,{path:"/item",component:le,exact:!0}),r.a.createElement(B,{path:"/item/:id",component:le,exact:!0})),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/items"})}})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=n(73);Object(de.a)(window),c.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,n){e.exports=n(119)},83:function(e,t,n){var a={"./ion-action-sheet.entry.js":[121,7],"./ion-alert.entry.js":[122,8],"./ion-app_8.entry.js":[123,9],"./ion-avatar_3.entry.js":[124,19],"./ion-back-button.entry.js":[125,20],"./ion-backdrop.entry.js":[126,45],"./ion-button_2.entry.js":[127,21],"./ion-card_5.entry.js":[128,22],"./ion-checkbox.entry.js":[129,23],"./ion-chip.entry.js":[130,24],"./ion-col_3.entry.js":[131,46],"./ion-datetime_3.entry.js":[132,12],"./ion-fab_3.entry.js":[133,25],"./ion-img.entry.js":[134,47],"./ion-infinite-scroll_2.entry.js":[135,48],"./ion-input.entry.js":[136,26],"./ion-item-option_3.entry.js":[137,27],"./ion-item_8.entry.js":[138,28],"./ion-loading.entry.js":[139,29],"./ion-menu_3.entry.js":[140,30],"./ion-modal.entry.js":[141,10],"./ion-nav_2.entry.js":[142,16],"./ion-popover.entry.js":[143,11],"./ion-progress-bar.entry.js":[144,31],"./ion-radio_2.entry.js":[145,32],"./ion-range.entry.js":[146,33],"./ion-refresher_2.entry.js":[147,13],"./ion-reorder_2.entry.js":[148,18],"./ion-ripple-effect.entry.js":[149,49],"./ion-route_4.entry.js":[150,34],"./ion-searchbar.entry.js":[151,35],"./ion-segment_2.entry.js":[152,36],"./ion-select_3.entry.js":[153,37],"./ion-slide_2.entry.js":[154,50],"./ion-spinner.entry.js":[155,15],"./ion-split-pane.entry.js":[156,51],"./ion-tab-bar_2.entry.js":[157,38],"./ion-tab_2.entry.js":[158,17],"./ion-text.entry.js":[159,39],"./ion-textarea.entry.js":[160,40],"./ion-toast.entry.js":[161,41],"./ion-toggle.entry.js":[162,14],"./ion-virtual-scroll.entry.js":[163,52]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=83,e.exports=r},85:function(e,t,n){var a={"./ion-icon.entry.js":[165,67]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=85,e.exports=r}},[[77,3,6]]]);
//# sourceMappingURL=main.0adaf123.chunk.js.map