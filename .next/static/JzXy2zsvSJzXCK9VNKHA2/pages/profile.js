(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{JFqz:function(e,t,a){"use strict";var r=a("o0o1"),n=a.n(r),c=a("HaE+"),s=a("rePB"),o=a("q1tI"),l=a.n(o),i=a("/MKj"),u=a("ZU0v"),m=a("GGqY"),d=a("nOHt"),p=a.n(d),f=a("YFqc"),v=a.n(f),b=a("p46w"),y=a.n(b),h=l.a.createElement;function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=Object(i.b)(null,{userLogin:u.b})((function(e){Object(o.useEffect)((function(){var e=y.a.get("_wus_BJK");console.log(e),e&&(window.location.href="/")}),[]);var t=Object(o.useState)({email:"",password:""}),a=t[0],r=t[1],i=function(e){r(g(g({},a),{},Object(s.a)({},e.target.name,e.target.value)))},u=function(){var t=Object(c.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f(!0),!(a.email&&a.password?!(a.password.length<6)||(m.d.error("Password must be at least 6 characters"),0):(m.d.error("Please input all fields"),0))){t.next=7;break}return console.log(a),t.next=5,e.userLogin(a,f,(function(){p.a.push("/profile"),f(!1)}));case 5:t.next=8;break;case 7:f(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=Object(o.useState)(!1),f=(d[0],d[1]);return h(l.a.Fragment,null,h(m.b,{transition:m.a}),h("section",{className:"login-area ptb-60"},h("div",{className:"container"},h("div",{className:"row"},h("div",{className:"col-lg-6 col-md-12"},h("div",{className:"login-content"},h("div",{className:"section-title"},h("h2",null,h("span",{className:"dot"})," Login")),h("form",{className:"login-form"},h("div",{className:"form-group"},h("label",null,"Email"),h("input",{type:"email",className:"form-control",placeholder:"Enter your name",id:"name",name:"email",onChange:i})),h("div",{className:"form-group"},h("label",null,"Password"),h("input",{type:"password",className:"form-control",placeholder:"Enter your password",id:"password",name:"password",onChange:i})),h("button",{type:"button",onClick:u,className:"btn btn-primary"},"Login")))),h("div",{className:"col-lg-6 col-md-12"},h("div",{className:"new-customer-content"},h("div",{className:"section-title"},h("h2",null,h("span",{className:"dot"})," New Customer")),h("span",null,"Create a Account"),h("p",null,"Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to see and track your orders."),h(v.a,{href:"/signup"},h("a",{className:"btn btn-light"},"Create A Account"))))))))}))},"W+IF":function(e,t,a){"use strict";a.r(t);var r=a("1OyB"),n=a("vuIU"),c=a("Ji7U"),s=a("md7G"),o=a("foSv"),l=a("q1tI"),i=a.n(l),u=(a("YFqc"),a("zCU4")),m=a("v6Hh"),d=a("meiv"),p=a("rIQk"),f=(a("JFqz"),a("o0o1")),v=a.n(f),b=a("rePB"),y=a("HaE+"),h=a("p46w"),N=a.n(h),g=a("vDqi"),O=a.n(g),j=a("EFcf"),w=a("JyVt"),_=i.a.createElement;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k="http://http://54.159.143.144:8080";var D=function(){var e=Object(l.useState)([]),t=e[0],a=e[1],r=Object(l.useState)(null),n=r[0],c=r[1],s=Object(l.useState)(null);s[0],s[1],Object(l.useEffect)((function(){var e=N.a.get("_wus_BJK");e&&(u(e),o(e))}),[]);var o=function(){var e=Object(y.a)(v.a.mark((function e(t){var a,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(k,"/api/user/user/details"),{headers:{Authorization:"".concat(t)}});case 3:(a=e.sent)&&(c(a.data.userDetails),r=Object(w.a)(),console.log(r),n=P(P({},r),{},{shipping_firstName:{value:"",error:""},shipping_lastName:{value:"",error:""},shipping_address:{value:"",error:""},shipping_city:{value:"",error:""},shipping_zip:{value:"",error:""},billing_email:{value:a.data.userDetails.email||"",error:""},shipping_phone:{value:"",error:""},billing_firstName:{value:a.data.userDetails.first_name||"",error:""},billing_lastName:{value:a.data.userDetails.last_name||"",error:""},billing_phone:{value:"",error:""},note:{value:"",error:""},message:{value:"",error:""},delivery_date:{value:"",error:""},delivery_time:{value:"",error:""}}),console.log(n),Object(w.c)(n)),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),401==e.t0.response.status&&(N.a.remove("_wus_BJK"),window.location.href="/");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(y.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(k,"/api/user/order/history"),{headers:{Authorization:"".concat(t)}});case 3:(r=e.sent)&&a(r.data.orders),console.log(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),401==e.t0.response.status&&(N.a.remove("_wus_BJK"),window.location.href="/"),"user order history not found"==e.t0.response.data.err&&a([]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return _("div",{className:"row"},_("div",{className:"col-md-4"},_("div",{className:"card",style:{marginLeft:"1.7rem"}},_("div",{className:"card-body m-auto text-center"},_("img",{src:"https://t3.ftcdn.net/jpg/03/39/45/96/360_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",alt:"",height:"100",style:{borderRadius:"50%",marginBottom:"1rem"}}),_("h5",{className:"card-title"},n?n.first_name:"N/A"," ",n?n.last_name:"N/A")))),t.length?_("div",{className:"col-md-8"},t.map((function(e,t){return _(i.a.Fragment,null,_("div",{key:t,class:"card"},_("div",{className:"card-header"},_("h5",null,e.order_name),_("p",null,e.created_at)),_("div",{className:"card-body"},_("div",{className:"row"},_("div",{className:"col-md-4"},_("p",{className:"card-text"},"Items:"),e.order_items.map((function(e){return _("p",{key:e.product_id,className:"card-text"},e.product.name," - ",e.quantity,"x")}))),_("div",{className:"col-md-4"},_("p",{className:"card-text"},"Mode Of Payment: ",e.payment_method),_("p",{className:"card-text"},"Payment Status: ",e.payment_status.name)),_("div",{className:"col-md-4"},_("p",{className:"card-text"},"Order Status: ",e.order_status.name),_("p",{className:"card-text"},"Amount: P",Object(j.c)(e.total)))))),_("hr",null))}))):_("h2",{className:"text-center m-auto"},"Order history is empty."),_("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},_("div",{className:"modal-dialog",role:"document"},_("div",{className:"modal-content"},_("div",{className:"modal-header"},_("h5",{className:"modal-title",id:"exampleModalLabel"},"Modal title"),_("button",{type:"button",className:"close","data-d":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7"))),_("div",{className:"modal-body"},"..."),_("div",{className:"modal-footer"},_("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),_("button",{type:"button",className:"btn btn-primary"},"Save changes"))))))},S=i.a.createElement;function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var R=function(e){Object(c.a)(a,e);var t=E(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return S(i.a.Fragment,null,S("div",{className:"boxed-layout-wrapper"},S("div",{className:"boxed-layout-content"},S(u.a,null),S(p.a,{title:"Profile"}),S(D,null),S(d.a,null),S(m.a,null))))}}]),a}(l.Component);t.default=R},meiv:function(e,t,a){"use strict";var r=a("1OyB"),n=a("vuIU"),c=a("Ji7U"),s=a("md7G"),o=a("foSv"),l=a("q1tI"),i=a.n(l).a.createElement;function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var m=function(e){Object(c.a)(a,e);var t=u(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i("section",{className:"facility-area"},i("div",{className:"container"},i("div",{className:"row"},i("div",{className:"col-lg-3 col-sm-6"},i("div",{className:"facility-box"},i("div",{className:"icon"},i("i",{className:"fas fa-plane"})),i("h3",null,"Fast Shipping"))),i("div",{className:"col-lg-3 col-sm-6"},i("div",{className:"facility-box"},i("div",{className:"icon"},i("i",{className:"fas fa-money-check-alt"})),i("h3",null,"100% money back guarantee"))),i("div",{className:"col-lg-3 col-sm-6"},i("div",{className:"facility-box"},i("div",{className:"icon"},i("i",{className:"far fa-credit-card"})),i("h3",null,"Many payment gateways"))),i("div",{className:"col-lg-3 col-sm-6"},i("div",{className:"facility-box"},i("div",{className:"icon"},i("i",{className:"fas fa-headset"})),i("h3",null,"Online support"))))))}}]),a}(l.Component);t.a=m},rIQk:function(e,t,a){"use strict";var r=a("1OyB"),n=a("vuIU"),c=a("Ji7U"),s=a("md7G"),o=a("foSv"),l=a("q1tI"),i=a.n(l),u=a("YFqc"),m=a.n(u),d=i.a.createElement;function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var f=function(e){Object(c.a)(a,e);var t=p(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return d("div",{className:"page-title-area"},d("div",{className:"container"},d("ul",null,d("li",null,d(m.a,{href:"/"},d("a",null,"Home"))),d("li",null,this.props.title))))}}]),a}(l.Component);t.a=f},u1GD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a("W+IF")}])}},[["u1GD",1,2,0,3]]]);