/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,n,s){var r,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(i<3?r(o):i>3?r(e,n,o):r(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},s=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${s}--\x3e`,i=new RegExp(`${s}|${r}`);class o{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],n=c.exec(e)[2],s=n.toLowerCase()+"$lit$",r=t.getAttribute(s);t.removeAttribute(s);const o=r.split(i);this.parts.push({type:"attribute",index:h,name:n,strings:o}),u+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,r=e.split(i),o=r.length-1;for(let e=0;e<o;e++){let n,i=r[e];if(""===i)n=d();else{const t=c.exec(i);null!==t&&a(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(i)}s.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===r[o]?(s.insertBefore(d(),t),n.push(t)):t.data=r[o],u+=o}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(d(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:n},parts:s}=t,r=document.createTreeWalker(n,133,null,!1);let i=p(s),o=s[i],a=-1,l=0;const d=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,i=p(s,i),o=s[i]}d.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],s=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,d=r.nextNode();for(;o<s.length;)if(i=s[o],l(i)){for(;a<i.index;)a++,"TEMPLATE"===d.nodeName&&(n.push(d),r.currentNode=d.content),null===(d=r.nextNode())&&(r.currentNode=n.pop(),d=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${s} `;class b{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=c.exec(t);e+=null===a?t+(n?y:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(w(t)||!S(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||w(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const n=new _(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const r of t)n=e[s],void 0===n&&(n=new k(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(r),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class E extends x{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends C{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(s);return n=e.keyString.get(r),void 0===n&&(n=new o(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const $=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,s){const r=e[0];if("."===r){return new E(t,e.slice(1),n).parts}if("@"===r)return[new T(t,e.slice(1),s.eventContext)];if("?"===r)return[new P(t,e.slice(1),n)];return new x(t,e,n).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(t,...e)=>new b(t,e,"html",R)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,H=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const q=t=>e=>{const n=H(e.type,t);let r=$.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},$.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(s);if(i=r.keyString.get(a),void 0===i){const n=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(n,t),i=new o(e,n),r.keyString.set(a,i)}return r.stringsArray.set(e.strings,i),i},Y=["html","svg"],I=new Set,L=(t,e,n)=>{I.add(t);const s=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{Y.forEach(e=>{const n=$.get(H(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),h(t,n)})})})(t);const a=s.content;n?function(t,e,n=null){const{element:{content:s},parts:r}=t;if(null==n)return void s.appendChild(e);const i=document.createTreeWalker(s,133,null,!1);let o=p(r),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===n&&(a=u(e),n.parentNode.insertBefore(e,n));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=p(r,o);return}o=p(r,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const j={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},z=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:z};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdateInternal(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||F}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=z){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||j,r="function"==typeof s?s:s.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||j.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=F){const s=this.constructor,r=s._attributeNameForProperty(t,n);if(void 0!==r){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let s=!0;if(void 0!==t){const r=this.constructor;n=n||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Z(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):J(t,e)}function G(t){return Z({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const n=e.reduce((e,n,s)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1],t[0]);return new X(n,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class nt extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),s=[];n.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}nt.finalized=!0,nt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,i=O.has(e),o=U&&11===e.nodeType&&!!e.host,a=o&&!I.has(r),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let r=O.get(e);void 0===r&&(n(e,e.firstChild),O.set(e,r=new k(Object.assign({templateFactory:D},s))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:q(r)},s)),a){const t=O.get(l);O.delete(l);const s=t.value instanceof _?t.value.template:void 0;L(r,l,s),n(e,e.firstChild),e.appendChild(l),O.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)};var st=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,rt="[^\\s]+",it=/\[([^]*?)\]/gm;function ot(t,e){for(var n=[],s=0,r=t.length;s<r;s++)n.push(t[s].substr(0,e));return n}var at=function(t){return function(e,n){var s=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function lt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var s=0,r=e;s<r.length;s++){var i=r[s];for(var o in i)t[o]=i[o]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ct=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=ot(ct,3),ut={dayNamesShort:ot(dt,3),dayNames:dt,monthNamesShort:ht,monthNames:ct,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=lt({},ut),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},gt=function(t){return+t-1},vt=[null,"[1-9]\\d?"],_t=[null,rt],yt=["isPm",rt,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],wt=(at("monthNamesShort"),at("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var St=function(t,e,n){if(void 0===e&&(e=wt.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var s=[];e=(e=wt[e]||e).replace(it,(function(t,e){return s.push(e),"@@@"}));var r=lt(lt({},pt),n);return(e=e.replace(st,(function(e){return ft[e](t,r)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function xt(t){return t.substr(0,t.indexOf("."))}var Ct=["closed","locked","off"],kt=function(t,e,n,s){s=s||{},n=null==n?{}:n;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=n,t.dispatchEvent(r),r},Pt=function(t){kt(window,"haptic",t)},Et=function(t,e){return function(t,e,n){void 0===n&&(n=!0);var s,r=xt(e),i="group"===r?"homeassistant":r;switch(r){case"lock":s=n?"unlock":"lock";break;case"cover":s=n?"open_cover":"close_cover";break;default:s=n?"turn_on":"turn_off"}return t.callService(i,s,{entity_id:e})}(t,e,Ct.includes(t.states[e].state))},Nt=function(t,e,n,s){var r;if("double_tap"===s&&n.double_tap_action?r=n.double_tap_action:"hold"===s&&n.hold_action?r=n.hold_action:"tap"===s&&n.tap_action&&(r=n.tap_action),r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Pt("warning"),confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?")))switch(r.action){case"more-info":(n.entity||n.camera_image)&&kt(t,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":r.navigation_path&&function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),kt(window,"location-changed",{replace:n})}(0,r.navigation_path);break;case"url":r.url_path&&window.open(r.url_path);break;case"toggle":n.entity&&(Et(e,n.entity),Pt("success"));break;case"call-service":if(!r.service)return void Pt("failure");var i=r.service.split(".",2);e.callService(i[0],i[1],r.service_data),Pt("success")}};function Mt(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function Tt(t,e,n=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},n)n.dispatchEvent(t);else{var s=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view")||t.querySelector("hui-panel-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout"))&&t.querySelector("#view"))&&t.firstElementChild}();s&&s.dispatchEvent(t)}}let At=window.cardHelpers;const Dt=new Promise(async(t,e)=>{At&&t();const n=async()=>{At=await window.loadCardHelpers(),window.cardHelpers=At,t()};window.loadCardHelpers?n():window.addEventListener("load",async()=>{!async function(){if(customElements.get("hui-view"))return!0;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");if(t.hass={panels:[{url_path:"tmp",component_name:"lovelace"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),!customElements.get("ha-panel-lovelace"))return!1;const e=document.createElement("ha-panel-lovelace");e.hass=Mt(),void 0===e.hass&&(await new Promise(t=>{window.addEventListener("connection-status",e=>{console.log(e),t()},{once:!0})}),e.hass=Mt()),e.panel={config:{mode:null}},e._fetchConfig()}(),window.loadCardHelpers&&n()})});function $t(t,e){const n={type:"error",error:t,origConfig:e},s=document.createElement("hui-error-card");return customElements.whenDefined("hui-error-card").then(()=>{const t=document.createElement("hui-error-card");t.setConfig(n),s.parentElement&&s.parentElement.replaceChild(t,s)}),Dt.then(()=>{Tt("ll-rebuild",{},s)}),s}function Ot(t,e){if(!e||"object"!=typeof e||!e.type)return $t(`No ${t} type configured`,e);let n=e.type;if(n=n.startsWith("custom:")?n.substr("custom:".length):`hui-${n}-${t}`,customElements.get(n))return function(t,e){let n=document.createElement(t);try{n.setConfig(JSON.parse(JSON.stringify(e)))}catch(t){n=$t(t,e)}return Dt.then(()=>{Tt("ll-rebuild",{},n)}),n}(n,e);const s=$t(`Custom element doesn't exist: ${n}.`,e);s.style.display="None";const r=setTimeout(()=>{s.style.display=""},2e3);return customElements.whenDefined(n).then(()=>{clearTimeout(r),Tt("ll-rebuild",{},s)}),s}function Rt(t){return At?At.createCardElement(t):Ot("card",t)}var Vt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ht={common:Vt};const Ut={en:Object.freeze({__proto__:null,common:Vt,default:Ht})};function qt(t,e="",n=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Ut[s])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Ut.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Ut.en)),""!==e&&""!==n&&(r=r.replace(e,n)),r}console.info(`%c  HA-Dashboard \n%c  ${qt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"btn-group",name:"ButtonGroup",description:"Component for multiple floating buttons"});let Yt=class extends nt{static async getConfigElement(){return Rt({type:"vertical-stack",cards:[]}).constructor.getConfigElement()}static getStubConfig(){return{cards:[]}}setConfig(t){var e,n;if(!t)throw new Error(qt("common.invalid_configuration"));this._config=t,this.cards=null!==(n=null===(e=t.cards)||void 0===e?void 0:e.map(t=>this._createCardElement(t)))&&void 0!==n?n:[]}shouldUpdate(t){return!!this._config&&(t.has("_config")||t.has("cards")||t.has("hass"))}updated(t){if(super.updated(t),t.has("hass")&&!t.has("cards")&&this.cards)for(const t of this.cards)this.hass&&(t.hass=this.hass)}_createCardElement(t){const e=Rt(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",n=>{n.stopPropagation(),this._rebuildCard(e,t)},{once:!0}),e}_rebuildCard(t,e){var n,s;const r=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(r,t),this.cards=null!==(s=null===(n=this.cards)||void 0===n?void 0:n.map(e=>e===t?r:e))&&void 0!==s?s:[]}async getCardSize(){return 3}render(){return V`
            <div class="button-group">
                ${this._config.title?V`<h1>${this._config.title}</h1>`:null}
                <div class="content-wrapper">
                    ${this.cards}
                </div>
            </div>
        `}static get styles(){return tt`
          .button-group {
            width: calc(100% - 16px);
            overflow: hidden;
            height: min-content;
            margin: 0 8px;
          }
          
          h1 {
            color: var(--primary-text-color, black);
          }
          
          @media (max-width: 1024px), (min-width: 1600px){
            .content-wrapper {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          
          .content-wrapper {
            display: grid;
            overflow: hidden;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            width: 100%;
            height: min-content;
          }
        `}};t([Z({attribute:!1})],Yt.prototype,"hass",void 0),t([Z({attribute:!1})],Yt.prototype,"cards",void 0),t([G()],Yt.prototype,"_config",void 0),Yt=t([W("btn-group")],Yt),console.info(`%c  HA-Dashboard \n%c  ${qt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"entities-button-group",name:"EntitiesButtonGroup",description:"Component for multiple floating buttons"});let It=class extends nt{static async getConfigElement(){return Rt({type:"entities",entities:[]}).constructor.getConfigElement()}static getStubConfig(){return{entities:[]}}setConfig(t){var e,n;if(!t)throw new Error(qt("common.invalid_configuration"));this._config=t;const s=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}();this._buttons=null!==(n=null===(e=t.entities)||void 0===e?void 0:e.map(t=>{var e,n,r,i;const o={type:"custom:button-card"};if("string"==typeof t){o.entity=t;const r=xt(t);o.template=(null===(n=null===(e=null==s?void 0:s.config)||void 0===e?void 0:e.button_card_templates)||void 0===n?void 0:n[r])?[r]:["default"]}else if(Object.assign(o,t),o.template=Array.isArray(o.template)?Array.from(o.template):[],t.entity){const e=xt(t.entity);(null===(i=null===(r=null==s?void 0:s.config)||void 0===r?void 0:r.button_card_templates)||void 0===i?void 0:i[e])?o.template.unshift(e):0===o.template.length&&o.template.push("default")}return this._createButton(o)}))&&void 0!==n?n:[];const r=Rt({type:"custom:btn-group",title:t.title});r.hass=this.hass,r.cards=this._buttons,this._buttonGroup=r}shouldUpdate(t){return!!this._config&&(t.has("_config")||t.has("_buttons")||t.has("hass"))}updated(t){if(super.updated(t),t.has("hass")){if(this._buttons)for(const t of this._buttons)this.hass&&(t.hass=this.hass);this._buttonGroup&&(this._buttonGroup.hass=this.hass)}}_createButton(t){const e=Rt(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",n=>{n.stopPropagation(),this._rebuildButton(e,t)},{once:!0}),e}_rebuildButton(t,e){var n,s;const r=this._createButton(e);t.parentElement&&t.parentElement.replaceChild(r,t),this._buttons=null!==(s=null===(n=this._buttons)||void 0===n?void 0:n.map(e=>e===t?r:e))&&void 0!==s?s:[]}async getCardSize(){return 3}render(){return V`
            ${this._buttonGroup}
        `}static get styles(){return tt``}};t([Z({attribute:!1})],It.prototype,"hass",void 0),t([G()],It.prototype,"_config",void 0),t([G()],It.prototype,"_buttons",void 0),t([G()],It.prototype,"_buttonGroup",void 0),It=t([W("entities-button-group")],It),console.info(`%c  HA-Dashboard \n%c  ${qt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"digital-clock",name:"DigitalClock",description:"A digital clock component"});let Lt=class extends nt{constructor(){super(...arguments),this._date="",this._time="",this._interval=1e3}setConfig(t){var e;this._config=t,this._config.interval!==this._interval&&(this._interval=null!==(e=this._config.interval)&&void 0!==e?e:1e3)}shouldUpdate(t){return t.has("_date")||t.has("_time")||t.has("_config")}async getCardSize(){return 3}updated(t){super.updated(t),t.has("_interval")&&(this._stopInterval(),this._startInterval()),t.has("_config")&&this._updateDateTime()}connectedCallback(){super.connectedCallback(),this._startInterval()}_startInterval(){this._intervalId||(this._intervalId=window.setInterval(this._updateDateTime.bind(this),this._interval))}_stopInterval(){this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=void 0)}_updateDateTime(){var t,e,n,s;const r=new Date,i=r.toLocaleDateString([],null!==(e=null===(t=this._config)||void 0===t?void 0:t.dateFormat)&&void 0!==e?e:{weekday:"short",day:"2-digit",month:"short"}),o=r.toLocaleTimeString([],null!==(s=null===(n=this._config)||void 0===n?void 0:n.timeFormat)&&void 0!==s?s:{hour:"2-digit",minute:"2-digit"});i!==this._date&&(this._date=i),o!==this._time&&(this._time=o)}disconnectedCallback(){this._stopInterval(),super.disconnectedCallback()}render(){return V`
            <ha-card>
                <span class="time">${this._time}</span>
                <span class="date">${this._date}</span>
            </ha-card>
        `}static get styles(){return tt`
          ha-card {
            text-align: center;
            font-weight: bold;
            padding: 8px 0;
          }
          
          ha-card > span {
            display: block;
          }
          
          .time {
            font-size: 2.8em;
            line-height: 1em;
          }
          
          .date {
            font-size: 1.6em;
            line-height: 1em;
          }
        `}};t([G()],Lt.prototype,"_date",void 0),t([G()],Lt.prototype,"_time",void 0),t([G()],Lt.prototype,"_config",void 0),t([G()],Lt.prototype,"_interval",void 0),Lt=t([W("digital-clock")],Lt),console.info(`%c  HA-Dashboard \n%c  ${qt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"ha-dashboard",name:"Home Assistant Dashboard",description:"A custom dashboard with sidebar"});let jt=class extends nt{static getStubConfig(){return{cards:[]}}setConfig(t){var e,n,s,r,i,o,a,l;if(!t)throw new Error(qt("common.invalid_configuration"));if(this._config=t,this._config.usePanel&&(null===(e=this.cards)||void 0===e?void 0:e.length)>1)throw new Error("Only one card is supported");const d=Rt({type:"vertical-stack",cards:null!==(s=null===(n=t.sidebar)||void 0===n?void 0:n.stickyCards)&&void 0!==s?s:[]});d.hass=this.hass,d.classList.add("sticky-cards"),this._stickySidebarCard=d;const c=Rt({type:"vertical-stack",cards:null!==(i=null===(r=t.sidebar)||void 0===r?void 0:r.cards)&&void 0!==i?i:[]});c.hass=this.hass,c.classList.add("scroll-panel"),this._sidebarCard=c,this._dashboardStyle=Object.entries(null!==(o=this._config.styles)&&void 0!==o?o:{}).map(([t,e])=>`--${t.replace(/_/g,"-")}: ${e} !important;`),this._sidebarStyle=Object.entries(null!==(l=null===(a=this._config.sidebar)||void 0===a?void 0:a.styles)&&void 0!==l?l:{}).map(([t,e])=>`--sidebar_${t.replace(/_/g,"-")}: ${e} !important;`)}shouldUpdate(t){return!!this._config&&(t.has("hass")||t.has("lovelace")||t.has("narrow")||t.has("index")||t.has("cards")||t.has("badges")||t.has("_sidebarCard")||t.has("_stickySidebarCard")||t.has("_sidebarStyle")||t.has("_dashboardStyle")||t.has("_config"))}updated(t){var e;if(super.updated(t),this._config.usePanel&&(null===(e=this.cards)||void 0===e?void 0:e.length)>1)throw new Error("Only one card is supported");t.has("hass")&&(this._sidebarCard&&(this._sidebarCard.hass=this.hass),this._stickySidebarCard&&(this._stickySidebarCard.hass=this.hass))}toggleSidebar(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".sidebar");e&&(e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show"))}render(){var t,e,n,s,r;return V`
            <style>
                :host {
                    ${this._dashboardStyle}
                    ${this._sidebarStyle}
                }
                
                @media (max-width: ${null!==(n=null===(e=null===(t=this._config.sidebar)||void 0===t?void 0:t.styles)||void 0===e?void 0:e.show_at_min_width)&&void 0!==n?n:"1024px"}) {
                    .sidebar {
                        display: none !important;
                    }

                    .sidebar.show {
                        display: flex !important;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 1000;
                        background: var(--sidebar_overlay-background, var(--sidebar_background, var(--ha-card-background, var(--card-background-color, transparent)))) !important;
                        width: var(--sidebar_overlay-width, var(--sidebar_max-width, 500px)) !important;
                    }
                }
            </style>

            <div class="dashboard">
                <ha-card class="sidebar">
                    ${this._stickySidebarCard}
                    ${this._sidebarCard}
                    <div class="sidebar-buttons">
                        ${null===(r=null===(s=this._config.sidebar)||void 0===s?void 0:s.buttons)||void 0===r?void 0:r.map(t=>V`
                                <div
                                    @click="${()=>Nt(this,this.hass,{tap_action:t.action},"tap")}"
                                >
                                    <ha-icon .icon=${t.icon}></ha-icon>
                                </div>`)}
                    </div>
                </ha-card>
                ${this._config.usePanel?V`<div class="content-wrapper">
                            ${this.cards[0]}
                        </div>`:V`<hui-masonry-view
                                class="scroll-panel content-wrapper"
                                .hass=${this.hass}
                                .narrow=${this.narrow}
                                .lovelace=${this.lovelace}
                                .cards=${this.cards}
                                .badges=${this.badges}
                                .index=${this.index}>
                        </hui-masonry-view>`}
            </div>
        `}static get styles(){return tt`
          .dashboard {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100vh;
            max-height: calc(100vh - var(--header-height));
            overflow: hidden;
          }

          .sidebar {
            position: relative;
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 20%;
            overflow: hidden;
            min-width: 300px;
            max-width: 500px;
            background: var(--ha-card-background, var(--card-background-color, white));
            margin: 7px 0;
            min-height: calc(100% - 2 * 7px);
            display: flex;
            flex-direction: column;
          }

          .sidebar > * {
            --ha-card-background: transparent;
            --ha-card-box-shadow: none;
            flex-grow: 1;
            flex-shrink: 1;
          }

          .sidebar .sticky-cards {
            flex-grow: 0;
            flex-shrink: 0;
          }

          .sidebar .sidebar-buttons {
            flex-grow: 0;
            flex-shrink: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 0 8px 8px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: calc(100% - 16px);
          }

          .sidebar .sidebar-buttons > div:first-child {
            margin-left: 0;
          }

          .sidebar .sidebar-buttons > div {
            --mdc-icon-size: 28px;
            background: var(--primary-color);
            border-radius: 50%;
            padding: 5px;
            cursor: pointer;
            margin-left: 10px;
          }

          .content-wrapper {
            flex-shrink: 1;
            flex-grow: 1;
            flex-basis: 80%;
            overflow: hidden;
            height: 100%;
          }

          .scroll-panel {
            overflow-x: hidden !important;
            overflow-y: auto !important;
          }

          .scroll-panel::-webkit-scrollbar-track {
            box-shadow: inset 0 0 8px 8px transparent;
            border-left: solid 5px transparent;
          }

          .scroll-panel::-webkit-scrollbar {
            width: calc(3px + 5px);
          }

          .scroll-panel::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 8px 8px var(--scrollbar-thumb-color, var(--primary-color, rgb(3, 169, 244)));
            border-left: solid 5px transparent;
          }
        `}};t([Z({attribute:!1})],jt.prototype,"hass",void 0),t([Z({attribute:!1})],jt.prototype,"lovelace",void 0),t([Z({type:Boolean})],jt.prototype,"narrow",void 0),t([Z({type:Number})],jt.prototype,"index",void 0),t([Z({attribute:!1})],jt.prototype,"cards",void 0),t([Z({attribute:!1})],jt.prototype,"badges",void 0),t([G()],jt.prototype,"_sidebarCard",void 0),t([G()],jt.prototype,"_stickySidebarCard",void 0),t([G()],jt.prototype,"_sidebarStyle",void 0),t([G()],jt.prototype,"_dashboardStyle",void 0),t([G()],jt.prototype,"_config",void 0),jt=t([W("ha-dashboard")],jt);export{jt as HADashboard};
