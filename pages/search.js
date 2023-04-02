import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/shop-style-one/Banner";
import Facility from "../components/shop-style-one/Facility";
import Testimonials from "../components/Common/Testimonials";
import InstagramPhoto from "../components/Common/InstagramPhoto";
import Footer from "../components/Layout/Footer";
import SearchProducts from "../components/Common/SearchProducts";
import axios from "axios";

let host = process.env.API_URL;
function Search(props) {
  return (
    <React.Fragment>
      <div className="boxed-layout-wrapper">
        <div className="boxed-layout-content">
          <Navbar />
          <Banner />
          <SearchProducts products={props.products} keyword={props.keyword} />
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

Search.getInitialProps = async ({ query }) => {
  console.log(query);
  try {
    let res = await axios.get(
      `${host}/api/user/product/search/${query.search}`
    );

    if (res) {
      return {
        products: res.data.productsByNameCategorySubCategory,
        keyword: query.search,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default Search;
