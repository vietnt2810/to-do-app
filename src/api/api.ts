import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3005/api/v1/",
});

api.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
