(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{QCli:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return r("fdRS")}])},"dP/F":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=l(r("q1tI")),o=l(r("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!1,u=!1,p=!1,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:r.props.stripeKey}),r.hasPendingClick&&r.showStripeDialog())},r.onScriptError=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];r.hideLoadingDialog(),r.props.onScriptError&&r.props.onScriptError.apply(r,t)},r.onClosed=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];r._isMounted&&r.setState({open:!1}),r.props.closed&&r.props.closed.apply(r,t)},r.onOpened=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];r.setState({open:!0}),r.props.opened&&r.props.opened.apply(r,t)},r.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return a({},e,r.props.hasOwnProperty(t)&&s({},t,r.props[t]))}),{opened:r.onOpened,closed:r.onClosed})},r.onClick=function(){if(!r.props.disabled)if(p)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?r.showStripeDialog():(r.showLoadingDialog(),r.hasPendingClick=!0)},r.handleOnMouseDown=function(){r.setState({buttonActive:!0})},r.handleOnMouseUp=function(){r.setState({buttonActive:!1})},r.state={open:!1,buttonActive:!1},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!u&&!c){c=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var r=!1,a=new Promise((function(r,a){t.onload=function(){u=!0,c=!1,r(),e.onScriptLoaded()},t.onerror=function(t){p=!0,c=!1,a(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){a.then((function(){return r?t({isCanceled:!0}):e()})),a.catch((function(e){return t(r?{isCanceled:!0}:e)}))})),cancel:function(){r=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){c||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return i.default.createElement("button",a({},s({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:a({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),i.default.createElement("span",{style:a({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return i.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},i.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?i.default.createElement(e,a({},s({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(i.default.Component);d.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},d.propTypes={desktopShowModal:o.default.bool,triggerEvent:o.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:o.default.string,style:o.default.object,textStyle:o.default.object,disabled:o.default.bool,ComponentClass:o.default.string,showLoadingDialog:o.default.func,hideLoadingDialog:o.default.func,onScriptError:o.default.func,onScriptTagCreated:o.default.func,reconfigureOnUpdate:o.default.bool,stripeKey:o.default.string.isRequired,token:o.default.func.isRequired,name:o.default.string,description:o.default.string,image:o.default.string,amount:o.default.number,locale:o.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:o.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:o.default.string,zipCode:o.default.bool,billingAddress:o.default.bool,shippingAddress:o.default.bool,email:o.default.string,allowRememberMe:o.default.bool,bitcoin:o.default.bool,alipay:o.default.oneOf(["auto",!0,!1]),alipayReusable:o.default.bool,opened:o.default.func,closed:o.default.func},d._isMounted=!1,t.default=d},fdRS:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("zCU4"),o=r("v6Hh"),l=r("meiv"),s=r("rIQk"),c=r("rePB"),u=r("o0o1"),p=r.n(u),d=r("HaE+"),m=r("nOHt"),f=r.n(m),g=r("/MKj"),h=r("ju+z"),b=r("1OyB"),v=r("vuIU"),y=r("JX7q"),N=r("Ji7U"),O=r("md7G"),_=r("foSv"),S=r("vDqi"),P=r.n(S),j=(r("dP/F"),r("GGqY")),C=r("Nxmy"),D=n.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=Object(_.a)(e);if(t){var n=Object(_.a)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(O.a)(this,r)}}var k=function(e){Object(N.a)(r,e);var t=w(r);function r(){var e;Object(b.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(c.a)(Object(y.a)(e),"handleClick",(function(){e.props.isValid()&&e.props.handleSubmit()})),e}return Object(v.a)(r,[{key:"render",value:function(){this.props.amount;return D(n.a.Fragment,null,D(j.b,{transition:j.c}),D("div",{className:"order-btn"},D("button",{className:"btn btn-primary",onClick:this.handleClick},"Place Order")))}}]),r}(n.a.Component),E=(Object(g.b)(null,(function(e){return{resetCart:function(){e(Object(C.k)())}}}))(k),r("JyVt"));function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(arguments.length>2&&arguments[2],arguments.length>3&&arguments[3],Object(a.useState)(e)),n=r[0],i=r[1],o=Object(a.useState)(!0),l=o[0],s=o[1],u=Object(a.useState)(!1),p=u[0],d=u[1];Object(a.useEffect)((function(){var e=Object(E.a)();e&&i(e)}),[]),Object(a.useEffect)((function(){s(!0)}),[]),Object(a.useEffect)((function(){p&&s(m())}),[n,p]);var m=Object(a.useCallback)((function(){return Object.keys(t).some((function(e){var r=t[e].required,a=n[e].value,i=n[e].error;return r&&!a||i}))}),[n,t]);return{state:n,disable:l,handleOnChange:function(e){d(!0);var r=e.target.name,a=e.target.value,n="";t[r].required&&(a||(n="This is required field.")),null!==t[r].validator&&"object"===typeof t[r].validator&&t[r].validator.regEx&&a&&!t[r].validator.regEx.test(a)&&(n=t[r].validator.error),i((function(e){return A(A({},e),{},Object(c.a)({},r,{value:a,error:n}))}))},handleOnSubmit:function(e){e.preventDefault(),m()}}},M=(r("yX55"),r("EFcf"),n.a.createElement);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=Object(g.b)((function(e){return{total:e.total,shipping:e.shipping}}))((function(e){var t=e.total,r=e.shipping,i=function(){var e=Object(d.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Form submitted."),t=JSON.parse(localStorage.getItem("_bik_EKL")),console.log(g,t),r={orderItems:t,shippingFirstName:l.shipping_firstName.value,shippingLastName:l.shipping_lastName.value,shippingPhone:l.shipping_phone.value,shippingAddress:l.shipping_address.value,shippingCity:l.shipping_city.value,shippingProvince:"Metro Manila",shippingZip:l.shipping_zip.value,deliveryInstructions:l.note.value,billingFirstName:l.billing_firstName.value,billingLastName:l.billing_lastName.value,billingPhone:l.billing_phone.value,billingEmail:l.billing_email.value,deliveryDate:l.delivery_date.value,deliveryTime:"Anytime",paymentMethod:"COD"},e.prev=4,e.next=7,P.a.post("".concat("http://34.205.127.64:8080","/api/user/order"),r);case 7:(a=e.sent)&&(Object(C.f)(),window.location.href="/thankyou",console.log(a,"RES")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),o=((t+r).toFixed(2),Object(a.useState)({shipping_firstName:{value:"",error:""},shipping_lastName:{value:"",error:""},shipping_address:{value:"",error:""},shipping_city:{value:"",error:""},shipping_zip:{value:"",error:""},billing_email:{value:"",error:""},shipping_phone:{value:"",error:""},billing_firstName:{value:"",error:""},billing_lastName:{value:"",error:""},billing_phone:{value:"",error:""},note:{value:"",error:""},message:{value:"",error:""},delivery_date:{value:"",error:""},delivery_time:{value:"",error:""}})),l=o[0],s=o[1],u=function(e){j.d.error(e,{position:"bottom-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},m=q(l,{shipping_firstName:{required:!0,validator:{regEx:/^[a-zA-Z]+$/,error:"Invalid first name format"}},delivery_date:{required:!0},delivery_time:{required:!0},shipping_lastName:{required:!0,validator:{regEx:/^[a-zA-Z]+$/,error:"Invalid last name format."}},shipping_address:{required:!0,validator:{error:"Invalid address format."}},shipping_city:{required:!0,validator:{error:"Invalid last name format."}},shipping_zip:{required:!0,validator:{regEx:/^\d{4}$|^\d{4}-\d{4}$/,error:"Invalid zip format, use like 1234."}},billing_email:{required:!0,validator:{regEx:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,error:"Invalid email format, use like example@gmail.com"}},shipping_phone:{required:!0,validator:{regEx:/^(09|\+639)\d{9}$/,error:"Invalid phone number format use like 09343243243."}},billing_firstName:{required:!0,validator:{regEx:/^[a-zA-Z]+$/,error:"Invalid first name format."}},billing_lastName:{required:!0,validator:{regEx:/^[a-zA-Z]+$/,error:"Invalid last name format."}},billing_phone:{required:!0,validator:{regEx:/^(09|\+639)\d{9}$/,error:"Invalid phone number format use like 09343243243."}},note:{required:!1,validator:{regEx:/^[a-zA-Z]+$/,error:"Invalid note format."}},message:{required:!1,validator:{regEx:/^[a-zA-Z]+$/,error:"Invalid message format."}}},i,(function(e){s(L(L({},l),{},Object(c.a)({},e.target.name,{value:e.target.value,error:""})))})),g=m.state,b=m.handleOnChange,v=m.handleOnSubmit,y=(m.disable,{color:"red",fontSize:"13px"});return M(n.a.Fragment,null,M(j.b,{transition:j.c}),M("section",{className:"checkout-area ptb-60"},M("div",{className:"container"},M("form",{onSubmit:v},M("div",{className:"row"},M("div",{className:"col-lg-6 col-md-12"},M("div",{className:"shipping-details"},M("h3",{className:"title"},"Send my orders to"),M("div",{className:"row"},M("div",{className:"col-lg-6 col-md-6"},M("div",{className:"form-group"},M("label",null,"First Name ",M("span",{className:"required"},"*")),M("input",{type:"text",name:"shipping_firstName",className:"form-control",onChange:b,value:g.shipping_firstName.value,required:!0}),g.shipping_firstName.error&&M("p",{style:y},g.shipping_firstName.error))),M("div",{className:"col-lg-6 col-md-6"},M("div",{className:"form-group"},M("label",null,"Last Name ",M("span",{className:"required"},"*")),M("input",{type:"text",name:"shipping_lastName",className:"form-control",onChange:b,value:g.shipping_lastName.value,required:!0}),g.shipping_lastName.error&&M("p",{style:y},g.shipping_lastName.error))),M("div",{className:"col-lg-12 col-md-12"},M("div",{className:"form-group"},M("label",null,"Phone"),M("input",{type:"text",className:"form-control",name:"shipping_phone",onChange:b,value:g.shipping_phone.value,required:!0}),g.shipping_phone.error&&M("p",{style:y},g.shipping_phone.error))),M("div",{className:"col-lg-12 col-md-6"},M("div",{className:"form-group"},M("label",null,"Address ",M("span",{className:"required"},"*")),M("input",{type:"text",name:"shipping_address",className:"form-control",onChange:b,value:g.shipping_address.value,placeholder:"Street address, House Number / Company name, Baranggay",required:!0}),g.shipping_address.error&&M("p",{style:y},g.shipping_address.error))),M("div",{className:"col-lg-12 col-md-6"},M("div",{className:"form-group"},M("label",null,"Town / City ",M("span",{className:"required"},"*")),M("input",{type:"text",name:"shipping_city",className:"form-control",onChange:b,value:g.shipping_city.value,required:!0}),g.shipping_city.error&&M("p",{style:y},g.shipping_city.error))),M("div",{className:"col-lg-6 col-md-6"},M("div",{className:"form-group"},M("label",null,"Postcode / Zip ",M("span",{className:"required"},"*")),M("input",{type:"text",name:"shipping_zip",className:"form-control",onChange:b,value:g.shipping_zip.value,required:!0}),g.shipping_zip.error&&M("p",{style:y},g.shipping_zip.error))))),M("hr",{className:"dividerClass"}),M("div",{className:"billing-details"},M("h3",{className:"title"},"Your Info"),M("div",{className:"row"},M("div",{className:"col-lg-6 col-md-6"},M("div",{className:"form-group"},M("label",null,"First Name ",M("span",{className:"required"},"*")),M("input",{type:"text",name:"billing_firstName",className:"form-control",onChange:b,value:g.billing_firstName.value,placeholder:"Your Firstname",required:!0}),g.billing_firstName.error&&M("p",{style:y},g.billing_firstName.error))),M("div",{className:"col-lg-6 col-md-6"},M("div",{className:"form-group"},M("label",null,"Last Name ",M("span",{className:"required"},"*")),M("input",{type:"text",name:"billing_lastName",className:"form-control",onChange:b,value:g.billing_lastName.value,placeholder:"Your Lastname",required:!0}),g.billing_lastName.error&&M("p",{style:y},g.billing_lastName.error))),M("div",{className:"col-lg-12 col-md-12"},M("div",{className:"form-group"},M("label",null,"Email Address ",M("span",{className:"required"},"*")),M("input",{type:"email",name:"billing_email",className:"form-control",onChange:b,value:g.billing_email.value,placeholder:"Your email (For Order Confirmation)",required:!0}),g.billing_email.error&&M("p",{style:y},g.billing_email.error))),M("div",{className:"col-lg-12 col-md-12"},M("div",{className:"form-group"},M("label",null,"Phone"),M("input",{type:"text",className:"form-control",name:"billing_phone",onChange:b,value:g.billing_phone.value,required:!0}),g.billing_phone.error&&M("p",{style:y},g.billing_phone.error)))))),M("hr",{className:"my-3 dividerClass"}),M("div",{className:"col-lg-6 col-md-12"},M("div",{className:"order-details"},M("h3",{className:"title"},"Your Order"),M(h.a,null),M("div",{className:"order-btn",style:{textAlign:"center",paddingTop:"20px"}},M("button",{className:"btn btn-light",style:{width:"90%"},onClick:function(){(g.shipping_lastName.value?g.shipping_firstName.value?g.shipping_address.value?g.shipping_city.value?g.shipping_zip.value?g.billing_email.value?g.shipping_phone.value?g.billing_phone.value?g.billing_firstName.value?g.billing_lastName.value?g.shipping_address.value||(u("Please input receiver address."),0):(u("Please input your last name."),0):(u("Please input your first name."),0):(u("Please input your contact number."),0):(u("Please input receiver contact number."),0):(u("Please input your email info."),0):(u("Please input receiver zip."),0):(u("Please input receiver city."),0):(u("Please input receiver address."),0):(u("Please input receiver first name."),0):(u("Please input receiver last name."),0))&&(console.log(g),Object(E.c)(g)&&f.a.push("/payment"))}},"Proceed to Payment")))))))))})),T=n.a.createElement;function F(e){return T(n.a.Fragment,null,T("div",{className:"boxed-layout-wrapper"},T("div",{className:"boxed-layout-content"},T(i.a,null),T(s.a,{title:"Checkout"}),T(I,null),T(l.a,null),T(o.a,null))))}F.getInitialProps=function(){};t.default=F},"ju+z":function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("/MKj"),o=r("YFqc"),l=r.n(o),s=r("EFcf"),c=r("Nxmy"),u=r("JyVt"),p=n.a.createElement;t.a=Object(i.b)((function(e){return{products:e.addedItems,total:e.total,shipping:e.shipping}}))((function(e){var t=Object(a.useState)(!1),r=t[0],n=t[1],i=Object(a.useState)([]),o=i[0],d=i[1],m=Object(a.useState)(0),f=m[0],g=m[1];return Object(a.useEffect)((function(){var e=Object(u.a)();e&&"2023-02-14"==e.delivery_date.value&&n(!0)}),[]),Object(a.useEffect)((function(){var t=e.products.length?e.products:localStorage.getItem("_bik_EKL")?Object(c.g)(localStorage.getItem("_bik_EKL")):[];if(t.length<=0)return alert("You dont have any items in your cart."),window.location.href="/";for(var a=0,n=0;n<t.length;n++)a+=r?t[n].campaign_price*t[n].quantity:t[n].discount_price*t[n].quantity;d(t),g(a)}),[e.products,r]),p("div",{className:"order-table table-responsive"},p("table",{className:"table table-bordered"},p("thead",null,p("tr",null,p("th",{scope:"col"},"Product Name"),p("th",{scope:"col"},"Total"))),p("tbody",null,o.map((function(e,t){return p("tr",{key:t},p("td",{className:"product-name"},p(l.a,{href:"/product/".concat(e.slug)},p("a",null,e.name," ",""," ",e.quantity,"x"))),p("td",{className:"product-total"},p("span",{className:"subtotal-amount"},"\u20b1",r?Object(s.c)(e.campaign_price*e.quantity):Object(s.c)(e.discount_price*e.quantity))))})),f<800&&p("tr",null,p("td",{className:"order-subtotal"},p("span",null,"Service Charge")),p("td",{className:"order-subtotal-price"},p("span",{className:"order-subtotal-amount"},"\u20b1",Object(s.c)(800-f)))),p("tr",null,p("td",{className:"order-subtotal"},p("span",null,"Cart Subtotal")),p("td",{className:"order-subtotal-price"},p("span",{className:"order-subtotal-amount"},"\u20b1",Object(s.c)(f<800?800:f)))),p("tr",null,p("td",{className:"total-price"},p("span",null,"Order Total")),p("td",{className:"product-subtotal"},p("span",{className:"subtotal-amount"}," ","\u20b1",Object(s.c)(f<800?800:f)))))),f<800&&p("p",{style:{color:"red",textAlign:"center"}},"Minimum order is \u20b1800. If order is below \u20b1800, you will be charge to get to the 800 limit."))}))}},[["QCli",1,2,0,3,9]]]);