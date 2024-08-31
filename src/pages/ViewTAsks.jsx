import  {  useState } from "react";
import Modal from "../components/modal/Modal";
import useFetchTasks from "../services/apiHooks/taskServices/fetchTasks";
import { useNavigate, useParams } from "react-router-dom";

const ViewTAsks = () => {
    const {id} = useParams();
    // console.log("task ...............id",id);
    
    const navigate = useNavigate();
  
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { tasks, loading, error } = useFetchTasks(`/api/tasks/${id}`);
    // const { tasks, loading, error } = useContext(myContext)
// console.log("taskkkkkkkkkkkkkkkkk",tasks);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


const handleClose = ()=>{
    setIsModalOpen(false);
    navigate("/home");
}

   // Ensure tasks is an array
   const taskList = Array.isArray(tasks) ? tasks : [tasks];
   console.log("tasklist ....",taskList);
   
  return (
   <>

   {taskList.map((task)=>(
      <div key={task?._id}>
      <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Task Details"
      taskTitle={task?.taskTitle}
      content={task?.taskDescription}
      createdAt={task?.createdAt}
      primaryActionText="Close"
      primaryAction={handleClose}
    />
     </div>

   ))}
 
    
 
 
    
   </>
  )
}

export default ViewTAsks