import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Facility from "../components/shop-style-one/Facility";
import Footer from "../components/Layout/Footer";
import PaymentMethods from "../components/payments/PaymentMethods";
class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="boxed-layout-wrapper">
          <div className="boxed-layout-content">
            <Navbar />
            <PaymentMethods />

            <Facility />
            {/* <InstagramPhoto /> */}
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
