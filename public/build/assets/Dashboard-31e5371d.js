import{B as _}from"./Authenticated-8ae6b849.js";import{H as h,s as l,o as s,g as o,a as n,w as b,F as d,d as t,t as a,k as i,y as m}from"./app-4a53f3bf.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const p={components:{BreezeAuthenticatedLayout:_,Head:h},props:{success:String,JobCards:Object}},f={class:"content-wrapper"},g=t("div",{class:"content-header"},[t("div",{class:"container-fluid"},[t("div",{class:"row mb-2"},[t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"}," Dashboard ")]),t("div",{class:"col-sm-6"},[t("ol",{class:"breadcrumb float-sm-right"},[t("li",{class:"breadcrumb-item"},"Home"),t("li",{class:"breadcrumb-item active"},"Dashboard")])])])])],-1),x={class:"content"},y={class:"container-fluid"},w={class:"row"},k={class:"col-lg-12 connectedSortable"},C={class:"py-6"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},D={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},J={class:"p-4 bg-white border-b border-gray-200"},S={key:0,class:"p-2 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800",role:"alert"},H=t("div",{class:"card-header"},[t("div",{class:"flex justify-between"},[t("h4",{class:"card-title"},"Jobcards Progress")])],-1),N={class:"card-body p-0 text-sm"},A={class:"table table-sm"},L=t("thead",{class:"font-semibold"},[t("tr",null,[t("th",null,"Jobcard Name"),t("th",null,"Site"),t("th",null,"Start Date"),t("th",null,"Current Main Activity"),t("th",null,"Current Sub activity"),t("th",null,"Percentage")])],-1),j=t("td",null,"4%",-1),z={key:0,class:"text-xs font-serif pt-3 text-center"};function V(F,P,c,E,M,O){const r=l("Head"),u=l("BreezeAuthenticatedLayout");return s(),o(d,null,[n(r,{title:"Dashboard"}),n(u,null,{default:b(()=>[t("div",f,[g,t("section",x,[t("div",y,[t("div",w,[t("section",k,[t("div",C,[t("div",B,[t("div",D,[t("div",J,[c.success?(s(),o("div",S,a(c.success),1)):i("",!0),H,t("div",N,[t("table",A,[L,t("tbody",null,[(s(!0),o(d,null,m(c.JobCards,e=>(s(),o("tr",{key:e.id},[t("td",null,a(e.job_card_number),1),t("td",null,a(e.site),1),t("td",null,a(e.childactivity.parent.parent_title),1),t("td",null,a(e.childactivity.child_title),1),j]))),128))]),c.JobCards==null?(s(),o("div",z," No Jobcards in progress. check back soon ")):i("",!0)])])])])])])])])])])])]),_:1})],64)}const K=v(p,[["render",V]]);export{K as default};
