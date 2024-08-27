import { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios/Axios";
import { auth, provider } from "../../../utils/firebase/Firebase"
import { myContext } from "../../../api/contextApi/ContextApi";
import { toast } from 'react-toastify';


export const useGoogleSignin = () => {
  const navigate = useNavigate();
  const {setLogin} = useContext(myContext);

  const handleGoogleSignin = async () => {
    try {

      const data = await signInWithPopup(auth, provider);
      const uid = data?.user?.uid;
     

      if (uid) {
        const response = await axiosInstance.post("/api/auth/login", { uid });

        if (response.status === 200) {
          
          toast.success('Login successfull');
          setLogin(true);
          navigate("/");
          return;
        }
      } else {
        toast.error('Failed to login. Please try again');
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      toast.error(error?.response?.message);
    }
  };

  return { handleGoogleSignin };
};