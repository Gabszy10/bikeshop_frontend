require("dotenv").config();
const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  env: {
    API_URL: process.env.API_URL,
    CART_COOKIE: process.env.CART_COOKIE,
    CART_KEY: process.env.CART_KEY,
    INFO_COOKIE: process.env.INFO_COOKIE,
    INFO_KEY: process.env.INFO_KEY,
    PAYPAL_CONFIG: process.env.PAYPAL_CONFIG,
    PAYPAL_SANDBOX: process.env.PAYPAL_SANDBOX,
    PAYPAL_LIVE: process.env.PAYPAL_LIVE,
  },
});
