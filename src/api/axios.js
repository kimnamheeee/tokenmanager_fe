import axios from "axios";
import { getCookie } from "../utils/cookie";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-CSRFToken"] = getCookie("csrftoken");

export const instance = axios.create();

export const instanceWithToken = axios.create();

instanceWithToken.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("access_token");

    if (!accessToken) {
      return;
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },

  (error) => {
    console.log("Request Error!!");
    return Promise.reject(error);
  }
);

instanceWithToken.interceptors.response.use(
  (response) => {
    console.log("Interceptor Response!!");
    return response;
  },
  (error) => {
    console.log("Response Error!!");
    return Promise.reject(error);
  }
);
