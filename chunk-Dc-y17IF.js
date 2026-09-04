import{$t as b,An as hI,C as FI,Dn as gI,En as g,Ft as Xm,Gt as Zv,In as iw,Ir as vh,It as Xr,K as Mh,Kt as _E,Lr as vr,Mt as XL,Nn as ih,Ot as WL,Qt as au,R as Jp,Rn as ji,Rr as vw,S as F1,Sn as fh,St as UL,T as GI,Un as lC,Vt as Yp,Wn as ld,X as O,Xn as me$1,Xt as ah,Yn as mC,Z as OE,Zn as nh,b as Ed,cr as pe$1,ct as Qi,en as bf,er as nw,fr as qL,g as DI,hr as qw,it as QE,jr as uu,kt as Ww,ln as cu,mr as qp,n as $L,tr as oh,un as dC,v as Dh,wr as th,xn as fI,xr as st,yn as eh,z as KE}from"./chunk-BJUcq1-u.js";import{E as S,F as Yi,G as gn,J as ht,M as Vs,Q as ji$1,U as en,V as cn,X as is,Y as ir,Z as je$1,_ as Gs,b as It,ct as se$1,ft as un,g as Gn,j as Vn,k as U,nt as nn,ot as qi,pt as vi,tt as mt,v as Gt,w as Qi$1,z as an}from"./main-M7WPMAZU.js";var St=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=` `+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.trim().split(` `);for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(` `);for(let i=0;i<n.length;i++)t.className+=` `+n[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp(`(^|\\b)`+e.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp(`(^| )`+e+`( |$)`,`gi`).test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,n=0;for(let i=0;i<e.length;i++){if(e[i]==t)return n;e[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,e){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(let r=0;r<n.length;r++){if(n[r]==t)return i;n[r].attributes&&n[r].attributes[e]&&n[r].nodeType==1&&i++}return-1}static appendOverlay(t,e,n=`self`){n!==`self`&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,n=`self`,i=!0){t&&e&&(i&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),n===`self`?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,n=!0){let i=W=>{if(W)return getComputedStyle(W).getPropertyValue(`position`)===`relative`?W:i(W.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=e.offsetHeight,l=e.getBoundingClientRect(),y=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),g=this.getViewport(),h=i(t)?.getBoundingClientRect()||{top:-1*y,left:-1*c},k,L,tt=`top`;l.top+a+r.height>g.height?(k=l.top-h.top-r.height,tt=`bottom`,l.top+k<0&&(k=-1*l.top)):(k=a+l.top-h.top,tt=`top`);let Et=l.left+r.width-g.width,ye=l.left-h.left;if(r.width>g.width?L=(l.left-h.left)*-1:Et>0?L=ye-Et:L=l.left-h.left,t.style.top=k+`px`,t.style.left=L+`px`,t.style.transformOrigin=tt,n){let W=je$1(/-anchor-gutter$/)?.value;t.style.marginTop=tt===`bottom`?`calc(${W??`2px`} * -1)`:W??``}}static absolutePosition(t,e,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,a=i.width,l=e.offsetHeight,y=e.offsetWidth,c=e.getBoundingClientRect(),g=this.getWindowScrollTop(),x=this.getWindowScrollLeft(),h=this.getViewport(),k,L;c.top+l+r>h.height?(k=c.top+g-r,t.style.transformOrigin=`bottom`,k<0&&(k=g)):(k=l+c.top+g,t.style.transformOrigin=`top`),c.left+a>h.width?L=Math.max(0,c.left+x+y-a):L=c.left+x,t.style.top=k+`px`,t.style.left=L+`px`,n&&(t.style.marginTop=origin===`bottom`?`calc(var(--p-anchor-gutter) * -1)`:`calc(var(--p-anchor-gutter))`)}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,r=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue(`overflow`))||i.test(l.getPropertyValue(`overflowX`))||i.test(l.getPropertyValue(`overflowY`))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let y=l.split(`,`);for(let c of y){let g=this.findSingle(a,c);g&&r(g)&&e.push(g)}}a.nodeType!==9&&r(a)&&e.push(a)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetHeight;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementOuterWidth(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetWidth;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementDimensions(t){let e={};return t.style.visibility=`hidden`,t.style.display=`block`,e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display=`none`,t.style.visibility=`visible`,e}static scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue(`borderTopWidth`),i=n?parseFloat(n):0,r=getComputedStyle(t).getPropertyValue(`paddingTop`),a=r?parseFloat(r):0,l=t.getBoundingClientRect(),c=e.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,g=t.scrollTop,x=t.clientHeight,h=this.getOuterHeight(e);c<0?t.scrollTop=g+c:c+h>x&&(t.scrollTop=g+c-x+h)}static fadeIn(t,e){t.style.opacity=0;let n=+new Date,i=0,r=function(){i=+t.style.opacity.replace(`,`,`.`)+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,e){let n=1,i=50,a=i/e,l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){let n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1}).call(t,e)}static getOuterWidth(t,e){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),e}static getOuterHeight(t,e){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}static getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName(`body`)[0];return{width:t.innerWidth||n.clientWidth||i.clientWidth,height:t.innerHeight||n.clientHeight||i.clientHeight}}static getOffset(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let n=t.parentNode;if(!n)throw`Can't replace element`;return n.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){let t=window.navigator.userAgent;return t.indexOf(`MSIE `)>0||t.indexOf(`Trident/`)>0||t.indexOf(`Edge/`)>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw`Cannot append `+e+` to `+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw`Cannot remove `+t+` from `+e}static removeElement(t){`remove`in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement==`object`?t instanceof HTMLElement:t&&typeof t==`object`&&t!==null&&t.nodeType===1&&typeof t.nodeName==`string`}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement(`div`);e.className=`p-scrollbar-measure`,document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement(`div`);t.className=`p-scrollbar-measure`,document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,n){t[e].apply(t,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(t){}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ /]([\w.]+)/.exec(t)||/(webkit)[ /]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ /]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf(`compatible`)<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||``,version:e[2]||`0`}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t==`number`&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<`u`&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=``){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=``){let n=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let r of n){let a=getComputedStyle(r);this.isVisible(r)&&a.display!=`none`&&a.visibility!=`hidden`&&i.push(r)}return i}static getFocusableElement(t,e=``){let n=this.findSingle(t,this.getFocusableSelectorString(e));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!=`none`&&i.visibility!=`hidden`)return n}return null}static getFirstFocusableElement(t,e=``){let n=this.getFocusableElements(t,e);return n.length>0?n[0]:null}static getLastFocusableElement(t,e){let n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,e=!1){let n=o.getFocusableElements(t),i=0;if(n&&n.length>0){let r=n.indexOf(n[0].ownerDocument.activeElement);e?r==-1||r===0?i=n.length-1:i=r-1:r!=-1&&r!==n.length-1&&(i=r+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case`document`:return document;case`window`:return window;case`@next`:return e?.nextElementSibling;case`@prev`:return e?.previousElementSibling;case`@parent`:return e?.parentElement;case`@grandparent`:return e?.parentElement?.parentElement;default:{let n=typeof t;if(n===`string`)return document.querySelector(t);if(n===`object`&&Object.prototype.hasOwnProperty.call(t,`nativeElement`))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}}static isClient(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let n=t.getAttribute(e);return isNaN(n)?n===`true`||n===`false`?n===`true`:n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t=`p-overflow-hidden`){document.body.style.setProperty(`--scrollbar-width`,this.calculateBodyScrollbarWidth()+`px`),this.addClass(document.body,t)}static unblockBodyScroll(t=`p-overflow-hidden`){document.body.style.removeProperty(`--scrollbar-width`),this.removeClass(document.body,t)}static createElement(t,e={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...n),i}}static setAttribute(t,e=``,n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}static setAttributes(t,e={}){if(this.isElement(t)){let n=(i,r)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((l,y)=>{if(y!=null){let c=typeof y;if(c===`string`||c===`number`)l.push(y);else if(c===`object`){let g=Array.isArray(y)?n(i,y):Object.entries(y).map(([x,h])=>i===`style`&&(h||h===0)?`${x.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${h}`:h?x:void 0);l=g.length?l.concat(g.filter(x=>!!x)):l}}return l},a)};Object.entries(e).forEach(([i,r])=>{if(r!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):i===`pBind`?this.setAttributes(t,r):(r=i===`class`?[...new Set(n(`class`,r))].join(` `).trim():i===`style`?n(`style`,r).join(`;`).trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,e=``){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})();function Xe(){qi({variableName:is(`scrollbar.width`).name})}function Ye(){Yi({variableName:is(`scrollbar.width`).name})}var Yt=class{element;listener;scrollableParents;constructor(s,t=()=>{}){this.element=s,this.listener=t}bindScrollListener(){this.scrollableParents=St.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener(`scroll`,this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener(`scroll`,this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Jt=(()=>{class o extends Gt{autofocus=UL(!1,{alias:`pAutoFocus`});focused=!1;platformId=g(Xm);document=g(pe$1);host=g(st);onAfterContentChecked(){this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){F1(this.platformId)&&this.autofocus()&&setTimeout(()=>{let t=St.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵdir=Xr({type:o,selectors:[[``,`pAutoFocus`,``]],hostVars:1,hostBindings:function(e,n){e&2&&Jp(`autofocus`,n.autofocus()?`true`:null)},inputs:{autofocus:[1,`pAutoFocus`,`autofocus`]},features:[qp]})}return o})();var ve=`
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }


    /* For ngx-prime (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;var we={root:({instance:o})=>{let s=typeof o.value==`function`?o.value():o.value,t=typeof o.size==`function`?o.size():o.size,e=typeof o.badgeSize==`function`?o.badgeSize():o.badgeSize,n=typeof o.severity==`function`?o.severity():o.severity;return[`p-badge p-component`,{"p-badge-circle":S(s)&&String(s).length===1,"p-badge-dot":se$1(s),"p-badge-sm":t===`small`||e===`small`,"p-badge-lg":t===`large`||e===`large`,"p-badge-xl":t===`xlarge`||e===`xlarge`,"p-badge-info":n===`info`,"p-badge-success":n===`success`,"p-badge-warn":n===`warn`,"p-badge-danger":n===`danger`,"p-badge-secondary":n===`secondary`,"p-badge-contrast":n===`contrast`}]}};var te=(()=>{class o extends U{name=`badge`;style=ve;classes=we;static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵprov=O({token:o,factory:o.ɵfac})}return o})();var ee=new b(`BADGE_INSTANCE`);var Bt=(()=>{class o extends Gt{componentName=`Badge`;$pcBadge=g(ee,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=UL();badgeSize=UL();size=UL();severity=UL();value=UL();badgeDisabled=UL(!1,{transform:Ww});ariaLabel=UL();ariaLabelledBy=UL();_componentStyle=g(te);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵcmp=_E({type:o,selectors:[[`p-badge`]],hostVars:7,hostBindings:function(e,n){e&2&&(Jp(`data-p`,n.dataP)(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy()),FI(n.cn(n.cx(`root`),n.styleClass())),vh(`display`,n.badgeDisabled()?`none`:null))},inputs:{styleClass:[1,`styleClass`],badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},features:[nw([te,{provide:ee,useExisting:o},{provide:ji$1,useExisting:o}]),OE([Vs]),qp],decls:1,vars:1,template:function(e,n){e&1&&GI(0),e&2&&Mh(n.value())},dependencies:[Gn,Gs],encapsulation:2})}return o})();var oe=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Qi({type:o});static ɵinj=vr({imports:[Bt,Gn,Gn]})}return o})();var xe=[`*`];var ke={root:`p-fluid`};var ie=(()=>{class o extends U{name=`fluid`;classes=ke;static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵprov=O({token:o,factory:o.ɵfac})}return o})();var re=new b(`FLUID_INSTANCE`);var Dt=(()=>{class o extends Gt{componentName=`Fluid`;$pcFluid=g(re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=g(ie);static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵcmp=_E({type:o,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(e,n){e&2&&FI(n.cx(`root`))},features:[nw([ie,{provide:re,useExisting:o},{provide:ji$1,useExisting:o}]),OE([Vs]),qp],ngContentSelectors:xe,decls:1,vars:0,template:function(e,n){e&1&&(hI(),gI(0))},encapsulation:2})}return o})();var de=(()=>{class o extends ir{pathId;onInit(){this.pathId=`url(#`+It()+`)`}static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵcmp=_E({type:o,selectors:[[``,`data-p-icon`,`spinner`]],features:[qp],decls:5,vars:2,consts:[[`d`,`M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(e,n){e&1&&(ld(),cu(0,`g`),nh(1,`path`,0),uu(),cu(2,`defs`)(3,`clipPath`,1),nh(4,`rect`,2),uu()()),e&2&&(Jp(`clip-path`,n.pathId),Zv(3),ih(`id`,n.pathId))},encapsulation:2})}return o})();var Se=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For ngx-prime */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Be={root:`p-ink`};var se=(()=>{class o extends U{name=`ripple`;style=Se;classes=Be;static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵprov=O({token:o,factory:o.ɵfac})}return o})();var le=(()=>{class o extends Gt{componentName=`Ripple`;zone=g(me$1);_componentStyle=g(se);animationListener;mouseDownListener;timeout;constructor(){super(),Ed(()=>{F1(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display===`none`)return;if(!this.$unstyled()&&mt(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`),!an(e)&&!un(e)){let a=Math.max(Qi$1(this.el.nativeElement),vi(this.el.nativeElement));e.style.height=a+`px`,e.style.width=a+`px`}let n=cn(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-un(e)/2,r=t.pageY-n.top+this.document.body.scrollLeft-an(e)/2;this.renderer.setStyle(e,`top`,r+`px`),this.renderer.setStyle(e,`left`,i+`px`),!this.$unstyled()&&ht(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&mt(a,`p-ink-active`),a.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className==`string`&&t[e].className.indexOf(`p-ink`)!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&mt(t,`p-ink-active`),t.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&mt(t.currentTarget,`p-ink-active`),t.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let t=this.renderer.createElement(`span`);this.renderer.addClass(t,`p-ink`),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,`data-p-ink`,`true`),this.renderer.setAttribute(t,`data-p-ink-active`,`false`),this.renderer.setAttribute(t,`aria-hidden`,`true`),this.renderer.setAttribute(t,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(t,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,gn(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(e){return new(e||o)};static ɵdir=Xr({type:o,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[nw([se]),qp]})}return o})();var ue=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var De=[`content`];var Ee=[`loadingicon`];var Te=[`icon`];var Ie=[`*`];var me=(o,s)=>({class:o,pt:s});function Ne(o,s){o&1&&oh(0)}function Pe(o,s){if(o&1&&th(0,`span`,5),o&2){let t=fI(3);FI(t.cn(t.cx(`loadingIcon`),`pi-spin`,t.loadingIcon()||t.buttonProps()?.loadingIcon)),eh(`pBind`,t.ptm(`loadingIcon`)),Jp(`aria-hidden`,!0)}}function _e(o,s){if(o&1&&(ld(),th(0,`svg`,6)),o&2){let t=fI(3);FI(t.cn(t.cx(`loadingIcon`),t.cx(`spinnerIcon`))),eh(`pBind`,t.ptm(`loadingIcon`))(`spin`,!0),Jp(`aria-hidden`,!0)}}function Me(o,s){if(o&1&&QE(0,Pe,1,4,`span`,2)(1,_e,1,5,`:svg:svg`,4),o&2){let t=fI(2);KE(t.loadingIcon()||t.buttonProps()?.loadingIcon?0:1)}}function Fe(o,s){}function Le(o,s){o&1&&Yp(0,Fe,0,0,`ng-template`)}function Ae(o,s){if(o&1&&Yp(0,Le,1,0,null,7),o&2){let t=fI(2);eh(`ngTemplateOutlet`,t.loadingIconTemplate()||t._loadingIconTemplate)(`ngTemplateOutletContext`,iw(2,me,t.cx(`loadingIcon`),t.ptm(`loadingIcon`)))}}function ze(o,s){if(o&1&&(QE(0,Me,2,1),QE(1,Ae,1,5)),o&2){let t=fI();KE(!t.loadingIconTemplate()&&!t._loadingIconTemplate?0:-1),Zv(),KE(t.loadingIconTemplate()||t._loadingIconTemplate?1:-1)}}function Oe(o,s){if(o&1&&th(0,`span`,5),o&2){let t=fI(2);FI(t.cn(t.cx(`icon`),t.icon()||t.buttonProps()?.icon)),eh(`pBind`,t.ptm(`icon`)),Jp(`data-p`,t.dataIconP)}}function $e(o,s){}function He(o,s){o&1&&Yp(0,$e,0,0,`ng-template`)}function We(o,s){if(o&1&&Yp(0,He,1,0,null,7),o&2){let t=fI(2);eh(`ngTemplateOutlet`,t.iconTemplate()||t._iconTemplate)(`ngTemplateOutletContext`,iw(2,me,t.cx(`icon`),t.ptm(`icon`)))}}function Ue(o,s){if(o&1&&(QE(0,Oe,1,4,`span`,2),QE(1,We,1,5)),o&2){let t=fI();KE((t.icon()||t.buttonProps()?.icon)&&!t.iconTemplate()&&!t._iconTemplate?0:-1),Zv(),KE(!t.icon()&&(t.iconTemplate()||t._iconTemplate)?1:-1)}}function Ve(o,s){if(o&1&&(ji(0,`span`,5),GI(1),au()),o&2){let t=fI();FI(t.cx(`label`)),eh(`pBind`,t.ptm(`label`)),Jp(`aria-hidden`,(t.icon()||t.buttonProps()?.icon)&&!(t.label()||t.buttonProps()?.label))(`data-p`,t.dataLabelP),Zv(),Mh(t.label()||t.buttonProps()?.label)}}function Re(o,s){if(o&1&&th(0,`p-badge`,3),o&2){let t=fI();eh(`value`,t.badge()||t.buttonProps()?.badge)(`severity`,t.badgeSeverity()||t.buttonProps()?.badgeSeverity)(`pt`,t.ptm(`pcBadge`))(`unstyled`,t.unstyled())}}var je={root:({instance:o})=>[`p-button p-component`,{"p-button-icon-only":o.hasIcon&&!o.label()&&!o.buttonProps()?.label&&!o.badge(),"p-button-vertical":(o.iconPos()===`top`||o.iconPos()===`bottom`)&&o.label(),"p-button-loading":o.loading()||o.buttonProps()?.loading,"p-button-link":o.link()||o.buttonProps()?.link,[`p-button-${o.severity()||o.buttonProps()?.severity}`]:o.severity()||o.buttonProps()?.severity,"p-button-raised":o.raised()||o.buttonProps()?.raised,"p-button-rounded":o.rounded()||o.buttonProps()?.rounded,"p-button-text":o.text()||o.variant()===`text`||o.buttonProps()?.text||o.buttonProps()?.variant===`text`,"p-button-outlined":o.outlined()||o.variant()===`outlined`||o.buttonProps()?.outlined||o.buttonProps()?.variant===`outlined`,"p-button-sm":o.size()===`small`||o.buttonProps()?.size===`small`,"p-button-lg":o.size()===`large`||o.buttonProps()?.size===`large`,"p-button-plain":o.plain()||o.buttonProps()?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:`p-button-loading-icon`,icon:({instance:o})=>[`p-button-icon`,{[`p-button-icon-${o.iconPos()||o.buttonProps()?.iconPos}`]:o.label()||o.buttonProps()?.label,"p-button-icon-left":(o.iconPos()===`left`||o.buttonProps()?.iconPos===`left`)&&o.label()||o.buttonProps()?.label,"p-button-icon-right":(o.iconPos()===`right`||o.buttonProps()?.iconPos===`right`)&&o.label()||o.buttonProps()?.label,"p-button-icon-top":(o.iconPos()===`top`||o.buttonProps()?.iconPos===`top`)&&o.label()||o.buttonProps()?.label,"p-button-icon-bottom":(o.iconPos()===`bottom`||o.buttonProps()?.iconPos===`bottom`)&&o.label()||o.buttonProps()?.label},o.icon(),o.buttonProps()?.icon],spinnerIcon:({instance:o})=>Object.entries(o.cx(`icon`)).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,`p-button-loading-icon`),label:`p-button-label`};var Z=(()=>{class o extends U{name=`button`;style=ue;classes=je;static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(o)))(n||o)}})();static ɵprov=O({token:o,factory:o.ɵfac})}return o})();var ce=new b(`BUTTON_INSTANCE`);var be=new b(`BUTTON_DIRECTIVE_INSTANCE`);var pe=new b(`BUTTON_LABEL_INSTANCE`);var ge=new b(`BUTTON_ICON_INSTANCE`);var H={button:`p-button`,component:`p-component`,iconOnly:`p-button-icon-only`,disabled:`p-disabled`,loading:`p-button-loading`,labelOnly:`p-button-loading-label-only`};var he=(()=>{class o extends Gt{componentName=`ButtonLabel`;ptButtonLabel=UL();pButtonLabelPT=UL();pButtonLabelUnstyled=UL();$pcButtonLabel=g(pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});constructor(){super(),Ed(()=>{let t=this.ptButtonLabel()||this.pButtonLabelPT();t&&this.directivePT.set(t)}),Ed(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(e){return new(e||o)};static ɵdir=Xr({type:o,selectors:[[``,`pButtonLabel`,``]],hostVars:2,hostBindings:function(e,n){e&2&&Dh(`p-button-label`,!n.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,`ptButtonLabel`],pButtonLabelPT:[1,`pButtonLabelPT`],pButtonLabelUnstyled:[1,`pButtonLabelUnstyled`]},features:[nw([Z,{provide:pe,useExisting:o},{provide:ji$1,useExisting:o}]),OE([Vs]),qp]})}return o})();var fe=(()=>{class o extends Gt{componentName=`ButtonIcon`;ptButtonIcon=UL();pButtonIconPT=UL();pButtonUnstyled=UL();$pcButtonIcon=g(ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});constructor(){super(),Ed(()=>{let t=this.ptButtonIcon()||this.pButtonIconPT();t&&this.directivePT.set(t)}),Ed(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(e){return new(e||o)};static ɵdir=Xr({type:o,selectors:[[``,`pButtonIcon`,``]],hostVars:2,hostBindings:function(e,n){e&2&&Dh(`p-button-icon`,!n.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,`ptButtonIcon`],pButtonIconPT:[1,`pButtonIconPT`],pButtonUnstyled:[1,`pButtonUnstyled`]},features:[nw([Z,{provide:ge,useExisting:o},{provide:ji$1,useExisting:o}]),OE([Vs]),qp]})}return o})();var ho=(()=>{class o extends Gt{componentName=`Button`;$pcButtonDirective=g(be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});_componentStyle=g(Z);ptButtonDirective=UL();pButtonPT=UL();pButtonUnstyled=UL();hostName=UL(``);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}constructor(){super(),Ed(()=>{let t=this.ptButtonDirective()||this.pButtonPT();t&&this.directivePT.set(t)}),Ed(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),Ed(()=>{let t=this.$unstyled();this.initialized&&t&&this.setStyleClass()}),Ed(()=>{this._label=this.label(),this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}),Ed(()=>{this._icon=this.icon(),this.initialized&&(this.updateIcon(),this.setStyleClass())}),Ed(()=>{this._loading=this.loading(),this.initialized&&(this.updateIcon(),this.setStyleClass()),this._loading?this.renderer.setAttribute(this.htmlElement,`aria-busy`,`true`):this.renderer.removeAttribute(this.htmlElement,`aria-busy`)}),Ed(()=>{this._severity=this.severity(),this.initialized&&this.setStyleClass()}),Ed(()=>{let t=this.buttonProps();this._buttonProps=t,t&&typeof t==`object`&&Object.entries(t).forEach(([e,n])=>this[`_${e}`]!==n&&(this[`_${e}`]=n))})}text=UL(!1,{transform:Ww});plain=UL(!1,{transform:Ww});raised=UL(!1,{transform:Ww});size=UL();outlined=UL(!1,{transform:Ww});rounded=UL(!1,{transform:Ww});iconPos=UL(`left`);loadingIcon=UL();fluid=UL(void 0,{transform:Ww});iconSignal=WL(fe);labelSignal=WL(he);isIconOnly=vw(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(H);pcFluid=g(Dt,{optional:!0,host:!0,skipSelf:!0});isTextButton=vw(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text()));label=UL();icon=UL();loading=UL(!1);buttonProps=UL();severity=UL();spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&ht(this.htmlElement,this.getStyleClass().join(` `)),F1(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let t=[H.button,H.component];this._icon&&!this._label&&se$1(this.htmlElement.textContent)&&t.push(H.iconOnly),this._loading&&(t.push(H.disabled,H.loading),!this._icon&&this._label&&t.push(H.labelOnly),this._icon&&!this._label&&!se$1(this.htmlElement.textContent)&&t.push(H.iconOnly)),this.text()&&t.push(`p-button-text`),this._severity&&t.push(`p-button-${this._severity}`),this.plain()&&t.push(`p-button-plain`),this.raised()&&t.push(`p-button-raised`);let e=this.size();return e&&t.push(`p-button-${e}`),this.outlined()&&t.push(`p-button-outlined`),this.rounded()&&t.push(`p-button-rounded`),e===`small`&&t.push(`p-button-sm`),e===`large`&&t.push(`p-button-lg`),this.hasFluid&&t.push(`p-button-fluid`),this.$unstyled()?[]:t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=[`success`,`info`,`warn`,`danger`,`help`,`primary`,`secondary`,`contrast`],e=this.htmlElement.classList.value.split(` `).find(n=>t.some(i=>n===`p-button-${i}`));e&&this.htmlElement.classList.remove(e)}createLabel(){if(!nn(this.htmlElement,`[data-pc-section="buttonlabel"]`)&&this._label){let e=en(`span`,{class:this.cx(`label`),"p-bind":this.ptm(`buttonlabel`),"aria-hidden":this._icon&&!this._label?`true`:null});e.appendChild(this.document.createTextNode(this._label)),this.htmlElement.appendChild(e)}}createIcon(){if(!nn(this.htmlElement,`[data-pc-section="buttonicon"]`)&&(this._icon||this._loading)){let e=this._label&&!this.$unstyled()?`p-button-icon-`+this.iconPos():null,n=!this.$unstyled()&&this.getIconClass(),i=en(`span`,{class:this.cn(this.cx(`icon`),e,n),"aria-hidden":`true`,"p-bind":this.ptm(`buttonicon`)});!this.loadingIcon()&&this._loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=nn(this.htmlElement,`[data-pc-section="buttonlabel"]`);if(!this._label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this._label:this.createLabel()}updateIcon(){let t=nn(this.htmlElement,`[data-pc-section="buttonicon"]`),e=nn(this.htmlElement,`[data-pc-section="buttonlabel"]`);if(this._loading&&!this.loadingIcon()&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=``),t&&!this.$unstyled()){let n=this.iconPos();n?t.className=`p-button-icon `+(e?`p-button-icon-`+n:``)+` `+this.getIconClass():t.className=`p-button-icon `+this.getIconClass()}else this.createIcon()}getIconClass(){let t=this.loadingIcon();return this._loading?`p-button-loading-icon `+(t||`p-icon`):this._icon||`p-hidden`}onDestroy(){this.initialized=!1}static ɵfac=function(e){return new(e||o)};static ɵdir=Xr({type:o,selectors:[[``,`pButton`,``]],contentQueries:function(e,n,i){e&1&&fh(i,n.iconSignal,fe,5)(i,n.labelSignal,he,5),e&2&&DI(2)},hostVars:4,hostBindings:function(e,n){e&2&&Dh(`p-button-icon-only`,!n.$unstyled()&&n.isIconOnly())(`p-button-text`,!n.$unstyled()&&n.isTextButton())},inputs:{ptButtonDirective:[1,`ptButtonDirective`],pButtonPT:[1,`pButtonPT`],pButtonUnstyled:[1,`pButtonUnstyled`],hostName:[1,`hostName`],text:[1,`text`],plain:[1,`plain`],raised:[1,`raised`],size:[1,`size`],outlined:[1,`outlined`],rounded:[1,`rounded`],iconPos:[1,`iconPos`],loadingIcon:[1,`loadingIcon`],fluid:[1,`fluid`],label:[1,`label`],icon:[1,`icon`],loading:[1,`loading`],buttonProps:[1,`buttonProps`],severity:[1,`severity`]},features:[nw([Z,{provide:be,useExisting:o},{provide:ji$1,useExisting:o}]),OE([Vs]),qp]})}return o})();var qe=(()=>{class o extends Gt{componentName=`Button`;hostName=UL(``);$pcButton=g(ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});_componentStyle=g(Z);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}constructor(){super(),XL()&&console.warn("`<p-button>` is deprecated and will be removed in a future major version. Use a plain `<button pButton>` (or `<a pButton>`) with the `pButton` styling directive instead.")}type=UL(`button`);badge=UL();disabled=UL(void 0,{transform:Ww});raised=UL(!1,{transform:Ww});rounded=UL(!1,{transform:Ww});text=UL(!1,{transform:Ww});plain=UL(!1,{transform:Ww});outlined=UL(!1,{transform:Ww});link=UL(!1,{transform:Ww});tabindex=UL(void 0,{transform:qw});size=UL();variant=UL();style=UL();styleClass=UL();badgeClass=UL();badgeSeverity=UL(`secondary`);ariaLabel=UL();autofocus=UL(void 0,{transform:Ww});iconPos=UL(`left`);icon=UL();label=UL();loading=UL(!1,{transform:Ww});loadingIcon=UL();severity=UL();buttonProps=UL();fluid=UL(void 0,{transform:Ww});onClick=$L();onFocus=$L();onBlur=$L();contentTemplate=WL(`content`);loadingIconTemplate=WL(`loadingicon`);iconTemplate=WL(`icon`);templates=qL(Vn);pcFluid=g(Dt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon()||this.buttonProps()?.icon||this.iconTemplate()||this._iconTemplate||this.loadingIcon()||this.loadingIconTemplate()||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates()?.forEach(t=>{switch(t.getType()){case`content`:this._contentTemplate=t.template;break;case`icon`:this._iconTemplate=t.template;break;case`loadingicon`:this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){let t=this.iconPos();return this.cn({[this.size()]:this.size(),"icon-only":this.hasIcon&&!this.label()&&!this.badge(),loading:this.loading(),fluid:this.hasFluid,rounded:this.rounded(),raised:this.raised(),outlined:this.outlined()||this.variant()===`outlined`,text:this.text()||this.variant()===`text`,link:this.link(),vertical:(t===`top`||t===`bottom`)&&this.label()})}get dataIconP(){return this.cn({[this.iconPos()]:this.iconPos(),[this.size()]:this.size()})}get dataLabelP(){return this.cn({[this.size()]:this.size(),"icon-only":this.hasIcon&&!this.label()&&!this.badge()})}static ɵfac=function(e){return new(e||o)};static ɵcmp=_E({type:o,selectors:[[`p-button`]],contentQueries:function(e,n,i){e&1&&fh(i,n.contentTemplate,De,5)(i,n.loadingIconTemplate,Ee,5)(i,n.iconTemplate,Te,5)(i,n.templates,Vn,4),e&2&&DI(4)},inputs:{hostName:[1,`hostName`],type:[1,`type`],badge:[1,`badge`],disabled:[1,`disabled`],raised:[1,`raised`],rounded:[1,`rounded`],text:[1,`text`],plain:[1,`plain`],outlined:[1,`outlined`],link:[1,`link`],tabindex:[1,`tabindex`],size:[1,`size`],variant:[1,`variant`],style:[1,`style`],styleClass:[1,`styleClass`],badgeClass:[1,`badgeClass`],badgeSeverity:[1,`badgeSeverity`],ariaLabel:[1,`ariaLabel`],autofocus:[1,`autofocus`],iconPos:[1,`iconPos`],icon:[1,`icon`],label:[1,`label`],loading:[1,`loading`],loadingIcon:[1,`loadingIcon`],severity:[1,`severity`],buttonProps:[1,`buttonProps`],fluid:[1,`fluid`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[nw([Z,{provide:ce,useExisting:o},{provide:ji$1,useExisting:o}]),OE([Vs]),qp],ngContentSelectors:Ie,decls:7,vars:17,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`ngStyle`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[3,`class`,`pBind`],[3,`value`,`severity`,`pt`,`unstyled`],[`data-p-icon`,`spinner`,3,`class`,`pBind`,`spin`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`pBind`,`spin`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(e,n){e&1&&(hI(),ji(0,`button`,0),ah(`click`,function(r){return n.onClick.emit(r)})(`focus`,function(r){return n.onFocus.emit(r)})(`blur`,function(r){return n.onBlur.emit(r)}),gI(1),Yp(2,Ne,1,0,`ng-container`,1),QE(3,ze,2,2)(4,Ue,2,2),QE(5,Ve,2,6,`span`,2),QE(6,Re,1,4,`p-badge`,3),au()),e&2&&(FI(n.cn(n.cx(`root`),n.styleClass(),n.buttonProps()?.styleClass)),eh(`ngStyle`,n.style()||n.buttonProps()?.style)(`disabled`,n.disabled()||n.loading()||n.buttonProps()?.disabled)(`pAutoFocus`,n.autofocus()||n.buttonProps()?.autofocus)(`pBind`,n.ptm(`root`)),Jp(`type`,n.type()||n.buttonProps()?.type)(`aria-label`,n.ariaLabel()||n.buttonProps()?.ariaLabel)(`tabindex`,n.tabindex()||n.buttonProps()?.tabindex)(`aria-busy`,n.loading()||n.buttonProps()?.loading||null)(`data-p`,n.dataP)(`data-p-disabled`,n.disabled()||n.loading()||n.buttonProps()?.disabled)(`data-p-severity`,n.severity()||n.buttonProps()?.severity),Zv(2),eh(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Zv(),KE(n.loading()||n.buttonProps()?.loading?3:4),Zv(2),KE(!n.contentTemplate()&&!n._contentTemplate&&(n.label()||n.buttonProps()?.label)?5:-1),Zv(),KE(!n.contentTemplate()&&!n._contentTemplate&&(n.badge()||n.buttonProps()?.badge)?6:-1))},dependencies:[mC,dC,lC,le,Jt,de,oe,Bt,Gn,Vs],encapsulation:2})}return o})();var fo=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Qi({type:o});static ɵinj=vr({imports:[mC,qe,Gn,Gn]})}return o})();export{Ye as a,fo as c,qe as d,Xe as i,ho as l,Jt as n,Yt as o,St as r,de as s,Dt as t,le as u};