(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"19J2":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t("eOhz")}])},eOhz:function(a,e,t){"use strict";t.r(e);var c=t("o0o1"),r=t.n(c),n=t("HaE+"),s=t("q1tI"),o=t.n(s),u=t("zCU4"),l=t("4oE1"),i=t("Fx4H"),d=(t("ENSr"),t("xKQ/"),t("v6Hh")),p=t("/MKj"),m=t("Nxmy"),f=t("YFqc"),N=t.n(f),v=t("cpGi"),g=t("GGqY"),h=t("EFcf"),w=o.a.createElement,b="http://ec2-18-212-33-45.compute-1.amazonaws.com:8080";var y=Object(p.b)((function(a){return{}}),(function(a){return{addToCart:function(e){a(Object(m.c)(e))}}}))((function(a){return w(o.a.Fragment,null,w(v.a,null),w(g.b,{transition:g.a}),w("div",{className:"related-products-area"},w("div",{className:"container"},w("div",{className:"section-title"},w("h2",null,w("span",{className:"dot"}),' Result for "',a.keyword,'"')),w(o.a.Fragment,null,w("div",{className:"row"},a.products?w(o.a.Fragment,null," ",a.products.map((function(e,t){return w("div",{className:"col-lg-3 col-sm-6 col-6",key:t},w("div",{className:"single-product-box"},w("div",{className:"product-image"},w(N.a,{href:"/product/".concat(e.slug)},w("img",{style:{cursor:"pointer"},src:"".concat(b,"/products/").concat(e.product_images[0].file_name),alt:"image"}))),w("div",{className:"product-content"},w("h3",null,w(N.a,{href:"/product/".concat(e.slug)},w("a",null,e.name))),w("div",{className:"product-price"},w("span",{className:"new-price"},"\u20b1",Object(h.c)(e.discount_price))),w("div",{className:"rating"},w("i",{className:"fas fa-star"}),w("i",{className:"fas fa-star"}),w("i",{className:"fas fa-star"}),w("i",{className:"fas fa-star"}),w("i",{className:"far fa-star"})),w(N.a,{href:"#"},w("a",{className:"btn btn-light",onClick:function(t){var c;t.preventDefault(),c=e,a.addToCart(c),g.d.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}},"Add to Cart")))))}))," "):w("h3",{className:"text-center m-auto"},"No products found"))))))})),k=t("vDqi"),x=t.n(k),C=o.a.createElement;function _(a){return C(o.a.Fragment,null,C("div",{className:"boxed-layout-wrapper"},C("div",{className:"boxed-layout-content"},C(u.a,null),C(l.a,null),C(y,{products:a.products,keyword:a.keyword}),C(i.a,null),C(d.a,null))))}_.getInitialProps=function(){var a=Object(n.a)(r.a.mark((function a(e){var t,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.query,console.log(t),a.prev=2,a.next=5,x.a.get("".concat("http://ec2-18-212-33-45.compute-1.amazonaws.com:8080","/api/user/product/search/").concat(t.search));case 5:if(!(c=a.sent)){a.next=8;break}return a.abrupt("return",{products:c.data.productsByNameCategorySubCategory,keyword:t.search});case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}();e.default=_}},[["19J2",1,2,0,3,4,7]]]);