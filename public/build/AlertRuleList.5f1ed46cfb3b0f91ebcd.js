"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4286],{53852:(e,a,t)=>{t.r(a),t.d(a,{AlertRuleListUnconnected:()=>E,default:()=>H});var n,s=t(68404),r=t(36635),i=t(80795),l=t(65737),o=t(39106),c=t(70917),u=t(8006),h=t(54761),d=t(2247),g=t(37417),p=t(8105),f=t(78941),x=t(45916);function m(e){let{onDismiss:a}=e;return(0,x.jsx)(f.u,{title:"Adding an Alert",isOpen:!0,onDismiss:a,onClickBackdrop:a,children:n||(n=(0,x.jsxs)(h.wc,{spacing:"sm",children:[(0,x.jsx)("img",{src:"public/img/alert_howto_new.png",alt:""}),(0,x.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),(0,x.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}var j=t(94130),v=t.n(j),y=t(1129),b=t(99500);const w=e=>{let{rule:a,search:t,onTogglePause:n}=e;const r=`${a.url}?editPanel=${a.panelId}&tab=alert`,i=(0,s.useCallback)((e=>(0,x.jsx)(v(),{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[t]},e)),[t]);return(0,x.jsxs)(y.Z,{children:[(0,x.jsx)(y.Z.Heading,{children:i(a.name)}),(0,x.jsx)(y.Z.Figure,{children:(0,x.jsx)(b.J,{size:"xl",name:a.stateIcon,className:`alert-rule-item__icon ${a.stateClass}`})}),(0,x.jsxs)(y.Z.Meta,{children:[(0,x.jsxs)("span",{children:[(0,x.jsxs)("span",{className:`${a.stateClass}`,children:[i(a.stateText)," "]},"text"),"for ",a.stateAge]},"state"),a.info?i(a.info):null]}),(0,x.jsxs)(y.Z.Actions,{children:[(0,x.jsx)(u.zx,{variant:"secondary",icon:"paused"===a.state?"play":"pause",onClick:n,children:"paused"===a.state?"Resume":"Pause"},"play"),(0,x.jsx)(u.Qj,{variant:"secondary",href:r,icon:"cog",children:"Edit alert"},"edit")]})]})};var A,C=t(2843);const R=()=>A||(A=(0,x.jsxs)(C.b,{severity:"warning",title:"Grafana legacy alerting is going away soon",children:[(0,x.jsxs)("p",{children:["You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.",(0,x.jsx)("br",{}),"We encourage you to upgrade to the new Grafana Alerting experience."]}),(0,x.jsxs)("p",{children:["See"," ",(0,x.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",children:"What’s New with Grafana Alerting"})," ","to learn more about what‘s new or learn"," ",(0,x.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",children:"how to enable the new Grafana Alerting feature"}),"."]})]}));var P=t(45173),N=t(82983);const S=e=>e.searchQuery,k=e=>{const a=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter((e=>a.test(e.name)||a.test(e.stateText)||a.test(e.info)))};var T,$,F,O;function _(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const Q={getAlertRulesAsync:P.Au,setSearchQuery:N.ql,togglePauseAlertRule:P.en},G=(0,r.connect)((function(e){return{alertRules:k(e),search:S(e.alertRules),isLoading:e.alertRules.isLoading}}),Q);class E extends s.PureComponent{constructor(){super(...arguments),_(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),_(this,"onStateFilterChanged",(e=>{i.E1.partial({state:e.value})})),_(this,"onOpenHowTo",(()=>{d.Z.publish(new p.Dn({component:m}))})),_(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),_(this,"onTogglePause",(e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})})),_(this,"alertStateFilterOption",(e=>{let{text:a,value:t}=e;return(0,x.jsx)("option",{value:t,children:a},t)}))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{alertRules:e,search:a,isLoading:t}=this.props;return(0,x.jsx)(g.T,{navId:"alert-list",children:(0,x.jsxs)(g.T.Contents,{isLoading:t,children:[(0,x.jsxs)("div",{className:"page-action-bar",children:[(0,x.jsx)("div",{className:"gf-form gf-form--grow",children:(0,x.jsx)(o.H,{placeholder:"Search alerts",value:a,onChange:this.onSearchQueryChange})}),(0,x.jsxs)("div",{className:"gf-form",children:[T||(T=(0,x.jsx)("label",{className:"gf-form-label",htmlFor:"alert-state-filter",children:"States"})),(0,x.jsx)("div",{className:"width-13",children:(0,x.jsx)(c.Ph,{inputId:"alert-state-filter",options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),$||($=(0,x.jsx)("div",{className:"page-action-bar__spacer"})),l.v.unifiedAlertingEnabled&&(F||(F=(0,x.jsx)(u.Qj,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),(0,x.jsx)(u.zx,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),O||(O=(0,x.jsx)(R,{})),(0,x.jsx)(h.wc,{spacing:"none",children:e.map((e=>(0,x.jsx)(w,{rule:e,search:a,onTogglePause:()=>this.onTogglePause(e)},e.id)))})]})})}}const H=G(E)},45173:(e,a,t)=>{t.d(a,{Au:()=>o,C2:()=>u,c1:()=>d,en:()=>c,fA:()=>g,fg:()=>h,tk:()=>p});var n=t(93570),s=t(80795),r=t(93686),i=t(47900),l=t(82983);function o(e){return async a=>{a((0,l.gz)());const t=await(0,n.i)().get("/api/alerts",e);a((0,l.Oc)(t))}}function c(e,a){return async t=>{await(0,n.i)().post(`/api/alerts/${e}/pause`,a);t(o({state:(s.E1.getSearchObject().state||"all").toString()}))}}function u(e){return async a=>{try{await(0,n.i)().post("/api/alert-notifications",e),a((0,r.$l)((0,i.AT)("Notification created"))),s.E1.push("/alerting/notifications")}catch(e){(0,n.kW)(e)&&a((0,r.$l)((0,i.t_)(e.data.error)))}}}function h(e){return async a=>{try{await(0,n.i)().put(`/api/alert-notifications/${e.id}`,e),a((0,r.$l)((0,i.AT)("Notification updated")))}catch(e){(0,n.kW)(e)&&a((0,r.$l)((0,i.t_)(e.data.error)))}}}function d(e){return async(a,t)=>{const s=t().notificationChannel.notificationChannel;await(0,n.i)().post("/api/alert-notifications/test",Object.assign({id:s.id},e))}}function g(){return async e=>{const a=(await(0,n.i)().get("/api/alert-notifiers")).sort(((e,a)=>e.name>a.name?1:-1));e((0,l.T2)(a))}}function p(e){return async a=>{await a(g());const t=await(0,n.i)().get(`/api/alert-notifications/${e}`);a((0,l.K)(t))}}}}]);
//# sourceMappingURL=AlertRuleList.5f1ed46cfb3b0f91ebcd.js.map