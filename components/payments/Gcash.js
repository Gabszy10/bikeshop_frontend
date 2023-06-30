import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const GCash = ({ amount, description, handleSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [payProcess, setPayProcess] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const publicKey = process.env.NEXT_PUBLIC_PAYMONGO_PUBLIC;

  // Function to Create A Source
  const createSource = async () => {
    setPaymentStatus("Creating Source");
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(publicKey).toString("base64")}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: amount * 100,
            redirect: {
              success: "https://iwheels.vercel.app/redirect",
              failed: "https://iwheels.vercel.app/redirect",
            },
            billing: { name: `${name}`, phone: `${phone}`, email: `${email}` },
            type: "gcash",
            currency: "PHP",
          },
        },
      }),
    };
    return fetch("https://api.paymongo.com/v1/sources", options)
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.error(err));
  };

  // Function to Listen to the Source in the Front End
  const listenToPayment = async (sourceId) => {
    let i = 5;
    for (i = 5; i > 0; i--) {
      setPaymentStatus(`Listening to Payment in ${i}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (i == 1) {
        const sourceData = await fetch(
          "https://api.paymongo.com/v1/sources/" + sourceId,
          {
            headers: {
              // Base64 encoded public PayMongo API key.
              Authorization: `Basic ${Buffer.from(publicKey).toString(
                "base64"
              )}`,
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (response.data) {
              console.log(response);
              return response.data;
            } else if (response.errors) {
              toast.error(response.errors[0].detail);
            }
          });
        console.log(sourceData);
        if (sourceData.attributes.status === "failed") {
          toast.success("Payment Failed, Please try again.");
          setPaymentStatus("failed");
        } else if (sourceData.attributes.status === "paid") {
          toast.success("Payment Succesfully");
          setPaymentStatus("Payment Success");
        } else if (sourceData.attributes.status === "expired") {
          toast.error("Payment has expire, Please try again");
          setPaymentStatus("expired");
        } else {
          i = 5;
          setPayProcess(sourceData.attributes.status);
        }
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const source = await createSource();
    window.open(source.data.attributes.redirect.checkout_url, "_blank");
    listenToPayment(source.data.id);
  };

  useEffect(() => {
    if (paymentStatus) {
      if (paymentStatus == "Payment Success") {
        handleSubmit("Gcash");
      }
    }

    if (payProcess) {
      if (payProcess == "expired") {
        toast.error("Payment has expire, Please try again.");
      } else if (payProcess == "chargeable") {
        handleSubmit("Gcash");
      }
    }
  }, [paymentStatus, payProcess]);

  return (
    <section>
      <form action="#" onSubmit={onSubmit}>
        <h4>Billing Information</h4>
        <div id="form-card" className={"formField"}>
          <label htmlFor="customer-name">Customer Name:</label>
          <input
            id="customer-name"
            placeholder="Juan Dela Cruz"
            className={"input"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div id="form-card" className={"formField"}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            placeholder="09xxxxxxxxx"
            className={"input"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div id="form-card" className={"formField"}>
          <label htmlFor="email">email:</label>
          <input
            id="email"
            placeholder="user@domain.com"
            className={"input"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={"payButton"}>
          Pay
        </button>
        {/* <p>{paymentStatus}</p>
        <p>{payProcess}</p> */}
      </form>
    </section>
  );
};

export default GCash;
