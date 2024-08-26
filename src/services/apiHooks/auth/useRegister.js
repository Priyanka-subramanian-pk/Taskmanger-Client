
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios/Axios";
import { toast } from 'react-toastify';


export const useRegister = () => {

    const navigate = useNavigate();

    const handleRegister = async (formData) => {

        try {

            const response = await axiosInstance.post("/api/auth/register", formData);

            if (response.status === 201) {

                toast.success(response?.data?.message);
                navigate("/login");
                return;
            }

        } catch (error) {

            toast.error(error.response.data.message);
        }
    };

    return { handleRegister };
};