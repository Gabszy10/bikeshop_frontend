import axios from "axios";

let host = process.env.API_URL;

export const singleProduct = (slug) => {
  return axios
    .get(`${host}/api/user/product/slug/${slug}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err.response.data);
};
