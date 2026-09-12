import{At as YS,B as La,Ct as Wr,Gn as s_,In as qb,It as _d,J as Nb,Kt as c_,Lt as aS,Nn as pv,U as M,Vn as rv,W as MS,X as Od,Xn as tv,Zn as uS,Zt as fS,_n as lS,b as Fa,c as Ba,cn as iv,dn as jd,dt as UV,f as D,ir as wa,jn as p,ln as jS,m as Di,nt as Pn,on as hy,ot as Rv,pr as za,pt as Ud,tt as Pg,w as Gb,yt as WI}from"./chunk-FhScA4IO.js";import{M as Vs,Q as ji,g as Gn,j as Vn,k as U$1,v as Gt}from"./main-B4CH6ORE.js";var U=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&Fa(0,`span`,3),e&2){let t=aS(2);MS(t.cx(`icon`)),iv(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&Gb(0,ee,1,4,`span`,2),e&2)qb(aS().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&rv(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(wa(0,`span`,4),rv(1,oe,1,0,null,5),Od()),e&2){let t=aS();MS(t.cx(`icon`)),iv(`pBind`,t.ptm(`icon`)),WI(),iv(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends U$1{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=Pg(e)))(n||e)}})();static ɵprov=M({token:e,factory:e.ɵfac})}return e})();var X=new D(`TAG_INSTANCE`);var re=(()=>{class e extends Gt{componentName=`Tag`;$pcTag=p(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=za();severity=za();value=za();icon=za();rounded=za(!1,{transform:Di});iconTemplate;templates=UV(Vn);_iconTemplate;_componentStyle=p(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=Pg(e)))(n||e)}})();static ɵcmp=_d({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(pv(C,n.templates,Vn,4),Ba(C,Y,4)),o&2){fS();let _;jd(_=Ud())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(La(`data-p`,n.dataP),MS(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[YS([W,{provide:X,useExisting:e},{provide:ji,useExisting:e}]),Nb([Vs]),tv],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(uS(),lS(0),Gb(1,te,1,1),Gb(2,ie,2,4,`span`,0),wa(3,`span`,1),jS(4),Od()),o&2&&(WI(),qb(!n.iconTemplate&&!n._iconTemplate?1:-1),WI(),qb(n.iconTemplate||n._iconTemplate?2:-1),WI(),MS(n.cx(`label`)),iv(`pBind`,n.ptm(`label`)),WI(),Rv(n.value()))},dependencies:[hy,s_,c_,Gn,Vs],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=Wr({type:e});static ɵinj=Pn({imports:[re,Gn,Gn]})}return e})();export{re as n,ke as t};