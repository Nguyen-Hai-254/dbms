import axios from "axios";
const port = process.env.PORT||5000
const domain = `localhost:${port}`;
export const getAllUser = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/admin/getAllCustomer`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const getUserByPhone = async (token, phone) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/admin/getUserByPhone/${phone}`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const getAllStaff = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/admin/getAllStaff`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const getUser = async (id, token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/admin/getUser/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const deleteUser = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://${domain}/admin/deleteUser/${id}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return res.data;
};
export const addStaff = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/admin/addStaff`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
export const getAllAttribute = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/product/getAllAttribute`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


export const addAttribute = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/product/addAttribute`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const deleteAttribute = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://${domain}/product/deleteAttribute/${id}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return res.data;
};
export const editAttribute = async (id, formValue, token) => {
  const res = await axios({
    method: "patch",
    url: `http://${domain}/product/editAttribute/${id}`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const addProduct = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/product/addProduct`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
  return res.data;
};

export const editProduct = async (id, formValue, token) => {
  const res = await axios({
    method: "patch",
    url: `http://${domain}/product/editProduct/${id}`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteProduct = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://${domain}/product/deleteProduct/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const addCategory = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://${domain}/product/addCategory`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const editCategory = async (id, formValue, token) => {
  const res = await axios({
    method: "patch",
    url: `http://${domain}/product/editCategory/${id}`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const deleteCategory = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://${domain}/product/deleteCategory/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export const getOrderByStatus = async (status, token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/order/getOrderByStatus/${status}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export const getOrderAdmin = async (userId, token) => {
  const res = await axios({
    method: "get",
    url: `http://${domain}/order/getOrderAdmin/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
export const setOrderStatus = async (orderId, status , token) => {
  const res = await axios({
    method: "patch",
    url: `http://${domain}/order/setStatus/${orderId}/${status}`,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return res.data;
};
export const deleteOrder = async (token, id) => {
  const res = await axios({
    method: "delete",
    url: `http://${domain}/order/deleteOrder/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};




