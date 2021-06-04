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
function t(t,e,s,r){var n,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i<3?n(o):i>3?n(e,s,o):n(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o
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
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},r=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${n}`);class o{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let r=0;for(let t=0;t<s;t++)a(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=p[u],s=c.exec(e)[2],r=s.toLowerCase()+"$lit$",n=t.getAttribute(r);t.removeAttribute(r);const o=n.split(i);this.parts.push({type:"attribute",index:h,name:s,strings:o}),u+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,n=e.split(i),o=n.length-1;for(let e=0;e<o;e++){let s,i=n[e];if(""===i)s=d();else{const t=c.exec(i);null!==t&&a(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(i)}r.insertBefore(s,t),this.parts.push({type:"node",index:++h})}""===n[o]?(r.insertBefore(d(),t),s.push(t)):t.data=n[o],u+=o}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(d(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(s.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const a=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:s},parts:r}=t,n=document.createTreeWalker(s,133,null,!1);let i=p(r),o=r[i],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,i=p(r,i),o=r[i]}d.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},p=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};
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
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},_={};
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
class v{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],r=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,d=n.nextNode();for(;o<r.length;)if(i=r[o],l(i)){for(;a<i.index;)a++,"TEMPLATE"===d.nodeName&&(s.push(d),n.currentNode=d.content),null===(d=n.nextNode())&&(n.currentNode=s.pop(),d=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const y=` ${r} `;class b{constructor(t,e,s,r){this.strings=t,this.values=e,this.type=s,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const a=c.exec(t);e+=null===a?t+(s?y:n):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let r=0;r<e;r++){s+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(w(t)||!S(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||w(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const s=new v(e,t.processor,this.options),r=s._clone();s.update(t.values),this.__commitNode(r),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,r=0;for(const n of t)s=e[r],void 0===s&&(s=new E(this.options),e.push(s),0===r?s.appendIntoPart(this):s.insertAfterPart(e[r-1])),s.setValue(n),s.commit(),r++;r<e.length&&(e.length=r,this.clear(s&&s.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class k extends x{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends C{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function D(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(r);return s=e.keyString.get(n),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const O=new Map,$=new WeakMap;
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
class{handleAttributeExpressions(t,e,s,r){const n=e[0];if("."===n){return new k(t,e.slice(1),s).parts}if("@"===n)return[new T(t,e.slice(1),r.eventContext)];if("?"===n)return[new P(t,e.slice(1),s)];return new x(t,e,s).parts}handleTextExpression(t){return new E(t)}};
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
 */,H=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const q=t=>e=>{const s=H(e.type,t);let n=O.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(r);if(i=n.keyString.get(a),void 0===i){const s=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(s,t),i=new o(e,s),n.keyString.set(a,i)}return n.stringsArray.set(e.strings,i),i},Y=["html","svg"],I=new Set,L=(t,e,s)=>{I.add(t);const r=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{Y.forEach(e=>{const s=O.get(H(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),h(t,s)})})})(t);const a=r.content;s?function(t,e,s=null){const{element:{content:r},parts:n}=t;if(null==s)return void r.appendChild(e);const i=document.createTreeWalker(r,133,null,!1);let o=p(n),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===s&&(a=u(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=p(n,o);return}o=p(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const j={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},z=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:z};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const r=this._attributeNameForProperty(s,e);void 0!==r&&(this._attributeToPropertyMap.set(r,s),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||F}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=z){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,r=e.converter||j,n="function"==typeof r?r:r.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,r=e.converter;return(r&&r.toAttribute||j.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=F){const r=this.constructor,n=r._attributeNameForProperty(t,s);if(void 0!==n){const t=r._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,r=s._attributeToPropertyMap.get(t);if(void 0!==r){const t=s.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let r=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
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
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:r}=e;return{kind:s,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function Z(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):J(t,e)}function G(t){return Z({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const s=e.reduce((e,s,r)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[r+1],t[0]);return new X(s,Q)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class st extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),r=[];s.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}st.finalized=!0,st.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,i=$.has(e),o=U&&11===e.nodeType&&!!e.host,a=o&&!I.has(n),l=a?document.createDocumentFragment():e;if(((t,e,r)=>{let n=$.get(e);void 0===n&&(s(e,e.firstChild),$.set(e,n=new E(Object.assign({templateFactory:D},r))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:q(n)},r)),a){const t=$.get(l);$.delete(l);const r=t.value instanceof v?t.value.template:void 0;L(n,l,r),s(e,e.firstChild),e.appendChild(l),$.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)};var rt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,nt="[^\\s]+",it=/\[([^]*?)\]/gm;function ot(t,e){for(var s=[],r=0,n=t.length;r<n;r++)s.push(t[r].substr(0,e));return s}var at=function(t){return function(e,s){var r=s[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return r>-1?r:null}};function lt(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];for(var r=0,n=e;r<n.length;r++){var i=n[r];for(var o in i)t[o]=i[o]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ct=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=ot(ct,3),ut={dayNamesShort:ot(dt,3),dayNames:dt,monthNamesShort:ht,monthNames:ct,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=lt({},ut),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},gt=function(t){return+t-1},_t=[null,"[1-9]\\d?"],vt=[null,nt],yt=["isPm",nt,function(t,e){var s=t.toLowerCase();return s===e.amPm[0]?0:s===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var s=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?s:-s}return 0}],wt=(at("monthNamesShort"),at("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var St=function(t,e,s){if(void 0===e&&(e=wt.default),void 0===s&&(s={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var r=[];e=(e=wt[e]||e).replace(it,(function(t,e){return r.push(e),"@@@"}));var n=lt(lt({},pt),s);return(e=e.replace(rt,(function(e){return ft[e](t,n)}))).replace(/@@@/g,(function(){return r.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function xt(t){return t.substr(0,t.indexOf("."))}var Ct=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null};function Et(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function Pt(t,e,s=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},s)s.dispatchEvent(t);else{var r=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view")||t.querySelector("hui-panel-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout"))&&t.querySelector("#view"))&&t.firstElementChild}();r&&r.dispatchEvent(t)}}let kt=window.cardHelpers;const Nt=new Promise(async(t,e)=>{kt&&t();const s=async()=>{kt=await window.loadCardHelpers(),window.cardHelpers=kt,t()};window.loadCardHelpers?s():window.addEventListener("load",async()=>{!async function(){if(customElements.get("hui-view"))return!0;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");if(t.hass={panels:[{url_path:"tmp",component_name:"lovelace"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),!customElements.get("ha-panel-lovelace"))return!1;const e=document.createElement("ha-panel-lovelace");e.hass=Et(),void 0===e.hass&&(await new Promise(t=>{window.addEventListener("connection-status",e=>{console.log(e),t()},{once:!0})}),e.hass=Et()),e.panel={config:{mode:null}},e._fetchConfig()}(),window.loadCardHelpers&&s()})});function Mt(t,e){const s={type:"error",error:t,origConfig:e},r=document.createElement("hui-error-card");return customElements.whenDefined("hui-error-card").then(()=>{const t=document.createElement("hui-error-card");t.setConfig(s),r.parentElement&&r.parentElement.replaceChild(t,r)}),Nt.then(()=>{Pt("ll-rebuild",{},r)}),r}function Tt(t,e){if(!e||"object"!=typeof e||!e.type)return Mt(`No ${t} type configured`,e);let s=e.type;if(s=s.startsWith("custom:")?s.substr("custom:".length):`hui-${s}-${t}`,customElements.get(s))return function(t,e){let s=document.createElement(t);try{s.setConfig(JSON.parse(JSON.stringify(e)))}catch(t){s=Mt(t,e)}return Nt.then(()=>{Pt("ll-rebuild",{},s)}),s}(s,e);const r=Mt(`Custom element doesn't exist: ${s}.`,e);r.style.display="None";const n=setTimeout(()=>{r.style.display=""},2e3);return customElements.whenDefined(s).then(()=>{clearTimeout(n),Pt("ll-rebuild",{},r)}),r}function At(t){return kt?kt.createCardElement(t):Tt("card",t)}var Dt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ot={common:Dt};const $t={en:Object.freeze({__proto__:null,common:Dt,default:Ot})};function Rt(t,e="",s=""){const r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],$t[r])}catch(e){n=t.split(".").reduce((t,e)=>t[e],$t.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t[e],$t.en)),""!==e&&""!==s&&(n=n.replace(e,s)),n}console.info(`%c  HA-Dashboard \n%c  ${Rt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"entities-button-group",name:"EntitiesButtonGroup",description:"Component for multiple floating buttons"});let Vt=class extends st{static async getConfigElement(){return At({type:"entities",entities:[]}).constructor.getConfigElement()}static getStubConfig(){return{entities:[]}}setConfig(t){var e,s;if(!t)throw new Error(Rt("common.invalid_configuration"));this._config=t;const r=Ct();this._buttons=null!==(s=null===(e=t.entities)||void 0===e?void 0:e.map(t=>{var e,s,n,i;const o={type:"custom:button-card"};if("string"==typeof t){o.entity=t;const n=xt(t);o.template=(null===(s=null===(e=null==r?void 0:r.config)||void 0===e?void 0:e.button_card_templates)||void 0===s?void 0:s[n])?[n]:["default"]}else if(Object.assign(o,t),o.template=Array.isArray(o.template)?Array.from(o.template):[],t.entity){const e=xt(t.entity);(null===(i=null===(n=null==r?void 0:r.config)||void 0===n?void 0:n.button_card_templates)||void 0===i?void 0:i[e])?o.template.unshift(e):0===o.template.length&&o.template.push("default")}return this._createButton(o)}))&&void 0!==s?s:[];const n=At({type:"custom:btn-group",title:t.title});n.hass=this.hass,n.cards=this._buttons,this._buttonGroup=n}shouldUpdate(t){return!!this._config&&(t.has("_config")||t.has("_buttons")||t.has("hass"))}updated(t){if(super.updated(t),t.has("hass")){if(this._buttons)for(const t of this._buttons)this.hass&&(t.hass=this.hass);this._buttonGroup&&(this._buttonGroup.hass=this.hass)}}_createButton(t){const e=At(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",s=>{s.stopPropagation(),this._rebuildButton(e,t)},{once:!0}),e}_rebuildButton(t,e){var s,r;const n=this._createButton(e);t.parentElement&&t.parentElement.replaceChild(n,t),this._buttons=null!==(r=null===(s=this._buttons)||void 0===s?void 0:s.map(e=>e===t?n:e))&&void 0!==r?r:[]}async getCardSize(){return 3}render(){return V`
            ${this._buttonGroup}
        `}static get styles(){return tt``}};t([Z({attribute:!1})],Vt.prototype,"hass",void 0),t([G()],Vt.prototype,"_config",void 0),t([G()],Vt.prototype,"_buttons",void 0),t([G()],Vt.prototype,"_buttonGroup",void 0),Vt=t([W("entities-button-group")],Vt),console.info(`%c  HA-Dashboard \n%c  ${Rt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"btn-group",name:"ButtonGroup",description:"Component for multiple floating buttons"});let Ht=class extends st{static async getConfigElement(){return At({type:"vertical-stack",cards:[]}).constructor.getConfigElement()}static getStubConfig(){return{cards:[]}}setConfig(t){var e,s;if(!t)throw new Error(Rt("common.invalid_configuration"));this._config=t,this.cards=null!==(s=null===(e=t.cards)||void 0===e?void 0:e.map(t=>this._createCardElement(t)))&&void 0!==s?s:[]}shouldUpdate(t){return!!this._config&&(t.has("_config")||t.has("cards")||t.has("hass"))}updated(t){if(super.updated(t),t.has("hass")&&!t.has("cards")&&this.cards)for(const t of this.cards)this.hass&&(t.hass=this.hass)}_createCardElement(t){const e=At(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",s=>{s.stopPropagation(),this._rebuildCard(e,t)},{once:!0}),e}_rebuildCard(t,e){var s,r;const n=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(n,t),this.cards=null!==(r=null===(s=this.cards)||void 0===s?void 0:s.map(e=>e===t?n:e))&&void 0!==r?r:[]}async getCardSize(){return 3}render(){return V`
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
        `}};t([Z({attribute:!1})],Ht.prototype,"hass",void 0),t([Z({attribute:!1})],Ht.prototype,"cards",void 0),t([G()],Ht.prototype,"_config",void 0),Ht=t([W("btn-group")],Ht),console.info(`%c  HA-Dashboard \n%c  ${Rt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"digital-clock",name:"DigitalClock",description:"A digital clock component"});let Ut=class extends st{constructor(){super(...arguments),this._date="",this._time="",this._interval=1e3}setConfig(t){var e;this._config=t,this._config.interval!==this._interval&&(this._interval=null!==(e=this._config.interval)&&void 0!==e?e:1e3)}shouldUpdate(t){return t.has("_date")||t.has("_time")||t.has("_config")}async getCardSize(){return 3}updated(t){super.updated(t),t.has("_interval")&&(this._stopInterval(),this._startInterval()),t.has("_config")&&this._updateDateTime()}connectedCallback(){super.connectedCallback(),this._startInterval()}_startInterval(){this._intervalId||(this._intervalId=window.setInterval(this._updateDateTime.bind(this),this._interval))}_stopInterval(){this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=void 0)}_updateDateTime(){var t,e,s,r;const n=new Date,i=n.toLocaleDateString([],null!==(e=null===(t=this._config)||void 0===t?void 0:t.dateFormat)&&void 0!==e?e:{weekday:"short",day:"2-digit",month:"short"}),o=n.toLocaleTimeString([],null!==(r=null===(s=this._config)||void 0===s?void 0:s.timeFormat)&&void 0!==r?r:{hour:"2-digit",minute:"2-digit"});i!==this._date&&(this._date=i),o!==this._time&&(this._time=o)}disconnectedCallback(){this._stopInterval(),super.disconnectedCallback()}render(){return V`
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
        `}};t([G()],Ut.prototype,"_date",void 0),t([G()],Ut.prototype,"_time",void 0),t([G()],Ut.prototype,"_config",void 0),t([G()],Ut.prototype,"_interval",void 0),Ut=t([W("digital-clock")],Ut),console.info(`%c  HA-Dashboard \n%c  ${Rt("common.version")} 1.3.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"ha-dashboard",name:"Home Assistant Dashboard",description:"A custom dashboard with sidebar"});let qt=class extends st{static async getConfigElement(){return At({type:"vertical-stack",cards:[]}).constructor.getConfigElement()}static getStubConfig(){return{cards:[]}}setConfig(t){var e,s,r,n,i,o,a,l,d;if(!t)throw new Error(Rt("common.invalid_configuration"));this._config=t,this._cards=null!==(s=null===(e=t.cards)||void 0===e?void 0:e.map(t=>this._createCardElement(t)))&&void 0!==s?s:[];const c=At({type:"vertical-stack",cards:null!==(n=null===(r=t.sidebar)||void 0===r?void 0:r.stickyCards)&&void 0!==n?n:[]});c.hass=this.hass,c.className="sticky-cards",this._stickySidebarCard=c;const h=At({type:"vertical-stack",cards:null!==(o=null===(i=t.sidebar)||void 0===i?void 0:i.cards)&&void 0!==o?o:[]});h.hass=this.hass,h.className="scroll-panel",this._sidebarCard=h,this._dashboardStyle=Object.entries(null!==(a=this._config.style)&&void 0!==a?a:{}).map(([t,e])=>`--${t.replace(/_/g,"-")}: ${e} !important;`),this._sidebarStyle=Object.entries(null!==(d=null===(l=this._config.sidebar)||void 0===l?void 0:l.style)&&void 0!==d?d:{}).map(([t,e])=>`--sidebar_${t.replace(/_/g,"-")}: ${e} !important;`)}shouldUpdate(t){return!!this._config&&(t.has("_config")||t.has("hass")||t.has("_sidebarStyle")||t.has("_dashboardStyle")||t.has("_sidebarCard"))}connectedCallback(){super.connectedCallback(),this._lovelace=new Proxy(Ct(),{get:(t,e)=>"editMode"!==e&&t[e]})}updated(t){if(super.updated(t),t.has("hass")){if(this._cards)for(const t of this._cards)this.hass&&(t.hass=this.hass);this._sidebarCard&&(this._sidebarCard.hass=this.hass),this._stickySidebarCard&&(this._stickySidebarCard.hass=this.hass)}}_createCardElement(t){const e=At(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",s=>{s.stopPropagation(),this._rebuildCard(e,t)},{once:!0}),e}_rebuildCard(t,e){var s,r;const n=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(n,t),this._cards=null!==(r=null===(s=this._cards)||void 0===s?void 0:s.map(e=>e===t?n:e))&&void 0!==r?r:[]}toggleSidebar(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".sidebar");e&&(e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show"))}render(){var t,e,s;return V`
      <style>
        :host {
          ${this._dashboardStyle}
          ${this._sidebarStyle}
        }

        @media (max-width: ${null!==(s=null===(e=null===(t=this._config.sidebar)||void 0===t?void 0:t.style)||void 0===e?void 0:e.show_at_min_width)&&void 0!==s?s:"1024px"}) {
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
    `}static get styles(){return tt`
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
    `}};t([Z({attribute:!1})],qt.prototype,"hass",void 0),t([Z()],qt.prototype,"_cards",void 0),t([Z()],qt.prototype,"_sidebarCard",void 0),t([Z()],qt.prototype,"_stickySidebarCard",void 0),t([Z()],qt.prototype,"_sidebarStyle",void 0),t([Z()],qt.prototype,"_dashboardStyle",void 0),t([G()],qt.prototype,"_config",void 0),qt=t([W("ha-dashboard")],qt);export{qt as HADashboard};
