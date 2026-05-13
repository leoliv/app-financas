import Axios, { AxiosInstance } from "axios";
const api: AxiosInstance = Axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: `http://${process.env.EXPO_PUBLIC_SERVER_IP}:3333`,
});

export default api;
