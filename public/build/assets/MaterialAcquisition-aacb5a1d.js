import{B as S}from"./Authenticated-8ae6b849.js";import{H as V,L as q,q as h,s as m,o,g as r,a as _,w as j,F as c,d as e,t as i,k as a,f as y,h as b,V as g,y as f,x as D,n as M}from"./app-4a53f3bf.js";import{_ as B}from"./Record-8c3ab50d.js";import{Z as C}from"./main-7da7d0f1.js";import{s as N}from"./vue-multiselect.esm-52c1dcd3.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const A={components:{BreezeAuthenticatedLayout:S,Head:V,Link:q,Datepicker:C,Record:B,VueMultiselect:N},props:{Jobcard:Object,success:String,BeginDate:String,Compartments:Object,Users:Object,Name:String},data(){return{form:this.$inertia.form({start_date:this.$props.BeginDate,item_name:"",uom:"",quantity:"",received_by:"",type:this.$props.Name})}},methods:{update(l){this.form.patch(`/sowing-bed-preparation/transport-sand-to-nursery/${l}`,{onSuccess:()=>{this.form.item_name="",this.form.uom="",this.form.quantity="",this.form.received_by=""},preserveScroll:!0})},complete(l){h.Inertia.get(route("complete.labelling",l))},destroy(l){confirm("Are you sure you want to remove")&&h.Inertia.delete(route("destroy.compartment",l))},format_date(l){if(l)return moment(String(l)).format("DD-MM-YYYY")}}},U={class:"content-wrapper"},L=e("div",{class:"content-header"},[e("div",{class:"container-fluid"},[e("div",{class:"row mb-2"},[e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"}," Job Card for Mukau Production ")]),e("div",{class:"col-sm-6"},[e("ol",{class:"breadcrumb float-sm-right"},[e("li",{class:"breadcrumb-item"},"Home"),e("li",{class:"breadcrumb-item active"},"job-card ")])])])])],-1),H={class:"content"},z={class:"container-fluid text-sm"},O={class:"row"},P={class:"col-lg-12 connectedSortable"},Y={class:"py-6"},I={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},F={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},R={class:"p-4 bg-white border-b border-gray-200"},T={class:"card-header flex justify-between"},Z=e("h3",{class:"card-title"},"Job Card Review",-1),E={class:"card-body"},Q={key:0,class:"p-2 mb-1 text-sm text-blue-700 bg-blue-100 rounded-lg",role:"alert"},G={class:"col-sm-12 pt-8"},K={class:"form-group"},W={key:0,class:"text-xs text-red-600 mt-2"},X={class:"form-group flex items-center justify-between space-x-2"},$={class:"w-full"},ee={key:0,class:"text-xs text-red-600 mt-2"},te={class:"w-full"},se=["value"],oe={key:0,class:"text-xs text-red-600 mt-2"},re={class:"w-full"},ie={key:0,class:"text-xs text-red-600 mt-2"},ne={key:0,class:"w-full"},le=e("option",{value:""},"-- Select user --",-1),de=["value"],ae={key:0,class:"text-xs text-red-600 mt-2"},ce={class:"flex justify-end"},ue=["disabled"],me={class:"table-responsive"},_e={class:"table table-hover text-nowrap mt-6"},fe=e("th",null,"No",-1),pe=e("th",null,"Quantity",-1),be=e("th",null,"Action",-1),he={class:"flex flex-col justify-between pt-12"},ye={class:"flex justify-center"},ge={class:"block bg-white max-w-sm text-center"},ve=e("div",{class:"py-2 px-6 border-b border-gray-300"}," Signature ",-1),xe={class:"p-6"},we=e("p",{class:"text-gray-700 text-xs mb-4"}," Persons to sign ",-1),ke={class:"mt-2 text-sm font-bold"},Se={class:"flex justify-end mt-4"};function Ve(l,n,d,qe,s,p){const v=m("Head"),x=m("Datepicker"),w=m("VueMultiselect"),k=m("BreezeAuthenticatedLayout");return o(),r(c,null,[_(v,{title:"Operational Planning"}),_(k,null,{default:j(()=>[e("div",U,[L,e("section",H,[e("div",z,[e("div",O,[e("section",P,[e("div",Y,[e("div",I,[e("div",F,[e("div",R,[e("div",T,[Z,e("p",null,"Site: "+i(d.Jobcard.site),1)]),e("div",E,[d.success?(o(),r("div",Q,i(d.success),1)):a("",!0),e("form",{onSubmit:n[6]||(n[6]=y(t=>p.update(d.Jobcard.id),["prevent"]))},[e("div",G,[e("div",K,[e("label",null,i(l.$page.props.ActivityTitle)+" Start Date:",1),_(x,{modelValue:s.form.start_date,"onUpdate:modelValue":n[0]||(n[0]=t=>s.form.start_date=t),position:"left",altPosition:""},null,8,["modelValue"]),s.form.errors.start_date?(o(),r("p",W,i(s.form.errors.start_date),1)):a("",!0)]),e("div",X,[e("div",$,[_(w,{modelValue:s.form.item_name,"onUpdate:modelValue":n[1]||(n[1]=t=>s.form.item_name=t),"track-by":"id",options:d.Compartments},null,8,["modelValue","options"]),s.form.errors.item_name?(o(),r("p",ee,i(s.form.errors.item_name),1)):a("",!0)]),e("div",te,[b(e("select",{"onUpdate:modelValue":n[2]||(n[2]=t=>s.form.uom=t),required:"",class:"w-full py-1 text-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(o(!0),r(c,null,f(l.$page.props.uom,(t,u)=>(o(),r("option",{key:u,value:t},i(t),9,se))),128))],512),[[g,s.form.uom]]),s.form.errors.uom?(o(),r("p",oe,i(s.form.errors.uom),1)):a("",!0)]),e("div",re,[b(e("input",{type:"number","onUpdate:modelValue":n[3]||(n[3]=t=>s.form.quantity=t),step:".01",placeholder:"quantity",required:"",class:"w-full py-1 text-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[D,s.form.quantity]]),s.form.errors.quantity?(o(),r("p",ie,i(s.form.errors.quantity),1)):a("",!0)]),d.Name=="Item"?(o(),r("div",ne,[b(e("select",{type:"text","onUpdate:modelValue":n[4]||(n[4]=t=>s.form.received_by=t),required:"",class:"w-full py-1 text-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"},[le,(o(!0),r(c,null,f(d.Users,t=>(o(),r("option",{key:t.id,value:t.id},i(t.name),9,de))),128))],512),[[g,s.form.received_by]]),s.form.errors.received_by?(o(),r("p",ae,i(s.form.errors.received_by),1)):a("",!0)])):a("",!0)]),e("div",ce,[e("button",{class:M([{"opacity-25":s.form.processing},"inline-flex justify-center rounded-md border border-transparent px-3 py-1 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"]),disabled:s.form.processing}," Save ",10,ue)]),e("div",me,[e("table",_e,[e("thead",null,[e("tr",null,[fe,e("th",null,"Name of "+i(this.$props.Name),1),pe,be])]),e("tbody",null,[(o(!0),r(c,null,f(d.Jobcard.bed_prep,(t,u)=>(o(),r("tr",{key:u},[e("td",null,i(u+1),1),e("td",null,i(t.name),1),e("td",null,i(t.quantity),1),e("td",null,i(p.format_date(t.created_at)),1)]))),128))])])]),e("div",he,[e("div",ye,[e("div",ge,[ve,e("div",xe,[we,(o(!0),r(c,null,f(d.Jobcard.childactivity.roles,t=>(o(),r("div",{key:t.id,class:"flex items-center space-x-1"},[e("p",ke,i(t.role),1)]))),128))])])])]),e("div",Se,[e("button",{onClick:n[5]||(n[5]=y(t=>p.complete(d.Jobcard.id),["prevent"])),class:"inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Sign and Save")])])],32)])])])])])])])])])])]),_:1})],64)}const Je=J(A,[["render",Ve]]);export{Je as default};
