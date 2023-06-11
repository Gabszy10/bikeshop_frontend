import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { connect } from "react-redux";
import { addToCart, addToCompare } from "../../store/actions/cartActions";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast, Slide } from "react-toastify";
import QuickView from "../Modal/QuickView";
import axios from "axios";
import { formatNumber } from "../../helpers/function";

function Products(props) {
  const [state, setstate] = useState({
    modalOpen: false,
    modalImage: "",
    price: 0,
    idd: null,
  });

  const [collections, setcollections] = useState([]);

  let host = process.env.API_URL;
  let { products } = props;
  const { modalOpen } = state;

  const fetchCollection = async () => {
    try {
      const res = await axios.get(`${host}/api/user/collection`);

      if (res.data) {
        setcollections(res.data.collections);
      }
    } catch (err) {
      if (err.response.data) {
        return toast.error(err.response.data.msg);
      }
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

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

  const handleAddToCompare = (id) => {
    props.addToCompare(id);

    toast.success("Added to the compare", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const compareButton = (id) => {
    let compare_exist = props.CompareProducts.filter((item) => item.id === id);
    if (compare_exist.length > 0) {
      return (
        <Link href="#">
          <a
            data-tip="Already Added"
            data-place="left"
            onClick={(e) => {
              e.preventDefault();
            }}
            disabled={true}
            className="disabled"
          >
            <i className="fas fa-sync"></i>
          </a>
        </Link>
      );
    } else {
      return (
        <Link href="#">
          <a
            data-tip="Add to Compare"
            data-place="left"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCompare(id);
            }}
          >
            <i className="fas fa-sync"></i>
          </a>
        </Link>
      );
    }
  };

  const openModal = () => {
    setstate({ ...state, modalOpen: true });
  };

  const closeModal = () => {
    setstate({ ...state, modalOpen: false });
  };

  const handleModalData = (image, price, id) => {
    setstate({ ...state, modalImage: image, price: price, idd: id });
  };

  return (
    <section className="all-products-area pb-60">
      <ReactTooltip />
      <ToastContainer transition={Slide} />
      <div className="container">
        {collections.length
          ? collections.map((collection, i) => (
              <LazyLoad height={200} offset={100}>
                <div key={i} className="tab products-category-tab">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <ul className="tabs">
                        <h2 className="current">
                          <span className="tabs-nav-text">
                            <span className="dot"></span> {collection.title}
                          </span>
                        </h2>
                      </ul>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="tab_content">
                        <div id="tab1" className="tabs_item">
                          <div className="row">
                            {collection.products.map((data, idx) => (
                              <div
                                className="col-lg-3 col-sm-6 col-6"
                                key={idx}
                              >
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

                                    <ul>
                                      <li>{compareButton(data.id)}</li>
                                    </ul>
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

                                    {rating(data.avg_review)}

                                    {data.stock > 0 ? (
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
                                    ) : (
                                      <a
                                        className="btn btn-light"
                                        onClick={(e) => {
                                          // e.preventDefault();
                                          // handleAddToCart(data);
                                        }}
                                      >
                                        Out of Stock
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </LazyLoad>
            ))
          : null}
      </div>
      {modalOpen ? (
        <QuickView
          closeModal={closeModal}
          idd={state.idd}
          image={state.modalImage}
          price={state.price}
        />
      ) : (
        ""
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    CompareProducts: state.addedItemsToCompare,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    addToCompare: (id) => {
      dispatch(addToCompare(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
