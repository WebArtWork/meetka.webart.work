import{$t as b,C as FI,En as g,It as Xr,Lr as vr,R as Jp,Rr as vw,St as UL,X as O,Xt as ah,Z as OE,b as Ed,ct as Qi,en as bf,er as nw,fn as di,kt as Ww,mr as qp}from"./chunk-BJUcq1-u.js";import{s as V$1}from"./chunk-eMgFgR8X.js";import{E as S$1,M as Vs,Q as ji,k as U,v as Gt}from"./main-M7WPMAZU.js";import{t as Dt}from"./chunk-Dc-y17IF.js";var S=(()=>{class t extends Gt{modelValue=di(void 0);$filled=vw(()=>S$1(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=bf(t)))(o||t)}})();static ɵdir=Xr({type:t,features:[qp]})}return t})();var V=`
    
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }


    /* For ngx-prime */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var B={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize()===`small`,"p-inputtext-lg":t.pSize()===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var C=(()=>{class t extends U{name=`inputtext`;style=V;classes=B;static ɵfac=(()=>{let e;return function(o){return(e||(e=bf(t)))(o||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var E=new b(`INPUTTEXT_INSTANCE`);var et=(()=>{class t extends S{componentName=`InputText`;hostName=UL(``);ptInputText=UL();pInputTextPT=UL();pInputTextUnstyled=UL();bindDirectiveInstance=g(Vs,{self:!0});$pcInputText=g(E,{optional:!0,skipSelf:!0})??void 0;ngControl=g(V$1,{optional:!0,self:!0});pcFluid=g(Dt,{optional:!0,host:!0,skipSelf:!0});pSize=UL();variant=UL();fluid=UL(void 0,{transform:Ww});invalid=UL(void 0,{transform:Ww});$variant=vw(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=g(C);constructor(){super(),Ed(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),Ed(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()})}static ɵfac=function(i){return new(i||t)};static ɵdir=Xr({type:t,selectors:[[``,`pInputText`,``]],hostVars:4,hostBindings:function(i,o){i&1&&ah(`input`,function(){return o.onInput()}),i&2&&(Jp(`data-p`,o.dataP)(`aria-invalid`,o.invalid()||null),FI(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],ptInputText:[1,`ptInputText`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[nw([C,{provide:E,useExisting:t},{provide:ji,useExisting:t}]),OE([Vs]),qp]})}return t})();var nt=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Qi({type:t});static ɵinj=vr({})}return t})();export{et as n,nt as r,S as t};