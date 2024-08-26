import axios from 'axios';


  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmNiNTY4ZGQzZjdhZmRjZGJjN2I4YTEiLCJpYXQiOjE3MjQ2MDI5OTcsImV4cCI6MTcyNDY4OTM5N30.u1ADLV1XGU3X__xI7Dc3TQ7k8pKJUwasyFYy5d9fNVE"

  const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: "https://taskmanager-backend-nban.onrender.com",
  headers: {
    "Content-Type": "application/json",
    "Authorization":`Bearer ${token}` 
  }
});

export default axiosInstance;
