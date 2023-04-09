import React, { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { decryptInfoData } from "../../store/actions/infoActions";
import { formatDate } from "../../helpers/function";

function ShippingSummary(props) {
  const [userInfo, setuserInfo] = useState(null);

  useEffect(() => {
    let decryptedData = decryptInfoData();
    if (decryptedData) {
      // if (
      //   !decryptedData.delivery_date.value ||
      //   !decryptedData.delivery_time.value
      // ) {
      //   alert("Please input delivery date and time");
      //   return (window.location.href = "/cart");
      // }
      
      setuserInfo(decryptedData);
    } else {
      window.location.href = "/checkout";
    }
  }, []);

  if (userInfo) {
    return (
      <>
        <div className="order-table table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="total-price">
                  <span>Sender Info</span>
                </td>

                <td className="product-subtotal">
                  <span className="subtotal-amount">
                    {userInfo.billing_firstName.value}{" "}
                    {userInfo.billing_lastName.value}
                  </span>
                  <br />
                  <span className="subtotal-amount">
                    {userInfo.billing_phone.value}
                  </span>
                  <br />
                  <span className="subtotal-amount">
                    {userInfo.billing_email.value}
                  </span>
                </td>
              </tr>

              <tr>
                <td className="total-price">
                  <span>Shipping Info</span>
                </td>

                <td className="product-subtotal">
                  <span className="subtotal-amount">
                    {userInfo.shipping_firstName.value}{" "}
                    {userInfo.shipping_lastName.value}
                  </span>
                  <br />
                  <span className="subtotal-amount">
                    {userInfo.shipping_phone.value}
                  </span>
                  <br />
                  <span className="subtotal-amount">
                    {userInfo.shipping_address.value}{" "}
                    {userInfo.shipping_city.value} {userInfo.shipping_zip.value}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d-flex">
          <h5>Delivery Details</h5>
          <Link href="/cart">
            <a className="ml-auto btn btn-link text-danger">Edit</a>
          </Link>
        </div>
        <div className="order-table table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {/* <tr>
                <td className="total-price">
                  <span>Delivery Date</span>
                </td>

                <td className="product-subtotal">
                  <span className="subtotal-amount">
                    {formatDate(userInfo.delivery_date.value)}
                  </span>
                </td>
              </tr>

              <tr>
                <td className="total-price">
                  <span>Delivery Time</span>
                </td>

                <td className="product-subtotal">
                  <span className="subtotal-amount">
                    {userInfo.delivery_time.value}
                  </span>
                </td>
              </tr> */}

              <tr>
                <td className="total-price">
                  <span>Instructions</span>
                </td>

                <td className="product-subtotal">
                  <span className="subtotal-amount">
                    {" "}
                    {userInfo.note.value}
                  </span>
                </td>
              </tr>

              <tr>
                <td className="total-price">
                  <span>Message</span>
                </td>

                <td className="product-subtotal">
                  <span className="subtotal-amount">
                    {" "}
                    {userInfo.message.value}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
    total: state.total,
    shipping: state.shipping,
  };
};

export default connect(mapStateToProps)(ShippingSummary);
