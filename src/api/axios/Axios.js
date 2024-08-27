import axios from 'axios';



  const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: "https://taskmanager-backend-nban.onrender.com",
  headers: {
    "Content-Type": "application/json",
    "Authorization":`Bearer ${token}` 
  }
});

export default axiosInstance;
