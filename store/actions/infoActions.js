var CryptoJS = require("crypto-js");

export const encryptInfoData = (data) => {
  try {
    let encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.INFO_KEY
    ).toString();

    localStorage.setItem(process.env.INFO_COOKIE, encryptedData);
    return true;
  } catch (error) {
    console.log(error);
    localStorage.removeItem(process.env.INFO_COOKIE);
    return false;
  }
};

export const decryptInfoData = () => {
  try {
    let infoItem = localStorage.getItem(process.env.INFO_COOKIE)
      ? localStorage.getItem(process.env.INFO_COOKIE)
      : null;
    if (infoItem) {
      let bytes = CryptoJS.AES.decrypt(infoItem, process.env.INFO_KEY);
      let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return stringArray;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);

    localStorage.removeItem(process.env.INFO_COOKIE);
    return false;
  }
};

export const encryptString = (data) => {
  try {
    let encryptedData = encodeURIComponent(
      CryptoJS.AES.encrypt(
        JSON.stringify(data),
        process.env.INFO_KEY
      ).toString()
    );

    return encryptedData;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const decryptString = (data) => {
  try {
    if (data) {
      let bytes = CryptoJS.AES.decrypt(data, process.env.INFO_KEY);
      let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decodeURIComponent(stringArray);
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);

    return false;
  }
};
