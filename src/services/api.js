import axios from "axios";

const api = axios.create({
  baseURL: "https://food-backend.liara.run/auth",
});

export default api;
