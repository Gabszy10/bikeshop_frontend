(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7smD":function(e,t,a){"use strict";var r=a("1OyB"),n=a("vuIU"),l=a("JX7q"),c=a("Ji7U"),o=a("md7G"),i=a("foSv"),s=a("rePB"),u=a("q1tI"),d=a.n(u),m=a("/MKj"),p=a("YFqc"),f=a.n(p),v=a("Nxmy"),b=a("GGqY"),y=d.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(i.a)(e);if(t){var n=Object(i.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(o.a)(this,a)}}var h=function(e){Object(c.a)(a,e);var t=g(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return e=t.call.apply(t,[this].concat(c)),Object(s.a)(Object(l.a)(e),"state",{qty:1,max:10,min:1}),Object(s.a)(Object(l.a)(e),"handleAddToCartFromView",(function(){e.props.addQuantityWithNumber(e.props.idd,e.state.qty),b.d.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),setTimeout((function(){e.props.closeModal()}),5e3)})),Object(s.a)(Object(l.a)(e),"IncrementItem",(function(){e.setState((function(e){return e.qty<10?{qty:e.qty+1}:null}))})),Object(s.a)(Object(l.a)(e),"DecreaseItem",(function(){e.setState((function(e){return e.qty>1?{qty:e.qty-1}:null}))})),e}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.props.closeModal;return y("div",{className:"modal fade productQuickView show",style:{paddingRight:"16px",display:"block"}},y(b.b,null),y("div",{className:"modal-dialog modal-dialog-centered",role:"document"},y("div",{className:"modal-content"},y("button",{type:"button",onClick:t,className:"close","data-dismiss":"modal","aria-label":"Close"},y("span",{"aria-hidden":"true"},y("i",{className:"fas fa-times"}))),y("div",{className:"row align-items-center"},y("div",{className:"col-lg-6 col-md-6"},y("div",{className:"productQuickView-image"},y("img",{src:this.props.image,alt:"image"}))),y("div",{className:"col-lg-6 col-md-6"},y("div",{className:"product-content"},y("h3",null,y(f.a,{href:"#"},y("a",null,"Belted chino trousers polo"))),y("div",{className:"price"},y("span",{className:"new-price"},"$",this.props.price)),y("div",{className:"product-review"},y("div",{className:"rating"},y("i",{className:"fas fa-star"}),y("i",{className:"fas fa-star"}),y("i",{className:"fas fa-star"}),y("i",{className:"fas fa-star"}),y("i",{className:"fas fa-star-half-alt"})),y(f.a,{href:"#"},y("a",{className:"rating-count"},"3 reviews"))),y("ul",{className:"product-info"},y("li",null,y("span",null,"Vendor:")," ",y(f.a,{href:"#"},y("a",null,"Lereve"))),y("li",null,y("span",null,"Availability:")," ",y(f.a,{href:"#"},y("a",null,"In stock (7 items)"))),y("li",null,y("span",null,"Product Type:")," ",y(f.a,{href:"#"},y("a",null,"T-Shirt")))),y("div",{className:"product-color-switch"},y("h4",null,"Color:"),y("ul",null,y("li",null,y(f.a,{href:"#"},y("a",{title:"Black",className:"color-black"}))),y("li",null,y(f.a,{href:"#"},y("a",{title:"White",className:"color-white"}))),y("li",{className:"active"},y(f.a,{href:"#"},y("a",{title:"Green",className:"color-green"}))),y("li",null,y(f.a,{href:"#"},y("a",{title:"Yellow Green",className:"color-yellowgreen"}))),y("li",null,y(f.a,{href:"#"},y("a",{title:"Teal",className:"color-teal"}))))),y("div",{className:"product-size-wrapper"},y("h4",null,"Size:"),y("ul",null,y("li",null,y(f.a,{href:"#"},y("a",null,"XS"))),y("li",{className:"active"},y(f.a,{href:"#"},y("a",null,"S"))),y("li",null,y(f.a,{href:"#"},y("a",null,"M"))),y("li",null,y(f.a,{href:"#"},y("a",null,"XL"))),y("li",null,y(f.a,{href:"#"},y("a",null,"XXL"))))),y("div",{className:"product-add-to-cart"},y("div",{className:"input-counter"},y("span",{className:"minus-btn",onClick:this.DecreaseItem},y("i",{className:"fas fa-minus"})),y("input",{type:"text",value:this.state.qty,min:this.state.min,max:this.state.max,onChange:function(t){return e.setState({qty:t.target.value})}}),y("span",{className:"plus-btn",onClick:this.IncrementItem},y("i",{className:"fas fa-plus"}))),y("button",{type:"submit",className:"btn btn-primary",onClick:this.handleAddToCartFromView},y("i",{className:"fas fa-cart-plus"})," Add to Cart")),y(f.a,{href:"#"},y("a",{className:"view-full-info"},"View full info"))))))))}}]),a}(u.Component);t.a=Object(m.b)(null,(function(e){return{addQuantityWithNumber:function(t,a){e(Object(v.b)(t,a))}}}))(h)},KQm4:function(e,t,a){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return r}))},YQMk:function(e,t,a){"use strict";a.r(t);var r=a("1OyB"),n=a("vuIU"),l=a("Ji7U"),c=a("md7G"),o=a("foSv"),i=a("q1tI"),s=a.n(i),u=a("zCU4"),d=a("v6Hh"),m=a("meiv"),p=a("rIQk"),f=a("rePB"),v=a("YFqc"),b=a.n(v),y=a("nOHt"),g=a.n(y),h=a("/MKj"),O=a("Nxmy"),N=a("GGqY"),j=a("EFcf"),_=s.a.createElement;var w=Object(h.b)((function(e){return{products:e.addedItems,total:e.total}}),(function(e){return{removeItem:function(t){e(Object(O.i)(t))},addQuantity:function(t){e(Object(O.a)(t))},subtractQuantity:function(t){e(Object(O.l)(t))}}}))((function(e){var t=Object(h.c)(),a=Object(i.useState)([]),r=a[0],n=a[1];Object(i.useEffect)((function(){var e=localStorage.getItem("_bik_EKL")?localStorage.getItem("_bik_EKL"):[],t=Object(O.g)(e);n(t)}),[e.products]);var l=Object(j.a)((function(a,r){var l=localStorage.getItem("_bik_EKL"),c=Object(O.g)(l),o=c.findIndex((function(e){return e.id===r.id}));o>-1&&(c[o].quantity=a);var i=Object(O.h)(JSON.stringify(c));localStorage.setItem("_bik_EKL",i),n(c),e.setcart([]),t({type:"UPDATE_CART"})}),250),c=r.length?r.map((function(t,a){return _("tr",{key:a},_("td",{className:"product-thumbnail"},_(b.a,{href:"/product/".concat(t.slug)},_("a",null,_("img",{src:"".concat("http://localhost:8080","/products/").concat(t.product_images[0].file_name),alt:"image"})))),_("td",{className:"product-name"},_(b.a,{href:"#"},_("a",null,t.name))),_("td",{className:"product-quantity"},_("div",{className:"input-counter"},_("input",{type:"number",defaultValue:t.quantity,min:"1",max:100,readOnly:!1,onChange:function(e){return l(e.target.value,t)}}))),_("td",{className:"product-price"},_("span",{className:"unit-amount"},"\u20b1",e.isCampaign?Object(j.c)(t.campaign_price):Object(j.c)(t.discount_price))),_("td",{className:"product-subtotal"},_("span",{className:"subtotal-amount"},"\u20b1",e.isCampaign?Object(j.c)(t.campaign_price*t.quantity):Object(j.c)(t.discount_price*t.quantity))),_("td",{className:"product-subtotal"},_(b.a,{href:"#"},_("a",{style:{float:"none"},className:"remove",onClick:function(a){var r;a.preventDefault(),r=t.id,e.removeItem(r),N.d.error("Removed from cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.setcart([])}},_("i",{className:"far fa-trash-alt"})))))})):_("tr",null,_("td",{className:"product-thumbnail",colSpan:"5"},_("p",null,"Empty.")));return _(s.a.Fragment,null,_(N.b,{transition:N.a}),_("table",{className:"table table-bordered"},_("thead",null,_("tr",null,_("th",{scope:"col"},"Product"),_("th",{scope:"col"},"Name"),_("th",{scope:"col"},"Quantity"),_("th",{scope:"col"},"Unit Price"),_("th",{scope:"col"},"Total"),_("th",{scope:"col"},"REMOVE"))),_("tbody",null,c)))})),S=a("yX55"),C=a("JyVt"),k=a("wx14"),P=a("KQm4"),E=a("o0o1"),I=a.n(E),x=a("HaE+"),D=a("cpGi"),q=a("7smD"),A=a("a6RD"),T=a.n(A),R=a("vDqi"),B=a.n(R),M=s.a.createElement;function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=T()((function(){return a.e(5).then(a.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),L={loop:!1,nav:!0,smartSpeed:650,dots:!0,autoplayHoverPause:!0,margin:3,autoplay:!0,navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],responsive:{0:{items:3},576:{items:4},768:{items:4},1024:{items:5},1200:{items:5}}};var K=Object(h.b)((function(e){return{products:e.productsCollectionNine}}),(function(e){return{addToCart:function(t){e(Object(O.c)(t))}}}))((function(e){var t=Object(i.useState)([]),a=t[0],r=t[1],n=Object(i.useState)({modalOpen:!1,modalImage:"",price:0,idd:null,display:!1,panel:!0}),l=n[0],c=n[1],o=[],s="http://localhost:8080",u=function(){var e=Object(x.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("".concat(s,"/api/user/product/type/addon"));case 3:(t=e.sent).data&&r(t.data.products),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response.data){e.next=11;break}return e.abrupt("return",N.d.error(e.t0.response.data.msg));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){u()}),[]),Object(i.useEffect)((function(){c(H(H({},l),{},{display:!0}))}),[]);var d=l.modalOpen;return M("section",{className:"best-sellers-area pt-40"},M(D.a,null),M(N.b,{transition:N.a}),M("div",{className:"container"},M("div",{className:"tab products-category-tab-style-2 force-addon"},M("div",{className:"title"},M("h2",null,"LAST CHANCE TO SELECT ADD ONS")),M("ul",{className:"tabs",style:{border:"none"}}),M("div",{className:"tab_content"},M("div",{id:"tab4",className:"tabs_item_best addon"},l.display?M(Q,Object(k.a)({className:"product-slides owl-carousel owl-theme"},L),a.map((function(t,a){return M("div",{key:a},M("div",{className:"single-product-item"},M("div",{className:"product-image"},M("img",{src:"".concat(s,"/products/").concat(t.product_images[0].file_name)})),M("div",{className:"product-content"},M("h3",null,M(b.a,{href:"/product/product-details"},M("a",{className:"product-name text-center"},t.name))),M("div",{className:"product-price text-center"},M("span",{className:"new-price m-auto",style:{fontSize:"14px"}},"\u20b1",Object(j.c)(t.discount_price))),M("div",{className:"row align-items-end"},M("div",{className:"m-auto"},M("input",{type:"checkbox",onClick:function(a){var r;r=t,o.includes(r.id)?(e.setAddon((function(e){return e.filter((function(e){return e.id!==r.id}))})),o=o.filter((function(e){return e!==r.id}))):(e.setAddon((function(e){return[].concat(Object(P.a)(e),[r])})),o.push(r.id))}}))))))}))):"")))),d?M(q.a,{closeModal:function(){setState({modalOpen:!1})},idd:l.idd,image:l.modalImage,price:l.price}):"")})),U=s.a.createElement;function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=Object(h.b)((function(e){return{products:e.addedItems,total:e.total,shipping:e.shipping}}),(function(e){return{addShipping:function(){e({type:"ADD_SHIPPING"})},substractShipping:function(){e({type:"SUB_SHIPPING"})},addToCartAddons:function(t,a){e(Object(O.d)(t,a))}}}))((function(e){var t=Object(i.useState)([]),a=t[0],r=t[1],n=Object(i.useState)(0),l=n[0],c=n[1],o=Object(i.useState)([]),s=o[0],u=o[1],d=Object(i.useState)(!1),m=d[0],p=d[1],v=Object(i.useState)({delivery_date:"",delivery_time:"",note:"",message:""}),y=v[0],h=v[1];function _(e){var t=e.target.name,a=e.target.value;console.log(t,a),h((function(e){return Y(Y({},e),{},Object(f.a)({},t,a))}))}return Object(i.useEffect)((function(){var e=Object(C.a)();e&&("2023-02-14"==e.delivery_date.value&&p(!0),h({delivery_date:e.delivery_date.value,delivery_time:e.delivery_time.value,note:e.note.value,message:e.message.value}))}),[]),Object(i.useEffect)((function(){}),[s]),Object(i.useEffect)((function(){var e=localStorage.getItem("_bik_EKL")?localStorage.getItem("_bik_EKL"):[],t=Object(O.g)(e);if(t.length<=0)return alert("You dont have any items in your cart."),window.location.href="/";for(var a=0,r=0;r<t.length;r++)a+=m?t[r].campaign_price*t[r].quantity:t[r].discount_price*t[r].quantity;var n=0;s.forEach((function(e,t){n+=e.discount_price})),c(a+n)}),[a,m,s]),U("section",{className:"cart-area ptb-60"},U(N.b,{transition:N.a}),U("div",{className:"container"},U("div",{className:"row"},U("div",{className:"col-lg-12 col-md-12"},U("form",null,U("div",{className:"cart-table table-responsive"},U(w,{setcart:r,isCampaign:m})),U("br",null),U("div",{className:"row"},U("div",{className:"col-lg-6 col-md-6"},U("div",{className:"form-group"},U("label",null,"Delivery Time"),U("div",{class:"form-group"},U("select",{class:"form-control",id:"exampleFormControlSelect1",name:"delivery_time",onChange:_},U("option",{value:""},"Select time"),U("option",{value:"9am - 2pm",selected:"9am - 2pm"==y.delivery_time},"9am - 2pm"),U("option",{value:"2pm - 5pm",selected:"2pm - 5pm"==y.delivery_time},"2pm - 6pm"),U("option",{value:"6pm - 9pm",selected:"6pm - 9pm"==y.delivery_time},"6pm - 9pm"),U("option",{value:"Anytime",selected:"Anytime"==y.delivery_time},"Anytime"))))),U("div",{className:"col-lg-6 col-md-6"},U("label",null,"Delivery Date"),U("div",{class:"form-group"},U("input",{type:"text",className:"form-control",value:y.delivery_date,readOnly:!0})),U(S.a,{handleStateChange:function(e){var t=e.target.name,a=e.target.value;p("2023-02-14"==a),h((function(e){return Y(Y({},e),{},Object(f.a)({},t,a))}))},date:""!=y.delivery_date?y.delivery_date:null}))),U("div",{className:"col-lg-12 col-md-12"},U("div",{className:"form-group"},U("label",null,"Delivery Instruction (Optional)"," ",U("span",{className:"required"},"*")),U("textarea",{name:"note",id:"notes",cols:"30",rows:"6",value:y.note,onChange:_,placeholder:"Instruction to delivery rider",className:"form-control"}))),U("div",{className:"col-lg-12 col-md-12"},U("div",{className:"form-group"},U("label",null,"Message (Optional) ",U("span",{className:"required"},"*")),U("textarea",{name:"message",id:"messages",cols:"30",rows:"6",value:y.message,onChange:_,placeholder:"Your message to receiver",className:"form-control"}))),U(K,{setAddon:u}),U("div",{className:"cart-totals"},U("h3",null,"Cart Totals"),U("ul",null,U("li",null,"Subtotal ",U("span",null,"\u20b1",Object(j.c)(l))),U("li",null,"Total"," ",U("span",null,U("b",null,"\u20b1",Object(j.c)(l))))),l<800&&U("p",{style:{color:"red"}},"Minimum order is \u20b1800. If order is below \u20b1800, you will be charge to get to the 800 limit."),U("div",{className:"row"},U("div",{className:"col-md-6"},U(b.a,{href:"/"},U("a",{style:{marginBottom:"0.5rem"}},U("i",{className:"fas fa-angle-double-left",style:{marginRight:"5px"}}),"Back to Shop"))),U("div",{className:"col-md-6"},U("button",{type:"button",onClick:function(){if(y.delivery_date?y.delivery_time?!Object(j.d)(y.delivery_date)||(N.d.error("Please select present date.",{position:"bottom-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),0):(N.d.error("Please select delivery time.",{position:"bottom-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),0):(N.d.error("Please select delivery date.",{position:"bottom-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),0)){s.length&&e.addToCartAddons(s,1);var t=y.delivery_date,a=y.delivery_time,r=y.note,n=y.message,l=Object(C.a)();if(l){var c=Y(Y({},l),{},{note:{value:r,error:""},message:{value:n,error:""},delivery_date:{value:t,error:""},delivery_time:{value:a,error:""}});Object(C.c)(c)}else{var o={shipping_firstName:{value:"",error:""},shipping_lastName:{value:"",error:""},shipping_address:{value:"",error:""},shipping_city:{value:"",error:""},shipping_zip:{value:"",error:""},billing_email:{value:"",error:""},shipping_phone:{value:"",error:""},billing_firstName:{value:"",error:""},billing_lastName:{value:"",error:""},billing_phone:{value:"",error:""},note:{value:r,error:""},message:{value:n,error:""},delivery_date:{value:t,error:""},delivery_time:{value:a,error:""}};Object(C.c)(o)}g.a.push("/checkout")}},className:"btn btn-light proceed-checkout"},"CONTINUE")))))))))})),X=s.a.createElement;function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(c.a)(this,a)}}var z=function(e){Object(l.a)(a,e);var t=J(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return X(s.a.Fragment,null,X("div",{className:"boxed-layout-wrapper"},X("div",{className:"boxed-layout-content"},X(u.a,null),X(p.a,{title:"Cart"}),X(F,null),X(m.a,null),X(d.a,null))))}}]),a}(i.Component);t.default=z},ahkM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return a("YQMk")}])}},[["ahkM",1,2,0,3,4,8]]]);