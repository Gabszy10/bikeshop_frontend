import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  autoplayTimeout: 7000,
  nav: false,
  dots: true,
  smartSpeed: 1500,
//   dotsSpeed: 15000,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
};

class Testimonials extends Component {
  state = {
    display: false,
    panel: true,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="testimonials-area ptb-60">
        <div className="container">
          {this.state.display ? (
            <OwlCarousel
              className="testimonials-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-testimonials">
                <div className="client-image">
                  <img
                    src={
                      "https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C"
                    }
                    style={{ objectFit: "cover" }}
                    alt="image"
                  />
                </div>

                <p style={{ fontSize: "1rem" }}>
                  Ang i-WheelsPH ay isang samahang pang Inter-galactic na
                  nanirahan sa planetang Earth upang maghatid ng kasiyahan
                  hanggang sa dulo ng lupalop ng daigdig.
                </p>

                <div className="client-info">
                  <h4 style={{ fontSize: "1rem" }}>Kurin</h4>
                  <span style={{ fontSize: "1rem" }}>
                    Founder at i-Wheels.shop
                  </span>
                </div>
              </div>

              <div className="single-testimonials">
                <div className="client-image">
                  <img
                    src="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C"
                    style={{ objectFit: "cover" }}
                    alt="image"
                  />
                </div>

                <p style={{ fontSize: "1rem" }}>
                  Makakasigurado na sa i-WheelsPH ay maihahatid ng MAAYOS at
                  MABILIS ang iyong order sa patutunguhan nito. Hindi katulad ng
                  relasyon nyo na hindi na nga MAAYOS, mabilis pa NATAPOS.
                </p>

                <div className="client-info">
                  <h4 style={{ fontSize: "1rem" }}>Jethro Sioco Loria</h4>
                  <span style={{ fontSize: "1rem" }}>
                    Founder at i-Wheels.shop
                  </span>
                </div>
              </div>

              <div className="single-testimonials">
                <div className="client-image">
                  <img
                    src="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C"
                    style={{ objectFit: "cover" }}
                    alt="image"
                  />
                </div>

                <p style={{ fontSize: "1rem" }}>
                  Sa i-WheelsPH , maraming bundles, flowers, bikes at iba
                  pa na pwedeng pagpilian at makakasigurado ang customer na
                  legit at totoo ang mga items dito. Oo mas legit pa sa
                  pagmamahalan nyo.
                </p>

                <div className="client-info">
                  <h4 style={{ fontSize: "1rem" }}>Arcival Palma</h4>
                  <span style={{ fontSize: "1rem" }}>
                    Founder at i-Wheels.shop
                  </span>
                </div>
              </div>

              <div className="single-testimonials">
                <div className="client-image">
                  <img
                    src="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C"
                    style={{ objectFit: "cover" }}
                    alt="image"
                  />
                </div>

                <p style={{ fontSize: "1rem" }}>
                  Ang i-WheelsPH ay isang samahan na kumakatawan sa bawat
                  tao, matanda, bata, may ngipin man o wala, na gustong ihatid
                  ang kanilang nararamdaman patungo sa mga mahahalagang tao sa
                  kanilang buhay. Pero pwede na din kahit hindi mahalaga.
                </p>

                <div className="client-info">
                  <h4 style={{ fontSize: "1rem" }}>Patrick Sero</h4>
                  <span style={{ fontSize: "1rem" }}>
                    Founder at i-Wheels.shop
                  </span>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default Testimonials;
