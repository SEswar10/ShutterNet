import axios from "axios";

export const makeRequest = axios.create({
  // FIXED: Changed port from 8800 to 3000
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});