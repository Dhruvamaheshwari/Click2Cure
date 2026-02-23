/** @format */

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // This ensures cookies are sent with requests if needed
});

export default api;
