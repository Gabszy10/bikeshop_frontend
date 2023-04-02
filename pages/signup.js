import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import Register from "../components/auth/Register";

function Index(props) {
  return (
    <>
      <div className="boxed-layout-wrapper">
        <div className="boxed-layout-content">
          <Navbar />
          <Breadcrumb title="Signup" />
          <Register />
          <Facility />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Index;
