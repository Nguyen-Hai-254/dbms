
import axios from "axios";
const port = process.env.PORT||5000
const domain = `localhost:${port}`;
export const searchItem = async (input) => {
  console.log(input);
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/searchItem?keyWord=${input}`,
  });
  return res.data;
};
export const getAllProduct = async () => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getAllProduct`,
  });
  return res.data;
};
export const getProductById = async (ID) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getProductById/${ID}`,
  });
  return res.data;
};
export const getProductByDev = async (Dev) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getProductByDev/${Dev}`,
  });
  return res.data;
};
export const getProductByCode = async (Code) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getProductById/${Code}`,
  });
  return res.data;
};
export const getProductByCategory = async (Category) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getProductByCategory/${Category}`,
  });
  return res.data;
};
export const getProductByDevAndCate = async (Dev, Category) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getProductByCategory/${Category}/${Dev}`,
  });
  return res.data;
};

export const detailProduct = async (id) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/detailProduct/${id}`,
  });
  return res.data;
};

export const getAllCategory = async () => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getAllCategory`,
  });
  return res.data;
};

export const getAllAttribute = async () => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getAllAttribute`,
  });
  return res.data;
};

export const signIn = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/user/signIn`,
    data: formValue,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const signUp = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/user/signUp`,
    data: formValue,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const getProfile = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/user/getProfile`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const editProfile = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `http://${domain}/user/editProfile`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};
export const setAvatar = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `https://jsonplaceholder.typicode.com/todos/1`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getAvatar = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/user/getAvatar`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const changePassword = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `http://${domain}/user/changePassword`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const forgetPassword = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/user/forgetPassword`,
    data: formValue,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const getOrderByUser = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/order/getOrderByUser`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};

export const viewDetailOrder = async (token, orderId) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/order/viewDetailOrder/${orderId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export const addOrder = async (token, formValue) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/order/addOrder`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
  return res.data;
};
export const getAllShipping = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/order/getAllShipping`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getShipping = async (token, id) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/order/getShipping/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getVoucherUserHas = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/order/getVoucherUser`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

