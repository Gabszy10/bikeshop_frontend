import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
let host = process.env.API_URL;
import Link from "next/link";
import { removeItem, decryptData } from "../../store/actions/cartActions";
import { ToastContainer, toast, Slide } from "react-toastify";
import { formatNumber } from "../../helpers/function";
import { decryptInfoData } from "../../store/actions/infoActions";

function Cart(props) {
  const [isCampaign, setisCampaign] = useState(false);
  const [state, setstate] = useState({
    display: false,
  });

  useEffect(() => {
    let decryptedData = decryptInfoData();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }
    }
  }, []);

  const handleRemove = (id) => {
    props.removeItem(id);

    toast.error("Removed from cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const closeCart = () => {
    props.onClick(state.display);
  };

  let { products } = props;
  products = products.length
    ? products
    : localStorage.getItem(process.env.CART_COOKIE)
    ? decryptData(localStorage.getItem(process.env.CART_COOKIE))
    : [];

  var total = 0;
  for (var i = 0; i < products.length; i++) {
    if(isCampaign){
      total = total + products[i].campaign_price * products[i].quantity;
    }
    else{
      total = total + products[i].discount_price * products[i].quantity;
    }
  }

  return (
    <div
      className="modal right fade show shoppingCartModal"
      style={{
        display: "block",
        paddingRight: "16px",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeCart}
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div className="modal-body">
            <h3>My Cart ({products.length})</h3>

            <div className="product-cart-content">
              {products.length > 0
                ? products.map((product, idx) => (
                    <div className="product-cart" key={idx}>
                      <div className="product-image">
                        <img
                          src={`https://ramdale.s3.amazonaws.com/${product.product_images[0]["file_name"]}`}
                          alt="image"
                        />
                      </div>

                      <div className="product-content">
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <h3>
                              <Link href="#">
                                <a>{product.name}</a>
                              </Link>
                            </h3>
                            <div className="product-price">
                              <span>{product.quantity}</span>
                              <span>x</span>
                              <span className="price">
                                ₱
                                {isCampaign
                                  ? formatNumber(product.campaign_price)
                                  : formatNumber(product.discount_price)}
                              </span>
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-6">
                            <Link href="#">
                              <a
                                style={{ float: "right" }}
                                className="remove"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleRemove(product.id);
                                }}
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "Empty"}
            </div>

            <div className="product-cart-subtotal">
              <span>Subtotal</span>

              <span className="subtotal">₱{formatNumber(total)}</span>
            </div>

            <div className="product-cart-btn">
              {/* <Link href="/checkout">
                <a className="btn btn-primary">Proceed to Checkout</a>
              </Link> */}
              {products.length > 0 && (
                <Link href="/cart">
                  <a className="btn btn-light">View Shopping Cart</a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
    total: state.total,
    //addedItems: state.addedItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
