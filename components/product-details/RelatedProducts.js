import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast, Slide } from "react-toastify";
import axios from "axios";
import { formatNumber } from "../../helpers/function";

let host = process.env.API_URL;

function RelatedProducts(props) {
  const [products, setproducts] = useState([]);

  const fetchRelated = async () => {
    try {
      let res = await axios.get(
        `${host}/api/user/product/related/${props.categoryId}`
      );

      if (res) {
        setproducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRelated();
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    props.addToCart(product);

    toast.success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <React.Fragment>
      <ReactTooltip />
      <ToastContainer transition={Slide} />
      <div className="related-products-area">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Related Products
            </h2>
          </div>
          <>
            <div className="row">
              {console.log(products)}
              {products.map((data, idx) => (
                <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                <div className="single-product-box">
                  <div className="product-image">
                    <Link href={`/product/${data.slug}`}>
                      <img
                        style={{ cursor: "pointer" }}
                        src={`${host}/products/${data.product_images[0]["file_name"]}`}
                        alt="image"
                      />
                      {/* <img src={data.imageHover} alt="image" /> */}
                    </Link>

                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href={`/product/${data.slug}`}>
                        <a>{data.name}</a>
                      </Link>
                    </h3>

                    <div className="product-price">
                      <span className="new-price slashed">
                        ₱{formatNumber(data.regular_price)}
                      </span>
                    </div>

                    <div className="product-price">
                      <span className="new-price">
                        ₱{formatNumber(data.discount_price)}
                      </span>
                    </div>

                    {data.campaign_price ? (
                      <>
                        <div className="product-price">
                          <span
                            className="new-price"
                            style={{
                              fontSize: "0.9rem",
                              color: "#ff5558",
                            }}
                          >
                            Valentine's Price:
                          </span>
                        </div>
                        <div className="product-price">
                          <span
                            className="new-price"
                            style={{
                              fontSize: "1rem",
                              color: "#ff5558",
                              fontWeight: "bold",
                            }}
                          >
                            ₱{formatNumber(data.campaign_price)}
                          </span>
                        </div>
                      </>
                    ) : null}

                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <Link href={`/product/${data.slug}`}>
                      <a
                        className="btn btn-light"
                        onClick={(e) => {
                          // e.preventDefault();
                          // handleAddToCart(data);
                        }}
                      >
                        Add to Cart
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    // products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);