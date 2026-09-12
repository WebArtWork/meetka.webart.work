import{At as YS,Bn as re$1,Ct as Wr,In as qb,It as _d,J as Nb,Kt as c_,Lt as aS,Nn as pv,U as M,Vn as rv,W as MS,X as Od,Xn as tv,Zn as uS,Zt as fS,_n as lS,c as Ba,cn as iv,dn as jd,dt as UV,f as D,ir as wa,jn as p,kn as ol,l as Bd,ln as jS,lt as TS,nt as Pn,on as hy,pr as za,pt as Ud,qt as cv,tt as Pg,un as jV,w as Gb,yt as WI}from"./chunk-FhScA4IO.js";import{$ as jn,M as Vs,Q as ji,R as ae$1,_ as Gs,g as Gn,j as Vn,k as U,p as Bn,v as Gt}from"./main-B4CH6ORE.js";var ee=`
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
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&cv(0)}function se(t,r){if(t&1&&(wa(0,`div`,1),lS(1,1),rv(2,pe,1,0,`ng-container`,2),Od()),t&2){let e=aS();MS(e.cx(`header`)),iv(`pBind`,e.ptm(`header`)),WI(2),iv(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&jS(0),t&2)Bd(` `,aS(2).header(),` `)}function ue(t,r){t&1&&cv(0)}function fe(t,r){if(t&1&&(wa(0,`div`,1),Gb(1,me,1,1),rv(2,ue,1,0,`ng-container`,2),Od()),t&2){let e=aS();MS(e.cx(`title`)),iv(`pBind`,e.ptm(`title`)),WI(),qb(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),WI(),iv(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&jS(0),t&2)Bd(` `,aS(2).subheader(),` `)}function he(t,r){t&1&&cv(0)}function ye(t,r){if(t&1&&(wa(0,`div`,1),Gb(1,_e,1,1),rv(2,he,1,0,`ng-container`,2),Od()),t&2){let e=aS();MS(e.cx(`subtitle`)),iv(`pBind`,e.ptm(`subtitle`)),WI(),qb(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),WI(),iv(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&cv(0)}function ge(t,r){t&1&&cv(0)}function be(t,r){if(t&1&&(wa(0,`div`,1),lS(1,2),rv(2,ge,1,0,`ng-container`,2),Od()),t&2){let e=aS();MS(e.cx(`footer`)),iv(`pBind`,e.ptm(`footer`)),WI(2),iv(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends U{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Pg(t)))(n||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var ne=new D(`CARD_INSTANCE`);var Me=(()=>{class t extends Gt{componentName=`Card`;$pcCard=p(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Vs,{self:!0});_componentStyle=p(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=za();subheader=za();style=za();styleClass=za();headerFacet=jV(Bn);footerFacet=jV(jn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=jV(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=re$1(null);constructor(){super(),ol(()=>{let e=this.style();ae$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=UV(Vn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=_d({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(pv(l,n.headerFacet,Bn,5)(l,n.footerFacet,jn,5)(l,n.contentTemplate,ie,4)(l,n.templates,Vn,4),Ba(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){fS(4);let d;jd(d=Ud())&&(n.headerTemplate=d.first),jd(d=Ud())&&(n.titleTemplate=d.first),jd(d=Ud())&&(n.subtitleTemplate=d.first),jd(d=Ud())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(TS(n._style()),MS(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[YS([te,{provide:ne,useExisting:t},{provide:ji,useExisting:t}]),Nb([Vs]),tv],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(uS(de),Gb(0,se,3,4,`div`,0),wa(1,`div`,1),Gb(2,fe,3,5,`div`,0),Gb(3,ye,3,5,`div`,0),wa(4,`div`,1),lS(5),rv(6,Te,1,0,`ng-container`,2),Od(),Gb(7,be,3,4,`div`,0),Od()),i&2&&(qb(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),WI(),MS(n.cx(`body`)),iv(`pBind`,n.ptm(`body`)),WI(),qb(n.header()||n.titleTemplate||n._titleTemplate?2:-1),WI(),qb(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),WI(),MS(n.cx(`content`)),iv(`pBind`,n.ptm(`content`)),WI(2),iv(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),WI(),qb(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[hy,c_,Gn,Gs,Vs],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Wr({type:t});static ɵinj=Pn({imports:[Me,Gn,Gs,Gn,Gs]})}return t})();export{Ve as n,Me as t};