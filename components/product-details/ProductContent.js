import React, { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import {
  addQuantityWithNumber,
  addToCartAddons,
} from "../../store/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import SizeGuide from "./SizeGuide";
import Shipping from "./Shipping";
import AddonProducts from "../shop-style-one/AddonProducts";
import { formatNumber } from "../../helpers/function";

function ProductContent(props) {
  const [state, setstate] = useState({
    qty: 1,
    max: 10,
    min: 1,
    sizeGuide: false,
    shipModal: false,
  });

  const [addon, setAddon] = useState([]);

  const handleAddToCartFromView = (product) => {
    let new_items = addon;
    new_items.push(product);
    props.addToCartAddons(new_items, state.qty);

    toast.success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    window.location.href = `/cart`;
  };

  const handleAddonCheck = (e, product) => {
    let newAddon = addon;
    if (e.target.checked) {
      newAddon.push(product);
      setAddon(newAddon);
    } else {
      let new_items = addon.filter((item) => product.id !== item.id);
      setAddon(new_items);
    }

    console.log(addon, newAddon);
  };

  const IncrementItem = () => {
    setstate((prevState) => {
      if (prevState.qty < 1000) {
        return {
          qty: prevState.qty + 1,
        };
      } else {
        return null;
      }
    });
  };

  const DecreaseItem = () => {
    setstate((prevState) => {
      if (prevState.qty > 1) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return null;
      }
    });
  };

  const rating = (review) => {
    if (review >= 5) {
      return (
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      );
    } else if (review == 4) {
      return (
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      );
    } else if (review == 3) {
      return (
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      );
    } else if (review == 2) {
      return (
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      );
    } else if (review == 1) {
      return (
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      );
    } else if (review <= 0) {
      return (
        <div className="rating">
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      );
    }
  };

  const closeSizeGuide = () => {
    setstate({ ...state, sizeGuide: false });
  };

  const openShipModal = () => {
    setstate({ ...state, shipModal: true });
  };

  const closeShipModal = () => {
    setstate({ ...state, shipModal: false });
  };

  const { sizeGuide, shipModal } = state;
  let { product } = props;
  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-6">
        <ToastContainer />

        <div
          className="product-details-content"
          style={
            product.product_images.length <= 1
              ? { marginBottom: "100px" }
              : null
          }
        >
          <h3>{product.name}</h3>

          <div className="price">
            <span className="new-price">
              ₱{formatNumber(product.discount_price)}
            </span>
          </div>

          {product.campaign_price ? (
            <>
              <div className="price">
                <span
                  className="new-price"
                  style={{
                    fontSize: "1rem",
                    color: "#ff5558",
                    fontWeight: "bold",
                  }}
                >
                  Valentine's Price: ₱{formatNumber(product.campaign_price)}
                </span>
              </div>
            </>
          ) : null}

          <div className="product-review">
            {rating(product.avg_review)}
            {/* <Link href="#">
              <a className="rating-count">34 reviews</a>
            </Link> */}
          </div>

          <p>{product.description}</p>
          <br />

          {/* <ul className="product-info">
                            <li><span>Vendor:</span> <Link href="#"><a>Lereve</a></Link></li>
                            <li><span>Availability:</span> <Link href="#"><a>In stock (7 items)</a></Link></li>
                            <li><span>Product Type:</span> <Link href="#"><a>T-Shirt</a></Link></li>
                        </ul> */}

          {/* <div className="product-color-switch">
                            <h4>Color:</h4>

                            <ul>
                                <li>
                                    <Link href="#">
                                        <a title="Black" className="color-black"></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a title="White" className="color-white"></a>
                                    </Link>
                                </li>
                                <li className="active">
                                    <Link href="#">
                                        <a title="Green" className="color-green"></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a title="Yellow Green" className="color-yellowgreen"></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a title="Teal" className="color-teal"></a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
          {/* 
                        <div className="product-size-wrapper">
                            <h4>Size:</h4>

                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>XS</a>
                                    </Link>
                                </li>
                                <li className="active">
                                    <Link href="#">
                                        <a>S</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>M</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>XL</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>XXL</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="product-info-btn">
                            <Link href="#">
                                <a
                                    onClick={e => {
                                        e.preventDefault(); 
                                        openSizeGuide();
                                    }}
                                >
                                    <i className="fas fa-crop"></i> Size guide
                                </a>
                            </Link>
                            <Link href="#">
                                <a
                                    onClick={e => {
                                        e.preventDefault(); 
                                        openShipModal();
                                    }}
                                >
                                    <i className="fas fa-truck"></i> Shipping
                                </a>
                            </Link>

                            <Link href="#">
                                <a>
                                    <i className="far fa-envelope"></i> Ask about this product
                                </a>
                            </Link>
                        </div> */}

          <div className="product-add-to-cart">
            <div className="input-counter">
              <span className="minus-btn" onClick={DecreaseItem}>
                <i className="fas fa-minus"></i>
              </span>
              <input
                type="text"
                value={state.qty}
                min={state.min}
                max={state.max}
                onChange={(e) => setstate({ ...state, qty: e.target.value })}
              />
              <span className="plus-btn" onClick={IncrementItem}>
                <i className="fas fa-plus"></i>
              </span>
            </div>
          </div>

          {/* <div className="wishlist-compare-btn">
            <Link href="#">
              <a className="btn btn-light">
                <i className="fas fa-balance-scale"></i> Add to Compare
              </a>
            </Link>
          </div> */}

          <AddonProducts handleAddonCheck={handleAddonCheck} />

          <div className="buy-checkbox-btn">
            <div className="item">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => handleAddToCartFromView(product)}
              >
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>

          <div className="custom-payment-options">
            <span>Guaranteed safe checkout:</span>

            <div className="payment-methods">
              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/1.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/2.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/3.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/4.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/5.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/6.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/7.svg")}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {sizeGuide ? <SizeGuide closeSizeGuide={closeSizeGuide} /> : ""}
      {shipModal ? <Shipping closeShipModal={closeShipModal} /> : ""}
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(addQuantityWithNumber(id, qty));
    },
    addToCartAddons: (products, qty) => {
      dispatch(addToCartAddons(products, qty));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductContent);
