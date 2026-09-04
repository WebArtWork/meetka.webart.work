import{$t as b,An as hI,C as FI,Dn as gI,En as g,Gn as lh,Gr as yI,Gt as Zv,Kt as _E,Lr as vr,Ot as WL,Pr as vI,Q as OI,Qt as au,Rn as ji,Sn as fh,St as UL,T as GI,Tn as fu,Vt as Yp,X as O,Yn as mC,Z as OE,b as Ed,ct as Qi,en as bf,er as nw,fn as di,fr as qL,g as DI,it as QE,mr as qp,tr as oh,un as dC,xn as fI,yn as eh,z as KE}from"./chunk-BJUcq1-u.js";import{$ as jn,M as Vs,Q as ji$1,R as ae$1,_ as Gs,g as Gn,j as Vn,k as U,p as Bn,v as Gt}from"./main-M7WPMAZU.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&oh(0)}function se(t,r){if(t&1&&(ji(0,`div`,1),gI(1,1),Yp(2,pe,1,0,`ng-container`,2),au()),t&2){let e=fI();FI(e.cx(`header`)),eh(`pBind`,e.ptm(`header`)),Zv(2),eh(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&GI(0),t&2)fu(` `,fI(2).header(),` `)}function ue(t,r){t&1&&oh(0)}function fe(t,r){if(t&1&&(ji(0,`div`,1),QE(1,me,1,1),Yp(2,ue,1,0,`ng-container`,2),au()),t&2){let e=fI();FI(e.cx(`title`)),eh(`pBind`,e.ptm(`title`)),Zv(),KE(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),Zv(),eh(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&GI(0),t&2)fu(` `,fI(2).subheader(),` `)}function he(t,r){t&1&&oh(0)}function ye(t,r){if(t&1&&(ji(0,`div`,1),QE(1,_e,1,1),Yp(2,he,1,0,`ng-container`,2),au()),t&2){let e=fI();FI(e.cx(`subtitle`)),eh(`pBind`,e.ptm(`subtitle`)),Zv(),KE(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),Zv(),eh(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&oh(0)}function ge(t,r){t&1&&oh(0)}function be(t,r){if(t&1&&(ji(0,`div`,1),gI(1,2),Yp(2,ge,1,0,`ng-container`,2),au()),t&2){let e=fI();FI(e.cx(`footer`)),eh(`pBind`,e.ptm(`footer`)),Zv(2),eh(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends U{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=bf(t)))(n||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var ne=new b(`CARD_INSTANCE`);var Me=(()=>{class t extends Gt{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Vs,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=UL();subheader=UL();style=UL();styleClass=UL();headerFacet=WL(Bn);footerFacet=WL(jn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=WL(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=di(null);constructor(){super(),Ed(()=>{let e=this.style();ae$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=qL(Vn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=_E({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(fh(l,n.headerFacet,Bn,5)(l,n.footerFacet,jn,5)(l,n.contentTemplate,ie,4)(l,n.templates,Vn,4),lh(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){DI(4);let d;yI(d=vI())&&(n.headerTemplate=d.first),yI(d=vI())&&(n.titleTemplate=d.first),yI(d=vI())&&(n.subtitleTemplate=d.first),yI(d=vI())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(OI(n._style()),FI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[nw([te,{provide:ne,useExisting:t},{provide:ji$1,useExisting:t}]),OE([Vs]),qp],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(hI(de),QE(0,se,3,4,`div`,0),ji(1,`div`,1),QE(2,fe,3,5,`div`,0),QE(3,ye,3,5,`div`,0),ji(4,`div`,1),gI(5),Yp(6,Te,1,0,`ng-container`,2),au(),QE(7,be,3,4,`div`,0),au()),i&2&&(KE(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),Zv(),FI(n.cx(`body`)),eh(`pBind`,n.ptm(`body`)),Zv(),KE(n.header()||n.titleTemplate||n._titleTemplate?2:-1),Zv(),KE(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),Zv(),FI(n.cx(`content`)),eh(`pBind`,n.ptm(`content`)),Zv(2),eh(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Zv(),KE(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[mC,dC,Gn,Gs,Vs],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Qi({type:t});static ɵinj=vr({imports:[Me,Gn,Gs,Gn,Gs]})}return t})();export{Ve as n,Me as t};