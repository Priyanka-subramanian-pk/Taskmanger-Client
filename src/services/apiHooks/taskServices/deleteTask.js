import { useState } from "react";
import axiosInstance from "../../../api/axios/Axios";
import { toast } from "react-toastify";

export const useDeleteTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteTask = async (taskId) => {

    setLoading(true);
    setError(null);

    try {
    
      const response = await axiosInstance.delete(`/api/tasks/${taskId}`);

      if (response.status === 200) {
        console.log("Task deleted successfully:", response?.data);
        toast.success("Task deleted successfully");
        return response?.data;
      } else {
        throw new Error("Failed to delete task");
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
      toast.error(error.response.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleDeleteTask, loading, error };
};
