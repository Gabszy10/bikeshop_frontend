import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { formatNumber } from "../../helpers/function";
import { decryptData } from "../../store/actions/cartActions";
import { decryptInfoData } from "../../store/actions/infoActions";

function OrderSummary(props) {
  const [isCampaign, setisCampaign] = useState(false);
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    let decryptedData = decryptInfoData();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }
    }
  }, []);

  useEffect(() => {
    let myProd = props.products.length
      ? props.products
      : localStorage.getItem(process.env.CART_COOKIE)
      ? decryptData(localStorage.getItem(process.env.CART_COOKIE))
      : [];

    if (myProd.length <= 0) {
      alert("You dont have any items in your cart.");
      return (window.location.href = "/");
    }

    var myTotal = 0;
    for (var i = 0; i < myProd.length; i++) {
      if (isCampaign) {
        myTotal = myTotal + myProd[i].campaign_price * myProd[i].quantity;
      } else {
        myTotal = myTotal + myProd[i].discount_price * myProd[i].quantity;
      }
    }

    setcart(myProd);
    settotal(myTotal);
  }, [props.products, isCampaign]);

  return (
    <div className="order-table table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((data, idx) => (
            <tr key={idx}>
              <td className="product-name">
                <Link href={`/product/${data.slug}`}>
                  <a>
                    {data.name} {""} {data.quantity}x
                  </a>
                </Link>
              </td>

              <td className="product-total">
                <span className="subtotal-amount">
                  ₱
                  {isCampaign
                    ? formatNumber(data.campaign_price * data.quantity)
                    : formatNumber(data.discount_price * data.quantity)}
                </span>
              </td>
            </tr>
          ))}

          {total < 800 && (
            <tr>
              <td className="order-subtotal">
                <span>Service Charge</span>
              </td>

              <td className="order-subtotal-price">
                <span className="order-subtotal-amount">
                  ₱{formatNumber(800 - total)}
                </span>
              </td>
            </tr>
          )}

          <tr>
            <td className="order-subtotal">
              <span>Cart Subtotal</span>
            </td>

            <td className="order-subtotal-price">
              <span className="order-subtotal-amount">
              ₱{formatNumber(total < 800 ? 800 : total)}
              </span>
            </td>
          </tr>

          {/* <tr>
            <td className="order-shipping">
              <span>Shipping</span>
            </td>

            <td className="shipping-price">
              <span>₱150.00</span>
            </td>
          </tr> */}

          <tr>
            <td className="total-price">
              <span>Order Total</span>
            </td>

            <td className="product-subtotal">
              <span className="subtotal-amount">
                {" "}
                ₱{formatNumber(total < 800 ? 800 : total)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      {total < 800 && (
        <p style={{ color: "red", textAlign: "center" }}>
          Minimum order is ₱800. If order is below ₱800, you will be charge to
          get to the 800 limit.
        </p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
    total: state.total,
    shipping: state.shipping,
  };
};

export default connect(mapStateToProps)(OrderSummary);
