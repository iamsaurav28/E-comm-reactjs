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

export const addToCart = async (id) => {
  const res = await axios.post(`${url}/cart/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const updateCart = async (id) => {
  const res = await axios.put(`${url}/cart/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const removeFromCart = async (id) => {
  const res = await axios.delete(`${url}/cart/${id}`);
  if (res.status === 200) {
    return res;
  }
};

