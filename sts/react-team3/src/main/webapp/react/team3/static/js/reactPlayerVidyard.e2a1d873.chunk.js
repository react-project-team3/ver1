"use strict";(self.webpackChunkmaterial_dashboard_2_react=self.webpackChunkmaterial_dashboard_2_react||[]).push([[888],{8195:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(2791)),a=r(2737),u=r(7709);function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,r,n,i=s(y);function y(){var e;l(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(d(e=i.call.apply(i,[this].concat(r))),"callPlayer",a.callPlayer),h(d(e),"mute",(function(){e.setVolume(0)})),h(d(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),h(d(e),"ref",(function(t){e.container=t})),e}return t=y,r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,r=this.props,n=r.playing,o=r.config,i=r.onError,l=r.onDuration,p=e&&e.match(u.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,a.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((function(e){t.container&&(e.api.addReadyListener((function(e,r){t.player||(t.player=r,t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seek",t.props.onSeek),t.player.on("playerComplete",t.props.onEnded))}),p),e.api.renderPlayer(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({uuid:p,container:t.container,autoplay:n?1:0},o.options)),e.api.getPlayerMetadata(p).then((function(e){t.duration=e.length_in_seconds,l(e.length_in_seconds)})))}),i)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){window.VidyardV4.api.destroyPlayer(this.player)}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackSpeed",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.callPlayer("currentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return o.default.createElement("div",{style:e},o.default.createElement("div",{ref:this.ref}))}}],r&&p(t.prototype,r),n&&p(t,n),y}(o.Component);t.default=v,h(v,"displayName","Vidyard"),h(v,"canPlay",u.canPlay.vidyard)}}]);
//# sourceMappingURL=reactPlayerVidyard.e2a1d873.chunk.js.map