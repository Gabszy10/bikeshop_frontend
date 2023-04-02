import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import { formatNumber } from "../../helpers/function";

let host = process.env.API_URL;

function Profile() {
  const [history, sethistory] = useState([]);
  const [orderDetails, setorderDetails] = useState(null);

  useEffect(() => {
    let token = cookie.get("_wus_BJK");
    if (!token) {
      // window.location.href = "/";
    } else {
      fetchOrders(token);
    }
  }, []);

  const fetchOrders = async (token) => {
    try {
      let res = await axios.get(`${host}/api/user/order/history`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (res) {
        sethistory(res.data.orders);
      }
      console.log(res);
    } catch (error) {
      if (error.response.status == 401) {
        cookie.remove("_wus_BJK");
        window.location.href = "/";
      }

      if (error.response.data.err == "user order history not found") {
        sethistory([]);
      }
    }
  };

  const handleDetails = () => {};

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ marginLeft: "1.7rem" }}>
          <div className="card-body m-auto text-center">
            <img
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
              height="100"
              style={{ borderRadius: "50%", marginBottom: "1rem" }}
            />
            <h5 className="card-title">I-Wheels</h5>
            <button className="btn btn-link">Order History</button>
            <button className="btn btn-link">Update Profile</button>
          </div>
        </div>
      </div>
      {history.length ? (
        <div className="col-md-8">
          {history.map((order, i) => {
            return (
              <>
                <div key={i} class="card">
                  <div className="card-header">
                    <h5>{order.order_name}</h5>
                    <p>{order.created_at}</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <p className="card-text">
                          Delivery Date: {order.delivery_date}
                        </p>
                        <p className="card-text">
                          Delivery Time: {order.delivery_time}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="card-text">
                          Mode Of Payment: {order.payment_method}
                        </p>
                        <p className="card-text">
                          Status: {order.order_status_id}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="card-text">
                          Amount: P{formatNumber(order.total)}
                        </p>
                        <button
                          onClick={handleDetails}
                          data-toggle="modal"
                          data-target="#exampleModal"
                          className="btn btn-primary btn-details"
                          style={{
                            marginTop: "-0.5rem",
                            fontSize: "0.8rem",
                            padding: "0.7rem",
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      ) : (
        <h2 className="text-center m-auto">Order history is empty.</h2>
      )}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-d="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
