import axios from "axios";

const res = axios.create({
  baseURL: "http://localhost:3000/api/",
});

res.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  config.headers["access-token"] = token;
  return config;
});


export default res