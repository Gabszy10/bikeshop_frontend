import React, { useEffect, useState } from "react";
import Link from "next/link";
import { connect, useDispatch } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  decryptData,
  encryptData,
} from "../../store/actions/cartActions";
import { ToastContainer, toast, Slide } from "react-toastify";
import { debounce, formatNumber } from "../../helpers/function";

function CartProduct(props) {
  const dispatch = useDispatch();
  const [cart, setcart] = useState([]);
  let host = process.env.API_URL;

  useEffect(() => {
    let encryptedData = localStorage.getItem(process.env.CART_COOKIE)
      ? localStorage.getItem(process.env.CART_COOKIE)
      : [];

    let myProd = decryptData(encryptedData);
    setcart(myProd);
    props.setcart(myProd);
  }, [props.products]);

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

    props.setcart([]);
  };

  //
  const handleQuantity = debounce((e, product) => {
    let cartStorage = localStorage.getItem(process.env.CART_COOKIE);
    let cartArray = decryptData(cartStorage);
    var index = cartArray.findIndex((item) => item.id === product.id);

    if (index > -1) {
      cartArray[index]["quantity"] = e;
    }

    let encryptedData = encryptData(JSON.stringify(cartArray));

    localStorage.setItem(process.env.CART_COOKIE, encryptedData);

    setcart(cartArray);
    props.setcart([]);
    dispatch(
      (() => {
        return {
          type: "UPDATE_CART",
        };
      })()
    );
  }, 250);

  let cartItems = cart.length ? (
    cart.map((data, idx) => {
      return (
        <tr key={idx}>
          <td className="product-thumbnail">
            <Link href={`/product/${data.slug}`}>
              <a>
                <img
                  src={`https://ramdale.s3.amazonaws.com/${data.product_images[0]["file_name"]}`}
                  alt="image"
                />
              </a>
            </Link>
          </td>

          <td className="product-name">
            <Link href="#">
              <a>{data.name}</a>
            </Link>
            {/* <ul>
              <li>
                Color: <strong>Light Blue</strong>
              </li>
              <li>
                Size: <strong>XL</strong>
              </li>
              <li>
                Material: <strong>Cotton</strong>
              </li>
            </ul> */}
          </td>

          <td className="product-quantity">
            <div className="input-counter">
              {/* <span
                className="minus-btn"
                onClick={() => {
                  handleSubtractQuantity(data.id);
                }}
              >
                <i className="fas fa-minus"></i>
              </span> */}
              <input
                type="number"
                defaultValue={data.quantity}
                min="1"
                max={100}
                readOnly={false}
                onChange={(e) => handleQuantity(e.target.value, data)}
              />
              {/* <span
                className="plus-btn"
                onClick={() => {
                  handleAddQuantity(data.id);
                }}
              >
                <i className="fas fa-plus"></i>
              </span> */}
            </div>
          </td>

          <td className="product-price">
            <span className="unit-amount">
              ₱
              {props.isCampaign
                ? formatNumber(data.campaign_price)
                : formatNumber(data.discount_price)}
            </span>
          </td>

          <td className="product-subtotal">
            <span className="subtotal-amount">
              ₱
              {props.isCampaign
                ? formatNumber(data.campaign_price * data.quantity)
                : formatNumber(data.discount_price * data.quantity)}
            </span>
          </td>

          <td className="product-subtotal">
            <Link href="#">
              <a
                style={{ float: "none" }}
                className="remove"
                onClick={(e) => {
                  e.preventDefault();
                  handleRemove(data.id);
                }}
              >
                <i className="far fa-trash-alt"></i>
              </a>
            </Link>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td className="product-thumbnail" colSpan="5">
        <p>Empty.</p>
      </td>
    </tr>
  );

  return (
    <>
      <ToastContainer transition={Slide} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Total</th>
            <th scope="col">REMOVE</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
