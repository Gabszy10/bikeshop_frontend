import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 3,
    },
    576: {
      items: 4,
    },
    768: {
      items: 6,
    },
    1200: {
      items: 9,
    },
  },
};

class InstagramPhoto extends Component {
  state = {
    display: false,
    panel: true,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="instagram-area">
        {this.state.display ? (
          <OwlCarousel
            className="instagram-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="instagram-box">
              <img
                src="https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/p960x960/117770626_1179734539055831_5540317664843034780_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_eui2=AeH-39PLKWBs7R--z1bj_yg6UJiPEDHt4rxQmI8QMe3ivJxZAgfS86ydfhJCvqK9vR1b-R0D6UBK2sQIM45k7zDa&_nc_ohc=-cgGKjEOjTMAX_Bp9n2&_nc_ht=scontent.fmnl7-1.fna&_nc_tp=6&oh=70fb82e1598b27d101f2d34daafba64d&oe=5F5D9FF2"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/117580668_1179731995722752_655238284323176710_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeGb230gPCKmN_xobYd8xyFE1H8Ci8HDyzfUfwKLwcPLN2CWisq3Pi1wleSBuET601-yreEvV_BMUO3Eh1a_YBpK&_nc_ohc=aqu1WcC6lG0AX97jNQb&_nc_ht=scontent.fmnl3-2.fna&oh=b8385a7a282043bdd3947f23e90bfd37&oe=5F5CC8A0"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/116898839_1179731382389480_7747868938142399981_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeEY4K7ZQly21lpraGUw2suB8loviRT8Wj_yWi-JFPxaP36eM2R3dpqvP7EBVjUP9bvDm5lCWjPNhPXOW4lQ4olG&_nc_ohc=pkULQS_6e_oAX-IlL3H&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=efa12fefc0c72b0730302917171509c7&oe=5F5EFD33"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/117537468_1179730619056223_1388251640472997153_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeFH4o3Bs0V5gNFMBJJOrebKE62_EglU6WUTrb8SCVTpZcKIc_BNpapv-kZFpHYded79BmQgAelzw5uJdpcvQF_k&_nc_ohc=1NGUZb_4XF4AX8YHD47&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=3bb9c61471fd66d657073c976058b915&oe=5F5D21BC"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/117261786_1172920389737246_3259098908696058338_o.jpg?_nc_cat=103&_nc_sid=0be424&_nc_eui2=AeFXszbXU5K2_m7J0kpZjFk-9XSESeuq7fP1dIRJ66rt8x_odOzHwUEdD5Ei59n7jSrJl1KCqY2D1XfDgjtTsPE2&_nc_ohc=VYz7lu4cM3IAX-Lvs82&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=22bd31fe4688b12700b0e3382ef00d55&oe=5F6065A3"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/110038909_1164581773904441_5824928607887917086_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeGMoKcYGtiL4fpr_kENS353KlI4aUJj5uIqUjhpQmPm4h-rWJjnCylh9oFGdaB9nFwpDEv8oxwJQWJO9QsWxTnh&_nc_ohc=PP-RqnAbyhAAX8mFXJ8&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=2045c3fc6f23fe6f8761dba611fc2352&oe=5F5E1440"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/107008468_1152809131748372_7763456214602512553_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_eui2=AeFSbHSNgm1dAAf1VKrJhHx_O5z7p1n4iic7nPunWfiKJ20urL39MfZwrJWmO8GG3HFXnhLkNGC4U40O4WU1QDBi&_nc_ohc=ZEQi23e_QjwAX_-HOL6&_nc_ht=scontent.fmnl3-2.fna&oh=201ceafe815c4253bdca54a1906e6c02&oe=5F5D5CD9"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/107307000_1150336615328957_3283061630543372979_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeHuG2_1zo5_79GtUuMsZ216byii-Q2k4advKKL5DaThp9LCr7JUT6L6okO91u0XAnagzQZI5qxqYXIne_XqtKKv&_nc_ohc=rVJXijum3UkAX_VO5bz&_nc_ht=scontent.fmnl3-1.fna&oh=6df7ab3e462242bc7f4c6e034f46af69&oe=5F5E184E"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>

            <div className="instagram-box">
              <img
                src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/p960x960/87459837_2664213117155251_1380758696342061056_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_eui2=AeE3xTkseYsXz_laTK5uXvZqUGwzzJ0WQrJQbDPMnRZCsndNvnxEQhNXlLlMbaZchvF0_AyUfKl6p0argtkZxM3d&_nc_ohc=aKQZv7BmJ-YAX-7k2ZQ&_nc_ht=scontent.fmnl3-2.fna&_nc_tp=6&oh=38d61ec9b715f6199c5745ee74e7ae93&oe=5F5FF2B1"
                alt="image"
              />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>
              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default InstagramPhoto;
