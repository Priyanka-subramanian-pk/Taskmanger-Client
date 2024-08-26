import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import useFetchTasks from "../services/apiHooks/taskServices/fetchTasks";
import { useNavigate, useParams } from "react-router-dom";

const ViewTask = () => {
    const {id} = useParams();
    const navigate = useNavigate();
  
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { tasks, loading, error } = useFetchTasks(`/api/tasks/${id}`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


const handleClose = ()=>{
    setIsModalOpen(false);
    navigate("/home");
}

  return (
   <>

   {[tasks]?.map((task)=>(
      <div key={task._id}>
      <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Task Details"
      taskTitle={task.taskTitle}
      content={task.taskDescription}
      createdAt={task.createdAt}
      primaryActionText="Close"
      primaryAction={handleClose}
    />
     </div>

   ))}
 
    
 
 
    
   </>
  )
}

export default ViewTask