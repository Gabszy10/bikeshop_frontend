(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"7Ljw":function(a,e,t){"use strict";t.r(e);var c=t("o0o1"),n=t.n(c),s=t("HaE+"),r=t("q1tI"),l=t.n(r),o=t("zCU4"),u=t("4oE1"),i=t("Fx4H"),p=(t("ENSr"),t("xKQ/"),t("v6Hh")),d=t("vDqi"),m=t.n(d),f=t("WPG8"),g=l.a.createElement;function N(a){return g(l.a.Fragment,null,g("div",{className:"boxed-layout-wrapper"},g("div",{className:"boxed-layout-content"},g(o.a,null),g(u.a,null),g(f.a,{products:a.products,label:"Category"}),g(i.a,null),g(p.a,null))))}N.getInitialProps=function(){var a=Object(s.a)(n.a.mark((function a(e){var t,c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.query,console.log(t),a.prev=2,a.next=5,m.a.get("".concat("http://http://54.159.143.144:8080","/api/user/product/category/").concat(t.slug));case 5:if(!(c=a.sent)){a.next=8;break}return a.abrupt("return",{products:c.data.products});case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}(),e.default=N},WPG8:function(a,e,t){"use strict";var c=t("q1tI"),n=t.n(c),s=t("/MKj"),r=t("Nxmy"),l=t("YFqc"),o=t.n(l),u=t("cpGi"),i=t("GGqY"),p=t("EFcf"),d=n.a.createElement,m="http://http://54.159.143.144:8080";e.a=Object(s.b)((function(a){return{}}),(function(a){return{addToCart:function(e){a(Object(r.c)(e))}}}))((function(a){return d(n.a.Fragment,null,d(u.a,null),d(i.b,{transition:i.a}),d("div",{className:"related-products-area",style:{paddingTop:"0px"}},d("div",{className:"container"},d("div",{className:"section-title"},d("h2",null,d("span",{className:"dot"})," ",a.products?d(n.a.Fragment,null," ","Budget"!=a.label?d(n.a.Fragment,null," ","Result for ",a.label,":"," ",a.products[0].categories?a.products[0].categories[0].name:a.products[0].sub_categories[0].name," "):"Budget Products"):null)),d(n.a.Fragment,null,d("div",{className:"row"},a.products?d(n.a.Fragment,null," ",a.products.map((function(a,e){return d("div",{className:"col-lg-3 col-sm-6 col-6",key:e},d("div",{className:"single-product-box"},d("div",{className:"product-image"},d(o.a,{href:"/product/".concat(a.slug)},d("img",{style:{cursor:"pointer"},src:"".concat(m,"/products/").concat(a.product_images[0].file_name),alt:"image"}))),d("div",{className:"product-content"},d("h3",null,d(o.a,{href:"/product/".concat(a.slug)},d("a",null,a.name))),d("div",{className:"product-price"},d("span",{className:"new-price slashed"},"\u20b1",Object(p.c)(a.regular_price))),d("div",{className:"product-price"},d("span",{className:"new-price"},"\u20b1",Object(p.c)(a.discount_price))),a.campaign_price?d(n.a.Fragment,null,d("div",{className:"product-price"},d("span",{className:"new-price",style:{fontSize:"0.9rem",color:"#ff5558"}},"Valentine's Price:")),d("div",{className:"product-price"},d("span",{className:"new-price",style:{fontSize:"1rem",color:"#ff5558",fontWeight:"bold"}},"\u20b1",Object(p.c)(a.campaign_price)))):null,d("div",{className:"rating"},d("i",{className:"fas fa-star"}),d("i",{className:"fas fa-star"}),d("i",{className:"fas fa-star"}),d("i",{className:"fas fa-star"}),d("i",{className:"fas fa-star"})),d(o.a,{href:"/product/".concat(a.slug)},d("a",{className:"btn btn-light",onClick:function(a){}},"Add to Cart")))))}))," "):d("h3",{className:"text-center m-auto"},"No products found"))))))}))},bsVk:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return t("7Ljw")}])}},[["bsVk",1,2,0,3,4,6]]]);