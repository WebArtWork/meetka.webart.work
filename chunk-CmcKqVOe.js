import{$ as PV,At as YS,B as La,Cn as nS,Ct as Wr,Gn as s_,In as qb,It as _d,J as Nb,Kt as c_,Lt as aS,Nn as pv,U as M,Vn as rv,W as MS,Wt as bp,X as Od,Xn as tv,Yn as tm,Zn as uS,Zt as fS,_n as lS,b as Fa,c as Ba,cn as iv,dn as jd,dt as UV,en as fp,f as D,ft as Ua,in as hp,ir as wa,jn as p,ln as jS,lt as TS,m as Di,nr as vi,nt as Pn,on as hy,ot as Rv,pr as za,pt as Ud,tt as Pg,w as Gb,yt as WI}from"./chunk-FhScA4IO.js";import{M as Vs,Q as ji,S as Kn,g as Gn,j as Vn,k as U,t as L,v as Gt}from"./main-B4CH6ORE.js";var re=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var se=[`removeicon`];var de=[`*`];function pe(i,r){if(i&1){let e=nS();wa(0,`img`,2),Ua(`error`,function(n){fp(e);return hp(aS().imageError(n))}),Od()}if(i&2){let e=aS();MS(e.cx(`image`)),iv(`pBind`,e.ptm(`image`))(`src`,e.resolvedImage(),tm)(`alt`,e.resolvedAlt())}}function me(i,r){if(i&1&&Fa(0,`span`,4),i&2){let e=aS(2);MS(e.resolvedIcon()),iv(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function _e(i,r){if(i&1&&Gb(0,me,1,4,`span`,3),i&2)qb(aS().resolvedIcon()?0:-1)}function ve(i,r){if(i&1&&(wa(0,`div`,5),jS(1),Od()),i&2){let e=aS();MS(e.cx(`label`)),iv(`pBind`,e.ptm(`label`)),WI(),Rv(e.resolvedLabel())}}function ue(i,r){if(i&1){let e=nS();wa(0,`span`,9),Ua(`click`,function(n){fp(e);return hp(aS(3).close(n))})(`keydown`,function(n){fp(e);return hp(aS(3).onKeydown(n))}),Od()}if(i&2){let e=aS(3);MS(e.resolvedRemoveIcon()),iv(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),La(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function he(i,r){if(i&1){let e=nS();bp(),wa(0,`svg`,10),Ua(`click`,function(n){fp(e);return hp(aS(3).close(n))})(`keydown`,function(n){fp(e);return hp(aS(3).onKeydown(n))}),Od()}if(i&2){let e=aS(3);MS(e.cx(`removeIcon`)),iv(`pBind`,e.ptm(`removeIcon`)),La(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function ge(i,r){if(i&1&&(Gb(0,ue,1,6,`span`,7),Gb(1,he,1,5,`:svg:svg`,8)),i&2){let e=aS(2);qb(e.resolvedRemoveIcon()?0:-1),WI(),qb(e.resolvedRemoveIcon()?-1:1)}}function Ce(i,r){}function fe(i,r){i&1&&rv(0,Ce,0,0,`ng-template`)}function be(i,r){if(i&1){let e=nS();wa(0,`span`,11),Ua(`click`,function(n){fp(e);return hp(aS(2).close(n))})(`keydown`,function(n){fp(e);return hp(aS(2).onKeydown(n))}),rv(1,fe,1,0,null,12),Od()}if(i&2){let e=aS(2);MS(e.cx(`removeIcon`)),iv(`pBind`,e.ptm(`removeIcon`)),La(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel),WI(),iv(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function xe(i,r){if(i&1&&(Gb(0,ge,2,2),Gb(1,be,2,6,`span`,6)),i&2){let e=aS();qb(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),WI(),qb(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}var ye={root:({instance:i})=>({display:!i.visible&&`none`})};var Ie={root:({instance:i})=>[`p-chip p-component`,{"p-disabled":i.disabled()}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var ce=(()=>{class i extends U{name=`chip`;style=re;classes=Ie;inlineStyles=ye;static ɵfac=(()=>{let e;return function(n){return(e||(e=Pg(i)))(n||i)}})();static ɵprov=M({token:i,factory:i.ɵfac})}return i})();var le=new D(`CHIP_INSTANCE`);var we=(()=>{class i extends Gt{componentName=`Chip`;$pcChip=p(le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=za();icon=za();image=za();alt=za();styleClass=za();disabled=za(!1,{transform:Di});removable=za(!1,{transform:Di});removeIcon=za();onRemove=PV();onImageError=PV();visible=!0;get removeAriaLabel(){return this.config.getTranslation(Kn.ARIA).removeLabel}chipProps=za();resolvedLabel=vi(()=>this.chipProps()?.label??this.label());resolvedIcon=vi(()=>this.chipProps()?.icon??this.icon());resolvedImage=vi(()=>this.chipProps()?.image??this.image());resolvedAlt=vi(()=>this.chipProps()?.alt??this.alt());resolvedStyleClass=vi(()=>this.chipProps()?.styleClass??this.styleClass());resolvedRemovable=vi(()=>this.chipProps()?.removable??this.removable());resolvedRemoveIcon=vi(()=>this.chipProps()?.removeIcon??this.removeIcon());_componentStyle=p(ce);removeIconTemplate;templates=UV(Vn);_removeIconTemplate;onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){e.key===`Enter`||e.key===`Backspace`?this.close(e):(e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),this.close(e))}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.resolvedRemovable()})}static ɵfac=(()=>{let e;return function(n){return(e||(e=Pg(i)))(n||i)}})();static ɵcmp=_d({type:i,selectors:[[`p-chip`]],contentQueries:function(t,n,a){if(t&1&&(pv(a,n.templates,Vn,4),Ba(a,se,4)),t&2){fS();let N;jd(N=Ud())&&(n.removeIconTemplate=N.first)}},hostVars:6,hostBindings:function(t,n){t&2&&(La(`aria-label`,n.resolvedLabel())(`data-p`,n.dataP),TS(n.sx(`root`)),MS(n.cn(n.cx(`root`),n.resolvedStyleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],alt:[1,`alt`],styleClass:[1,`styleClass`],disabled:[1,`disabled`],removable:[1,`removable`],removeIcon:[1,`removeIcon`],chipProps:[1,`chipProps`]},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[YS([ce,{provide:le,useExisting:i},{provide:ji,useExisting:i}]),Nb([Vs]),tv],ngContentSelectors:de,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(t,n){t&1&&(uS(),lS(0),Gb(1,pe,1,5,`img`,0)(2,_e,1,1),Gb(3,ve,2,4,`div`,1),Gb(4,xe,2,2)),t&2&&(WI(),qb(n.resolvedImage()?1:2),WI(2),qb(n.resolvedLabel()?3:-1),WI(),qb(n.resolvedRemovable()?4:-1))},dependencies:[hy,s_,c_,L,Gn,Vs],encapsulation:2})}return i})();var He=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Wr({type:i});static ɵinj=Pn({imports:[we,Gn,Gn]})}return i})();export{we as n,He as t};