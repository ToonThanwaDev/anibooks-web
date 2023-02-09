import axios from "../config/axios";

export const getAllProduct = () => axios.get("/shop/shop");
export const productById = productId => axios.get(`/shop/detail/${productId}`);
