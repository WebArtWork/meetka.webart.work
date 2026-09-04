import{n as s,t as r}from"./chunk-Btz99zWn.js";import{$t as b,C as FI,Cr as tI,E as GL,En as g,G as LD,Gn as lh,Gr as yI,Gt as Zv,In as iw,Jt as aI,K as Mh,Kt as _E,L as Jl,Ln as jD,Lr as vr,Mt as XL,Or as uC,Ot as WL,Pr as vI,Pt as Xl,Qt as au,R as Jp,Rn as ji,Rr as vw,Sn as fh,St as UL,T as GI,Un as lC,Vt as Yp,Wn as ld,X as O,Xt as ah,Yn as mC,Yt as ae,Z as OE,Zn as nh,b as Ed,ct as Qi,dr as pw,en as bf,er as nw,fr as qL,g as DI,hr as qw,it as QE,k as Go,kt as Ww,lr as ph,mr as qp,n as $L,or as ow,tr as oh,un as dC,vn as eI,wr as th,xn as fI,yn as eh,z as KE}from"./chunk-BJUcq1-u.js";import{_ as sn$1,a as Rt$1,i as Ne,s as V,u as dn$1}from"./chunk-eMgFgR8X.js";import{M as Vs,Q as ji$1,R as ae$1,Y as ir,_ as Gs,g as Gn,it as pn$1,j as Vn,k as U,l as f,mt as xe$1}from"./main-M7WPMAZU.js";import{n as Jt$1,u as le}from"./chunk-Dc-y17IF.js";import{n as et}from"./chunk-CPBPA_tY.js";import{t as He}from"./chunk-CGSrlnLh.js";import{t as D}from"./chunk-BiF-qEcA.js";var Ze=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var ft=[`icon`];var ht=[`content`];var it=i=>({$implicit:i});function _t(i,d){i&1&&oh(0)}function vt(i,d){if(i&1&&th(0,`span`,0),i&2){let e=fI(3);FI(e.cn(e.cx(`icon`),e.checked?e.onIcon():e.offIcon(),e.iconPos()===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),eh(`pBind`,e.ptm(`icon`))}}function yt(i,d){if(i&1&&QE(0,vt,1,3,`span`,2),i&2){let e=fI(2);KE(e.onIcon()||e.offIcon()?0:-1)}}function Ct(i,d){i&1&&oh(0)}function xt(i,d){if(i&1&&Yp(0,Ct,1,0,`ng-container`,1),i&2){let e=fI(2);eh(`ngTemplateOutlet`,e.iconTemplate()||e._iconTemplate)(`ngTemplateOutletContext`,ow(2,it,e.checked))}}function Dt(i,d){if(i&1&&(QE(0,yt,1,1)(1,xt,1,4,`ng-container`),ji(2,`span`,0),GI(3),au()),i&2){let e=fI();KE(e.iconTemplate()?1:0),Zv(2),FI(e.cx(`label`)),eh(`pBind`,e.ptm(`label`)),Zv(),Mh(e.checked?e.hasOnLabel?e.onLabel():e.nbsp:e.hasOffLabel?e.offLabel():e.nbsp)}}var Bt=`
    ${Ze}

    /* For ngx-prime (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var It=i=>typeof i.checked==`function`?i.checked():i.checked;var wt={root:({instance:i})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":It(i),"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-togglebutton-sm p-inputfield-sm":i.size()===`small`,"p-togglebutton-lg p-inputfield-lg":i.size()===`large`,"p-togglebutton-fluid":i.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var Ce=(()=>{class i extends U{name=`togglebutton`;style=Bt;classes=wt;static ɵfac=(()=>{let e;return function(t){return(e||(e=bf(i)))(t||i)}})();static ɵprov=O({token:i,factory:i.ɵfac})}return i})();var Ye=new b(`TOGGLEBUTTON_INSTANCE`);var Nt={provide:Ne,useExisting:Go(()=>xe),multi:!0};var xe=(()=>{class i extends He{componentName=`ToggleButton`;nbsp=`\xA0`;$pcToggleButton=g(Ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),XL()&&console.warn("`<p-togglebutton>` is deprecated and will be removed in a future major version. Use a native `<button pToggleButton>` instead.")}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=UL(`Yes`);offLabel=UL(`No`);onIcon=UL();offIcon=UL();ariaLabel=UL();ariaLabelledBy=UL();styleClass=UL();inputId=UL();tabindex=UL(0,{transform:qw});iconPos=UL(`left`);autofocus=UL(void 0,{transform:Ww});size=UL();allowEmpty=UL();fluid=UL(void 0,{transform:Ww});onChange=$L();iconTemplate=WL(`icon`,{descendants:!1});contentTemplate=WL(`content`,{descendants:!1});templates=qL(Vn);checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=g(Ce);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel()&&this.onLabel().length>0}get hasOffLabel(){return this.offLabel()&&this.offLabel().length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size()]:this.size()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=_E({type:i,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(n,t,o){n&1&&fh(o,t.iconTemplate,ft,4)(o,t.contentTemplate,ht,4)(o,t.templates,Vn,4),n&2&&DI(3)},hostVars:13,hostBindings:function(n,t){n&1&&ah(`keydown`,function(a){return t.onKeyDown(a)})(`click`,function(a){return t.toggle(a)}),n&2&&(Jp(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel())(`aria-pressed`,t.checked?`true`:`false`)(`aria-disabled`,t.$disabled()||null)(`aria-invalid`,t.invalid()||null)(`role`,`button`)(`tabindex`,t.tabindex()!==void 0?t.tabindex():t.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,t.active)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),FI(t.cn(t.cx(`root`),t.styleClass())))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],styleClass:[1,`styleClass`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[nw([Nt,Ce,{provide:Ye,useExisting:i},{provide:ji$1,useExisting:i}]),OE([le,Vs]),qp],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(n,t){n&1&&(ji(0,`span`,0),Yp(1,_t,1,0,`ng-container`,1),QE(2,Dt,4,5),au()),n&2&&(FI(t.cx(`content`)),eh(`pBind`,t.ptm(`content`)),Jp(`data-p`,t.dataP),Zv(),eh(`ngTemplateOutlet`,t.contentTemplate()||t._contentTemplate)(`ngTemplateOutletContext`,ow(7,it,t.checked)),Zv(),KE(t.contentTemplate()?-1:2))},dependencies:[mC,dC,Gn,Gs,Vs],encapsulation:2})}return i})();var ot=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Tt=[`item`];var Et=(i,d)=>({$implicit:i,index:d});function kt(i,d){return this.getOptionLabel(d)}function St(i,d){i&1&&oh(0)}function Vt(i,d){if(i&1&&Yp(0,St,1,0,`ng-container`,3),i&2){let e=fI(2),n=e.$implicit,t=e.$index,o=fI();eh(`ngTemplateOutlet`,o.itemTemplate||o._itemTemplate)(`ngTemplateOutletContext`,iw(2,Et,n,t))}}function Lt(i,d){i&1&&Yp(0,Vt,1,5,`ng-template`,null,0,pw)}function Ft(i,d){if(i&1){let e=aI();ji(0,`p-togglebutton`,2),ah(`onChange`,function(t){let o=Xl(e),a=o.$implicit,l=o.$index;return Jl(fI().onOptionSelect(t,a,l))}),QE(1,Lt,2,0),au(),LD()}if(i&2){let e=d.$implicit,n=fI();eh(`autofocus`,n.autofocus())(`styleClass`,n.styleClass())(`ngModel`,n.isSelected(e))(`onLabel`,n.getOptionLabel(e))(`offLabel`,n.getOptionLabel(e))(`disabled`,n.$disabled()||n.isOptionDisabled(e))(`allowEmpty`,n.getAllowEmpty())(`size`,n.size())(`fluid`,n.fluid())(`pt`,n.ptm(`pcToggleButton`))(`unstyled`,n.unstyled()),jD(),Zv(),KE(n.itemTemplate||n._itemTemplate?1:-1)}}var At=`
    ${ot}

    /* For ngx-prime */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var Ot={root:({instance:i})=>[`p-selectbutton p-component`,{"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-selectbutton-fluid":i.fluid()}]};var at=(()=>{class i extends U{name=`selectbutton`;style=At;classes=Ot;static ɵfac=(()=>{let e;return function(t){return(e||(e=bf(i)))(t||i)}})();static ɵprov=O({token:i,factory:i.ɵfac})}return i})();var rt=new b(`SELECTBUTTON_INSTANCE`);var Rt={provide:Ne,useExisting:Go(()=>lt),multi:!0};var lt=(()=>{class i extends He{componentName=`SelectButton`;constructor(){super(),XL()&&console.warn("`<p-selectbutton>` is deprecated and will be removed in a future major version. Use the native `pSelectButton`/`pSelectButtonOption` directives instead.")}options=UL();optionLabel=UL();optionValue=UL();optionDisabled=UL();unselectable=UL(!1,{transform:Ww});tabindex=UL(0,{transform:qw});multiple=UL(void 0,{transform:Ww});allowEmpty=UL(!0,{transform:Ww});styleClass=UL();ariaLabelledBy=UL();ariaLabel=UL();dataKey=UL();autofocus=UL(void 0,{transform:Ww});size=UL();fluid=UL(void 0,{transform:Ww});onOptionClick=$L();onChange=$L();itemTemplate;_itemTemplate;role=vw(()=>this.multiple()?`group`:`radiogroup`);get equalityKey(){return this.optionValue()?null:this.dataKey()}value;focusedIndex=0;_componentStyle=g(at);$pcSelectButton=g(rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.unselectable()?!1:this.multiple()?this.allowEmpty()||this.value?.length!==1:this.allowEmpty()}getOptionLabel(e){let n=this.optionLabel();return n?xe$1(e,n):e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?xe$1(e,n):this.optionLabel()||e.value===void 0?e:e.value}isOptionDisabled(e){let n=this.optionDisabled();return n?xe$1(e,n):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,t){if(this.$disabled()||this.isOptionDisabled(n))return;let o=this.isSelected(n);if(o&&this.unselectable())return;let a=this.getOptionValue(n),l;if(this.multiple())o?l=this.value.filter(u=>!ae$1(u,a,this.equalityKey||void 0)):l=this.value?[...this.value,a]:[a];else{if(o&&!this.allowEmpty())return;l=o?null:a}this.focusedIndex=t,this.value=l,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:t})}changeTabIndexes(e,n){let t,o;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute(`tabindex`)===`0`&&(t={elem:this.el.nativeElement.children[a],index:a});n===`prev`?t.index===0?o=this.el.nativeElement.children.length-1:o=t.index-1:t.index===this.el.nativeElement.children.length-1?o=0:o=t.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!ae$1(n,this.getOptionValue(e),this.dataKey()))}isSelected(e){let n=!1,t=this.getOptionValue(e);if(this.multiple()){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(ae$1(o,t,this.dataKey())){n=!0;break}}}else n=ae$1(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates=qL(Vn);onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`item`&&(this._itemTemplate=e.template)})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=_E({type:i,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(n,t,o){if(n&1&&(fh(o,t.templates,Vn,4),lh(o,Tt,4)),n&2){DI();let a;yI(a=vI())&&(t.itemTemplate=a.first)}},hostVars:6,hostBindings:function(n,t){n&2&&(Jp(`role`,t.role())(`aria-label`,t.ariaLabel()||null)(`aria-labelledby`,t.ariaLabelledBy()||null)(`data-p`,t.dataP),FI(t.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[nw([Rt,at,{provide:rt,useExisting:i},{provide:ji$1,useExisting:i}]),OE([Vs]),qp],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,t){n&1&&eI(0,Ft,2,12,`p-togglebutton`,1,kt,!0),n&2&&tI(t.options())},dependencies:[xe,dn$1,sn$1,Rt$1,mC,dC,Gn,Gs],encapsulation:2})}return i})();var ai=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Qi({type:i});static ɵinj=vr({imports:[lt,Gn,Gn]})}return i})();var ut=(()=>{class i extends ir{static ɵfac=(()=>{let e;return function(t){return(e||(e=bf(i)))(t||i)}})();static ɵcmp=_E({type:i,selectors:[[``,`data-p-icon`,`angle-down`]],features:[qp],decls:1,vars:0,consts:[[`d`,`M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(ld(),nh(0,`path`,0))},encapsulation:2})}return i})();var st=(()=>{class i extends ir{static ɵfac=(()=>{let e;return function(t){return(e||(e=bf(i)))(t||i)}})();static ɵcmp=_E({type:i,selectors:[[``,`data-p-icon`,`angle-up`]],features:[qp],decls:1,vars:0,consts:[[`d`,`M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(ld(),nh(0,`path`,0))},encapsulation:2})}return i})();var dt=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var $t=[`incrementbuttonicon`];var Ut=[`decrementbuttonicon`];var zt=[`clearicon`];var Pt=[`input`];function Kt(i,d){if(i&1){let e=aI();ld(),ji(0,`svg`,5),ah(`click`,function(){Xl(e);return Jl(fI(2).clear())}),au()}if(i&2){let e=fI(2);FI(e.cx(`clearIcon`)),eh(`pBind`,e.ptm(`clearIcon`))}}function Ht(i,d){}function Gt(i,d){i&1&&Yp(0,Ht,0,0,`ng-template`)}function jt(i,d){if(i&1){let e=aI();ji(0,`span`,6),ah(`click`,function(){Xl(e);return Jl(fI(2).clear())}),Yp(1,Gt,1,0,null,7),au()}if(i&2){let e=fI(2);FI(e.cx(`clearIcon`)),eh(`pBind`,e.ptm(`clearIcon`)),Zv(),eh(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function qt(i,d){if(i&1&&(QE(0,Kt,1,3,`:svg:svg`,4),QE(1,jt,2,4,`span`,2)),i&2){let e=fI();KE(!e.clearIconTemplate&&!e._clearIconTemplate?0:-1),Zv(),KE(e.clearIconTemplate||e._clearIconTemplate?1:-1)}}function Qt(i,d){if(i&1&&th(0,`span`,10),i&2){let e=fI(2);eh(`pBind`,e.ptm(`incrementButtonIcon`))(`ngClass`,e.incrementButtonIcon())}}function Wt(i,d){if(i&1&&(ld(),th(0,`svg`,11)),i&2)eh(`pBind`,fI(3).ptm(`incrementButtonIcon`))}function Zt(i,d){}function Yt(i,d){i&1&&Yp(0,Zt,0,0,`ng-template`)}function Jt(i,d){if(i&1&&(QE(0,Wt,1,1,`:svg:svg`,11),Yp(1,Yt,1,0,null,7)),i&2){let e=fI(2);KE(!e.incrementButtonIconTemplate()&&!e._incrementButtonIconTemplate?0:-1),Zv(),eh(`ngTemplateOutlet`,e.incrementButtonIconTemplate()||e._incrementButtonIconTemplate)}}function Xt(i,d){if(i&1&&th(0,`span`,10),i&2){let e=fI(2);eh(`pBind`,e.ptm(`decrementButtonIcon`))(`ngClass`,e.decrementButtonIcon())}}function en(i,d){if(i&1&&(ld(),th(0,`svg`,12)),i&2)eh(`pBind`,fI(3).ptm(`decrementButtonIcon`))}function tn(i,d){}function nn(i,d){i&1&&Yp(0,tn,0,0,`ng-template`)}function on(i,d){if(i&1&&(QE(0,en,1,1,`:svg:svg`,12),Yp(1,nn,1,0,null,7)),i&2){let e=fI(2);KE(!e.decrementButtonIconTemplate()&&!e._decrementButtonIconTemplate?0:-1),Zv(),eh(`ngTemplateOutlet`,e.decrementButtonIconTemplate()||e._decrementButtonIconTemplate)}}function an(i,d){if(i&1){let e=aI();ji(0,`span`,8)(1,`button`,9),ah(`mousedown`,function(t){Xl(e);return Jl(fI().onUpButtonMouseDown(t))})(`mouseup`,function(){Xl(e);return Jl(fI().onUpButtonMouseUp())})(`mouseleave`,function(){Xl(e);return Jl(fI().onUpButtonMouseLeave())})(`keydown`,function(t){Xl(e);return Jl(fI().onUpButtonKeyDown(t))})(`keyup`,function(){Xl(e);return Jl(fI().onUpButtonKeyUp())}),QE(2,Qt,1,2,`span`,10),QE(3,Jt,2,2),au(),ji(4,`button`,9),ah(`mousedown`,function(t){Xl(e);return Jl(fI().onDownButtonMouseDown(t))})(`mouseup`,function(){Xl(e);return Jl(fI().onDownButtonMouseUp())})(`mouseleave`,function(){Xl(e);return Jl(fI().onDownButtonMouseLeave())})(`keydown`,function(t){Xl(e);return Jl(fI().onDownButtonKeyDown(t))})(`keyup`,function(){Xl(e);return Jl(fI().onDownButtonKeyUp())}),QE(5,Xt,1,2,`span`,10),QE(6,on,2,2),au()()}if(i&2){let e=fI();FI(e.cx(`buttonGroup`)),eh(`pBind`,e.ptm(`buttonGroup`)),Jp(`data-p`,e.dataP),Zv(),FI(e.cn(e.cx(`incrementButton`),e.incrementButtonClass())),eh(`pBind`,e.ptm(`incrementButton`)),Jp(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),Zv(),KE(e.incrementButtonIcon()?2:-1),Zv(),KE(e.incrementButtonIcon()?-1:3),Zv(),FI(e.cn(e.cx(`decrementButton`),e.decrementButtonClass())),eh(`pBind`,e.ptm(`decrementButton`)),Jp(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),Zv(),KE(e.decrementButtonIcon()?5:-1),Zv(),KE(e.decrementButtonIcon()?-1:6)}}function rn(i,d){if(i&1&&th(0,`span`,10),i&2){let e=fI(2);eh(`pBind`,e.ptm(`incrementButtonIcon`))(`ngClass`,e.incrementButtonIcon())}}function ln(i,d){if(i&1&&(ld(),th(0,`svg`,11)),i&2)eh(`pBind`,fI(3).ptm(`incrementButtonIcon`))}function un(i,d){}function sn(i,d){i&1&&Yp(0,un,0,0,`ng-template`)}function dn(i,d){if(i&1&&(QE(0,ln,1,1,`:svg:svg`,11),Yp(1,sn,1,0,null,7)),i&2){let e=fI(2);KE(!e.incrementButtonIconTemplate()&&!e._incrementButtonIconTemplate?0:-1),Zv(),eh(`ngTemplateOutlet`,e.incrementButtonIconTemplate()||e._incrementButtonIconTemplate)}}function cn(i,d){if(i&1){let e=aI();ji(0,`button`,9),ah(`mousedown`,function(t){Xl(e);return Jl(fI().onUpButtonMouseDown(t))})(`mouseup`,function(){Xl(e);return Jl(fI().onUpButtonMouseUp())})(`mouseleave`,function(){Xl(e);return Jl(fI().onUpButtonMouseLeave())})(`keydown`,function(t){Xl(e);return Jl(fI().onUpButtonKeyDown(t))})(`keyup`,function(){Xl(e);return Jl(fI().onUpButtonKeyUp())}),QE(1,rn,1,2,`span`,10),QE(2,dn,2,2),au()}if(i&2){let e=fI();FI(e.cn(e.cx(`incrementButton`),e.incrementButtonClass())),eh(`pBind`,e.ptm(`incrementButton`)),Jp(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),Zv(),KE(e.incrementButtonIcon()?1:-1),Zv(),KE(e.incrementButtonIcon()?-1:2)}}function pn(i,d){if(i&1&&th(0,`span`,10),i&2){let e=fI(2);eh(`pBind`,e.ptm(`decrementButtonIcon`))(`ngClass`,e.decrementButtonIcon())}}function mn(i,d){if(i&1&&(ld(),th(0,`svg`,12)),i&2)eh(`pBind`,fI(3).ptm(`decrementButtonIcon`))}function gn(i,d){}function bn(i,d){i&1&&Yp(0,gn,0,0,`ng-template`)}function fn(i,d){if(i&1&&(QE(0,mn,1,1,`:svg:svg`,12),Yp(1,bn,1,0,null,7)),i&2){let e=fI(2);KE(!e.decrementButtonIconTemplate()&&!e._decrementButtonIconTemplate?0:-1),Zv(),eh(`ngTemplateOutlet`,e.decrementButtonIconTemplate()||e._decrementButtonIconTemplate)}}function hn(i,d){if(i&1){let e=aI();ji(0,`button`,9),ah(`mousedown`,function(t){Xl(e);return Jl(fI().onDownButtonMouseDown(t))})(`mouseup`,function(){Xl(e);return Jl(fI().onDownButtonMouseUp())})(`mouseleave`,function(){Xl(e);return Jl(fI().onDownButtonMouseLeave())})(`keydown`,function(t){Xl(e);return Jl(fI().onDownButtonKeyDown(t))})(`keyup`,function(){Xl(e);return Jl(fI().onDownButtonKeyUp())}),QE(1,pn,1,2,`span`,10),QE(2,fn,2,2),au()}if(i&2){let e=fI();FI(e.cn(e.cx(`decrementButton`),e.decrementButtonClass())),eh(`pBind`,e.ptm(`decrementButton`)),Jp(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),Zv(),KE(e.decrementButtonIcon()?1:-1),Zv(),KE(e.decrementButtonIcon()?-1:2)}}var _n=`
    ${dt}

    /* For ngx-prime */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var vn={root:({instance:i})=>[`p-inputnumber p-component p-inputwrapper`,{"p-inputwrapper-filled":i.$filled()||i.allowEmpty()===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons()&&i.buttonLayout()===`stacked`,"p-inputnumber-horizontal":i.showButtons()&&i.buttonLayout()===`horizontal`,"p-inputnumber-vertical":i.showButtons()&&i.buttonLayout()===`vertical`,"p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:`p-inputnumber-input`,buttonGroup:`p-inputnumber-button-group`,incrementButton:({instance:i})=>[`p-inputnumber-button p-inputnumber-increment-button`,{"p-disabled":i.showButtons()&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>[`p-inputnumber-button p-inputnumber-decrement-button`,{"p-disabled":i.showButtons()&&i.min()!=null&&i.minlength()}],clearIcon:`p-inputnumber-clear-icon`};var ct=(()=>{class i extends U{name=`inputnumber`;style=_n;classes=vn;static ɵfac=(()=>{let e;return function(t){return(e||(e=bf(i)))(t||i)}})();static ɵprov=O({token:i,factory:i.ɵfac})}return i})();var pt=new b(`INPUTNUMBER_INSTANCE`);var yn={provide:Ne,useExisting:Go(()=>mt),multi:!0};var mt=(()=>{class i extends D{injector=g(ae);componentName=`InputNumber`;$pcInputNumber=g(pt,{optional:!0,skipSelf:!0})??void 0;_componentStyle=g(ct);bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}showButtons=UL(!1,{transform:Ww});format=UL(!0,{transform:Ww});buttonLayout=UL(`stacked`);inputId=UL();styleClass=UL();placeholder=UL();tabindex=UL(void 0,{transform:qw});title=UL();ariaLabelledBy=UL();ariaDescribedBy=UL();ariaLabel=UL();ariaRequired=UL(void 0,{transform:Ww});autocomplete=UL();incrementButtonClass=UL();decrementButtonClass=UL();incrementButtonIcon=UL();decrementButtonIcon=UL();readonly=UL(void 0,{transform:Ww});allowEmpty=UL(!0,{transform:Ww});locale=UL();localeMatcher=UL();mode=UL(`decimal`);currency=UL();currencyDisplay=UL();useGrouping=UL(!0,{transform:Ww});minFractionDigits=UL(void 0,{transform:e=>qw(e,void 0)});maxFractionDigits=UL(void 0,{transform:e=>qw(e,void 0)});prefix=UL();suffix=UL();inputStyle=UL();inputStyleClass=UL();showClear=UL(!1,{transform:Ww});autofocus=UL(void 0,{transform:Ww});onInput=$L();onFocus=$L();onBlur=$L();onKeyDown=$L();onClear=$L();clearIconTemplate;incrementButtonIconTemplate=WL(`incrementbuttonicon`,{descendants:!1});decrementButtonIconTemplate=WL(`decrementbuttonicon`,{descendants:!1});templates=qL(Vn);input=GL.required(`input`);_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar=``;prefixChar=``;suffixChar=``;isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar=``;_group;_minusSign;_currency;_prefix;_suffix;_index;ngControl=null;constructor(){super(),XL()&&console.warn('`<p-inputnumber>` is deprecated and will be removed in a future major version. Use a native `<input type="number" pInputNumber>` instead.'),Ed(()=>{this.locale(),this.localeMatcher(),this.mode(),this.currency(),this.currencyDisplay(),this.useGrouping(),this.minFractionDigits(),this.maxFractionDigits(),this.prefix(),this.suffix(),this.updateConstructParser()})}onInit(){this.ngControl=this.injector.get(V,null,{optional:!0}),this.constructParser(),this.initialized=!0}onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`clearicon`:this._clearIconTemplate=e.template;break;case`incrementbuttonicon`:this._incrementButtonIconTemplate=e.template;break;case`decrementbuttonicon`:this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(a,l,u)=>{if(!(a==null||isNaN(a)||!isFinite(a)))return Math.max(l,Math.min(u,Math.floor(a)))},n=e(this.minFractionDigits(),0,20),t=e(this.maxFractionDigits(),0,100),o=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher(),style:this.mode(),currency:this.currency(),currencyDisplay:this.currencyDisplay(),useGrouping:this.useGrouping(),minimumFractionDigits:o,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([,a])=>a!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale(),n);let t=[...new Intl.NumberFormat(this.locale(),{useGrouping:!1}).format(9876543210)].reverse(),o=new Map(t.map((a,l)=>[a,l]));this._numeral=new RegExp(`[${t.join(``)}]`,`g`),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=a=>o.get(a)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,`\\$&`)}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,`g`)}getDecimalChar(){return new Intl.NumberFormat(this.locale(),s(r({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,``).trim().replace(this._numeral,``)}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale(),{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,``).charAt(0),new RegExp(`[${this.groupChar}]`,`g`)}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale(),{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,``)}]`,`g`)}getCurrencyExpression(){if(this.currency()){let e=new Intl.NumberFormat(this.locale(),{style:`currency`,currency:this.currency(),currencyDisplay:this.currencyDisplay(),minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,``).replace(this._numeral,``).replace(this._group,``)}]`,`g`)}return new RegExp(`[]`,`g`)}getPrefixExpression(){if(this.prefix())this.prefixChar=this.prefix();else{let e=new Intl.NumberFormat(this.locale(),{style:this.mode(),currency:this.currency(),currencyDisplay:this.currencyDisplay()});this.prefixChar=e.format(1).split(`1`)[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||``)}`,`g`)}getSuffixExpression(){if(this.suffix())this.suffixChar=this.suffix();else{let e=new Intl.NumberFormat(this.locale(),{style:this.mode(),currency:this.currency(),currencyDisplay:this.currencyDisplay(),minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split(`1`)[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||``)}`,`g`)}formatValue(e){if(e!=null){if(e===`-`)return e;if(this.format()){let t=new Intl.NumberFormat(this.locale(),this.getOptions()).format(e);return this.prefix()&&e!=this.prefix()&&(t=this.prefix()+t),this.suffix()&&e!=this.suffix()&&(t=t+this.suffix()),t}return e.toString()}return``}parseValue(e){let n=this._suffix?new RegExp(this._suffix,``):/(?:)/,t=this._prefix?new RegExp(this._prefix,``):/(?:)/,o=this._currency?new RegExp(this._currency,``):/(?:)/,a=e.replace(n,``).replace(t,``).trim().replace(/\s/g,``).replace(o,``).replace(this._group,``).replace(this._minusSign,`-`).replace(this._decimal,`.`).replace(this._numeral,this._index);if(a){if(a===`-`)return a;let l=+a;return isNaN(l)?null:l}return null}repeat(e,n,t){if(this.readonly())return;let o=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},o),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,o=this.parseValue(this.input()?.nativeElement.value)||0,a=this.validateValue(o+t),l=this.maxlength();l&&l<this.formatValue(a).length||(this.updateInput(a,null,`spin`,null),this.updateModel(e,a),this.handleOnInput(e,o,a))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input()?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input()?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly()||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly())return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,o=e.target.value,a=null;e.altKey&&e.preventDefault();let l=this.input();switch(e.key){case`ArrowUp`:this.spin(e,1),e.preventDefault();break;case`ArrowDown`:this.spin(e,-1),e.preventDefault();break;case`ArrowLeft`:for(let u=n;u<=o.length;u++){let p=u===0?0:u-1;if(this.isNumeralChar(o.charAt(p))){this.input().nativeElement.setSelectionRange(u,u);break}}break;case`ArrowRight`:for(let u=t;u>=0;u--)if(this.isNumeralChar(o.charAt(u))){this.input().nativeElement.setSelectionRange(u,u);break}break;case`Tab`:case`Enter`:a=this.validateValue(this.parseValue(this.input().nativeElement.value)),l.nativeElement.value=this.formatValue(a),l.nativeElement.setAttribute(`aria-valuenow`,a),this.updateModel(e,a);break;case`Backspace`:if(e.preventDefault(),n===t){if(n==1&&this.prefix()||n==o.length&&this.suffix())break;let u=o.charAt(n-1),{decimalCharIndex:p,decimalCharIndexWithoutPrefix:g}=this.getDecimalCharIndexes(o);if(this.isNumeralChar(u)){let c=this.getDecimalLength(o);if(this._group.test(u))this._group.lastIndex=0,a=o.slice(0,n-2)+o.slice(n-1);else if(this._decimal.test(u))this._decimal.lastIndex=0,c?this.input()?.nativeElement.setSelectionRange(n-1,n-1):a=o.slice(0,n-1)+o.slice(n);else if(p>0&&n>p){let B=this.isDecimalMode()&&(this.minFractionDigits()||0)<c?``:`0`;a=o.slice(0,n-1)+B+o.slice(n)}else g===1?(a=o.slice(0,n-1)+`0`+o.slice(n),a=this.parseValue(a)>0?a:``):a=o.slice(0,n-1)+o.slice(n)}else this.mode()===`currency`&&this._currency&&u.search(this._currency)!=-1&&(a=o.slice(1));this.updateValue(e,a,null,`delete-single`)}else a=this.deleteRange(o,n,t),this.updateValue(e,a,null,`delete-range`);break;case`Delete`:if(e.preventDefault(),n===t){if(n==0&&this.prefix()||n==o.length-1&&this.suffix())break;let u=o.charAt(n),{decimalCharIndex:p,decimalCharIndexWithoutPrefix:g}=this.getDecimalCharIndexes(o);if(this.isNumeralChar(u)){let c=this.getDecimalLength(o);if(this._group.test(u))this._group.lastIndex=0,a=o.slice(0,n)+o.slice(n+2);else if(this._decimal.test(u))this._decimal.lastIndex=0,c?this.input()?.nativeElement.setSelectionRange(n+1,n+1):a=o.slice(0,n)+o.slice(n+1);else if(p>0&&n>p){let B=this.isDecimalMode()&&(this.minFractionDigits()||0)<c?``:`0`;a=o.slice(0,n)+B+o.slice(n+1)}else g===1?(a=o.slice(0,n)+`0`+o.slice(n+1),a=this.parseValue(a)>0?a:``):a=o.slice(0,n)+o.slice(n+1)}this.updateValue(e,a,null,`delete-back-single`)}else a=this.deleteRange(o,n,t),this.updateValue(e,a,null,`delete-range`);break;case`Home`:this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case`End`:this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly())return;let n=e.which||e.keyCode,t=String.fromCharCode(n),o=this.isDecimalSign(t),a=this.isMinusSign(t);n!=13&&e.preventDefault(),!o&&e.code===`NumpadDecimal`&&(o=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:l,selectionStart:u,selectionEnd:p}=this.input().nativeElement,g=this.parseValue(l+t),c=g!=null?g.toString():``,B=l.substring(u,p),$=this.parseValue(B),y=$!=null?$.toString():``;if(u!==p&&y.length>0){this.insert(e,t,{isDecimalSign:o,isMinusSign:a});return}let V=this.maxlength();V&&c.length>V||(48<=n&&n<=57||a||o)&&this.insert(e,t,{isDecimalSign:o,isMinusSign:a})}onPaste(e){if(!this.$disabled()&&!this.readonly()){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData(`Text`);if(this.inputId()===`integeronly`&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e===`-`?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode()===`decimal`}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let o=e.replace(this._prefix,``).trim().replace(/\s/g,``).replace(this._currency,``).search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:o}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let o=e.search(this._suffix);this._suffix.lastIndex=0;let a=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:o,currencyCharIndex:a}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let o=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&o!==-1)return;let a=this.input(),l=a?.nativeElement.selectionStart,u=a?.nativeElement.selectionEnd,p=a?.nativeElement.value.trim(),{decimalCharIndex:g,minusCharIndex:c,suffixCharIndex:B,currencyCharIndex:$}=this.getCharIndexes(p),y;if(t.isMinusSign)l===0&&(y=p,(c===-1||u!==0)&&(y=this.insertText(p,n,0,u)),this.updateValue(e,y,n,`insert`));else if(t.isDecimalSign)g>0&&l===g?this.updateValue(e,p,n,`insert`):g>l&&g<u?(y=this.insertText(p,n,l,u),this.updateValue(e,y,n,`insert`)):g===-1&&this.maxFractionDigits()&&(y=this.insertText(p,n,l,u),this.updateValue(e,y,n,`insert`));else{let V=this.numberFormat.resolvedOptions().maximumFractionDigits,H=l!==u?`range-insert`:`insert`;if(g>0&&l>g){if(l+n.length-(g+1)<=V){let U=$>=l?$-1:B>=l?B:p.length;y=p.slice(0,l)+n+p.slice(l+n.length,U)+p.slice(U),this.updateValue(e,y,n,H)}}else y=this.insertText(p,n,l,u),this.updateValue(e,y,n,H)}}insertText(e,n,t,o){if((n===`.`?n:n.split(`.`)).length===2){let l=e.slice(t,o).search(this._decimal);return this._decimal.lastIndex=0,l>0?e.slice(0,t)+this.formatValue(n)+e.slice(o):e||this.formatValue(n)}else return o-t===e.length?this.formatValue(n):t===0?n+e.slice(o):o===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(o)}deleteRange(e,n,t){let o;return t-n===e.length?o=``:n===0?o=e.slice(t):t===e.length?o=e.slice(0,n):o=e.slice(0,n)+e.slice(t),o}initCursor(){let e=this.input(),n=e?.nativeElement.selectionStart,t=e?.nativeElement.selectionEnd,o=e?.nativeElement.value,a=o.length,l=null,u=(this.prefixChar||``).length;o=o.replace(this._prefix,``),(n===t||n!==0||t<u)&&(n-=u);let p=o.charAt(n);if(this.isNumeralChar(p))return n+u;let g=n-1;for(;g>=0;)if(p=o.charAt(g),this.isNumeralChar(p)){l=g+u;break}else g--;if(l!==null)e?.nativeElement.setSelectionRange(l+1,l+1);else{for(g=n;g<a;)if(p=o.charAt(g),this.isNumeralChar(p)){l=g+u;break}else g++;l!==null&&e?.nativeElement.setSelectionRange(l,l)}return l||0}onInputClick(){let e=this.input()?.nativeElement.value;!this.readonly()&&e!==pn$1()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,o){let a=this.input()?.nativeElement.value,l=null;n!=null&&(l=this.parseValue(n),l=!l&&!this.allowEmpty()?0:l,this.updateInput(l,t,o,n),this.handleOnInput(e,a,l))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input().nativeElement.value=this.formatValue(t),this.input()?.nativeElement.setAttribute(`aria-valuenow`,t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null)return n!==(typeof e==`string`?this.parseValue(e):e);return!1}validateValue(e){if(e===`-`||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,o){n=n||``;let a=this.input(),l=a?.nativeElement.value,u=this.formatValue(e),p=l.length;if(u!==o&&(u=this.concatValues(u,o)),p===0){a.nativeElement.value=u,a.nativeElement.setSelectionRange(0,0);let c=this.initCursor()+n.length;a.nativeElement.setSelectionRange(c,c)}else{let g=a.nativeElement.selectionStart,c=a.nativeElement.selectionEnd,B=this.maxlength();if(B&&u.length>B&&(u=u.slice(0,B),g=Math.min(g,B),c=Math.min(c,B)),B&&B<u.length)return;a.nativeElement.value=u;let $=u.length;if(t===`range-insert`){let y=this.parseValue((l||``).slice(0,g)),H=(y!==null?y.toString():``).split(``).join(`(${this.groupChar})?`),U=new RegExp(H,`g`);U.test(u);let gt=n.split(``).join(`(${this.groupChar})?`),De=new RegExp(gt,`g`);De.test(u.slice(U.lastIndex)),c=U.lastIndex+De.lastIndex,a.nativeElement.setSelectionRange(c,c)}else if($===p)t===`insert`||t===`delete-back-single`?a.nativeElement.setSelectionRange(c+1,c+1):t===`delete-single`?a.nativeElement.setSelectionRange(c-1,c-1):(t===`delete-range`||t===`spin`)&&a.nativeElement.setSelectionRange(c,c);else if(t===`delete-back-single`){let y=l.charAt(c-1),V=l.charAt(c),H=p-$,U=this._group.test(V);U&&H===1?c+=1:!U&&this.isNumeralChar(y)&&(c+=-1*H+1),this._group.lastIndex=0,a.nativeElement.setSelectionRange(c,c)}else if(l===`-`&&t===`insert`){a.nativeElement.setSelectionRange(0,0);let V=this.initCursor()+n.length+1;a.nativeElement.setSelectionRange(V,V)}else c=c+($-p),a.nativeElement.setSelectionRange(c,c)}a.nativeElement.setAttribute(`aria-valuenow`,e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,``).split(this._decimal)[0]+n.replace(this.suffixChar,``).slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,``).trim().replace(/\s/g,``).replace(this._currency,``).length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input().nativeElement.value)),t=n?.toString();this.input().nativeElement.value=this.formatValue(t),this.input().nativeElement.setAttribute(`aria-valuenow`,t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty()?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn===`blur`;this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}get dataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,empty:!this.$filled(),[this.size()]:this.size(),[this.buttonLayout()]:this.showButtons()&&this.buttonLayout()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=_E({type:i,selectors:[[`p-inputNumber`],[`p-inputnumber`],[`p-input-number`]],contentQueries:function(n,t,o){if(n&1&&(fh(o,t.incrementButtonIconTemplate,$t,4)(o,t.decrementButtonIconTemplate,Ut,4)(o,t.templates,Vn,4),lh(o,zt,4)),n&2){DI(3);let a;yI(a=vI())&&(t.clearIconTemplate=a.first)}},viewQuery:function(n,t){n&1&&ph(t.input,Pt,5),n&2&&DI()},hostVars:3,hostBindings:function(n,t){n&2&&(Jp(`data-p`,t.dataP),FI(t.cn(t.cx(`root`),t.styleClass())))},inputs:{showButtons:[1,`showButtons`],format:[1,`format`],buttonLayout:[1,`buttonLayout`],inputId:[1,`inputId`],styleClass:[1,`styleClass`],placeholder:[1,`placeholder`],tabindex:[1,`tabindex`],title:[1,`title`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],ariaLabel:[1,`ariaLabel`],ariaRequired:[1,`ariaRequired`],autocomplete:[1,`autocomplete`],incrementButtonClass:[1,`incrementButtonClass`],decrementButtonClass:[1,`decrementButtonClass`],incrementButtonIcon:[1,`incrementButtonIcon`],decrementButtonIcon:[1,`decrementButtonIcon`],readonly:[1,`readonly`],allowEmpty:[1,`allowEmpty`],locale:[1,`locale`],localeMatcher:[1,`localeMatcher`],mode:[1,`mode`],currency:[1,`currency`],currencyDisplay:[1,`currencyDisplay`],useGrouping:[1,`useGrouping`],minFractionDigits:[1,`minFractionDigits`],maxFractionDigits:[1,`maxFractionDigits`],prefix:[1,`prefix`],suffix:[1,`suffix`],inputStyle:[1,`inputStyle`],inputStyleClass:[1,`inputStyleClass`],showClear:[1,`showClear`],autofocus:[1,`autofocus`]},outputs:{onInput:`onInput`,onFocus:`onFocus`,onBlur:`onBlur`,onKeyDown:`onKeyDown`,onClear:`onClear`},features:[nw([yn,ct,{provide:pt,useExisting:i},{provide:ji$1,useExisting:i}]),OE([Vs]),qp],decls:6,vars:39,consts:[[`input`,``],[`pInputText`,``,`role`,`spinbutton`,`inputmode`,`decimal`,3,`input`,`keydown`,`keypress`,`paste`,`click`,`focus`,`blur`,`value`,`ngStyle`,`variant`,`invalid`,`pSize`,`pt`,`unstyled`,`pAutoFocus`,`fluid`],[3,`pBind`,`class`],[`type`,`button`,`tabindex`,`-1`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`click`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`],[`type`,`button`,`tabindex`,`-1`,3,`mousedown`,`mouseup`,`mouseleave`,`keydown`,`keyup`,`pBind`],[3,`pBind`,`ngClass`],[`data-p-icon`,`angle-up`,3,`pBind`],[`data-p-icon`,`angle-down`,3,`pBind`]],template:function(n,t){n&1&&(ji(0,`input`,1,0),ah(`input`,function(a){return t.onUserInput(a)})(`keydown`,function(a){return t.onInputKeyDown(a)})(`keypress`,function(a){return t.onInputKeyPress(a)})(`paste`,function(a){return t.onPaste(a)})(`click`,function(){return t.onInputClick()})(`focus`,function(a){return t.onInputFocus(a)})(`blur`,function(a){return t.onInputBlur(a)}),au(),QE(2,qt,2,2),QE(3,an,7,20,`span`,2),QE(4,cn,3,8,`button`,3),QE(5,hn,3,8,`button`,3)),n&2&&(FI(t.cn(t.cx(`pcInputText`),t.inputStyleClass())),eh(`value`,t.formattedValue())(`ngStyle`,t.inputStyle())(`variant`,t.$variant())(`invalid`,t.invalid())(`pSize`,t.size())(`pt`,t.ptm(`pcInputText`))(`unstyled`,t.unstyled())(`pAutoFocus`,t.autofocus())(`fluid`,t.hasFluid),Jp(`id`,t.inputId())(`aria-valuemin`,t.min())(`aria-valuemax`,t.max())(`aria-valuenow`,t.value)(`placeholder`,t.placeholder())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.ariaDescribedBy())(`aria-invalid`,t.invalid()||null)(`title`,t.title())(`size`,t.inputSize())(`name`,t.name())(`autocomplete`,t.autocomplete())(`maxlength`,t.maxlength())(`minlength`,t.minlength())(`tabindex`,t.tabindex())(`aria-required`,t.ariaRequired())(`min`,t.min())(`max`,t.max())(`step`,t.step()??1)(`required`,t.required()?``:void 0)(`readonly`,t.readonly()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`data-p`,t.dataP),Zv(2),KE(t.buttonLayout()!==`vertical`&&t.showClear()&&t.value?2:-1),Zv(),KE(t.showButtons()&&t.buttonLayout()===`stacked`?3:-1),Zv(),KE(t.showButtons()&&t.buttonLayout()!==`stacked`?4:-1),Zv(),KE(t.showButtons()&&t.buttonLayout()!==`stacked`?5:-1))},dependencies:[mC,uC,dC,lC,et,Jt$1,f,st,ut,Gn,Gs,Vs],encapsulation:2})}return i})();var Vi=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Qi({type:i});static ɵinj=vr({imports:[mt,Gn,Gn]})}return i})();export{mt as i,ai as n,lt as r,Vi as t};