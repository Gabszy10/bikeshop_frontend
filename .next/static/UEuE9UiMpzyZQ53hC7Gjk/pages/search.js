(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"19J2":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t("eOhz")}])},eOhz:function(a,e,t){"use strict";t.r(e);var r=t("o0o1"),c=t.n(r),n=t("HaE+"),s=t("q1tI"),o=t.n(s),l=t("zCU4"),u=t("4oE1"),i=t("Fx4H"),d=(t("ENSr"),t("xKQ/"),t("v6Hh")),p=t("/MKj"),m=t("Nxmy"),f=t("YFqc"),N=t.n(f),v=t("cpGi"),g=t("GGqY"),h=t("EFcf"),b=o.a.createElement,w="http://34.205.127.64:8080";var y=Object(p.b)((function(a){return{}}),(function(a){return{addToCart:function(e){a(Object(m.c)(e))}}}))((function(a){return b(o.a.Fragment,null,b(v.a,null),b(g.b,{transition:g.a}),b("div",{className:"related-products-area"},b("div",{className:"container"},b("div",{className:"section-title"},b("h2",null,b("span",{className:"dot"}),' Result for "',a.keyword,'"')),b(o.a.Fragment,null,b("div",{className:"row"},a.products?b(o.a.Fragment,null," ",a.products.map((function(e,t){return b("div",{className:"col-lg-3 col-sm-6 col-6",key:t},b("div",{className:"single-product-box"},b("div",{className:"product-image"},b(N.a,{href:"/product/".concat(e.slug)},b("img",{style:{cursor:"pointer"},src:"".concat(w,"/products/").concat(e.product_images[0].file_name),alt:"image"}))),b("div",{className:"product-content"},b("h3",null,b(N.a,{href:"/product/".concat(e.slug)},b("a",null,e.name))),b("div",{className:"product-price"},b("span",{className:"new-price"},"\u20b1",Object(h.c)(e.discount_price))),b("div",{className:"rating"},b("i",{className:"fas fa-star"}),b("i",{className:"fas fa-star"}),b("i",{className:"fas fa-star"}),b("i",{className:"fas fa-star"}),b("i",{className:"far fa-star"})),b(N.a,{href:"#"},b("a",{className:"btn btn-light",onClick:function(t){var r;t.preventDefault(),r=e,a.addToCart(r),g.d.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}},"Add to Cart")))))}))," "):b("h3",{className:"text-center m-auto"},"No products found"))))))})),k=t("vDqi"),x=t.n(k),C=o.a.createElement;function _(a){return C(o.a.Fragment,null,C("div",{className:"boxed-layout-wrapper"},C("div",{className:"boxed-layout-content"},C(l.a,null),C(u.a,null),C(y,{products:a.products,keyword:a.keyword}),C(i.a,null),C(d.a,null))))}_.getInitialProps=function(){var a=Object(n.a)(c.a.mark((function a(e){var t,r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.query,console.log(t),a.prev=2,a.next=5,x.a.get("".concat("http://34.205.127.64:8080","/api/user/product/search/").concat(t.search));case 5:if(!(r=a.sent)){a.next=8;break}return a.abrupt("return",{products:r.data.productsByNameCategorySubCategory,keyword:t.search});case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}();e.default=_}},[["19J2",1,2,0,3,4,6]]]);