import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Footer from "../../components/Layout/Footer";
import ProductImage from "../../components/product-details/ProductImage";
import ProductContent from "../../components/product-details/ProductContent";
import RelatedProducts from "../../components/product-details/RelatedProducts";
import Facility from "../../components/shop-style-one/Facility";
import { singleProduct } from "../../store/actions/productActions";

function SingleProduct({ product }) {
  return (
    <React.Fragment>
      <div className="boxed-layout-wrapper">
        <div className="boxed-layout-content">
          <Navbar />
          <Breadcrumb title={product.name} />

          <section className="products-details-area pt-60">
            <div className="container">
              <div className="row">
                <ProductImage product={product} />
                <ProductContent product={product} />
                {/* <DetailsTab /> */}
              </div>
            </div>

            <RelatedProducts categoryId={product.category_id} />

            <Facility />
          </section>

          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

SingleProduct.getInitialProps = ({ query }) => {
  return singleProduct(query.slug).then((data) => {
    if (data.error) {
    } else {
      return { product: data.product, query };
    }
  });
};

export default SingleProduct;
