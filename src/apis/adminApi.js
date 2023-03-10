import axios from "../config/axios";

export const addProduct = (input) => axios.post("/admin/add", input);
export const editProduct = (productId, input) => axios.patch(`/admin/edit/${productId}`, input);
export const deleteProduct = (productId) => axios.delete(`/admin/${productId}`);
