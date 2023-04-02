import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Breadcrumb from "../components/Common/Breadcrumb";
import ProductsCollections from "../components/collections-styles/ProductsCollections";
import Facility from "../components/Common/Facility";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="boxed-layout-wrapper">
          <div className="boxed-layout-content">
            <Navbar />
            <Breadcrumb title="Collections Type 1" />
            <ProductsCollections />
            <Facility />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
