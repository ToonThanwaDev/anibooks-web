import axios from "../config/axios";

export const cartProduct = () => axios.get("/cart");
export const createCart = productId => axios.post(`/createcart`, { productId });
export const increaseCart = cartId => axios.patch(`/increase`, { cartId });
export const decreaseCart = cartId => axios.patch(`/decrease`, { cartId });
export const deleteProductCart = productId => axios.delete(`/${productId}`);
