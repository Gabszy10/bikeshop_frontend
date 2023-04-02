import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Banner from "../../components/shop-style-one/Banner";
import Facility from "../../components/shop-style-one/Facility";
import Testimonials from "../../components/Common/Testimonials";
import InstagramPhoto from "../../components/Common/InstagramPhoto";
import Footer from "../../components/Layout/Footer";
import axios from "axios";
import CategoryProducts from "../../components/Common/CategoryProducts";

let host = process.env.API_URL;
function Index(props) {
  return (
    <React.Fragment>
      <div className="boxed-layout-wrapper">
        <div className="boxed-layout-content">
          <Navbar />
          <Banner />
          <CategoryProducts products={props.products} label="Category" />
          {/* <TrendingProducts /> */}
          {/* <BestSeller /> */}
          <Facility />
          {/* <Testimonials /> */}
          {/* <News /> */}
          {/* <Subscribe /> */}
          {/* <Partner /> */}
          {/* <InstagramPhoto /> */}
          <Footer />
          {/* <AddsModal /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

Index.getInitialProps = async ({ query }) => {
  console.log(query);
  try {
    let res = await axios.get(
      `${host}/api/user/product/category/${query.slug}`
    );

    if (res) {
      return {
        products: res.data.products,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default Index;
