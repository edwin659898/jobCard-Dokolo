import{B as f}from"./Authenticated-8ae6b849.js";import{H as g,q as b,s as p,o as s,g as l,a as x,w,F as d,d as t,t as r,k as u,f as k,h as T,V as D,y as _,e as H}from"./app-4a53f3bf.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const E={components:{BreezeAuthenticatedLayout:f,Head:g},props:{success:String,ParentActivity:Object,Trees:Object,Tree:String,JobCard:Object},data(){return{tree:this.$props.Tree}},methods:{search(){b.Inertia.get(route("view.report",{id:this.$props.ParentActivity.id,item:this.$props.JobCard,Tree:this.tree},{preserveState:!0,replace:!0}))},ExcelExport(){b.Inertia.get(route("excel.export",{id:this.$props.ParentActivity.id,item:this.$props.JobCard,Tree:this.tree},{preserveState:!0,replace:!0}))},format_date(h){if(h)return moment(String(h)).format("DD-MM-YYYY, HH:mm")}}},A={class:"content-wrapper"},C=t("div",{class:"content-header"},[t("div",{class:"container-fluid"},[t("div",{class:"row mb-2"},[t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"}," Dashboard ")]),t("div",{class:"col-sm-6"},[t("ol",{class:"breadcrumb float-sm-right"},[t("li",{class:"breadcrumb-item"},"Home"),t("li",{class:"breadcrumb-item active"},"Dashboard")])])])])],-1),L={class:"content"},M={class:"container-fluid"},B={class:"row"},j={class:"col-lg-12 connectedSortable"},N={class:"py-6"},V={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},I={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},Y={class:"p-4 bg-white border-b border-gray-200"},q={key:0,class:"p-2 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800",role:"alert"},z={class:"border-b px-4 py-3 flex justify-between"},F={class:"card-title"},J=t("option",{value:""},"-- Filter by Tree --",-1),O=["value"],P={class:"card-body"},Q={key:0,class:"text-xs mt-1 text-blue-500"},K={key:1,class:"text-xs mt-1 text-red-500"},U={key:0,class:"mt-1 px-3 py-2"},G={class:"table-responsive"},R={class:"table table-hover text-nowrap mt-6"},W=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Tree Number"),t("th",null,"Quantity (Kg)"),t("th",null,"Start time"),t("th",null,"End time")])],-1),X={key:1,class:"mt-1 px-3 py-2"},Z={class:"table-responsive"},$={class:"table table-hover text-nowrap mt-6"},tt=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Name"),t("th",null,"Quantity"),t("th",null,"uom"),t("th",null,"Start time"),t("th",null,"End time")])],-1),et={key:2,class:"flex justify-center"},st={class:"block bg-white text-center"},lt={class:"p-6"},rt=t("p",{class:"text-gray-700 text-xs mb-2"}," Persons who signed ",-1),nt={key:0,class:"flex justify-between items-center space-x-2"},ot=["innerHTML"],at=["innerHTML"];function dt(h,o,i,it,m,a){const v=p("Head"),y=p("BreezeAuthenticatedLayout");return s(),l(d,null,[x(v,{title:"Dashboard"}),x(y,null,{default:w(()=>[t("div",A,[C,t("section",L,[t("div",M,[t("div",B,[t("section",j,[t("div",N,[t("div",V,[t("div",I,[t("div",Y,[i.success?(s(),l("div",q,r(i.success),1)):u("",!0),t("div",z,[t("h4",F,r(i.ParentActivity.parent_title),1),t("button",{onClick:o[0]||(o[0]=k(e=>a.ExcelExport(),["prevent"])),class:"btn btn-success mr-1 cursor-pointer"},"Export"),T(t("select",{"onUpdate:modelValue":o[1]||(o[1]=e=>m.tree=e),onChange:o[2]||(o[2]=e=>a.search()),class:"form-control text-sm w-64"},[J,(s(!0),l(d,null,_(i.Trees,e=>(s(),l("option",{key:e.id,value:e.id},r(e.tree_number),9,O))),128))],544),[[D,m.tree]])]),t("div",P,[(s(!0),l(d,null,_(i.ParentActivity.childs,e=>(s(),l("div",{key:e.id,class:"block p-6 bg-white border border-gray-200 rounded-lg shadow mt-2"},[t("div",null,[H(r(e.child_title)+" ",1),e.timelines.length?(s(),l("span",Q," Start Date: "+r(e.timelines[0].start_date)+" End Date: "+r(e.timelines[0].end_date),1)):(s(),l("span",K," This activity has not been done yet "))]),e.stocks.length?(s(),l("div",U,[t("div",G,[t("table",R,[W,t("tbody",null,[(s(!0),l(d,null,_(e.stocks,(n,c)=>(s(),l("tr",{key:c},[t("td",null,r(c+1),1),t("td",null,r(n.fruit.tree.tree_number),1),t("td",null,r(n.quantity),1),t("td",null,r(a.format_date(n.created_at)),1),t("td",null,r(a.format_date(n.updated_at)),1)]))),128))])])])])):u("",!0),e.bed_preparation.length?(s(),l("div",X,[t("div",Z,[t("table",$,[tt,t("tbody",null,[(s(!0),l(d,null,_(e.bed_preparation,(n,c)=>(s(),l("tr",{key:c},[t("td",null,r(c+1),1),t("td",null,r(n.name),1),t("td",null,r(n.quantity),1),t("td",null,r(n.uom),1),t("td",null,r(a.format_date(n.created_at)),1),t("td",null,r(a.format_date(n.updated_at)),1)]))),128))])])])])):u("",!0),e.timelines.length?(s(),l("div",et,[t("div",st,[t("div",lt,[rt,(s(!0),l(d,null,_(e.signatures,n=>(s(),l("div",{key:n.id},[e.id==n.child_activity_id?(s(),l("div",nt,[t("label",{class:"mt-2.5 text-xs font-bold",innerHTML:n.role.role},null,8,ot),t("p",{class:"text-gray-400",innerHTML:n.user.name},null,8,at)])):u("",!0)]))),128))])])])):u("",!0)]))),128))])])])])])])])])])])]),_:1})],64)}const ht=S(E,[["render",dt]]);export{ht as default};
