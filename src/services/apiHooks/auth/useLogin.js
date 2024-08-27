import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios/Axios";
import { toast } from 'react-toastify';





export const useLogin = () => {

    const navigate = useNavigate();
   
    const handleLogin = async (formData) => {
        try {

            const response = await axiosInstance.post("/api/auth/login", formData);
            if (response.status === 200) {
                toast.success(response?.data?.message);
               localStorage.setItem("token",response?.data?.token);
               const token = localStorage.getItem("token");
               if(token){
                navigate("/home");
                window.location.reload();
               }
              
            }

        } catch (error) {
            
            toast.error(error.response.data.message);
        }
    };

    return { handleLogin };
};