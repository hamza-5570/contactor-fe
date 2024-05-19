import axios from "axios";
// let BASE_URL = "https://contractor-be-825bce3edc7c.herokuapp.com";
let BASE_URL = "http://localhost:38000";

export default function axiosClient() {
  let defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      accept: "application/json",
      "x-auth-token": `${localStorage.getItem("token")}`,
    },
  };
  let instance = axios.create(defaultOptions);

  //Set the AUTH token for any request

  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token;
    config.headers.common = {
      "x-auth-token": `${localStorage.getItem("token")}`,
    };
    return config;
  });
  return instance;
}
