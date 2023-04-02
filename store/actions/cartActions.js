import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_QUANTITY_WITH_NUMBER,
  RESET_CART,
  ADD_TO_COMPARE,
  REMOVE_ITEM_FROM_COMPARE,
  ADD_TO_CART_ADDONS,
} from "./action-types/cart-actions";
var CryptoJS = require("crypto-js");

export const clearData = () => {
  localStorage.removeItem(process.env.CART_COOKIE);
  localStorage.removeItem(process.env.INFO_COOKIE);
};

export const encryptData = (data) => {
  try {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.CART_KEY
    ).toString();
  } catch (error) {
    // console.log(error);
    localStorage.removeItem(process.env.CART_COOKIE);
    return [];
  }
};

export const decryptData = (data) => {
  try {
    let bytes = CryptoJS.AES.decrypt(data, process.env.CART_KEY);
    let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return JSON.parse(stringArray);
  } catch (error) {
    // console.log(error);

    localStorage.removeItem(process.env.CART_COOKIE);
    return [];
  }
};

//add cart action
export const addToCart = (product, quantity = 1) => {
  return {
    type: ADD_TO_CART,
    product: product,
    quantity,
  };
};

//add cart with addons action
export const addToCartAddons = (products, quantity = 1) => {
  return {
    type: ADD_TO_CART_ADDONS,
    products: products,
    quantity,
  };
};

//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
  return {
    type: ADD_QUANTITY_WITH_NUMBER,
    id,
    qty,
  };
};

// Reset cart after form submit
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};

//add compare action
export const addToCompare = (id) => {
  return {
    type: ADD_TO_COMPARE,
    id,
  };
};
//remove item from compare action
export const removeItemFromCompare = (id) => {
  return {
    type: REMOVE_ITEM_FROM_COMPARE,
    id,
  };
};
