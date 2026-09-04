import{$t as b,An as hI,C as FI,Dn as gI,En as g,Gn as lh,Gr as yI,Gt as Zv,K as Mh,Kt as _E,Lr as vr,Or as uC,Pr as vI,Qt as au,R as Jp,Rn as ji,Sn as fh,St as UL,T as GI,Vt as Yp,X as O,Yn as mC,Z as OE,ct as Qi,en as bf,er as nw,fr as qL,g as DI,it as QE,kt as Ww,mr as qp,un as dC,wr as th,xn as fI,yn as eh,z as KE}from"./chunk-BJUcq1-u.js";import{M as Vs,Q as ji$1,g as Gn,j as Vn,k as U$1,v as Gt}from"./main-M7WPMAZU.js";var U=`
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
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&th(0,`span`,3),e&2){let t=fI(2);FI(t.cx(`icon`)),eh(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&QE(0,ee,1,4,`span`,2),e&2)KE(fI().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&Yp(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(ji(0,`span`,4),Yp(1,oe,1,0,null,5),au()),e&2){let t=fI();FI(t.cx(`icon`)),eh(`pBind`,t.ptm(`icon`)),Zv(),eh(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends U$1{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(e)))(n||e)}})();static ɵprov=O({token:e,factory:e.ɵfac})}return e})();var X=new b(`TAG_INSTANCE`);var re=(()=>{class e extends Gt{componentName=`Tag`;$pcTag=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=UL();severity=UL();value=UL();icon=UL();rounded=UL(!1,{transform:Ww});iconTemplate;templates=qL(Vn);_iconTemplate;_componentStyle=g(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=bf(e)))(n||e)}})();static ɵcmp=_E({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(fh(C,n.templates,Vn,4),lh(C,Y,4)),o&2){DI();let _;yI(_=vI())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(Jp(`data-p`,n.dataP),FI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[nw([W,{provide:X,useExisting:e},{provide:ji$1,useExisting:e}]),OE([Vs]),qp],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(hI(),gI(0),QE(1,te,1,1),QE(2,ie,2,4,`span`,0),ji(3,`span`,1),GI(4),au()),o&2&&(Zv(),KE(!n.iconTemplate&&!n._iconTemplate?1:-1),Zv(),KE(n.iconTemplate||n._iconTemplate?2:-1),Zv(),FI(n.cx(`label`)),eh(`pBind`,n.ptm(`label`)),Zv(),Mh(n.value()))},dependencies:[mC,uC,dC,Gn,Vs],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=Qi({type:e});static ɵinj=vr({imports:[re,Gn,Gn]})}return e})();export{re as n,ke as t};