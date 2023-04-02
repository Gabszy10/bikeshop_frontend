import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CartContent from "../components/cart/CartContent";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="boxed-layout-wrapper">
          <div className="boxed-layout-content">
            <Navbar />
            <Breadcrumb title="Cart" />
            <CartContent />
            <Facility />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
