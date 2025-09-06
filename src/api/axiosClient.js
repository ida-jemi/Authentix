import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api", // 🔗 replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
