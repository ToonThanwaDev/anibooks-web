import axios from "../config/axios";

export const getOrder = () => axios.get("/order");
