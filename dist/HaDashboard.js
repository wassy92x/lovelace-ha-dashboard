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
function e(e,t,r,s){var n,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o
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
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,i=new RegExp(`${s}|${n}`);class o{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],o=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:m}}=e;for(;u<m;){const e=o.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let s=0;for(let e=0;e<r;e++)a(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=p[u],r=c.exec(t)[2],s=r.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const o=n.split(i);this.parts.push({type:"attribute",index:h,name:r,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,n=t.split(i),o=n.length-1;for(let t=0;t<o;t++){let r,i=n[t];if(""===i)r=d();else{const e=c.exec(i);null!==e&&a(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(i)}s.insertBefore(r,e),this.parts.push({type:"node",index:++h})}""===n[o]?(s.insertBefore(d(),e),r.push(e)):e.data=n[o],u+=o}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(d(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(r.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const a=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:r},parts:s}=e,n=document.createTreeWalker(r,133,null,!1);let i=p(s),o=s[i],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,i=p(s,i),o=s[i]}d.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},p=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(l(t))return r}return-1};
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
const m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),y={},g={};
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
class _{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,o=0,a=0,d=n.nextNode();for(;o<s.length;)if(i=s[o],l(i)){for(;a<i.index;)a++,"TEMPLATE"===d.nodeName&&(r.push(d),n.currentNode=d.content),null===(d=n.nextNode())&&(n.currentNode=r.pop(),d=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const v=` ${s} `;class w{constructor(e,t,r,s){this.strings=e,this.values=t,this.type=r,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===e.indexOf("--\x3e",o+1);const a=c.exec(e);t+=null===a?e+(r?v:n):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let s=0;s<t;s++){r+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(S(e)||!b(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||S(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===g?(this.value=g,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const r=new _(t,e.processor,this.options),s=r._clone();r.update(e.values),this.__commitNode(s),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,s=0;for(const n of e)r=t[s],void 0===r&&(r=new P(this.options),t.push(r),0===s?r.appendIntoPart(this):r.insertAfterPart(t[s-1])),r.setValue(n),r.commit(),s++;s<t.length&&(t.length=s,this.clear(r&&r.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class N{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class E extends x{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends C{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function D(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(s);return r=t.keyString.get(n),void 0===r&&(r=new o(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const O=new Map,R=new WeakMap;
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
 */const V=new
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
class{handleAttributeExpressions(e,t,r,s){const n=t[0];if("."===n){return new E(e,t.slice(1),r).parts}if("@"===n)return[new T(e,t.slice(1),s.eventContext)];if("?"===n)return[new N(e,t.slice(1),r)];return new x(e,t,r).parts}handleTextExpression(e){return new P(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const q=(e,...t)=>new w(e,t,"html",V)
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
 */,H=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const Y=e=>t=>{const r=H(t.type,e);let n=O.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(r,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(s);if(i=n.keyString.get(a),void 0===i){const r=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(r,e),i=new o(t,r),n.keyString.set(a,i)}return n.stringsArray.set(t.strings,i),i},$=["html","svg"],j=new Set,L=(e,t,r)=>{j.add(e);const s=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{$.forEach(t=>{const r=O.get(H(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),h(e,r)})})})(e);const a=s.content;r?function(e,t,r=null){const{element:{content:s},parts:n}=e;if(null==r)return void s.appendChild(t);const i=document.createTreeWalker(s,133,null,!1);let o=p(n),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===r&&(a=u(t),r.parentNode.insertBefore(t,r));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=p(n,o);return}o=p(n,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),h(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},I=(e,t)=>t!==e&&(t==t||e==e),F={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:I};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const s=this._attributeNameForProperty(r,t);void 0!==s&&(this._attributeToPropertyMap.set(s,r),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=F){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdateInternal(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||F}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=I){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,s=t.converter||z,n="function"==typeof s?s:s.fromAttribute;return n?n(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,s=t.converter;return(s&&s.toAttribute||z.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=F){const s=this.constructor,n=s._attributeNameForProperty(e,r);if(void 0!==n){const e=s._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,s=r._attributeToPropertyMap.get(e);if(void 0!==s){const e=r.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let s=!0;if(void 0!==e){const n=this.constructor;r=r||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
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
const B=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function J(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):B(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(e,t){if(t!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(e,...t)=>{const r=t.reduce((t,r,s)=>t+(e=>{if(e instanceof K)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[s+1],e[0]);return new K(r,G)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const X={};class ee extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),s=[];r.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Z){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new K(String(t),G)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==X&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return X}}ee.finalized=!0,ee.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=R.has(t),o=U&&11===t.nodeType&&!!t.host,a=o&&!j.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(r(t,t.firstChild),R.set(t,n=new P(Object.assign({templateFactory:D},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:Y(n)},s)),a){const e=R.get(l);R.delete(l);const s=e.value instanceof _?e.value.template:void 0;L(n,l,s),r(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var te=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,re="[^\\s]+",se=/\[([^]*?)\]/gm;function ne(e,t){for(var r=[],s=0,n=e.length;s<n;s++)r.push(e[s].substr(0,t));return r}var ie=function(e){return function(t,r){var s=r[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function oe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var s=0,n=t;s<n.length;s++){var i=n[s];for(var o in i)e[o]=i[o]}return e}var ae=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],le=["January","February","March","April","May","June","July","August","September","October","November","December"],de=ne(le,3),ce={dayNamesShort:ne(ae,3),dayNames:ae,monthNamesShort:de,monthNames:le,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},he=oe({},ce),ue=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},pe={D:function(e){return String(e.getDate())},DD:function(e){return ue(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ue(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ue(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ue(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ue(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ue(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ue(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ue(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ue(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ue(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ue(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ue(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ue(Math.floor(Math.abs(t)/60),2)+":"+ue(Math.abs(t)%60,2)}},me=function(e){return+e-1},fe=[null,"[1-9]\\d?"],ye=[null,re],ge=["isPm",re,function(e,t){var r=e.toLowerCase();return r===t.amPm[0]?0:r===t.amPm[1]?1:null}],_e=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var r=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?r:-r}return 0}],ve=(ie("monthNamesShort"),ie("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var we=function(e,t,r){if(void 0===t&&(t=ve.default),void 0===r&&(r={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var s=[];t=(t=ve[t]||t).replace(se,(function(e,t){return s.push(t),"@@@"}));var n=oe(oe({},he),r);return(t=t.replace(te,(function(t){return pe[t](e,n)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function Se(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function be(e,t,r=null){if((e=new Event(e,{bubbles:!0,cancelable:!1,composed:!0})).detail=t||{},r)r.dispatchEvent(e);else{var s=function(){var e=document.querySelector("hc-main");return e=e?(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("hc-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-view")||e.querySelector("hui-panel-view"):(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=document.querySelector("home-assistant"))&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))&&e.shadowRoot)&&e.querySelector("ha-app-layout"))&&e.querySelector("#view"))&&e.firstElementChild}();s&&s.dispatchEvent(e)}}let xe=window.cardHelpers;const Ce=new Promise(async(e,t)=>{xe&&e();const r=async()=>{xe=await window.loadCardHelpers(),window.cardHelpers=xe,e()};window.loadCardHelpers?r():window.addEventListener("load",async()=>{!async function(){if(customElements.get("hui-view"))return!0;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");if(e.hass={panels:[{url_path:"tmp",component_name:"lovelace"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),!customElements.get("ha-panel-lovelace"))return!1;const t=document.createElement("ha-panel-lovelace");t.hass=Se(),void 0===t.hass&&(await new Promise(e=>{window.addEventListener("connection-status",t=>{console.log(t),e()},{once:!0})}),t.hass=Se()),t.panel={config:{mode:null}},t._fetchConfig()}(),window.loadCardHelpers&&r()})});function Pe(e,t){const r={type:"error",error:e,origConfig:t},s=document.createElement("hui-error-card");return customElements.whenDefined("hui-error-card").then(()=>{const e=document.createElement("hui-error-card");e.setConfig(r),s.parentElement&&s.parentElement.replaceChild(e,s)}),Ce.then(()=>{be("ll-rebuild",{},s)}),s}function Ne(e,t){if(!t||"object"!=typeof t||!t.type)return Pe(`No ${e} type configured`,t);let r=t.type;if(r=r.startsWith("custom:")?r.substr("custom:".length):`hui-${r}-${e}`,customElements.get(r))return function(e,t){let r=document.createElement(e);try{r.setConfig(JSON.parse(JSON.stringify(t)))}catch(e){r=Pe(e,t)}return Ce.then(()=>{be("ll-rebuild",{},r)}),r}(r,t);const s=Pe(`Custom element doesn't exist: ${r}.`,t);s.style.display="None";const n=setTimeout(()=>{s.style.display=""},2e3);return customElements.whenDefined(r).then(()=>{clearTimeout(n),be("ll-rebuild",{},s)}),s}function Ee(e){return xe?xe.createCardElement(e):Ne("card",e)}var ke={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Me={common:ke};const Te={en:Object.freeze({__proto__:null,common:ke,default:Me})};function Ae(e,t="",r=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=e.split(".").reduce((e,t)=>e[t],Te[s])}catch(t){n=e.split(".").reduce((e,t)=>e[t],Te.en)}return void 0===n&&(n=e.split(".").reduce((e,t)=>e[t],Te.en)),""!==t&&""!==r&&(n=n.replace(t,r)),n}console.info(`%c  HA-Dashboard \n%c  ${Ae("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"ha-dashboard",name:"Home Assistant Dashboard",description:"A custom dashboard with sidebar"});let De=class extends ee{static async getConfigElement(){return Ee({type:"vertical-stack",cards:[]}).constructor.getConfigElement()}static getStubConfig(){return{cards:[]}}setConfig(e){var t,r,s,n,i,o,a,l,d;if(!e)throw new Error(Ae("common.invalid_configuration"));this._config=e,this._cards=null!==(r=null===(t=e.cards)||void 0===t?void 0:t.map(e=>this._createCardElement(e)))&&void 0!==r?r:[];const c=Ee({type:"vertical-stack",cards:null!==(n=null===(s=e.sidebar)||void 0===s?void 0:s.stickyCards)&&void 0!==n?n:[]});c.hass=this.hass,c.className="sticky-cards",this._stickySidebarCard=c;const h=Ee({type:"vertical-stack",cards:null!==(o=null===(i=e.sidebar)||void 0===i?void 0:i.cards)&&void 0!==o?o:[]});h.hass=this.hass,h.className="scroll-panel",this._sidebarCard=h,this._dashboardStyle=Object.entries(null!==(a=this._config.style)&&void 0!==a?a:{}).map(([e,t])=>`--${e.replace(/_/g,"-")}: ${t} !important;`),this._sidebarStyle=Object.entries(null!==(d=null===(l=this._config.sidebar)||void 0===l?void 0:l.style)&&void 0!==d?d:{}).map(([e,t])=>`--sidebar_${e.replace(/_/g,"-")}: ${t} !important;`)}shouldUpdate(e){return!!this._config&&(e.has("_config")||e.has("hass")||e.has("_sidebarStyle")||e.has("_dashboardStyle")||e.has("_sidebarCard"))}connectedCallback(){super.connectedCallback(),this._lovelace=new Proxy(function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}(),{get:(e,t)=>"editMode"!==t&&e[t]})}updated(e){if(super.updated(e),e.has("hass")){if(this._cards)for(const e of this._cards)this.hass&&(e.hass=this.hass);this._sidebarCard&&(this._sidebarCard.hass=this.hass),this._stickySidebarCard&&(this._stickySidebarCard.hass=this.hass)}}_createCardElement(e){const t=Ee(e);return this.hass&&(t.hass=this.hass),t.addEventListener("ll-rebuild",r=>{r.stopPropagation(),this._rebuildCard(t,e)},{once:!0}),t}_rebuildCard(e,t){var r,s;const n=this._createCardElement(t);e.parentElement&&e.parentElement.replaceChild(n,e),this._cards=null!==(s=null===(r=this._cards)||void 0===r?void 0:r.map(t=>t===e?n:t))&&void 0!==s?s:[]}toggleSidebar(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".sidebar");t&&(t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show"))}render(){var e,t,r;return q`
      <style>
        :host {
          ${this._dashboardStyle}
          ${this._sidebarStyle}
        }

        @media (max-width: ${null!==(r=null===(t=null===(e=this._config.sidebar)||void 0===e?void 0:e.style)||void 0===t?void 0:t.show_at_min_width)&&void 0!==r?r:"1024px"}) {
          .sidebar {
            display: none !important;
          }

          .sidebar.show {
            display: flex !important;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1000;
            background: var(--sidebar_overlay-background, var(--sidebar_background, var(--ha-card-background, var(--card-background-color, transparent))));
            width: var(--sidebar_overlay-width, var(--sidebar_max-width, 500px));
          }
        }
      </style>
      
      <div class="dashboard">
        <ha-card class="sidebar">
          ${this._stickySidebarCard}
          ${this._sidebarCard}
          <div class="sidebar-buttons">
            <button>Test</button>
          </div>
        </ha-card>
        <div class="content-wrapper scroll-panel">
          <hui-masonry-view
            .hass=${this.hass}
            .narrow=${!1}
            .lovelace=${this._lovelace}
            .cards=${this._cards}>
          </hui-masonry-view>
        </div>
      </div>
    `}static get styles(){return Q`
      :host {
        --sidebar_primary-text-color: var(--primary-text-color, black);
        --sidebar_secondary-text-color: var(--secondary-text-color, black);
        --sidebar_background: var(--ha-card-background, var(--card-background-color, white));
      }
      
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
        min-width: var(--sidebar_min-width, 300px);
        max-width: var(--sidebar_max-width, 500px);
        background: var(--sidebar_background);
        margin: 7px 0;
        min-height: calc(100% - 14px);
        display: flex;
        flex-direction: column;
        --primary-text-color: var(--sidebar_primary-text-color, black);
        --secondary-text-color: var(--sidebar_secondary-text-color, black);
      }
      
      .sidebar > hui-vertical-stack-card {
        --ha-card-background: transparent;
        --ha-card-box-shadow: none;
        flex-grow: 1;
        flex-shrink: 1;
      }
      
      .sidebar .sticky-cards {
        flex-grow: 0;
        flex-shrink: 0;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
      }
      
      .sidebar .sidebar-buttons {
        flex-grow: 0;
        flex-shrink: 0;
        position: absolute;
        bottom: 0;
        left: 0;
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
    `}};var Oe,Re;e([J({attribute:!1})],De.prototype,"hass",void 0),e([J()],De.prototype,"_cards",void 0),e([J()],De.prototype,"_sidebarCard",void 0),e([J()],De.prototype,"_stickySidebarCard",void 0),e([J()],De.prototype,"_sidebarStyle",void 0),e([J()],De.prototype,"_dashboardStyle",void 0),e([J({attribute:!1,hasChanged:null==Oe?void 0:Oe.hasChanged})],De.prototype,"_config",void 0),De=e([(Re="ha-dashboard",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(Re,e):((e,t)=>{const{kind:r,elements:s}=t;return{kind:r,elements:s,finisher(t){window.customElements.define(e,t)}}})(Re,e))],De);export{De as HADashboard};
