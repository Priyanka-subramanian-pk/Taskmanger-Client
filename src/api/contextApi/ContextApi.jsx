import { createContext, useState } from "react";
import { useEffect } from "react";





export const myContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [ editTaskId,setEditTaskId] = useState();
    const [ login,setLogin] = useState(false);
    useEffect(() => {
        // Check localStorage for a token on component mount
        const token = localStorage.getItem("token");
        if (token) {
            setLogin(true);
        }
    }, []);
  
  const contextValue = {
    tasks, setTasks,
    editTaskId,setEditTaskId,
    login,setLogin
  };


  return (
    <myContext.Provider value={contextValue}>{children}</myContext.Provider>
  );
};