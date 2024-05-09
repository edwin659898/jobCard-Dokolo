import{B as g}from"./Authenticated-8ae6b849.js";import{H as y,q as b,s as p,o as s,g as r,a as x,w,F as d,d as e,t as o,k as c,f as k,h as T,V as H,y as u,e as S}from"./app-4a53f3bf.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const A={components:{BreezeAuthenticatedLayout:g,Head:y},props:{success:String,ParentActivity:Object,Trees:Object,Tree:String,JobCard:Object},data(){return{tree:this.$props.Tree}},methods:{search(){b.Inertia.get(route("view.report",{id:this.$props.ParentActivity.id,item:this.$props.JobCard,Tree:this.tree},{preserveState:!0,replace:!0}))},ExcelExport(){b.Inertia.get(route("excel.export",{id:this.$props.ParentActivity.id,item:this.$props.JobCard,Tree:this.tree},{preserveState:!0,replace:!0}))},format_date(_){if(_)return moment(String(_)).format("DD-MM-YYYY, HH:mm")}}},C={class:"content-wrapper"},E=e("div",{class:"content-header"},[e("div",{class:"container-fluid"},[e("div",{class:"row mb-2"},[e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"}," Dashboard ")]),e("div",{class:"col-sm-6"},[e("ol",{class:"breadcrumb float-sm-right"},[e("li",{class:"breadcrumb-item"},"Home"),e("li",{class:"breadcrumb-item active"},"Dashboard")])])])])],-1),L={class:"content"},M={class:"container-fluid"},B={class:"row"},j={class:"col-lg-12 connectedSortable"},P={class:"py-6"},V={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},N={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},F={class:"p-4 bg-white border-b border-gray-200"},Y={key:0,class:"p-2 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800",role:"alert"},z={class:"border-b px-4 py-3 flex justify-between"},I={class:"card-title"},J=e("option",{value:""},"-- Filter by Tree --",-1),O=["value"],q={class:"card-body"},K={key:0,class:"text-xs mt-1 text-blue-500"},Q={key:1,class:"text-xs mt-1 text-red-500"},U={key:0,class:"mt-1 px-3 py-2"},G={class:"table-responsive"},R={class:"table table-hover text-nowrap mt-6"},W=e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Tree Number"),e("th",null,"Quantity (Kg)"),e("th",null,"Start time"),e("th",null,"End time")])],-1),X={key:1,class:"flex justify-center"},Z={class:"block bg-white text-center"},$={class:"p-6"},ee=e("p",{class:"text-gray-700 text-xs mb-2"}," Persons who signed ",-1),te={key:0,class:"flex justify-between items-center space-x-2"},se=["innerHTML"],re=["innerHTML"];function oe(_,l,a,ne,h,i){const v=p("Head"),f=p("BreezeAuthenticatedLayout");return s(),r(d,null,[x(v,{title:"Dashboard"}),x(f,null,{default:w(()=>[e("div",C,[E,e("section",L,[e("div",M,[e("div",B,[e("section",j,[e("div",P,[e("div",V,[e("div",N,[e("div",F,[a.success?(s(),r("div",Y,o(a.success),1)):c("",!0),e("div",z,[e("h4",I,o(a.ParentActivity.parent_title),1),e("button",{onClick:l[0]||(l[0]=k(t=>i.ExcelExport(),["prevent"])),class:"btn btn-success mr-1 cursor-pointer"},"Export"),T(e("select",{"onUpdate:modelValue":l[1]||(l[1]=t=>h.tree=t),onChange:l[2]||(l[2]=t=>i.search()),class:"form-control text-sm w-64"},[J,(s(!0),r(d,null,u(a.Trees,t=>(s(),r("option",{key:t.id,value:t.id},o(t.tree_number),9,O))),128))],544),[[H,h.tree]])]),e("div",q,[(s(!0),r(d,null,u(a.ParentActivity.childs,t=>(s(),r("div",{key:t.id,class:"block p-6 bg-white border border-gray-200 rounded-lg shadow mt-2"},[e("div",null,[S(o(t.child_title)+" ",1),t.timelines.length?(s(),r("span",K," Start Date: "+o(t.timelines[0].start_date)+" End Date: "+o(t.timelines[0].end_date),1)):(s(),r("span",Q," This activity has not been done yet "))]),t.stocks.length?(s(),r("div",U,[e("div",G,[e("table",R,[W,e("tbody",null,[(s(!0),r(d,null,u(t.stocks,(n,m)=>(s(),r("tr",{key:m},[e("td",null,o(m+1),1),e("td",null,o(n.fruit.tree.tree_number),1),e("td",null,o(n.quantity),1),e("td",null,o(i.format_date(n.created_at)),1),e("td",null,o(i.format_date(n.updated_at)),1)]))),128))])])])])):c("",!0),t.timelines.length?(s(),r("div",X,[e("div",Z,[e("div",$,[ee,(s(!0),r(d,null,u(t.signatures,n=>(s(),r("div",{key:n.id},[t.id==n.child_activity_id?(s(),r("div",te,[e("label",{class:"mt-2.5 text-xs font-bold",innerHTML:n.role.role},null,8,se),e("p",{class:"text-gray-400",innerHTML:n.user.name},null,8,re)])):c("",!0)]))),128))])])])):c("",!0)]))),128))])])])])])])])])])])]),_:1})],64)}const ie=D(A,[["render",oe]]);export{ie as default};