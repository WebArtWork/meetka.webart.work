import{$t as b,C as FI,En as g,Gn as lh,Gr as yI,Gt as Zv,Kt as _E,Lr as vr,Mt as XL,Pr as vI,Q as OI,Qt as au,R as Jp,Rn as ji,Sn as fh,St as UL,Vt as Yp,X as O,Xt as ah,Yn as mC,Z as OE,ct as Qi,dn as dh,en as bf,er as nw,fr as qL,g as DI,hr as qw,it as QE,k as Go,kt as Ww,mr as qp,n as $L,or as ow,tr as oh,un as dC,xn as fI,yn as eh,z as KE}from"./chunk-BJUcq1-u.js";import{i as Ne}from"./chunk-eMgFgR8X.js";import{M as Vs,Q as ji$1,_ as Gs,g as Gn,j as Vn,k as U}from"./main-M7WPMAZU.js";import{n as Jt}from"./chunk-Dc-y17IF.js";import{t as He}from"./chunk-CGSrlnLh.js";var ee=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var de=[`handle`];var ae=[`input`];var le=t=>({checked:t});function se(t,oe){t&1&&oh(0)}function re(t,oe){if(t&1&&Yp(0,se,1,0,`ng-container`,3),t&2){let i=fI();eh(`ngTemplateOutlet`,i.handleTemplate||i._handleTemplate)(`ngTemplateOutletContext`,ow(2,le,i.checked()))}}var ce=`
    ${ee}

    /* Native toggle-switch directive: preserve the checkbox while applying the active theme color. */
    input.p-toggleswitch.p-component {
        accent-color: dt('toggleswitch.checked.background');
        cursor: pointer;
    }

    input.p-toggleswitch.p-component.p-disabled,
    input.p-toggleswitch.p-component[readonly] {
        cursor: default;
    }

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`;var ge={root:{position:`relative`}};var ue={root:({instance:t})=>[`p-toggleswitch p-component`,{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`};var te=(()=>{class t extends U{name=`toggleswitch`;style=ce;classes=ue;inlineStyles=ge;static ɵfac=(()=>{let i;return function(e){return(i||(i=bf(t)))(e||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var ie=new b(`TOGGLESWITCH_INSTANCE`);var he={provide:Ne,useExisting:Go(()=>ne),multi:!0};var ne=(()=>{class t extends He{componentName=`ToggleSwitch`;$pcToggleSwitch=g(ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),XL()&&console.warn('`<p-toggleswitch>` is deprecated and will be removed in a future major version. Use a native `<input type="checkbox" pToggleSwitch>` instead.')}styleClass=UL();tabindex=UL(void 0,{transform:qw});inputId=UL();readonly=UL(void 0,{transform:Ww});trueValue=UL(!0);falseValue=UL(!1);ariaLabel=UL();size=UL();ariaLabelledBy=UL();ariaDescribedBy=UL();autofocus=UL(void 0,{transform:Ww});onChange=$L();input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=g(te);templates=qL(Vn);onHostClick(i){this.onClick(i)}onAfterContentInit(){this.templates().forEach(i=>{i.getType()===`handle`?this._handleTemplate=i.template:this._handleTemplate=i.template})}onClick(i){!this.$disabled()&&!this.readonly()&&(this.writeModelValue(this.checked()?this.falseValue():this.trueValue()),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:i,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue()}writeControlValue(i,n){n(i),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static ɵfac=function(n){return new(n||t)};static ɵcmp=_E({type:t,selectors:[[`p-toggleswitch`],[`p-toggleSwitch`],[`p-toggle-switch`]],contentQueries:function(n,e,d){if(n&1&&(fh(d,e.templates,Vn,4),lh(d,de,4)),n&2){DI();let c;yI(c=vI())&&(e.handleTemplate=c.first)}},viewQuery:function(n,e){if(n&1&&dh(ae,5),n&2){let d;yI(d=vI())&&(e.input=d.first)}},hostVars:7,hostBindings:function(n,e){n&1&&ah(`click`,function(c){return e.onHostClick(c)}),n&2&&(Jp(`data-p-checked`,e.checked())(`data-p-disabled`,e.$disabled())(`data-p`,e.dataP),OI(e.sx(`root`)),FI(e.cn(e.cx(`root`),e.styleClass())))},inputs:{styleClass:[1,`styleClass`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],readonly:[1,`readonly`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],ariaLabel:[1,`ariaLabel`],size:[1,`size`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],autofocus:[1,`autofocus`]},outputs:{onChange:`onChange`},features:[nw([he,te,{provide:ie,useExisting:t},{provide:ji$1,useExisting:t}]),OE([Vs]),qp],decls:5,vars:24,consts:[[`input`,``],[`type`,`checkbox`,`role`,`switch`,3,`focus`,`blur`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,e){n&1&&(ji(0,`input`,1,0),ah(`focus`,function(){return e.onFocus()})(`blur`,function(){return e.onBlur()}),au(),ji(2,`div`,2)(3,`div`,2),QE(4,re,1,4,`ng-container`),au()()),n&2&&(FI(e.cx(`input`)),eh(`checked`,e.checked())(`pAutoFocus`,e.autofocus())(`pBind`,e.ptm(`input`)),Jp(`id`,e.inputId())(`required`,e.required()?``:void 0)(`disabled`,e.$disabled()?``:void 0)(`aria-checked`,e.checked())(`aria-labelledby`,e.ariaLabelledBy())(`aria-label`,e.ariaLabel())(`aria-describedby`,e.ariaDescribedBy())(`aria-invalid`,e.invalid()||void 0)(`name`,e.name())(`tabindex`,e.tabindex()),Zv(2),FI(e.cx(`slider`)),eh(`pBind`,e.ptm(`slider`)),Jp(`data-p`,e.dataP),Zv(),FI(e.cx(`handle`)),eh(`pBind`,e.ptm(`handle`)),Jp(`data-p`,e.dataP),Zv(),KE(e.handleTemplate||e._handleTemplate?4:-1))},dependencies:[mC,dC,Jt,Gn,Gs,Vs],encapsulation:2})}return t})();var $e=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Qi({type:t});static ɵinj=vr({imports:[ne,Gn,Gn]})}return t})();export{ne as n,$e as t};