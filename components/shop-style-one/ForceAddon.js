import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast, Slide } from "react-toastify";
import QuickView from "../Modal/QuickView";
import dynamic from "next/dynamic";
import axios from "axios";
import { formatNumber } from "../../helpers/function";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: false,
  nav: true,
  smartSpeed: 650,
  dots: true,
  autoplayHoverPause: true,
  margin: 3,
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
      items: 4,
    },
    1024: {
      items: 5,
    },
    1200: {
      items: 5,
    },
  },
};

function ForceAddon(props) {
  const [products, setproducts] = useState([]);
  const [state, setstate] = useState({
    modalOpen: false,
    modalImage: "",
    price: 0,
    idd: null,
    display: false,
    panel: true,
  });
  //if inside means the addon is checked
  let addonProductId = [];

  let host = process.env.API_URL;

  const fetchAddons = async () => {
    try {
      const res = await axios.get(`${host}/api/user/product/type/addon`);

      if (res.data) {
        setproducts(res.data.products);
      }
    } catch (err) {
      if (err.response.data) {
        return toast.error(err.response.data.msg);
      }
    }
  };

  useEffect(() => {
    fetchAddons();
  }, []);

  useEffect(() => {
    setstate({ ...state, display: true });
  }, []);

  const closeModal = () => {
    setState({ modalOpen: false });
  };

  const handleAddonCheck = (e, product) => {
    if (!addonProductId.includes(product.id)) {
      props.setAddon((addon) => {
        return [...addon, product];
      });
      addonProductId.push(product.id);
    } else {
      props.setAddon((addon) => {
        return addon.filter((i) => i.id !== product.id);
      });
      addonProductId = addonProductId.filter((i) => i !== product.id);
    }
  };

  const { modalOpen } = state;
  return (
    <section className="best-sellers-area pt-40">
      <ReactTooltip />
      <ToastContainer transition={Slide} />

      <div className="container">
        <div className="tab products-category-tab-style-2 force-addon">
          <div className="title">
            <h2>LAST CHANCE TO SELECT ADD ONS</h2>
          </div>

          {/* Tabs Nav */}
          <ul className="tabs" style={{ border: "none" }}></ul>

          {/* Tab Content */}
          <div className="tab_content">
            <div id="tab4" className="tabs_item_best addon">
              {state.display ? (
                <OwlCarousel
                  className="product-slides owl-carousel owl-theme"
                  {...options}
                >
                  {products.map((data, idx) => (
                    <div key={idx}>
                      <div className="single-product-item">
                        <div className="product-image">
                          <img
                            src={`https://ramdale.s3.amazonaws.com/${data.product_images[0]["file_name"]}`}
                          />
                        </div>

                        <div className="product-content">
                          <h3>
                            <Link href="/product/product-details">
                              <a className="product-name text-center">
                                {data.name}
                              </a>
                            </Link>
                          </h3>

                          <div className="product-price text-center">
                            <span
                              className="new-price m-auto"
                              style={{ fontSize: "14px" }}
                            >
                              ₱{formatNumber(data.discount_price)}
                            </span>
                          </div>

                          <div className="row align-items-end">
                            <div className="m-auto">
                              <input
                                type="checkbox"
                                onClick={(e) => {
                                  handleAddonCheck(e, data);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
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
    products: state.productsCollectionNine,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForceAddon);
