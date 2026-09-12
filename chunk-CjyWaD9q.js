import{$ as PV,At as YS,B as La,Cn as nS,Ct as Wr,Gn as s_,In as qb,It as _d,J as Nb,Lt as aS,U as M,W as MS,X as Od,Xn as tv,Yn as tm,Zn as uS,_n as lS,b as Fa,cn as iv,en as fp,f as D,ft as Ua,in as hp,ir as wa,jn as p,ln as jS,nt as Pn,on as hy,ot as Rv,pr as za,tt as Pg,w as Gb,yt as WI}from"./chunk-FhScA4IO.js";import{M as Vs,Q as ji,g as Gn,k as U$1,v as Gt}from"./main-B4CH6ORE.js";var U=`
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
`;var K=[`*`];function O(a,d){if(a&1&&(wa(0,`span`,1),jS(1),Od()),a&2){let t=aS();MS(t.cx(`label`)),iv(`pBind`,t.ptm(`label`)),La(`data-p`,t.dataP),WI(),Rv(t.label())}}function Q(a,d){if(a&1&&Fa(0,`span`,3),a&2){let t=aS(2);MS(t.icon()),iv(`pBind`,t.ptm(`icon`))(`ngClass`,t.cx(`icon`)),La(`data-p`,t.dataP)(`aria-hidden`,!0)}}function W(a,d){if(a&1){let t=nS();wa(0,`img`,5),Ua(`error`,function(e){fp(t);return hp(aS(3).imageError(e))}),Od()}if(a&2){let t=aS(3);iv(`pBind`,t.ptm(`image`))(`src`,t.image(),tm),La(`alt`,t.ariaLabel()??``)(`data-p`,t.dataP)}}function X(a,d){if(a&1&&Gb(0,W,1,4,`img`,4),a&2)qb(aS(2).image()?0:-1)}function Y(a,d){if(a&1&&Gb(0,Q,1,6,`span`,2)(1,X,1,1),a&2)qb(aS().icon()?0:1)}var Z={root:({instance:a})=>[`p-avatar p-component`,{"p-avatar-image":a.image()!=null,"p-avatar-circle":a.shape()===`circle`,"p-avatar-lg":a.size()===`large`,"p-avatar-xl":a.size()===`xlarge`}],label:`p-avatar-label`,icon:`p-avatar-icon`};var $=(()=>{class a extends U$1{name=`avatar`;style=U;classes=Z;static ɵfac=(()=>{let t;return function(e){return(t||(t=Pg(a)))(e||a)}})();static ɵprov=M({token:a,factory:a.ɵfac})}return a})();var G=new D(`AVATAR_INSTANCE`);var aa=(()=>{class a extends Gt{componentName=`Avatar`;$pcAvatar=p(G,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=za();icon=za();image=za();size=za(`normal`);shape=za(`square`);styleClass=za();ariaLabel=za();ariaLabelledBy=za();onImageError=PV();_componentStyle=p($);imageError(t){this.onImageError.emit(t)}get dataP(){return this.cn({[this.shape()]:this.shape(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(e){return(t||(t=Pg(a)))(e||a)}})();static ɵcmp=_d({type:a,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(n,e){n&2&&(La(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`data-p`,e.dataP),MS(e.cn(e.cx(`root`),e.styleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],size:[1,`size`],shape:[1,`shape`],styleClass:[1,`styleClass`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onImageError:`onImageError`},features:[YS([$,{provide:G,useExisting:a},{provide:ji,useExisting:a}]),Nb([Vs]),tv],ngContentSelectors:K,decls:3,vars:1,consts:[[3,`pBind`,`class`],[3,`pBind`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`,`src`],[3,`error`,`pBind`,`src`]],template:function(n,e){n&1&&(uS(),lS(0),Gb(1,O,2,5,`span`,0)(2,Y,2,1)),n&2&&(WI(),qb(e.label()?1:2))},dependencies:[hy,s_,Gn,Vs],encapsulation:2})}return a})();var ha=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=Wr({type:a});static ɵinj=Pn({imports:[aa,Gn,Gn]})}return a})();export{ha as n,aa as t};