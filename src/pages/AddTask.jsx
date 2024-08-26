

import React, { useContext, useState, useEffect } from "react";
import ModalWithInput from "../components/modal/ModalWithInput";
import { useNavigate } from "react-router-dom";
import useAddTask from "../services/apiHooks/taskServices/addTasks";
import { myContext } from "../api/contextApi/ContextApi";
import useUpdateTask from "../services/apiHooks/taskServices/updateTasks";

const AddTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const[status,setStatus] = useState("");
  const[taskId,setTaskId] = useState("");
  const navigate = useNavigate();

  const { addTask, loading, error, success } = useAddTask();
  const { updateTask, loading: updatingLoading, error: updatingError, success:upDatingSuccess } = useUpdateTask();
  const { editTaskId, tasks } = useContext(myContext);

  // Find the task to be edited
  const filterData = tasks?.find((task) => task._id === editTaskId);

 
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleClose = () => {
    setIsModalOpen(false);
    navigate("/home");
  };

  useEffect(() => {
    // Set the initial form values based on the task to be edited
    if (filterData) {
      setTitle(filterData.taskTitle || "");
      setDescription(filterData.taskDescription || "");
      setStatus(filterData.taskStatus || "");
      setTaskId(filterData._id || "");
    }
  }, [filterData]);

  const handleCreateSave = async () => {
    const newTask = {
      taskTitle: title,
      taskDescription: description,
      
    };

    const savedTask = await addTask("/api/tasks", newTask);
    if (savedTask) {
      navigate("/home");
    }
  };

  const handleUpdateSave = async () => {
    const newTask = {
      taskTitle: title,
      taskDescription: description,
      taskStatus:status

    };

    const savedTask = await updateTask(taskId, newTask);
   
  };

  return (
    <>
      {filterData ? (
        <ModalWithInput
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Edit Task"
          titleValue={title}
          descriptionValue={description}
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
          saveAction={handleUpdateSave}
          saveActionText="Save"
          primaryActionText="Cancel"
          primaryAction={handleClose}
        />
      ) : (
        <ModalWithInput
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add Task"
          titleValue={title}
          descriptionValue={description}
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
          saveAction={handleCreateSave}
          saveActionText="Save"
          primaryActionText="Cancel"
          primaryAction={handleClose}
        />
      )}
    </>
  );
};

export default AddTask;
