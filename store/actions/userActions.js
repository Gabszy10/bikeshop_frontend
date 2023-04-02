import axios from "axios";
import { toast } from "react-toastify";
import cookie from "js-cookie";
var CryptoJS = require("crypto-js");

let host = process.env.API_URL;

export const userRegister = (userData, setIsLoading, cb) => async (
  dispatch
) => {
  try {
    const res = await axios.post(`${host}/api/user/auth/signUp`, userData);

    // // save the new token from our fucking api to the cookies
    if (res.status === 200) {
      const { token } = await res.data;
      cookie.set("_wus_BJK", token, { expires: 7 });
      cb();
    }
  } catch (err) {
    setIsLoading(false);
    console.log(err);
    if (err.response.data.error) {
      return toast.error(err.response.data.error);
    }

    if (err.response.data.details[0].message) {
      return toast.error(err.response.data.details[0].message);
    }
  }
};

export const userLogin = (userData, setIsLoading, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${host}/api/user/auth/signIn`, userData);

    // // save the new token from our fucking api to the cookies
    if (res.status === 200) {
      const { token } = await res.data;
      cookie.set("_wus_BJK", token, { expires: 7 });
      cb();
    }
  } catch (err) {
    setIsLoading(false);
    console.log(err);
    if (err.response.data.error) {
      return toast.error(err.response.data.error);
    }

    if (err.response.data.details[0].message) {
      return toast.error(err.response.data.details[0].message);
    }
  }
};

export const logout = () => {
  cookie.remove("_wus_BJK");
  window.location.href = "/";
};

export const encryptUserData = (data) => {
  try {
    let encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.USER_KEY
    ).toString();

    localStorage.setItem(process.env.USER_COOKIE, encryptedData);
    return true;
  } catch (error) {
    console.log(error);
    localStorage.removeItem(process.env.USER_COOKIE);
    return false;
  }
};

export const decryptUserData = () => {
  try {
    let infoItem = localStorage.getItem(process.env.USER_COOKIE)
      ? localStorage.getItem(process.env.USER_COOKIE)
      : null;
    if (infoItem) {
      let bytes = CryptoJS.AES.decrypt(infoItem, process.env.USER_KEY);
      let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return stringArray;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);

    localStorage.removeItem(process.env.USER_COOKIE);
    return false;
  }
};
