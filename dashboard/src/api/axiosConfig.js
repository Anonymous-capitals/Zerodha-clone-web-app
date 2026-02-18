import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      const frontendUrl = process.env.REACT_APP_URL || "";
      if (frontendUrl) window.location.href = frontendUrl;
    }
    return Promise.reject(err);
  }
);

export default api;
