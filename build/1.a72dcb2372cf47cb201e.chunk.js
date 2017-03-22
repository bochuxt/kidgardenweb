webpackJsonp([1],{"./app/containers/App/actions.js":function(e,t,n){"use strict";function r(){return{type:a.b}}function o(e,t){return{type:a.c,repos:e,username:t}}function i(e){return{type:a.d,error:e}}var a=n("./app/containers/App/constants.js");t.a=r,t.b=o,t.c=i},"./app/containers/HomePage/sagas.js":function(e,t,n){"use strict";function r(){var e,t,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.i(i.select)(n.i(f.a)());case 2:return e=o.sent,t="https://api.github.com/users/"+e+"/repos?type=all&sort=updated",o.prev=4,o.next=7,n.i(i.call)(c.a,t);case 7:return r=o.sent,o.next=10,n.i(i.put)(n.i(s.b)(r,e));case 10:o.next=16;break;case 12:return o.prev=12,o.t0=o.catch(4),o.next=16,n.i(i.put)(n.i(s.c)(o.t0));case 16:case"end":return o.stop()}},l[0],this,[[4,12]])}function o(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(i.takeLatest)(u.b,r);case 2:return e=t.sent,t.next=5,n.i(i.take)(a.LOCATION_CHANGE);case 5:return t.next=7,n.i(i.cancel)(e);case 7:case"end":return t.stop()}},l[1],this)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/redux-saga/effects.js"),a=(n.n(i),n("./node_modules/react-router-redux/lib/index.js")),u=(n.n(a),n("./app/containers/App/constants.js")),s=n("./app/containers/App/actions.js"),c=n("./app/utils/request.js"),f=n("./app/containers/HomePage/selectors.js");t.getRepos=r,t.githubData=o;var l=[r,o].map(regeneratorRuntime.mark);t.default=[o]},"./app/containers/HomePage/selectors.js":function(e,t,n){"use strict";var r=n("./node_modules/reselect/es/index.js");n.d(t,"a",function(){return i});var o=function(e){return e.get("home")},i=function(){return n.i(r.a)(o,function(e){return e.get("username")})}},"./app/utils/request.js":function(e,t,n){"use strict";(function(e){function r(e){return e.json()}function o(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function i(t,n){return e(t,n).then(o).then(r)}var a=n("./node_modules/whatwg-fetch/fetch.js");n.n(a);t.a=i}).call(t,n("./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/fetch.js"))},"./node_modules/redux-saga/effects.js":function(e,t,n){e.exports=n("./node_modules/redux-saga/lib/effects.js")},"./node_modules/redux-saga/lib/effects.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/redux-saga/lib/internal/io.js");Object.defineProperty(t,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(t,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(t,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(t,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(t,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(t,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(t,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(t,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(t,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(t,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(t,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(t,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(t,"cancelled",{enumerable:!0,get:function(){return r.cancelled}}),Object.defineProperty(t,"flush",{enumerable:!0,get:function(){return r.flush}}),Object.defineProperty(t,"takeEvery",{enumerable:!0,get:function(){return r.takeEvery}}),Object.defineProperty(t,"takeLatest",{enumerable:!0,get:function(){return r.takeLatest}}),Object.defineProperty(t,"throttle",{enumerable:!0,get:function(){return r.throttle}})},"./node_modules/redux-saga/lib/internal/buffers.js":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments[1],n=new Array(e),r=0,o=0,u=0,f=function(t){n[o]=t,o=(o+1)%e,r++},l=function(){if(0!=r){var t=n[u];return n[u]=null,r--,u=(u+1)%e,t}},d=function(){for(var e=[];r;)e.push(l());return e};return{isEmpty:function(){return 0==r},put:function(l){if(r<e)f(l);else{var h=void 0;switch(t){case a:throw new Error(i);case s:n[o]=l,o=(o+1)%e,u=o;break;case c:h=2*e,n=d(),r=n.length,o=n.length,u=0,n.length=h,e=h,f(l)}}},take:l,flush:d}}Object.defineProperty(t,"__esModule",{value:!0}),t.buffers=t.BUFFER_OVERFLOW=void 0;var o=n("./node_modules/redux-saga/lib/internal/utils.js"),i=t.BUFFER_OVERFLOW="Channel's Buffer overflow!",a=1,u=2,s=3,c=4,f={isEmpty:o.kTrue,put:o.noop,take:o.noop};t.buffers={none:function(){return f},fixed:function(e){return r(e,a)},dropping:function(e){return r(e,u)},sliding:function(e){return r(e,s)},expanding:function(e){return r(e,c)}}},"./node_modules/redux-saga/lib/internal/channel.js":function(e,t,n){"use strict";function r(){function e(e){return n.push(e),function(){return(0,s.remove)(n,e)}}function t(e){for(var t=n.slice(),r=0,o=t.length;r<o;r++)t[r](e)}var n=[];return{subscribe:e,emit:t}}function o(){function e(){if(a&&u.length)throw(0,s.internalErr)("Cannot have a closed channel with pending takers");if(u.length&&!i.isEmpty())throw(0,s.internalErr)("Cannot have pending takers with non empty buffer")}function t(t){if(e(),(0,s.check)(t,s.is.notUndef,y),!a){if(!u.length)return i.put(t);for(var n=0;n<u.length;n++){var r=u[n];if(!r[s.MATCH]||r[s.MATCH](t))return u.splice(n,1),r(t)}}}function n(t){e(),(0,s.check)(t,s.is.func,"channel.take's callback must be a function"),a&&i.isEmpty()?t(d):i.isEmpty()?(u.push(t),t.cancel=function(){return(0,s.remove)(u,t)}):t(i.take())}function r(t){if(e(),(0,s.check)(t,s.is.func,"channel.flush' callback must be a function"),a&&i.isEmpty())return void t(d);t(i.flush())}function o(){if(e(),!a&&(a=!0,u.length)){var t=u;u=[];for(var n=0,r=t.length;n<r;n++)t[n](d)}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.buffers.fixed(),a=!1,u=[];return(0,s.check)(i,s.is.buffer,p),{take:n,put:t,flush:r,close:o,get __takers__(){return u},get __closed__(){return a}}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.buffers.none(),n=arguments[2];arguments.length>2&&(0,s.check)(n,s.is.func,"Invalid match function passed to eventChannel");var r=o(t),i=e(function(e){if(h(e))return void r.close();n&&!n(e)||r.put(e)});if(!s.is.func(i))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:function(){r.__closed__||(r.close(),i())}}}function a(e){var t=i(function(t){return e(function(e){if(e[s.SAGA_ACTION])return void t(e);(0,f.asap)(function(){return t(e)})})});return u({},t,{take:function(e,n){arguments.length>1&&((0,s.check)(n,s.is.func,"channel.take's matcher argument must be a function"),e[s.MATCH]=n),t.take(e)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.UNDEFINED_INPUT_ERROR=t.INVALID_BUFFER=t.isEnd=t.END=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.emitter=r,t.channel=o,t.eventChannel=i,t.stdChannel=a;var s=n("./node_modules/redux-saga/lib/internal/utils.js"),c=n("./node_modules/redux-saga/lib/internal/buffers.js"),f=n("./node_modules/redux-saga/lib/internal/scheduler.js"),l="@@redux-saga/CHANNEL_END",d=t.END={type:l},h=t.isEnd=function(e){return e&&e.type===l},p=t.INVALID_BUFFER="invalid buffer passed to channel factory function",y=t.UNDEFINED_INPUT_ERROR="Saga was provided with an undefined action"},"./node_modules/redux-saga/lib/internal/io.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,E.check)(arguments[0],E.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),E.is.pattern(e))return q(x,{pattern:e});if(E.is.channel(e))return q(x,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}function i(e,t){return arguments.length>1?((0,E.check)(e,E.is.notUndef,"put(channel, action): argument channel is undefined"),(0,E.check)(e,E.is.channel,"put(channel, action): argument "+e+" is not a valid channel"),(0,E.check)(t,E.is.notUndef,"put(channel, action): argument action is undefined")):((0,E.check)(e,E.is.notUndef,"put(action): argument action is undefined"),t=e,e=null),q(O,{channel:e,action:t})}function a(e){return q(P,e)}function u(e,t,n){(0,E.check)(t,E.is.notUndef,e+": argument fn is undefined");var r=null;if(E.is.array(t)){var o=t,i=j(o,2);r=i[0],t=i[1]}else if(t.fn){var a=t;r=a.context,t=a.fn}return(0,E.check)(t,E.is.func,e+": argument "+t+" is not a function"),{context:r,fn:t,args:n}}function s(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return q(T,u("call",e,n))}function c(e,t){return q(T,u("apply",{context:e,fn:t},arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]))}function f(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return q(C,u("cps",e,n))}function l(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return q(U,u("fork",e,n))}function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=l.apply(void 0,[e].concat(n));return o[U].detached=!0,o}function h(e){if((0,E.check)(e,E.is.notUndef,"join(task): argument task is undefined"),!H(e))throw new Error("join(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return q(B,e)}function p(e){if((0,E.check)(e,E.is.notUndef,"cancel(task): argument task is undefined"),!H(e))throw new Error("cancel(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return q(R,e)}function y(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return 0===arguments.length?e=E.ident:((0,E.check)(e,E.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,E.check)(e,E.is.func,"select(selector,[...]): argument "+e+" is not a function")),q(S,{selector:e,args:n})}function b(e,t){return(0,E.check)(e,E.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,E.check)(t,E.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,E.check)(t,E.is.notUndef,"actionChannel(pattern, buffer): argument "+t+" is not a valid buffer")),q(I,{pattern:e,buffer:t})}function v(){return q(L,{})}function m(e){return(0,E.check)(e,E.is.channel,"flush(channel): argument "+e+" is not valid channel"),q(N,e)}function g(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return l.apply(void 0,[_.takeEveryHelper,e,t].concat(r))}function k(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return l.apply(void 0,[_.takeLatestHelper,e,t].concat(r))}function w(e,t,n){for(var r=arguments.length,o=Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return l.apply(void 0,[_.throttleHelper,e,t,n].concat(o))}Object.defineProperty(t,"__esModule",{value:!0}),t.asEffect=t.takem=void 0;var j=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.take=o,t.put=i,t.race=a,t.call=s,t.apply=c,t.cps=f,t.fork=l,t.spawn=d,t.join=h,t.cancel=p,t.select=y,t.actionChannel=b,t.cancelled=v,t.flush=m,t.takeEvery=g,t.takeLatest=k,t.throttle=w;var E=n("./node_modules/redux-saga/lib/internal/utils.js"),_=n("./node_modules/redux-saga/lib/internal/sagaHelpers.js"),A=(0,E.sym)("IO"),x="TAKE",O="PUT",P="RACE",T="CALL",C="CPS",U="FORK",B="JOIN",R="CANCEL",S="SELECT",I="ACTION_CHANNEL",L="CANCELLED",N="FLUSH",D=function(e,t){return e+" has been deprecated in favor of "+t+", please update your code"},q=function(e,t){var n;return n={},r(n,A,!0),r(n,e,t),n};o.maybe=function(){var e=o.apply(void 0,arguments);return e[x].maybe=!0,e};t.takem=(0,E.deprecate)(o.maybe,D("takem","take.maybe"));i.resolve=function(){var e=i.apply(void 0,arguments);return e[O].resolve=!0,e},i.sync=(0,E.deprecate)(i.resolve,D("put.sync","put.resolve"));var H=function(e){return e[E.TASK]},F=function(e){return function(t){return t&&t[A]&&t[e]}};t.asEffect={take:F(x),put:F(O),race:F(P),call:F(T),cps:F(C),fork:F(U),join:F(B),cancel:F(R),select:F(S),actionChannel:F(I),cancelled:F(L),flush:F(N)}},"./node_modules/redux-saga/lib/internal/sagaHelpers.js":function(e,t,n){"use strict";function r(e,t){function n(t,n){if(i===p)return h;if(n)throw i=p,n;o&&o(t);var r=e[i](),a=s(r,3),u=a[0],c=a[1],f=a[2];return i=u,o=f,i===p?h:c}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",o=void 0,i=t;return(0,f.makeIterator)(n,function(e){return n(null,e)},r,!0)}function o(e){return f.is.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function i(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var u={done:!1,value:(0,l.take)(e)},s=function(e){return{done:!1,value:l.fork.apply(void 0,[t].concat(i,[e]))}},f=void 0,d=function(e){return f=e};return r({q1:function(){return["q2",u,d]},q2:function(){return f===c.END?[p]:["q1",s(f)]}},"q1","takeEvery("+o(e)+", "+t.name+")")}function a(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var u={done:!1,value:(0,l.take)(e)},s=function(e){return{done:!1,value:l.fork.apply(void 0,[t].concat(i,[e]))}},f=function(e){return{done:!1,value:(0,l.cancel)(e)}},d=void 0,h=void 0,y=function(e){return d=e},b=function(e){return h=e};return r({q1:function(){return["q2",u,b]},q2:function(){return h===c.END?[p]:d?["q3",f(d)]:["q1",s(h),y]},q3:function(){return["q1",s(h),y]}},"q1","takeLatest("+o(e)+", "+t.name+")")}function u(e,t,n){for(var i=arguments.length,a=Array(i>3?i-3:0),u=3;u<i;u++)a[u-3]=arguments[u];var s=void 0,h=void 0,y={done:!1,value:(0,l.actionChannel)(t,d.buffers.sliding(1))},b=function(){return{done:!1,value:(0,l.take)(h,t)}},v=function(e){return{done:!1,value:l.fork.apply(void 0,[n].concat(a,[e]))}},m={done:!1,value:(0,l.call)(f.delay,e)},g=function(e){return s=e},k=function(e){return h=e};return r({q1:function(){return["q2",y,k]},q2:function(){return["q3",b(),g]},q3:function(){return s===c.END?[p]:["q4",v(s)]},q4:function(){return["q2",m]}},"q1","throttle("+o(t)+", "+n.name+")")}Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=t.takeLatest=t.takeEvery=void 0;var s=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.takeEveryHelper=i,t.takeLatestHelper=a,t.throttleHelper=u;var c=n("./node_modules/redux-saga/lib/internal/channel.js"),f=n("./node_modules/redux-saga/lib/internal/utils.js"),l=n("./node_modules/redux-saga/lib/internal/io.js"),d=n("./node_modules/redux-saga/lib/internal/buffers.js"),h={done:!0,value:void 0},p={},y=function(e){return"import "+e+" from 'redux-saga' has been deprecated in favor of import "+e+" from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."};t.takeEvery=(0,f.deprecate)(i,y("takeEvery")),t.takeLatest=(0,f.deprecate)(a,y("takeLatest")),t.throttle=(0,f.deprecate)(u,y("throttle"))},"./node_modules/redux-saga/lib/internal/scheduler.js":function(e,t,n){"use strict";function r(e){try{i(),e()}finally{a()}}function o(e){s?u.push(e):r(e)}function i(){s++}function a(){!--s&&u.length&&r(u.shift())}Object.defineProperty(t,"__esModule",{value:!0}),t.asap=o,t.suspend=i,t.flush=a;var u=[],s=0},"./node_modules/redux-saga/lib/internal/utils.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){if(!t(e))throw d("error","uncaught at check",n),new Error(n)}function i(e,t){var n=e.indexOf(t);n>=0&&e.splice(n,1)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=y({},e),n=new Promise(function(e,n){t.resolve=e,t.reject=n});return t.promise=n,t}function u(e){for(var t=[],n=0;n<e;n++)t.push(a());return t}function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=void 0,r=new Promise(function(r){n=setTimeout(function(){return r(t)},e)});return r[k]=function(){return clearTimeout(n)},r}function c(){var e,t=!0,n=void 0,o=void 0;return e={},r(e,m,!0),r(e,"isRunning",function(){return t}),r(e,"result",function(){return n}),r(e,"error",function(){return o}),r(e,"setRunning",function(e){return t=e}),r(e,"setResult",function(e){return n=e}),r(e,"setError",function(e){return o=e}),e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++e}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],o={name:n,next:e,throw:t,return:x};return r&&(o[g]=!0),"undefined"!=typeof Symbol&&(o[Symbol.iterator]=function(){return o}),o}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+e+": "+t+"\n"+(n&&n.stack||n)):console[e](t,n)}function h(e,t){return function(){return E&&d("warn",t),e.apply(void 0,arguments)}}function p(e){return function(t){return e(Object.defineProperty(t,w,{value:!0}))}}Object.defineProperty(t,"__esModule",{value:!0});var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.check=o,t.remove=i,t.deferred=a,t.arrayOfDeffered=u,t.delay=s,t.createMockTask=c,t.autoInc=f,t.makeIterator=l,t.log=d,t.deprecate=h,t.wrapSagaDispatch=p;var v=t.sym=function(e){return"@@redux-saga/"+e},m=t.TASK=v("TASK"),g=t.HELPER=v("HELPER"),k=(t.MATCH=v("MATCH"),t.CANCEL=v("cancelPromise")),w=t.SAGA_ACTION=v("SAGA_ACTION"),j=t.konst=function(e){return function(){return e}},E=(t.kTrue=j(!0),t.kFalse=j(!1),t.noop=function(){},t.ident=function(e){return e},t.isDev=0),_=t.is={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},array:Array.isArray,promise:function(e){return e&&_.func(e.then)},iterator:function(e){return e&&_.func(e.next)&&_.func(e.throw)},task:function(e){return e&&e[m]},observable:function(e){return e&&_.func(e.subscribe)},buffer:function(e){return e&&_.func(e.isEmpty)&&_.func(e.take)&&_.func(e.put)},pattern:function(e){return e&&("string"==typeof e||"symbol"===(void 0===e?"undefined":b(e))||_.func(e)||_.array(e))},channel:function(e){return e&&_.func(e.take)&&_.func(e.close)},helper:function(e){return e&&e[g]}},A=(t.uid=f(),function(e){throw e}),x=function(e){return{value:e,done:!0}};t.internalErr=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}},"./node_modules/whatwg-fetch/fetch.js":function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function u(e){var t=new FileReader,n=a(t);return t.readAsArrayBuffer(e),n}function s(e){var t=new FileReader,n=a(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&g(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!k(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var n=t.body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split("\r\n").forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},k=ArrayBuffer.isView||function(e){return e&&m.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];this.map[e]=o?o+","+r:r},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=n(r)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var j=[301,302,303,307,308];b.redirect=function(e,t){if(j.indexOf(t)===-1)throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=h,e.Response=b,e.fetch=function(e,t){return new Promise(function(n,r){var o=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL"),n(new b("response"in i?i.response:i.responseText,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});