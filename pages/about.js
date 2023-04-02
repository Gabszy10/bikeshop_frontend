import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import Testimonials from "../components/Common/Testimonials";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="boxed-layout-wrapper">
          <div className="boxed-layout-content">
            <Navbar />
            <Breadcrumb title="About Us" />
            <section className="about-area ptb-60">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="about-content">
                      <h2>About Our Store</h2>
                      <p>
                        We are a start-up company established by young and
                        diversed entrepreneurs. We aim to provide the best
                        quality crafted by our experienced team and to provide
                        customer satisfaction at an affordable price.
                      </p>

                      <p>
                        That is why we started i-Wheels — to amuse our
                        customers with meticulously handcrafted bikes and
                        gifts.
                      </p>

                      {/* <div className="signature mb-0">
                        <img
                          src={require("../images/signature.png")}
                          alt="image"
                        />
                      </div> */}
                    </div>
                  </div>
                  {/* 
                  <div className="col-lg-6 col-md-12">
                    <div className="about-image">
                      <img
                        src={require("../images/about1.jpg")}
                        className="about-img1"
                        alt="image"
                      />

                      <img
                        src={require("../images/about2.jpg")}
                        className="about-img2"
                        alt="image"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
            {/* <Testimonials /> */}
            <Facility />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
