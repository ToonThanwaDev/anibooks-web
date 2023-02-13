import axios from "../config/axios";

export const cartProduct = () => axios.get("/cart");
