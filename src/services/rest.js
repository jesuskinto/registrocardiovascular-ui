import axios from "axios";

const res = axios.create({ baseURL: process.env.HOST });
res.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  config.headers["access-token"] = token;
  return config;
});


export default res