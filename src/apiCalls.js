import axios from "axios";

export const url = "https://Ecommerce-1.iamsaurav.repl.co";
export const getProducts = async () => {
  const res = await axios.get(url + `/api/v1/products`);
  if (res.status === 200) {
    return res;
  }
};

export const getCart = async () => {
  const res = await axios.get(`${url}/products`);
  if (res.status === 200) {
    return res;
  }
};
