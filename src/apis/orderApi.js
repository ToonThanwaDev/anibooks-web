import axios from "../config/axios";

export const getOrder = () => axios.get("/order");
export const gerOrderUser = () => axios.get("/admin/process");
export const updateOrder = (id, status) =>
  axios.patch("/updateorder", { id, status });
