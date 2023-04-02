import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo" style={{ display: "flex" }}>
                  <Link href="/">
                    <a style={{ margin: "auto" }}>
                      <img
                        src={require("../../images/logos/logo.png")}
                        alt="logo"
                        height="30"
                      />
                    </a>
                  </Link>
                </div>

                <p>
                We offer the best brands of Bikes, E-Scooter, E-Bikes & E-Rides available in the market.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Faq's</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/customer-service">
                      <a>Customer Services</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Information</h3>

                <ul className="information-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/sizing-guide">
                      <a>Sizing Guide</a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/customer-service">
                      <a>Customer Services</a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Location (Manila Branch): Kalayaan Avenue, Pitogo, Makati
                    City, Philippines
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <a href="tel:(+123) 456-7898"> 0916 509 1083 (GLOBE)</a>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <a href="tel:(+123) 456-7898">0961 810 0128 (SMART)</a>
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>
                    Email Us:{" "}
                    <a href="mailto:support@We - Order.com">
                      i-Wheels26@gmail.com
                    </a>
                  </li>
                  {/* <li>
                    <i className="fas fa-fax"></i>
                    Fax: <a href="tel:+123456">+123456</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>Copyright @ 2023 i-WheelsPH</p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul className="payment-card">
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/visa.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/mastercard.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/mastercard2.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/visa2.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <img
                          src={require("../../images/expresscard.png")}
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;