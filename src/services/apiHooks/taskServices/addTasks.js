import { useState } from 'react';
import axiosInstance from '../../../api/axios/Axios';
import { toast } from "react-toastify";

const useAddTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const addTask = async (url, newTask) => {
    console.log("hooooiii")
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.post(url, newTask);
      toast.success(response.data.message);

      setSuccess(true);
      return response?.data?.task;
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { addTask, loading, error, success };
};

export default useAddTask;
