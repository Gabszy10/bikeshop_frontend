import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CheckoutForm from "../components/checkout/CheckoutForm";

function Index(props) {
  return (
    <>
      <div className="boxed-layout-wrapper">
        <div className="boxed-layout-content">
          <Navbar />
          <Breadcrumb title="Checkout" />
          <CheckoutForm />
          <Facility />
          <Footer />
        </div>
      </div>
    </>
  );
}

Index.getInitialProps = () => {};

export default Index;
