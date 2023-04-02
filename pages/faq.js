import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="boxed-layout-wrapper">
          <div className="boxed-layout-content">
            <Navbar />
            <Breadcrumb title="Contact Us" />
            <section className="faq-area ptb-60">
              <div className="container">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> Frequently Asked Questions
                  </h2>
                </div>

                <div className="faq-accordion">
                  <ul className="accordion">
                    <Accordion>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            HOW TO ORDER?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            • 1. Choose a bike, click on its photo and click
                            Add to Cart. <br /> • 2. Input your message and
                            special instructions. <br /> • 3. Choose your
                            preferred date and time of delivery and then click
                            Check-out. <br />
                            • 4. Input the sender's email the name of the
                            recipient as well as the delivery location. And
                            click Continue to Shipping Method. <br /> • 5. Click
                            Continue to Payment Method. <br /> • 6. Choose your
                            mode of payment and sender's details and click
                            Confirm Order • Once the order is completed, you
                            will be redirected to the order confirmation page
                            that includes your order number.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            HOW MUCH IS YOUR SHIPPING FEE?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            We offer free shipping within Metro Manila and a
                            minimum of 100 php in provinces, depending on the
                            area.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            DO YOU DELIVER SAME DAY?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul>
                            <li>
                              We offer Free Same Day Delivery as long as you
                              place your order on or before 6pm on weekdays and
                              on or before 4pm on weekends.
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            DO YOU ACCEPT FUTURE ORDER?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Yes, you can order now for future delivery dates (6 months
                            to 1 year)
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            HOW CAN I CONTACT YOU?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            • GLOBE: 0916 509 1083 <br /> • SMART: 0961 810 0128
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            CAN I CANCEL MY ORDER?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            • You may cancel your order 24 hours or one (1) day
                            before your intended delivery date and we will
                            process a full refund / charge-back to you. Kindly
                            note that refunds will typically take seven (7) to
                            fourteen (14) working days for the refund process to
                            be completed depending on the payment method you
                            used to make your purchase and bank clearance which
                            I-Wheels does not have influence beyond. <br />{" "}
                            • It is your responsibility note of our cancellation
                            policy mentioned above. Failure to do so will
                            consider your request to cancel the order and full
                            refund invalid.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            CAN I CUSTOMIZE MY ORDER?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul>
                            <li>
                              Yes, you may request custom bike depends on
                              your budget.
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </ul>
                </div>
              </div>
            </section>
            <Facility />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
