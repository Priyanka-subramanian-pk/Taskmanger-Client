import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios/Axios";
import { auth, provider } from "../../../utils/firebase/Firebase";
import { toast } from 'react-toastify';

export const useGoogleSignup = () => {

    // const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleGoogleSignup = async () => {
        try {
            const data = await signInWithPopup(auth, provider);
            console.log("dataa",data);
            
            const uid = data?.user?.uid;


            if (uid) {

                const response = await axiosInstance.post("/api/auth/register", { uid });

                if (response.status === 201) {
                    toast.success(response?.data?.message);
                    navigate("/login");
                } else {
                    toast.error('Failed to signup. Please try again.');
                }
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error(error?.response?.message);
        }
    };

    return { handleGoogleSignup };
};