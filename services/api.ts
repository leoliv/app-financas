import Axios, { AxiosInstance } from "axios";

const api: AxiosInstance = Axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "http://192.168.0.101:3333",
});

export default api;
