import { set } from "js-cookie";
import React, { useEffect, useState } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { decryptData } from "../../store/actions/cartActions";
import { decryptInfoData } from "../../store/actions/infoActions";

function Paypal(props) {
  const [paymentOptions, setpaymentOptions] = useState(null);
  const [isCampaign, setisCampaign] = useState(false);
  const [memo, setmemo] = useState("");

  useEffect(() => {
    let decryptedData = decryptInfoData();
    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }

      setmemo(`
      ${decryptedData.billing_phone.value}
      ${decryptedData.billing_email.value}
      ${decryptedData.delivery_time.value}
      ${decryptedData.delivery_date.value}
      ${decryptedData.note.value}
      ${decryptedData.message.value}
      ${decryptedData.shipping_phone.value}
      ${decryptedData.shipping_address.value}
      `);
    }
  }, []);

  useEffect(() => {
    let encryptedData = localStorage.getItem(process.env.CART_COOKIE);
    let cart = decryptData(encryptedData);

    let total = 0;
    let items = [];
    for (let i = 0; i < cart.length; i++) {
      let obj = null;

      if (isCampaign) {
        obj = {
          name: cart[i].name,
          quantity: cart[i].quantity,
          price: cart[i].campaign_price,
          currency: "PHP",
        };
      } else {
        obj = {
          name: cart[i].name,
          quantity: cart[i].quantity,
          price: cart[i].discount_price,
          currency: "PHP",
        };
      }

      items.push(obj);

      if (isCampaign) {
        total = total + cart[i].campaign_price * cart[i].quantity;
      } else {
        total = total + cart[i].discount_price * cart[i].quantity;
      }
    }
    total = total + 120;

    items.push({
      name: "Paypal Transfer Fee",
      quantity: 1,
      price: 120,
      currency: "PHP",
    });

    setpaymentOptions({
      intent: "authorize",
      payer: {
        payment_method: "paypal",
      },
      transactions: [
        {
          amount: {
            total: total,
            currency: "PHP",
          },
          description: memo,
          item_list: {
            items,
          },
        },
      ],
      note_to_payer: "Contact us for any questions on your order.",
      redirect_urls: {
        return_url: "https://example.com/return",
        cancel_url: "https://example.com/cancel",
      },
    });
  }, [isCampaign, memo]);

  const onSuccess = (payment) => {
    // 1, 2, and ... Poof! You made it, everything's fine and dandy!
    console.log("Payment successful!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data

    props.handleSubmit("Paypal");
  };

  const onCancel = (data) => {
    // The user pressed "cancel" or closed the PayPal popup
    console.log("Payment cancelled!", data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onError = (err) => {
    // The main Paypal script could not be loaded or something blocked the script from loading
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  let env = process.env.PAYPAL_CONFIG; // you can set this string to 'production'
  let currency = "PHP"; // you can set this string from your props or state
  let total = 1; // this is the total amount (based on currency) to charge
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  const client = {
    sandbox: process.env.PAYPAL_SANDBOX,
    production: process.env.PAYPAL_LIVE,
  };

  // In order to get production's app-ID, you will have to send your app to Paypal for approval first
  // For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
  //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
  // Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
  // For production app-ID:
  //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

  // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
  return (
    <PaypalExpressBtn
      paymentOptions={paymentOptions}
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
}

export default Paypal;
