import { useState, useEffect, useContext } from 'react';
import axiosInstance from '../../../api/axios/Axios';
import { myContext } from '../../../api/contextApi/ContextApi';


const useFetchTasks = (url) => {
  const {tasks, setTasks} = useContext(myContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
       
      try {
        const response = await axiosInstance.get(url);
       
        setTasks(response?.data?.tasks);
      } catch (err) {
        setError(err.response.data.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [url,tasks]);

  return { tasks,setTasks, loading,setLoading, error };
};

export default useFetchTasks;
