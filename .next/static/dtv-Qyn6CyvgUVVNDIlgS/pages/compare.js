(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{FAYi:function(t,e,a){"use strict";a.r(e);var c=a("1OyB"),n=a("vuIU"),r=a("Ji7U"),o=a("md7G"),s=a("foSv"),i=a("q1tI"),l=a.n(i),u=a("zCU4"),f=a("v6Hh"),m=a("meiv"),d=a("rIQk"),p=a("JX7q"),v=a("rePB"),h=a("YFqc"),y=a.n(h),b=a("/MKj"),N=a("Nxmy"),O=a("GGqY"),j=l.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=Object(s.a)(t);if(e){var n=Object(s.a)(this).constructor;a=Reflect.construct(c,arguments,n)}else a=c.apply(this,arguments);return Object(o.a)(this,a)}}var R=function(t){Object(r.a)(a,t);var e=g(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r)),Object(v.a)(Object(p.a)(t),"handleRemove",(function(e){t.props.removeItemFromCompare(e),O.d.error("Removed from compare list",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})),Object(v.a)(Object(p.a)(t),"handleAddToCart",(function(e){t.props.addToCart(e),O.d.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})),t}return Object(n.a)(a,[{key:"render",value:function(){var t=this,e=this.props.compare_products;return j("section",{className:"compare-area ptb-60"},j(O.b,{transition:O.a}),j("div",{className:"container"},j("div",{className:"section-title"},j("h2",null,j("span",{className:"dot"})," Compare Products")),j("div",{className:"products-compare-table"},j("div",{className:"row"},e.length?e.map((function(e,a){return j("div",{className:"col-lg-3 col-md-6 col-sm-6",key:a},j("div",{className:"remove-btn"},j(y.a,{href:"#"},j("a",{className:"remove",onClick:function(a){a.preventDefault(),t.handleRemove(e.id)}},j("i",{className:"far fa-trash-alt"})))),j("div",{className:"single-product-box"},j("div",{className:"product-image"},j(y.a,{href:"#"},j("a",null,j("img",{src:e.image,alt:"image"})))),j("div",{className:"product-content"},j("h3",null,j(y.a,{href:"#"},j("a",null,e.title))),j("div",{className:"product-price"},j("span",{className:"new-price"},"$",e.price)),j("div",{className:"rating"},j("i",{className:"fas fa-star"}),j("i",{className:"fas fa-star"}),j("i",{className:"fas fa-star"}),j("i",{className:"fas fa-star"}),j("i",{className:"far fa-star"})),j(y.a,{href:"#"},j("a",{className:"btn btn-light",onClick:function(a){a.preventDefault(),t.handleAddToCart(e.id)}},"Add to Cart")))))})):j("div",null,"Empty")))))}}]),a}(i.Component),C=Object(b.b)((function(t){return{compare_products:t.addedItemsToCompare}}),(function(t){return{addToCart:function(e){t(Object(N.c)(e))},removeItemFromCompare:function(e){t(Object(N.j)(e))}}}))(R),w=l.a.createElement;function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=Object(s.a)(t);if(e){var n=Object(s.a)(this).constructor;a=Reflect.construct(c,arguments,n)}else a=c.apply(this,arguments);return Object(o.a)(this,a)}}var x=function(t){Object(r.a)(a,t);var e=k(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return w(l.a.Fragment,null,w("div",{className:"boxed-layout-wrapper"},w("div",{className:"boxed-layout-content"},w(u.a,null),w(d.a,{title:"Compare"}),w(C,null),w(m.a,null),w(f.a,null))))}}]),a}(i.Component);e.default=x},meiv:function(t,e,a){"use strict";var c=a("1OyB"),n=a("vuIU"),r=a("Ji7U"),o=a("md7G"),s=a("foSv"),i=a("q1tI"),l=a.n(i).a.createElement;function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=Object(s.a)(t);if(e){var n=Object(s.a)(this).constructor;a=Reflect.construct(c,arguments,n)}else a=c.apply(this,arguments);return Object(o.a)(this,a)}}var f=function(t){Object(r.a)(a,t);var e=u(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return l("section",{className:"facility-area"},l("div",{className:"container"},l("div",{className:"row"},l("div",{className:"col-lg-3 col-sm-6"},l("div",{className:"facility-box"},l("div",{className:"icon"},l("i",{className:"fas fa-plane"})),l("h3",null,"Same Day Delivery"))),l("div",{className:"col-lg-3 col-sm-6"},l("div",{className:"facility-box"},l("div",{className:"icon"},l("i",{className:"fas fa-money-check-alt"})),l("h3",null,"100% money back guarantee"))),l("div",{className:"col-lg-3 col-sm-6"},l("div",{className:"facility-box"},l("div",{className:"icon"},l("i",{className:"far fa-credit-card"})),l("h3",null,"Many payment gateways"))),l("div",{className:"col-lg-3 col-sm-6"},l("div",{className:"facility-box"},l("div",{className:"icon"},l("i",{className:"fas fa-headset"})),l("h3",null,"24/7 online support"))))))}}]),a}(i.Component);e.a=f},rIQk:function(t,e,a){"use strict";var c=a("1OyB"),n=a("vuIU"),r=a("Ji7U"),o=a("md7G"),s=a("foSv"),i=a("q1tI"),l=a.n(i),u=a("YFqc"),f=a.n(u),m=l.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=Object(s.a)(t);if(e){var n=Object(s.a)(this).constructor;a=Reflect.construct(c,arguments,n)}else a=c.apply(this,arguments);return Object(o.a)(this,a)}}var p=function(t){Object(r.a)(a,t);var e=d(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return m("div",{className:"page-title-area"},m("div",{className:"container"},m("ul",null,m("li",null,m(f.a,{href:"/"},m("a",null,"Home"))),m("li",null,this.props.title))))}}]),a}(i.Component);e.a=p},snyZ:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compare",function(){return a("FAYi")}])}},[["snyZ",1,2,0,3]]]);