import{B as x}from"./Authenticated-8ae6b849.js";import{H as y,L as w,q as k,s as c,o as a,g as i,a as u,w as j,F as m,d as e,t as s,k as _,f as S,y as h,n as C,h as J,m as T}from"./app-4a53f3bf.js";import{_ as D}from"./Record-8c3ab50d.js";import{Z as B}from"./main-7da7d0f1.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const V={components:{BreezeAuthenticatedLayout:x,Head:y,Link:w,Datepicker:B,Record:D},props:{Jobcard:Object,Trucks:Object,success:String},data(){return{form:this.$inertia.form({arrival_date:"",selectedTrucks:[],jobcard_id:this.$props.Jobcard.id})}},methods:{update(l){this.form.patch(`/Fruit-storage/truck-arrival-times/${l}`,{onSuccess:()=>this.form.reset()})},complete(l){k.Inertia.get(route("complete.labelling",l))},format_date(l){if(l)return moment(String(l)).format("DD-MM-YYYY HH:mm")}}},A={class:"content-wrapper"},L=e("div",{class:"content-header"},[e("div",{class:"container-fluid"},[e("div",{class:"row mb-2"},[e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"}," Job Card for Mukau Production ")]),e("div",{class:"col-sm-6"},[e("ol",{class:"breadcrumb float-sm-right"},[e("li",{class:"breadcrumb-item"},"Home"),e("li",{class:"breadcrumb-item active"},"job-card ")])])])])],-1),M={class:"content"},N={class:"container-fluid text-sm"},z={class:"row"},Y={class:"col-lg-12 connectedSortable"},q={class:"py-6"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},O={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},P={class:"p-4 bg-white border-b border-gray-200"},R={class:"card-header flex justify-between"},I=e("h3",{class:"card-title"},"Job Card Review",-1),U={class:"card-body"},Z={key:0,class:"p-2 mb-1 text-sm text-blue-700 bg-blue-100 rounded-lg",role:"alert"},E={class:"form-group"},Q=e("label",null,"Arrival Time:",-1),G={key:0,class:"text-xs text-red-600 mt-2"},K={class:"table table-hover text-nowrap mt-6"},W=e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Tree Number"),e("th",null,"Quantity"),e("th",null,"Transport Mode"),e("th",null,"Arrival Time"),e("th",null,"Check")])],-1),X=["value"],$={class:"col-sm-12 pt-8"},ee={class:"flex justify-end"},te=["disabled"],se={class:"flex justify-center pt-12"},oe={class:"block bg-white max-w-sm text-center"},re=e("div",{class:"py-2 px-6 border-b border-gray-300"}," Signature ",-1),ne={class:"p-6"},ae=e("p",{class:"text-gray-700 text-xs mb-4"}," Signature Required at this stage ",-1),ie={class:"mt-2 text-sm font-bold"},le={class:"flex justify-end mt-4"};function de(l,o,r,ce,n,d){const f=c("Head"),p=c("Datepicker"),v=c("BreezeAuthenticatedLayout");return a(),i(m,null,[u(f,{title:"Operational Planning"}),u(v,null,{default:j(()=>[e("div",A,[L,e("section",M,[e("div",N,[e("div",z,[e("section",Y,[e("div",q,[e("div",F,[e("div",O,[e("div",P,[e("div",R,[I,e("p",null,"Card No: "+s(r.Jobcard.job_card_number),1),e("p",null,"Site: "+s(r.Jobcard.site),1)]),e("div",U,[r.success?(a(),i("div",Z,s(r.success),1)):_("",!0),e("form",{onSubmit:o[2]||(o[2]=S(t=>d.update(r.Jobcard.id),["prevent"]))},[e("div",E,[Q,u(p,{class:"w-full",modelValue:n.form.arrival_date,"onUpdate:modelValue":o[0]||(o[0]=t=>n.form.arrival_date=t),position:"left",altPosition:""},null,8,["modelValue"]),n.form.errors.arrival_date?(a(),i("p",G,s(n.form.errors.arrival_date),1)):_("",!0)]),e("table",K,[W,e("tbody",null,[(a(!0),i(m,null,h(r.Jobcard.stocks,(t,b)=>(a(),i("tr",{key:b},[e("td",null,s(b+1),1),e("td",null,s(t.fruit.tree.tree_number),1),e("td",null,s(t.quantity),1),e("td",null,s(t.truck.truck_number)+" - "+s(t.truck.description),1),e("td",null,[e("p",null,s(d.format_date(t.arrival_time)),1)]),e("td",null,[t.arrival_time==null?J((a(),i("input",{key:0,type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=g=>n.form.selectedTrucks=g),value:t.id,class:"rounded border-gray-300 text-green-600 shadow-sm focus:ring-green-500"},null,8,X)),[[T,n.form.selectedTrucks]]):_("",!0)])]))),128))])]),e("div",$,[e("div",ee,[e("button",{class:C([{"opacity-25":n.form.processing},"inline-flex justify-center rounded-md border border-transparent px-3 py-1 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"]),disabled:n.form.processing}," Save ",10,te)])])],32),e("div",se,[e("div",oe,[re,e("div",ne,[ae,(a(!0),i(m,null,h(r.Jobcard.childactivity.roles,t=>(a(),i("div",{key:t.id,class:"flex justify-center items-center space-x-1"},[e("label",ie,s(t.role),1)]))),128))])])]),e("div",le,[e("button",{onClick:o[3]||(o[3]=t=>d.complete(r.Jobcard.id)),class:"inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"}," Sign ")])])])])])])])])])])])]),_:1})],64)}const fe=H(V,[["render",de]]);export{fe as default};
