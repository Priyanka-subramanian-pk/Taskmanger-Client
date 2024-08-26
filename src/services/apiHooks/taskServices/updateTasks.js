
import { useState } from 'react';
import axiosInstance from '../../../api/axios/Axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useUpdateTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Function to update the task
  const updateTask = async (taskId, updatedData) => {
    const url = `/api/tasks/${taskId}`;
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.put(url, updatedData);
     
      if(response?.status === 200){
        navigate("/home");
      
        toast.success(response?.data?.message);
      }
      
      setSuccess(true);
      return response?.data?.task;
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { updateTask, loading, error, success };
};

export default useUpdateTask;

