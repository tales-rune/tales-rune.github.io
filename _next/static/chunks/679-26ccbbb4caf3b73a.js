(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{72679:function(e,t,r){(()=>{var t={296:(e,t,r)=>{var o=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,u="object"==typeof self&&self&&self.Object===Object&&self,a=s||u||Function("return this")(),f=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return a.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return NaN;if(d(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=d(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var s=i.test(e);return s||c.test(e)?l(e.slice(2),s?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var o,n,i,c,l,s,u=0,a=!1,f=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function m(t){var r=o,i=n;return o=n=void 0,u=t,c=e.apply(i,r)}function O(e){var r=e-s;return void 0===s||r>=t||r<0||f&&e-u>=i}function g(){var e,r=b();if(O(r))return P(r);l=setTimeout(g,(e=t-(r-s),f?y(e,i-(r-u)):e))}function P(e){return l=void 0,v&&o?m(e):(o=n=void 0,c)}function w(){var e,r=b(),i=O(r);if(o=arguments,n=this,s=r,i){if(void 0===l)return u=e=s,l=setTimeout(g,t),a?m(e):c;if(f)return l=setTimeout(g,t),m(s)}return void 0===l&&(l=setTimeout(g,t)),c}return t=h(t)||0,d(r)&&(a=!!r.leading,i=(f="maxWait"in r)?p(h(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=s=n=l=void 0},w.flush=function(){return void 0===l?c:P(b())},w}},96:(e,t,r)=>{var o="Expected a function",n=NaN,i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,f="object"==typeof self&&self&&self.Object===Object&&self,p=a||f||Function("return this")(),y=Object.prototype.toString,b=Math.max,d=Math.min,h=function(){return p.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==y.call(t))return n;if(v(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=v(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=l.test(e);return o||s.test(e)?u(e.slice(2),o?2:8):c.test(e)?n:+e}e.exports=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw TypeError(o);return v(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),function(e,t,r){var n,i,c,l,s,u,a=0,f=!1,p=!1,y=!0;if("function"!=typeof e)throw TypeError(o);function O(t){var r=n,o=i;return n=i=void 0,a=t,l=e.apply(o,r)}function g(e){var r=e-u;return void 0===u||r>=t||r<0||p&&e-a>=c}function P(){var e,r=h();if(g(r))return w(r);s=setTimeout(P,(e=t-(r-u),p?d(e,c-(r-a)):e))}function w(e){return s=void 0,y&&n?O(e):(n=i=void 0,l)}function j(){var e,r=h(),o=g(r);if(n=arguments,i=this,u=r,o){if(void 0===s)return a=e=u,s=setTimeout(P,t),f?O(e):l;if(p)return s=setTimeout(P,t),O(u)}return void 0===s&&(s=setTimeout(P,t)),l}return t=m(t)||0,v(r)&&(f=!!r.leading,c=(p="maxWait"in r)?b(m(r.maxWait)||0,t):c,y="trailing"in r?!!r.trailing:y),j.cancel=function(){void 0!==s&&clearTimeout(s),a=0,n=u=i=s=void 0},j.flush=function(){return void 0===s?l:w(h())},j}(e,t,{leading:n,maxWait:t,trailing:i})}},703:(e,t,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,c){if(c!==o){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{LazyLoadComponent:()=>F,LazyLoadImage:()=>Z,trackWindowScroll:()=>R});let e=r(67294);var t=n.n(e),o=n(697);let c=r(73935);var l=n.n(c);function s(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function f(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==u(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){e.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},d={},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(i,e);var r,o,n=(o=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=y(i);if(o){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(e){var t;if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this,e)).supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&s(),t.supportsObserver){var r=e.threshold;t.observer=(d[r]=d[r]||new IntersectionObserver(b,{rootMargin:r+"px"}),d[r])}return t}return r=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=l().findDOMNode(this.placeholder).style,o=parseInt(r.getPropertyValue("margin-left"),10)||0,n=parseInt(r.getPropertyValue("margin-top"),10)||0;return{bottom:e.y+t.bottom+n,left:e.x+t.left+o,right:e.x+t.right+o,top:e.y+t.top+n}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,o=this.getPlaceholderBoundingBox(t),n=t.y+window.innerHeight,i=t.x,c=t.x+window.innerWidth;return!!(t.y-r<=o.bottom&&n+r>=o.top&&i-r<=o.right&&c+r>=o.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,r=this.props,o=r.className,n=r.height,i=r.placeholder,c=r.style,l=r.width;if(i&&"function"!=typeof i.type)return t().cloneElement(i,{ref:function(t){return e.placeholder=t}});var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var o,n;o=t,n=r[t],(o=f(o))in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({display:"inline-block"},c);return void 0!==l&&(s.width=l),void 0!==n&&(s.height=n),t().createElement("span",{className:o,ref:function(t){return e.placeholder=t},style:s},i)}}],function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,f(o.key),o)}}(i.prototype,r),Object.defineProperty(i,"prototype",{writable:!1}),i}(t().Component);h.propTypes={onVisible:o.PropTypes.func.isRequired,className:o.PropTypes.string,height:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string]),placeholder:o.PropTypes.element,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,scrollPosition:o.PropTypes.shape({x:o.PropTypes.number.isRequired,y:o.PropTypes.number.isRequired}),width:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string])},h.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};var v=n(296),m=n.n(v),O=n(96),g=n.n(O),P=function(e){var t=getComputedStyle(e,null);return t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x")};let w=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t instanceof HTMLElement;){if(/(scroll|auto)/.test(P(t)))return t;t=t.parentNode}return window};function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T=["delayMethod","delayTime"];function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function E(e,t){return(E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},k=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};let R=function(e){var r=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(c,r);var o,n,i=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=I(c);if(n){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return _(this,e)});function c(e){if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e)).useIntersectionObserver=e.useIntersectionObserver&&s(),r.useIntersectionObserver)return _(r);var r,o=r.onChangeScroll.bind(L(r));return"debounce"===e.delayMethod?r.delayedScroll=m()(o,e.delayTime):"throttle"===e.delayMethod&&(r.delayedScroll=g()(o,e.delayTime)),r.state={scrollPosition:{x:x(),y:k()}},r.baseComponentRef=t().createRef(),r}return o=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||w(l().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=w(l().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:x(),y:k()}})}},{key:"render",value:function(){var r=this.props,o=(r.delayMethod,r.delayTime,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(r,T)),n=this.useIntersectionObserver?null:this.state.scrollPosition;return t().createElement(e,S({forwardRef:this.baseComponentRef,scrollPosition:n},o))}}],function(e,t){for(var r,o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(r=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==j(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(r)?r:String(r)),n)}}(c.prototype,o),Object.defineProperty(c,"prototype",{writable:!1}),c}(t().Component);return r.propTypes={delayMethod:o.PropTypes.oneOf(["debounce","throttle"]),delayTime:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool},r.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},r};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){return(C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(i,e);var r,o,n=(o=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=N(i);if(o){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(e){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),n.call(this,e)}return r=[{key:"render",value:function(){return t().createElement(h,this.props)}}],function(e,t){for(var r,o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(r=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==D(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===D(r)?r:String(r)),n)}}(i.prototype,r),Object.defineProperty(i,"prototype",{writable:!1}),i}(t().Component);let B=R(M);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){return(W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function z(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(i,e);var r,o,n=(o=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=$(i);if(o){var r=$(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return z(e)}(this,e)});function i(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),t=n.call(this,e);var t,r=e.afterLoad,o=e.beforeLoad,c=e.scrollPosition,l=e.visibleByDefault;return t.state={visible:l},l&&(o(),r()),t.onVisible=t.onVisible.bind(z(t)),t.isScrollTracked=!!(c&&Number.isFinite(c.x)&&c.x>=0&&Number.isFinite(c.y)&&c.y>=0),t}return r=[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,r=e.className,o=e.delayMethod,n=e.delayTime,i=e.height,c=e.placeholder,l=e.scrollPosition,u=e.style,a=e.threshold,f=e.useIntersectionObserver,p=e.width;return this.isScrollTracked||f&&s()?t().createElement(h,{className:r,height:i,onVisible:this.onVisible,placeholder:c,scrollPosition:l,style:u,threshold:a,useIntersectionObserver:f,width:p}):t().createElement(B,{className:r,delayMethod:o,delayTime:n,height:i,onVisible:this.onVisible,placeholder:c,style:u,threshold:a,width:p})}}],function(e,t){for(var r,o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(r=function(e,t){if("object"!==V(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==V(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===V(r)?r:String(r)),n)}}(i.prototype,r),Object.defineProperty(i,"prototype",{writable:!1}),i}(t().Component);U.propTypes={afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool},U.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};let F=U;function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var H=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){var o,n;o=t,n=r[t],(o=G(o))in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function G(e){var t=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==q(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===q(t)?t:String(t)}function J(e,t){return(J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(i,e);var r,o,n=(o=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=K(i);if(o){var r=K(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this,e)).state={loaded:!1},t}return r=[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(t){e.props.onLoad(t),e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,r=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,H));return t().createElement("img",A({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var e=this.props,r=e.beforeLoad,o=e.className,n=e.delayMethod,i=e.delayTime,c=e.height,l=e.placeholder,s=e.scrollPosition,u=e.style,a=e.threshold,f=e.useIntersectionObserver,p=e.visibleByDefault,y=e.width;return t().createElement(F,{beforeLoad:r,className:o,delayMethod:n,delayTime:i,height:c,placeholder:l,scrollPosition:s,style:u,threshold:a,useIntersectionObserver:f,visibleByDefault:p,width:y},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var r=this.props,o=r.effect,n=r.height,i=r.placeholderSrc,c=r.width,l=r.wrapperClassName,s=r.wrapperProps,u=this.state.loaded;return t().createElement("span",A({className:l+" lazy-load-image-background "+o+(u?" lazy-load-image-loaded":""),style:X(X({},u||!i?{}:{backgroundImage:"url(".concat(i,")"),backgroundSize:"100% 100%"}),{},{color:"transparent",display:"inline-block",height:n,width:c})},s),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,o=e.visibleByDefault,n=e.wrapperClassName,i=e.wrapperProps,c=this.getLazyLoadImage();return(t||r)&&!o||n||i?this.getWrappedLazyLoadImage(c):c}}],function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,G(o.key),o)}}(i.prototype,r),Object.defineProperty(i,"prototype",{writable:!1}),i}(t().Component);Q.propTypes={onLoad:o.PropTypes.func,afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,delayMethod:o.PropTypes.string,delayTime:o.PropTypes.number,effect:o.PropTypes.string,placeholderSrc:o.PropTypes.string,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool,wrapperClassName:o.PropTypes.string,wrapperProps:o.PropTypes.object},Q.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};let Z=Q})(),e.exports=i})()}}]);