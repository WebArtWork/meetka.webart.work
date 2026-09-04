import{$t as b,An as hI,C as FI,D as Gf,Dn as gI,En as g,Gn as lh,Gr as yI,Gt as Zv,Jt as aI,K as Mh,Kt as _E,L as Jl,Lr as vr,Or as uC,Pr as vI,Pt as Xl,Q as OI,Qt as au,R as Jp,Rn as ji,Rr as vw,Sn as fh,St as UL,T as GI,Vt as Yp,Wn as ld,X as O,Xt as ah,Yn as mC,Z as OE,ct as Qi,en as bf,er as nw,fr as qL,g as DI,it as QE,kt as Ww,mr as qp,n as $L,un as dC,wr as th,xn as fI,yn as eh,z as KE}from"./chunk-BJUcq1-u.js";import{M as Vs,Q as ji$1,S as Kn,g as Gn,j as Vn,k as U,t as L,v as Gt}from"./main-M7WPMAZU.js";var se=[{id:`tech`,label:`Technology`,icon:`desktop`},{id:`startups`,label:`Startups`,icon:`sparkles`},{id:`design`,label:`Design`,icon:`palette`},{id:`books`,label:`Books`,icon:`book`},{id:`languages`,label:`Languages`,icon:`globe`},{id:`music`,label:`Music`,icon:`volume-up`},{id:`art`,label:`Art`,icon:`image`},{id:`sports`,label:`Sports`,icon:`bolt`},{id:`travel`,label:`Travel`,icon:`compass`},{id:`photography`,label:`Photography`,icon:`camera`},{id:`gaming`,label:`Gaming`,icon:`android`},{id:`networking`,label:`Networking`,icon:`users`},{id:`wellness`,label:`Wellness`,icon:`heart`},{id:`food`,label:`Food & Drink`,icon:`shopping-bag`},{id:`science`,label:`Science`,icon:`bookmark`}];function de(i){return se.find(a=>a.id===i)}function Me(i){return i.map(a=>de(a)).filter(a=>!!a)}var re=`
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
`;var pe=[`removeicon`];var me=[`*`];function ue(i,a){if(i&1){let e=aI();ji(0,`img`,2),ah(`error`,function(n){Xl(e);return Jl(fI().imageError(n))}),au()}if(i&2){let e=fI();FI(e.cx(`image`)),eh(`pBind`,e.ptm(`image`))(`src`,e.resolvedImage(),Gf)(`alt`,e.resolvedAlt())}}function _e(i,a){if(i&1&&th(0,`span`,4),i&2){let e=fI(2);FI(e.resolvedIcon()),eh(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function ge(i,a){if(i&1&&QE(0,_e,1,4,`span`,3),i&2)KE(fI().resolvedIcon()?0:-1)}function ve(i,a){if(i&1&&(ji(0,`div`,5),GI(1),au()),i&2){let e=fI();FI(e.cx(`label`)),eh(`pBind`,e.ptm(`label`)),Zv(),Mh(e.resolvedLabel())}}function he(i,a){if(i&1){let e=aI();ji(0,`span`,9),ah(`click`,function(n){Xl(e);return Jl(fI(3).close(n))})(`keydown`,function(n){Xl(e);return Jl(fI(3).onKeydown(n))}),au()}if(i&2){let e=fI(3);FI(e.resolvedRemoveIcon()),eh(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),Jp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function be(i,a){if(i&1){let e=aI();ld(),ji(0,`svg`,10),ah(`click`,function(n){Xl(e);return Jl(fI(3).close(n))})(`keydown`,function(n){Xl(e);return Jl(fI(3).onKeydown(n))}),au()}if(i&2){let e=fI(3);FI(e.cx(`removeIcon`)),eh(`pBind`,e.ptm(`removeIcon`)),Jp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function Ce(i,a){if(i&1&&(QE(0,he,1,6,`span`,7),QE(1,be,1,5,`:svg:svg`,8)),i&2){let e=fI(2);KE(e.resolvedRemoveIcon()?0:-1),Zv(),KE(e.resolvedRemoveIcon()?-1:1)}}function fe(i,a){}function xe(i,a){i&1&&Yp(0,fe,0,0,`ng-template`)}function ye(i,a){if(i&1){let e=aI();ji(0,`span`,11),ah(`click`,function(n){Xl(e);return Jl(fI(2).close(n))})(`keydown`,function(n){Xl(e);return Jl(fI(2).onKeydown(n))}),Yp(1,xe,1,0,null,12),au()}if(i&2){let e=fI(2);FI(e.cx(`removeIcon`)),eh(`pBind`,e.ptm(`removeIcon`)),Jp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel),Zv(),eh(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function Ie(i,a){if(i&1&&(QE(0,Ce,2,2),QE(1,ye,2,6,`span`,6)),i&2){let e=fI();KE(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),Zv(),KE(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}var we={root:({instance:i})=>({display:!i.visible&&`none`})};var Te={root:({instance:i})=>[`p-chip p-component`,{"p-disabled":i.disabled()}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var le=(()=>{class i extends U{name=`chip`;style=re;classes=Te;inlineStyles=we;static ɵfac=(()=>{let e;return function(n){return(e||(e=bf(i)))(n||i)}})();static ɵprov=O({token:i,factory:i.ɵfac})}return i})();var ce=new b(`CHIP_INSTANCE`);var ke=(()=>{class i extends Gt{componentName=`Chip`;$pcChip=g(ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=UL();icon=UL();image=UL();alt=UL();styleClass=UL();disabled=UL(!1,{transform:Ww});removable=UL(!1,{transform:Ww});removeIcon=UL();onRemove=$L();onImageError=$L();visible=!0;get removeAriaLabel(){return this.config.getTranslation(Kn.ARIA).removeLabel}chipProps=UL();resolvedLabel=vw(()=>this.chipProps()?.label??this.label());resolvedIcon=vw(()=>this.chipProps()?.icon??this.icon());resolvedImage=vw(()=>this.chipProps()?.image??this.image());resolvedAlt=vw(()=>this.chipProps()?.alt??this.alt());resolvedStyleClass=vw(()=>this.chipProps()?.styleClass??this.styleClass());resolvedRemovable=vw(()=>this.chipProps()?.removable??this.removable());resolvedRemoveIcon=vw(()=>this.chipProps()?.removeIcon??this.removeIcon());_componentStyle=g(le);removeIconTemplate;templates=qL(Vn);_removeIconTemplate;onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){e.key===`Enter`||e.key===`Backspace`?this.close(e):(e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),this.close(e))}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.resolvedRemovable()})}static ɵfac=(()=>{let e;return function(n){return(e||(e=bf(i)))(n||i)}})();static ɵcmp=_E({type:i,selectors:[[`p-chip`]],contentQueries:function(t,n,r){if(t&1&&(fh(r,n.templates,Vn,4),lh(r,pe,4)),t&2){DI();let N;yI(N=vI())&&(n.removeIconTemplate=N.first)}},hostVars:6,hostBindings:function(t,n){t&2&&(Jp(`aria-label`,n.resolvedLabel())(`data-p`,n.dataP),OI(n.sx(`root`)),FI(n.cn(n.cx(`root`),n.resolvedStyleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],alt:[1,`alt`],styleClass:[1,`styleClass`],disabled:[1,`disabled`],removable:[1,`removable`],removeIcon:[1,`removeIcon`],chipProps:[1,`chipProps`]},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[nw([le,{provide:ce,useExisting:i},{provide:ji$1,useExisting:i}]),OE([Vs]),qp],ngContentSelectors:me,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(t,n){t&1&&(hI(),gI(0),QE(1,ue,1,5,`img`,0)(2,ge,1,1),QE(3,ve,2,4,`div`,1),QE(4,Ie,2,2)),t&2&&(Zv(),KE(n.resolvedImage()?1:2),Zv(2),KE(n.resolvedLabel()?3:-1),Zv(),KE(n.resolvedRemovable()?4:-1))},dependencies:[mC,uC,dC,L,Gn,Vs],encapsulation:2})}return i})();var Ue=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Qi({type:i});static ɵinj=vr({imports:[ke,Gn,Gn]})}return i})();export{se as i,Ue as n,ke as r,Me as t};