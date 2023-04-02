import axios from "axios";

let host = process.env.API_URL;

export const fetchOrder = (order_name) => {
  return axios
    .get(`${host}/api/user/order/name/${order_name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err.response.data);
};
