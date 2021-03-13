/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{237:function(t,e,n){!function(t){"use strict";var script={name:"flipped",inject:["addFlippedElement","addInvertedElement"],props:{flipId:String,inverseFlipId:String,delayUntil:String,stagger:[String,Boolean],shouldFlip:Function,shouldInvert:Function,scale:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},translate:{type:Boolean,default:!1}},mounted:function(){var t=this;this.flipId?this.addFlippedElement({element:this.$el,flipId:this.flipId,delayUntil:this.delayUntil,shouldFlip:this.shouldFlip,shouldInvert:this.shouldInvert,onStart:function(e){return t.$emit("on-start",{el:e,id:t.flipId})},onComplete:function(e){return t.$emit("on-complete",{el:e,id:t.flipId})},stagger:this.stagger,opacity:this.opacity,scale:this.scale,translate:this.translate}):this.inverseFlipId&&this.addInvertedElement({element:this.$el,parent:this.$parent.$el,opacity:this.opacity,scale:this.scale,translate:this.translate})},render:function(){return this.$scopedSlots.default({})}},e=function(template,style,script,t,e,n,r,o,l,c){"boolean"!=typeof r&&(l=o,o=r,r=!1);var d,f="function"==typeof script?script.options:script;if(template&&template.render&&(f.render=template.render,f.staticRenderFns=template.staticRenderFns,f._compiled=!0,e&&(f.functional=!0)),t&&(f._scopeId=t),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},f._ssrRegister=d):style&&(d=r?function(){style.call(this,c(this.$root.$options.shadowRoot))}:function(t){style.call(this,o(t))}),d)if(f.functional){var h=f.render;f.render=function(t,e){return d.call(e),h(t,e)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,d):[d]}return script},n=e({},void 0,script,void 0,void 0,void 0,void 0,void 0);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function c(source){if(source.constructor!==Array)throw new TypeError("Expected array.");if(16===source.length)return source;if(6===source.length){var t=d();return t[0]=source[0],t[1]=source[1],t[4]=source[2],t[5]=source[3],t[12]=source[4],t[13]=source[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function d(){for(var t=[],i=0;i<16;i++)i%5==0?t.push(1):t.push(0);return t}function f(t){var e=Math.PI/180*t,n=d();return n[0]=n[5]=Math.cos(e),n[1]=n[4]=Math.sin(e),n[4]*=-1,n}var h=Object.freeze({format:c,identity:d,inverse:function(source){var t=c(source),e=t[0]*t[5]-t[4]*t[1],n=t[0]*t[6]-t[4]*t[2],r=t[0]*t[7]-t[4]*t[3],o=t[1]*t[6]-t[5]*t[2],l=t[1]*t[7]-t[5]*t[3],d=t[2]*t[7]-t[6]*t[3],f=t[10]*t[15]-t[14]*t[11],h=t[9]*t[15]-t[13]*t[11],m=t[9]*t[14]-t[13]*t[10],v=t[8]*t[15]-t[12]*t[11],y=t[8]*t[14]-t[12]*t[10],_=t[8]*t[13]-t[12]*t[9],S=1/(e*f-n*h+r*m+o*v-l*y+d*_);if(isNaN(S)||S===1/0)throw new Error("Inverse determinant attempted to divide by zero.");return[(t[5]*f-t[6]*h+t[7]*m)*S,(-t[1]*f+t[2]*h-t[3]*m)*S,(t[13]*d-t[14]*l+t[15]*o)*S,(-t[9]*d+t[10]*l-t[11]*o)*S,(-t[4]*f+t[6]*v-t[7]*y)*S,(t[0]*f-t[2]*v+t[3]*y)*S,(-t[12]*d+t[14]*r-t[15]*n)*S,(t[8]*d-t[10]*r+t[11]*n)*S,(t[4]*h-t[5]*v+t[7]*_)*S,(-t[0]*h+t[1]*v-t[3]*_)*S,(t[12]*l-t[13]*r+t[15]*e)*S,(-t[8]*l+t[9]*r-t[11]*e)*S,(-t[4]*m+t[5]*y-t[6]*_)*S,(t[0]*m-t[1]*y+t[2]*_)*S,(-t[12]*o+t[13]*n-t[14]*e)*S,(t[8]*o-t[9]*n+t[10]*e)*S]},multiply:function(t,e){for(var n=c(t),r=c(e),o=[],i=0;i<4;i++)for(var l=[n[i],n[i+4],n[i+8],n[i+12]],d=0;d<4;d++){var f=4*d,col=[r[f],r[f+1],r[f+2],r[f+3]],h=l[0]*col[0]+l[1]*col[1]+l[2]*col[2]+l[3]*col[3];o[i+f]=h}return o},parse:function(source){if("string"==typeof source){var t=source.match(/matrix(3d)?\(([^)]+)\)/);if(t)return c(t[2].split(", ").map(parseFloat))}return d()},rotate:function(t){return f(t)},rotateX:function(t){var e=Math.PI/180*t,n=d();return n[5]=n[10]=Math.cos(e),n[6]=n[9]=Math.sin(e),n[9]*=-1,n},rotateY:function(t){var e=Math.PI/180*t,n=d();return n[0]=n[10]=Math.cos(e),n[2]=n[8]=Math.sin(e),n[2]*=-1,n},rotateZ:f,scale:function(t,e){var n=d();return n[0]=t,n[5]="number"==typeof e?e:t,n},scaleX:function(t){var e=d();return e[0]=t,e},scaleY:function(t){var e=d();return e[5]=t,e},scaleZ:function(t){var e=d();return e[10]=t,e},skew:function(t,e){var n=Math.PI/180*t,r=d();if(r[4]=Math.tan(n),e){var o=Math.PI/180*e;r[1]=Math.tan(o)}return r},skewX:function(t){var e=Math.PI/180*t,n=d();return n[4]=Math.tan(e),n},skewY:function(t){var e=Math.PI/180*t,n=d();return n[1]=Math.tan(e),n},translate:function(t,e){var n=d();return n[12]=t,e&&(n[13]=e),n},translateX:function(t){var e=d();return e[12]=t,e},translateY:function(t){var e=d();return e[13]=t,e},translateZ:function(t){var e=d();return e[14]=t,e}}),m=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var n=h,r=function(t){return"number"==typeof t},i=function(t){return"function"==typeof t},o=function(t){return"[object Object]"===Object.prototype.toString.call(t)},l=function(t){return Array.prototype.slice.apply(t)},c=function(t){var e=t.reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{});return Object.keys(e).filter((function(t){return e[t]>1}))};function a(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];return e.forEach((function(e){if(e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})),t}var s,d=function(t,e,i){return t+(e-t)*i},p={isNumber:r,isFunction:i,isObject:o,toArray:l,getDuplicateValsAsStrings:c,assign:a,tweenProp:d},f={noWobble:{stiffness:200,damping:26},gentle:{stiffness:120,damping:14},veryGentle:{stiffness:130,damping:17},wobbly:{stiffness:180,damping:12},stiff:{stiffness:260,damping:26}},u=function(t){return o(t)?t:Object.keys(f).indexOf(t)>-1?f[t]:{}};"undefined"!=typeof window&&(s=window.requestAnimationFrame);var m=s=s||function(t){window.setTimeout(t,1e3/60)},v=Date.now(),y="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()-v};function g(t,e){var i=t.indexOf(e);-1!==i&&t.splice(i,1)}var _=function(){};_.prototype.run=function(){var t=this;m((function(){t.springSystem.loop(y())}))};var S=function(){this.position=0,this.velocity=0},E=0,I=function(t){this._id="s"+E++,this._springSystem=t,this.listeners=[],this._startValue=0,this._currentState=new S,this._displacementFromRestThreshold=.001,this._endValue=0,this._overshootClampingEnabled=!1,this._previousState=new S,this._restSpeedThreshold=.001,this._tempState=new S,this._timeAccumulator=0,this._wasAtRest=!0,this._cachedSpringConfig={}};I.prototype.getId=function(){return this._id},I.prototype.destroy=function(){this.listeners=[],this._springSystem.deregisterSpring(this)},I.prototype.setSpringConfig=function(t){return this._springConfig=t,this},I.prototype.getCurrentValue=function(){return this._currentState.position},I.prototype.getDisplacementDistanceForState=function(t){return Math.abs(this._endValue-t.position)},I.prototype.setEndValue=function(t){if(t===this._endValue)return this;if(this.prevEndValue=t,this._endValue===t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(var e=0,i=this.listeners.length;e<i;e++){var n=this.listeners[e].onSpringEndStateChange;n&&n(this)}return this},I.prototype.setVelocity=function(t){return t===this._currentState.velocity||(this._currentState.velocity=t,this._springSystem.activateSpring(this.getId())),this},I.prototype.setCurrentValue=function(t){this._startValue=t,this._currentState.position=t;for(var e=0,i=this.listeners.length;e<i;e++){var n=this.listeners[e];n.onSpringUpdate&&n.onSpringUpdate(this)}return this},I.prototype.setAtRest=function(){return this._endValue=this._currentState.position,this._tempState.position=this._currentState.position,this._currentState.velocity=0,this},I.prototype.setOvershootClampingEnabled=function(t){return this._overshootClampingEnabled=t,this},I.prototype.isOvershooting=function(){var t=this._startValue,e=this._endValue;return this._springConfig.tension>0&&(t<e&&this.getCurrentValue()>e||t>e&&this.getCurrentValue()<e)},I.prototype.advance=function(t,e){var i=this.isAtRest();if(!i||!this._wasAtRest){var n=e;e>.064&&(n=.064),this._timeAccumulator+=n;for(var r,o,a,s,l,p,c=this._springConfig.tension,u=this._springConfig.friction,d=this._currentState.position,f=this._currentState.velocity,h=this._tempState.position,g=this._tempState.velocity;this._timeAccumulator>=.001;)this._timeAccumulator-=.001,this._timeAccumulator<.001&&(this._previousState.position=d,this._previousState.velocity=f),o=c*(this._endValue-h)-u*f,s=c*(this._endValue-(h=d+.001*(r=f)*.5))-u*(g=f+.001*o*.5),p=c*(this._endValue-(h=d+.001*(a=g)*.5))-u*(g=f+.001*s*.5),h=d+.001*(l=g),d+=1/6*(r+2*(a+l)+(g=f+.001*p))*.001,f+=1/6*(o+2*(s+p)+(c*(this._endValue-h)-u*g))*.001;this._tempState.position=h,this._tempState.velocity=g,this._currentState.position=d,this._currentState.velocity=f,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/.001),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),i=!0);var m=!1;this._wasAtRest&&(this._wasAtRest=!1,m=!0);var v=!1;i&&(this._wasAtRest=!0,v=!0),this.notifyPositionUpdated(m,v)}},I.prototype.notifyPositionUpdated=function(t,e){var i=this;this.listeners.filter(Boolean).forEach((function(n){t&&n.onSpringActivate&&!i._onActivateCalled&&(n.onSpringActivate(i),i._onActivateCalled=!0),n.onSpringUpdate&&n.onSpringUpdate(i),e&&n.onSpringAtRest&&n.onSpringAtRest(i)}))},I.prototype.systemShouldAdvance=function(){return!this.isAtRest()||!this.wasAtRest()},I.prototype.wasAtRest=function(){return this._wasAtRest},I.prototype.isAtRest=function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||0===this._springConfig.tension)},I.prototype._interpolate=function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},I.prototype.addListener=function(t){return this.listeners.push(t),this},I.prototype.addOneTimeListener=function(t){var e=this;return Object.keys(t).forEach((function(i){var n;t[i]=(n=t[i],function(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];n.apply(void 0,i),e.removeListener(t)})})),this.listeners.push(t),this},I.prototype.removeListener=function(t){return g(this.listeners,t),this};var C=function(t){this.looper=t||new _,this.looper.springSystem=this,this.listeners=[],this._activeSprings=[],this._idleSpringIndices=[],this._isIdle=!0,this._lastTimeMillis=-1,this._springRegistry={}};C.prototype.createSpring=function(t,e){return this.createSpringWithConfig({tension:t,friction:e})},C.prototype.createSpringWithConfig=function(t){var e=new I(this);return this.registerSpring(e),e.setSpringConfig(t),e},C.prototype.getIsIdle=function(){return this._isIdle},C.prototype.registerSpring=function(t){this._springRegistry[t.getId()]=t},C.prototype.deregisterSpring=function(t){g(this._activeSprings,t),delete this._springRegistry[t.getId()]},C.prototype.advance=function(t,e){for(var i=this;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(this._activeSprings.filter(Boolean).forEach((function(n){n.systemShouldAdvance()?n.advance(t/1e3,e/1e3):i._idleSpringIndices.push(i._activeSprings.indexOf(n))}));this._idleSpringIndices.length>0;){var n=this._idleSpringIndices.pop();n>=0&&this._activeSprings.splice(n,1)}},C.prototype.loop=function(t){var e;-1===this._lastTimeMillis&&(this._lastTimeMillis=t-1);var i=t-this._lastTimeMillis;this._lastTimeMillis=t;var n=0,r=this.listeners.length;for(n=0;n<r;n++)(e=this.listeners[n]).onBeforeIntegrate&&e.onBeforeIntegrate(this);for(this.advance(t,i),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),n=0;n<r;n++)(e=this.listeners[n]).onAfterIntegrate&&e.onAfterIntegrate(this);this._isIdle||this.looper.run()},C.prototype.activateSpring=function(t){var e=this._springRegistry[t];-1===this._activeSprings.indexOf(e)&&this._activeSprings.push(e),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())};var A=new C,w=function(t){var e=t.springConfig,i=e.overshootClamping,n=t.getOnUpdateFunc,r=t.onAnimationEnd,o=t.onSpringActivate,a=A.createSpring(e.stiffness,e.damping);a.setOvershootClampingEnabled(!!i);var s={onSpringActivate:o,onSpringAtRest:function(){a.destroy(),r()},onSpringUpdate:n({spring:a,onAnimationEnd:r})};return a.addListener(s),a},O=function(t){var e=w(t);return e.setEndValue(1),e},b=function(t,e){if(void 0===e&&(e={}),t&&t.length){e.reverse&&t.reverse();var i,n="number"!=typeof(i=e.speed)?1.1:1+Math.min(Math.max(5*i,0),5),r=1/Math.max(Math.min(t.length,100),10),o=t.map((function(t,e){var i=t.getOnUpdateFunc;return t.getOnUpdateFunc=function(t){var a=i(t);return function(t){var i=t.getCurrentValue();(i=i<.01?0:i>.99?1:i)>=r&&o[e+1]&&o[e+1](Math.max(Math.min(i*n,1),0)),a(t)}},t})).map((function(t){var e=w(t);if(e)return e.setEndValue.bind(e)})).filter(Boolean);o[0]&&o[0](1)}},F=function(t){return[0,1,4,5,12,13].map((function(e){return t[e]}))},x=function(t){return t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0},U=function(t,e){var i;return a(t,((i={})[e[0]]=e[1],i))},P=function(t,e){return l(e?document.querySelectorAll('[data-portal-key="'+e+'"]'):t.querySelectorAll("[data-flip-id]"))},M=function(t){return t.map((function(t){return[t,t.getBoundingClientRect()]}))},V=function(t){var s=t.cachedOrderedFlipIds;void 0===s&&(s=[]);var p=t.inProgressAnimations;void 0===p&&(p={});var e=t.flippedElementPositionsBeforeUpdate;void 0===e&&(e={});var o=t.flipCallbacks;void 0===o&&(o={});var h=t.containerEl,g=t.applyTransformOrigin,m=t.spring,v=t.debug,y=t.portalKey,_=t.staggerConfig;void 0===_&&(_={});var S=t.decisionData;void 0===S&&(S={});var E=t.handleEnterUpdateDelete,I=t.onComplete,C=t.onStart,A=function(t){return M(P(t.element,t.portalKey)).map((function(t){var e=t[0],i=t[1],n=window.getComputedStyle(e);return[e.dataset.flipId,{element:e,rect:i,opacity:parseFloat(n.opacity),transform:n.transform}]})).reduce(U,{})}({element:h,portalKey:y}),w=function(t){var e=t.containerEl,i=t.portalKey;return i?function(t){return function(e){return l(document.querySelectorAll('[data-portal-key="'+t+'"]'+e))}}(i):e?function(t){var e=Math.random().toFixed(5);return t.dataset.flipperId=e,function(i){return l(t.querySelectorAll('[data-flipper-id="'+e+'"] '+i))}}(e):function(){return[]}}({containerEl:h,portalKey:y}),V=function(t){return function(e){return t('[data-flip-id="'+e+'"]')[0]}}(w),R=function(t){return e[t]&&A[t]},T=Object.keys(e).concat(Object.keys(A)).filter((function(t){return!R(t)})),j={flipCallbacks:o,getElement:V,flippedElementPositionsBeforeUpdate:e,flippedElementPositionsAfterUpdate:A,inProgressAnimations:p,decisionData:S},D=function(t){var e,i=t.unflippedIds,n=t.flipCallbacks,r=t.getElement,o=t.flippedElementPositionsBeforeUpdate,a=t.flippedElementPositionsAfterUpdate,s=t.inProgressAnimations,l=t.decisionData,p=i.filter((function(t){return a[t]})).filter((function(t){return n[t]&&n[t].onAppear})),c=i.filter((function(t){return o[t]&&n[t]&&n[t].onExit})),u=new Promise((function(t){e=t})),d=[],f=0,h=c.map((function(t,i){var r=o[t].domDataForExitAnimations,a=r.element,p=r.parent,c=r.childPosition,u=c.top,h=c.left,g=c.width,m=c.height;"static"===getComputedStyle(p).position&&(p.style.position="relative"),a.style.transform="matrix(1, 0, 0, 1, 0, 0)",a.style.position="absolute",a.style.top=u+"px",a.style.left=h+"px",a.style.height=m+"px",a.style.width=g+"px";var v=d.filter((function(t){return t[0]===p}))[0];v||(v=[p,document.createDocumentFragment()],d.push(v)),v[1].appendChild(a),f+=1;var y=function(){try{p.removeChild(a)}catch(t){}finally{0==(f-=1)&&e()}};return s[t]={stop:y},function(){return n[t].onExit(a,i,y,l)}}));return d.forEach((function(t){t[0].appendChild(t[1])})),h.length||e(),{hideEnteringElements:function(){p.forEach((function(t){var e=r(t);e&&(e.style.opacity="0")}))},animateEnteringElements:function(){p.forEach((function(t,e){var i=r(t);i&&n[t].onAppear(i,e,l)}))},animateExitingElements:function(){return h.forEach((function(t){return t()})),u}}}(a({},j,{unflippedIds:T})),k=D.hideEnteringElements,B=D.animateEnteringElements,N=D.animateExitingElements,$=a({},j,{containerEl:h,flippedIds:s.filter(R),applyTransformOrigin:g,spring:m,debug:v,staggerConfig:_,scopedSelector:w,onComplete:I});C&&C(h,S);var q=function(t){var s=$.flippedIds,p=$.flipCallbacks,e=$.inProgressAnimations,o=$.flippedElementPositionsBeforeUpdate,h=$.flippedElementPositionsAfterUpdate,g=$.applyTransformOrigin,m=$.spring,v=$.getElement,y=$.debug,_=$.staggerConfig;void 0===_&&(_={});var S=$.decisionData;void 0===S&&(S={});var E,I=$.onComplete,C=$.containerEl,A=new Promise((function(t){E=t}));if(I&&A.then((function(){return I(C,S)})),!s.length)return function(){return E([]),A};var w=[],U=v(s[0]),P=U?U.ownerDocument.querySelector("body"):document.querySelector("body");c(s);var M=s.map((function(t){var c=o[t].rect,s=h[t].rect,v=o[t].opacity,y=h[t].opacity,_=s.width<1||s.height<1,I=h[t].element;if(!x(c)&&!x(s))return!1;if(!I)return!1;var C=JSON.parse(I.dataset.flipConfig),b=function(t){void 0===t&&(t={});var e=t.flippedSpring;return a({},f.noWobble,u(t.flipperSpring),u(e))}({flipperSpring:m,flippedSpring:C.spring}),A=!0===C.stagger?"default":C.stagger,O={element:I,id:t,stagger:A,springConfig:b};if(p[t]&&p[t].shouldFlip&&!p[t].shouldFlip(S.previous,S.current))return!1;var U=Math.abs(c.left-s.left)+Math.abs(c.top-s.top),V=Math.abs(c.width-s.width)+Math.abs(c.height-s.height),R=Math.abs(y-v);if(U<.5&&V<.5&&R<.01)return!1;var T=n.parse(h[t].transform),j={matrix:T},D={matrix:[]},k=[T];C.translate&&(k.push(n.translateX(c.left-s.left)),k.push(n.translateY(c.top-s.top))),C.scale&&(k.push(n.scaleX(Math.max(c.width,1)/Math.max(s.width,1))),k.push(n.scaleY(Math.max(c.height,1)/Math.max(s.height,1)))),C.opacity&&(D.opacity=v,j.opacity=y);var B=[];if(!p[t]||!p[t].shouldInvert||p[t].shouldInvert(S.previous,S.current)){var N=function(t,e){return l(t.querySelectorAll('[data-inverse-flip-id="'+e+'"]'))}(I,t);B=N.map((function(t){return[t,JSON.parse(t.dataset.flipConfig)]}))}D.matrix=F(k.reduce(n.multiply)),j.matrix=F(j.matrix);var $,q=function(t){var i=t.element,e=t.invertedChildren,n=t.body;return function(t){var o=t.matrix,a=t.opacity,s=t.forceMinVals;if(r(a)&&(i.style.opacity=a+""),s&&(i.style.minHeight="1px",i.style.minWidth="1px"),o){var l=function(t){return"matrix("+t.join(", ")+")"}(o);i.style.transform=l,e&&function(t){var e=t.matrix,i=t.body;t.invertedChildren.forEach((function(t){var n=t[0],r=t[1];if(i.contains(n)){var o=e[0],a=e[3],s=e[5],l={translateX:0,translateY:0,scaleX:1,scaleY:1},p="";r.translate&&(l.translateX=-e[4]/o,l.translateY=-s/a,p+="translate("+l.translateX+"px, "+l.translateY+"px)"),r.scale&&(l.scaleX=1/o,l.scaleY=1/a,p+=" scale("+l.scaleX+", "+l.scaleY+")"),n.style.transform=p}}))}({invertedChildren:e,matrix:o,body:n})}}}({element:I,invertedChildren:B,body:P});if(p[t]&&p[t].onComplete){var X=p[t].onComplete;$=function(){return X(I,S)}}var Y=r(D.opacity)&&r(j.opacity)&&D.opacity!==j.opacity,K=!1;return a({},O,{stagger:A,springConfig:b,getOnUpdateFunc:function(n){var r=n.spring,i=n.onAnimationEnd;return e[t]={destroy:r.destroy.bind(r),onAnimationEnd:i},function(e){p[t]&&p[t].onSpringUpdate&&p[t].onSpringUpdate(e.getCurrentValue()),K||(K=!0,p[t]&&p[t].onStart&&p[t].onStart(I,S));var n=e.getCurrentValue();if(P.contains(I)){var i={matrix:[]};i.matrix=D.matrix.map((function(t,i){return d(t,j.matrix[i],n)})),Y&&(i.opacity=d(D.opacity,j.opacity,n)),q(i)}else e.destroy()}},initializeFlip:function(){q({matrix:D.matrix,opacity:Y?D.opacity:void 0,forceMinVals:_}),p[t]&&p[t].onStartImmediate&&p[t].onStartImmediate(I,S),C.transformOrigin?I.style.transformOrigin=C.transformOrigin:g&&(I.style.transformOrigin="0 0"),B.forEach((function(t){var e=t[0],i=t[1];i.transformOrigin?e.style.transformOrigin=i.transformOrigin:g&&(e.style.transformOrigin="0 0")}))},onAnimationEnd:function(n){delete e[t],i($)&&$(),I.style.transform="",B.forEach((function(t){t[0].style.transform=""})),_&&I&&(I.style.minHeight="",I.style.minWidth=""),n||(w.push(t),w.length>=M.length&&E(w))},delayUntil:C.delayUntil})})).filter(Boolean);if(M.forEach((function(t){return(0,t.initializeFlip)()})),y)return function(){};var V=M.filter((function(t){return t.delayUntil&&(e=t.delayUntil,M.filter((function(t){return t.id===e})).length);var e})),R={},T={},j={};V.forEach((function(t){t.stagger?(j[t.stagger]=!0,T[t.delayUntil]?T[t.delayUntil].push(t.stagger):T[t.delayUntil]=[t.stagger]):R[t.delayUntil]?R[t.delayUntil].push(t):R[t.delayUntil]=[t]}));var D=M.filter((function(t){return t.stagger})).reduce((function(t,e){return t[e.stagger]?t[e.stagger].push(e):t[e.stagger]=[e],t}),{}),k=M.filter((function(t){return-1===V.indexOf(t)}));return k.forEach((function(t){t.onSpringActivate=function(){R[t.id]&&R[t.id].forEach(O),T[t.id]&&Object.keys(T[t.id].reduce((function(t,e){var i;return a(t,((i={})[e]=!0,i))}),{})).forEach((function(t){b(D[t],_[t])}))}})),function(){return M.length||E([]),k.filter((function(t){return!t.stagger})).forEach(O),Object.keys(D).forEach((function(t){j[t]||b(D[t],_[t])})),A}}();E?E({hideEnteringElements:k,animateEnteringElements:B,animateExitingElements:N,animateFlippedElements:q}):(k(),N().then(B),q())},R=function(t){var e=t.element,i=t.flipCallbacks;void 0===i&&(i={});var n=t.inProgressAnimations;void 0===n&&(n={});var r=P(e,t.portalKey),s=l(e.querySelectorAll("[data-inverse-flip-id]")),o={},p=[],c={};r.filter((function(t){return i&&i[t.dataset.flipId]&&i[t.dataset.flipId].onExit})).forEach((function(t){var e=t.parentNode;if(t.closest){var i=t.closest("[data-exit-container]");i&&(e=i)}var n=p.findIndex((function(t){return t[0]===e}));-1===n&&(p.push([e,e.getBoundingClientRect()]),n=p.length-1),o[t.dataset.flipId]=p[n][1],c[t.dataset.flipId]=e}));var u=M(r),d=u.map((function(t){var e=t[0],n=t[1],r={};if(i&&i[e.dataset.flipId]&&i[e.dataset.flipId].onExit){var l=o[e.dataset.flipId];a(r,{element:e,parent:c[e.dataset.flipId],childPosition:{top:n.top-l.top,left:n.left-l.left,width:n.width,height:n.height}})}return[e.dataset.flipId,{rect:n,opacity:parseFloat(window.getComputedStyle(e).opacity||"1"),domDataForExitAnimations:r}]})).reduce(U,{});return function(t,e){Object.keys(t).forEach((function(e){t[e].destroy&&t[e].destroy(),t[e].onAnimationEnd&&t[e].onAnimationEnd(!0),delete t[e]})),e.forEach((function(t){t.style.transform="",t.style.opacity=""}))}(n,r.concat(s)),{flippedElementPositions:d,cachedOrderedFlipIds:u.map((function(t){return t[0].dataset.flipId}))}},T=function(t){this.applyTransformOrigin=!0,a(this,t),this.inProgressAnimations={},this.flipCallbacks={},this.recordBeforeUpdate=this.recordBeforeUpdate.bind(this),this.update=this.update.bind(this),this.addFlipped=this.addFlipped.bind(this),this.addInverted=this.addInverted.bind(this)};T.prototype.recordBeforeUpdate=function(){this.snapshot=R({element:this.element,flipCallbacks:this.flipCallbacks,inProgressAnimations:this.inProgressAnimations})},T.prototype.update=function(t,e){this.snapshot&&(V({flippedElementPositionsBeforeUpdate:this.snapshot.flippedElementPositions,cachedOrderedFlipIds:this.snapshot.cachedOrderedFlipIds,containerEl:this.element,inProgressAnimations:this.inProgressAnimations,flipCallbacks:this.flipCallbacks,applyTransformOrigin:this.applyTransformOrigin,spring:this.spring,debug:this.debug,staggerConfig:this.staggerConfig,handleEnterUpdateDelete:this.handleEnterUpdateDelete,decisionData:{previous:t,current:e},onComplete:this.onComplete,onStart:this.onStart}),delete this.snapshot)},T.prototype.addFlipped=function(t){var e=t.element,i=t.flipId,n=t.opacity,r=t.translate,o=t.scale,s=t.transformOrigin,l=t.spring,p=t.stagger,c=t.delayUntil,u=t.onAppear,d=t.onStart,f=t.onSpringUpdate,h=t.onComplete,g=t.onExit,m=t.shouldFlip,v=t.shouldInvert;if(!e)throw new Error("no element provided");if(!i)throw new Error("No flipId provided");var y={scale:o,translate:r,opacity:n,transformOrigin:s,spring:l,stagger:p,delayUntil:c};y.scale||y.translate||y.opacity||a(y,{translate:!0,scale:!0,opacity:!0}),i&&(e.dataset.flipId=String(i)),e.dataset.flipConfig=JSON.stringify(y),this.flipCallbacks[i]={shouldFlip:m,shouldInvert:v,onAppear:u,onStart:d,onSpringUpdate:f,onComplete:h,onExit:g}},T.prototype.addInverted=function(t){var e=t.element,i=t.parent,n=t.opacity,r=t.translate,o=t.scale,s=t.transformOrigin;if(!e)throw new Error("no element provided");if(!i)throw new Error("parent must be provided");var l=i.dataset.flipId,p={scale:o,translate:r,opacity:n,transformOrigin:s};p.scale||p.translate||p.opacity||a(p,{translate:!0,scale:!0,opacity:!0}),e.dataset.inverseFlipId=l,e.dataset.flipConfig=JSON.stringify(p)};var j=new C;e.utilities=p,e.constants={DATA_FLIP_ID:"data-flip-id",DATA_INVERSE_FLIP_ID:"data-inverse-flip-id",DATA_FLIP_COMPONENT_ID:"data-flip-component-id",DATA_FLIP_CONFIG:"data-flip-config",DATA_PORTAL_KEY:"data-portal-key",DATA_EXIT_CONTAINER:"data-exit-container"},e.Flipper=T,e.getFlippedElementPositionsBeforeUpdate=R,e.onFlipKeyUpdate=V,e.spring=function(t){var e=t.values,i=t.onUpdate,n=t.delay;void 0===n&&(n=0);var r=t.onComplete,o=a({},f.noWobble,u(t.config)),s=o.overshootClamping,p=j.createSpring(o.stiffness,o.damping);return p.setOvershootClampingEnabled(!!s),p.addListener({onSpringAtRest:function(t){r&&r(),t.destroy()},onSpringUpdate:function(t){var n=t.getCurrentValue();if(!e)return i(n);var r=Object.keys(e).map((function(t){return[t,d(e[t][0],e[t][1],n)]})).reduce((function(t,e){var i;return Object.assign(t,((i={})[e[0]]=e[1],i))}),{});i(r)}}),n?setTimeout((function(){p.setEndValue(1)}),n):p.setEndValue(1),p}})),v=(m.utilities,m.constants,m.Flipper);m.getFlippedElementPositionsBeforeUpdate,m.onFlipKeyUpdate,m.spring;const y={name:"flipper",provide:function(){return{addFlippedElement:this.addFlippedElement,addInvertedElement:this.addInvertedElement}},props:{className:String,flipKey:[String,Number,Boolean],staggerConfig:Object,spring:{type:[String,Object],default:"noWobble"}},data:function(){return{flipInstance:null,ready:!1}},methods:{addFlippedElement:function(t){var element=t.element,e=t.flipId,n=t.delayUntil,r=t.stagger,o=t.shouldFlip,c=t.shouldInvert,d=t.onStart,f=t.onComplete,h=t.opacity,m=t.scale,v=t.translate;this.flipInstance.addFlipped(l({element:element,flipId:e},n?{delayUntil:n}:void 0,{},r?{stagger:r}:void 0,{},o?{shouldFlip:o}:void 0,{},c?{shouldInvert:c}:void 0,{},d?{onStart:d}:void 0,{},f?{onComplete:f}:void 0,{opacity:h,scale:m,translate:v}))},addInvertedElement:function(t){var e=this,element=t.element,n=t.parent,r=t.opacity,o=t.scale,l=t.translate;this.$nextTick((function(){e.flipInstance.addInverted({element:element,parent:n,opacity:r,scale:o,translate:l})}))}},mounted:function(){this.flipInstance=new v(l({element:this.$el,spring:this.spring},this.staggerConfig?{staggerConfig:this.staggerConfig}:null)),this.ready=!0},beforeUpdate:function(){this.flipInstance.recordBeforeUpdate()},watch:{flipKey:function(t,e){var n=this;t!==e&&this.$nextTick((function(){n.flipInstance.update(e,t)}))},staggerConfig:function(t,e){e!==t&&(this.flipInstance.staggerConfig=e)}}};var _=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[this.ready?this._t("default"):this._e()],2)};_._withStripped=!0;var S=e({render:_,staticRenderFns:[]},void 0,y,void 0,!1,void 0,void 0,void 0),E={Flipped:n,Flipper:S};t.Flipped=n,t.Flipper=S,t.default=E,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);