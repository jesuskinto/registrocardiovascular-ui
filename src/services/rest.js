import axios from "axios";

const res = axios.create({ baseURL: process.env.VUE_APP_API_URL });
res.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  config.headers["access-token"] = token;
  return config;
});


export default res