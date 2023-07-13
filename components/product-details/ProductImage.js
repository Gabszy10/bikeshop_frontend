import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function ProductImage(props) {
  let slider1;
  let slider2;
  let host = process.env.API_URL;

  const [state, setstate] = useState({
    nav1: null,
    nav2: null,
  });

  useEffect(() => {
    setstate({
      nav1: slider1,
      nav2: slider2,
    });
  }, []);

  const renderSliderMainImages = () => {
    return props.product.product_images.map((image, i) => {
      return (
        <div key={i}>
          <div className="item">
            <img
              src={`https://ramdale.s3.amazonaws.com/${image["file_name"]}`}
            />
          </div>
        </div>
      );
    });
  };

  const renderSliderSubImages = () => {
    return props.product.product_images.map((image, i) => {
      return (
        <div key={i}>
          <div className="item">
            <img
              src={`https://ramdale.s3.amazonaws.com/${image["file_name"]}`}
              height="180"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="col-lg-6 col-md-6">
      <div className="products-page-gallery">
        <div className="product-page-gallery-main">
          <div>
            <Slider asNavFor={state.nav2} ref={(slider) => (slider1 = slider)}>
              {renderSliderMainImages()}
            </Slider>
          </div>
        </div>

        {props.product.product_images.length > 1 ? (
          <div className="product-page-gallery-preview">
            <div>
              <Slider
                asNavFor={state.nav1}
                ref={(slider) => (slider2 = slider)}
                slidesToShow={props.product.product_images.length - 1}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={false}
                dots={false}
              >
                {renderSliderSubImages()}
              </Slider>
            </div>
          </div>
        ) : (
          <br />
        )}
      </div>
    </div>
  );
}

const DEFAULT_PROPS = [
  {
    id: 1,
    image: require("../../images/product-details/1.jpg"),
  },
  {
    id: 2,
    image: require("../../images/product-details/2.jpg"),
  },
  {
    id: 3,
    image: require("../../images/product-details/3.jpg"),
  },
  {
    id: 4,
    image: require("../../images/product-details/4.jpg"),
  },
  {
    id: 5,
    image: require("../../images/product-details/5.jpg"),
  },
  {
    id: 6,
    image: require("../../images/product-details/6.jpg"),
  },
  {
    id: 7,
    image: require("../../images/product-details/7.jpg"),
  },
];

export default ProductImage;
