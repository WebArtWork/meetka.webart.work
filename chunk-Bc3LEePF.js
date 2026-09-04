import{$t as b,An as hI,C as FI,D as Gf,Dn as gI,En as g,Gt as Zv,Jt as aI,K as Mh,Kt as _E,L as Jl,Lr as vr,Or as uC,Pt as Xl,Qt as au,R as Jp,Rn as ji,St as UL,T as GI,X as O$1,Xt as ah,Yn as mC,Z as OE,ct as Qi,en as bf,er as nw,it as QE,mr as qp,n as $L,wr as th,xn as fI,yn as eh,z as KE}from"./chunk-BJUcq1-u.js";import{M as Vs,Q as ji$1,g as Gn,k as U$1,v as Gt}from"./main-M7WPMAZU.js";var U=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var K=[`*`];function O(a,d){if(a&1&&(ji(0,`span`,1),GI(1),au()),a&2){let t=fI();FI(t.cx(`label`)),eh(`pBind`,t.ptm(`label`)),Jp(`data-p`,t.dataP),Zv(),Mh(t.label())}}function Q(a,d){if(a&1&&th(0,`span`,3),a&2){let t=fI(2);FI(t.icon()),eh(`pBind`,t.ptm(`icon`))(`ngClass`,t.cx(`icon`)),Jp(`data-p`,t.dataP)(`aria-hidden`,!0)}}function W(a,d){if(a&1){let t=aI();ji(0,`img`,5),ah(`error`,function(e){Xl(t);return Jl(fI(3).imageError(e))}),au()}if(a&2){let t=fI(3);eh(`pBind`,t.ptm(`image`))(`src`,t.image(),Gf),Jp(`alt`,t.ariaLabel()??``)(`data-p`,t.dataP)}}function X(a,d){if(a&1&&QE(0,W,1,4,`img`,4),a&2)KE(fI(2).image()?0:-1)}function Y(a,d){if(a&1&&QE(0,Q,1,6,`span`,2)(1,X,1,1),a&2)KE(fI().icon()?0:1)}var Z={root:({instance:a})=>[`p-avatar p-component`,{"p-avatar-image":a.image()!=null,"p-avatar-circle":a.shape()===`circle`,"p-avatar-lg":a.size()===`large`,"p-avatar-xl":a.size()===`xlarge`}],label:`p-avatar-label`,icon:`p-avatar-icon`};var $=(()=>{class a extends U$1{name=`avatar`;style=U;classes=Z;static ɵfac=(()=>{let t;return function(e){return(t||(t=bf(a)))(e||a)}})();static ɵprov=O$1({token:a,factory:a.ɵfac})}return a})();var G=new b(`AVATAR_INSTANCE`);var aa=(()=>{class a extends Gt{componentName=`Avatar`;$pcAvatar=g(G,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=UL();icon=UL();image=UL();size=UL(`normal`);shape=UL(`square`);styleClass=UL();ariaLabel=UL();ariaLabelledBy=UL();onImageError=$L();_componentStyle=g($);imageError(t){this.onImageError.emit(t)}get dataP(){return this.cn({[this.shape()]:this.shape(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(e){return(t||(t=bf(a)))(e||a)}})();static ɵcmp=_E({type:a,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(n,e){n&2&&(Jp(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`data-p`,e.dataP),FI(e.cn(e.cx(`root`),e.styleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],size:[1,`size`],shape:[1,`shape`],styleClass:[1,`styleClass`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onImageError:`onImageError`},features:[nw([$,{provide:G,useExisting:a},{provide:ji$1,useExisting:a}]),OE([Vs]),qp],ngContentSelectors:K,decls:3,vars:1,consts:[[3,`pBind`,`class`],[3,`pBind`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`,`src`],[3,`error`,`pBind`,`src`]],template:function(n,e){n&1&&(hI(),gI(0),QE(1,O,2,5,`span`,0)(2,Y,2,1)),n&2&&(Zv(),KE(e.label()?1:2))},dependencies:[mC,uC,Gn,Vs],encapsulation:2})}return a})();var ha=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=Qi({type:a});static ɵinj=vr({imports:[aa,Gn,Gn]})}return a})();export{ha as n,aa as t};