import{B as x}from"./Authenticated-8ae6b849.js";import{H as y,L as w,q as _,s as d,o as i,g as a,a as c,w as k,F as f,d as e,t as l,k as m,f as D,n as N,y as S}from"./app-4a53f3bf.js";import{_ as V}from"./Record-8c3ab50d.js";import{Z as B}from"./main-7da7d0f1.js";import{s as C}from"./vue-multiselect.esm-52c1dcd3.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const J={components:{BreezeAuthenticatedLayout:x,Head:y,Link:w,Datepicker:B,Record:V,VueMultiselect:C},props:{Jobcard:Object,success:String,BeginDate:String,Trees:{type:Array,default:()=>[]}},data(){return{selectedTree:"",form:this.$inertia.form({treeNumber:[],startDate:this.$props.BeginDate})}},methods:{update(s){this.form.patch(`/save/tree-number/${s}`,{preserveScroll:!0}),this.form.treeNumber=null},complete(s){_.Inertia.get(route("complete.labelling",s))},destroy(s){confirm("Are you sure you want to remove")&&_.Inertia.delete(route("destroy.treeNumber",s),{preserveScroll:!0})},onSelectedTree(s){this.form.treeNumber.push(s)}}},A={class:"content-wrapper"},L=e("div",{class:"content-header"},[e("div",{class:"container-fluid"},[e("div",{class:"row mb-2"},[e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"}," Job Card for Mukau Production ")]),e("div",{class:"col-sm-6"},[e("ol",{class:"breadcrumb float-sm-right"},[e("li",{class:"breadcrumb-item"},"Home"),e("li",{class:"breadcrumb-item active"},"job-card ")])])])])],-1),T={class:"content"},H={class:"container-fluid text-sm"},M={class:"row"},z={class:"col-lg-12 connectedSortable"},I={class:"py-6"},P={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},F={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},O={class:"p-4 bg-white border-b border-gray-200"},R={class:"card-header flex justify-between"},U=e("h3",{class:"card-title"},"Job Card Review",-1),Z={class:"card-body"},q={key:0,class:"p-2 mb-1 text-sm text-blue-700 bg-blue-100 rounded-lg",role:"alert"},E={class:"col-sm-12 pt-8"},G={class:"form-group"},K={key:0,class:"text-xs text-red-600 mt-2"},Q={class:"flex flex-col rounded-md shadow-lg px-3 py-2 pt-3"},W={class:"flex items-center justify-between space-x-2"},X=["disabled"],Y={key:0,class:"text-xs text-red-600 mt-2"},$={class:"table table-hover text-nowrap mt-6"},ee=e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Tree Number"),e("th",null,"Action")])],-1),te=["onClick"],se={class:"flex justify-end mt-4"};function oe(s,o,r,re,t,u){const p=d("Head"),h=d("Datepicker"),g=d("VueMultiselect"),v=d("BreezeAuthenticatedLayout");return i(),a(f,null,[c(p,{title:"Operational Planning"}),c(v,null,{default:k(()=>[e("div",A,[L,e("section",T,[e("div",H,[e("div",M,[e("section",z,[e("div",I,[e("div",P,[e("div",F,[e("div",O,[e("div",R,[U,e("p",null,"Card No: "+l(r.Jobcard.job_card_number),1),e("p",null,"Site: "+l(r.Jobcard.site),1)]),e("div",Z,[r.success?(i(),a("div",q,l(r.success),1)):m("",!0),e("div",E,[e("form",{onSubmit:o[2]||(o[2]=D(n=>u.update(r.Jobcard.id),["prevent"]))},[e("div",G,[e("label",null,l(s.$page.props.ActivityTitle)+" Start Date:",1),c(h,{modelValue:t.form.startDate,"onUpdate:modelValue":o[0]||(o[0]=n=>t.form.startDate=n),position:"left",altPosition:""},null,8,["modelValue"]),t.form.errors.startDate?(i(),a("p",K,l(t.form.errors.startDate),1)):m("",!0)]),e("div",Q,[e("div",W,[c(g,{modelValue:t.form.treeNumber,"onUpdate:modelValue":o[1]||(o[1]=n=>t.form.treeNumber=n),"track-by":"id",options:r.Trees,label:"tree_number",searchable:!0,multiple:!0},null,8,["modelValue","options"]),e("button",{class:N([{"opacity-25":t.form.processing},"inline-flex justify-center rounded-md border border-transparent px-3 py-1 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"]),disabled:t.form.processing}," Save ",10,X)]),t.form.errors.treeNumber?(i(),a("p",Y,l(t.form.errors.treeNumber),1)):m("",!0),e("table",$,[ee,e("tbody",null,[(i(!0),a(f,null,S(r.Jobcard.fruits,(n,b)=>(i(),a("tr",{key:b},[e("td",null,l(b+1),1),e("td",null,l(n.tree.tree_number),1),e("td",null,[e("i",{onClick:ne=>u.destroy(n.id),class:"fas fa-trash cursor-pointer text-red-500 hover:text-red-800"},null,8,te)])]))),128))])])])],32),e("div",se,[e("button",{onClick:o[3]||(o[3]=n=>u.complete(r.Jobcard.id)),class:"inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"}," Sign ")])])])])])])])])])])])])]),_:1})],64)}const me=j(J,[["render",oe]]);export{me as default};
