import axios from "../config/axios";

export const getAllProduct = () => axios.get("/shop/shop");
