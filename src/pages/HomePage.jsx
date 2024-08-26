
import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/button/Button';
import Dropdown from '../components/inputfield/Dropdown';
import useFetchTasks from '../services/apiHooks/taskServices/fetchTasks';
import Column from '../components/column/Column';
import useUpdateTask from '../services/apiHooks/taskServices/updateTasks';
import { useDeleteTask } from '../services/apiHooks/taskServices/deleteTask';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../api/contextApi/ContextApi';
import CustomError from '../components/error/CustomError';
import LoadingSpinner from '../components/loader/Loader';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState({
    todo: [],
    inprogress: [],
    done: [],
  });
  const navigate = useNavigate();
  const { setEditTaskId} = useContext(myContext);

  const { tasks: fetchedTasks, loading: fetchingLoading, error: fetchingError } = useFetchTasks("/api/tasks");
  
  const { updateTask, loading: updatingLoading, error: updatingError, success } = useUpdateTask();
  const { handleDeleteTask, loading, error } = useDeleteTask();


  useEffect(() => {
    if (fetchedTasks) {
      categorizeTasks(fetchedTasks);
    }
  }, [fetchedTasks]);

  const categorizeTasks = (tasks) => {
    const todo = tasks.filter(task => task.taskStatus === 'todo');
    const inprogress = tasks.filter(task => task.taskStatus === 'inprogress');
    const done = tasks.filter(task => task.taskStatus === 'done');
    setFilteredTasks({ todo, inprogress, done });
  };

  const moveCard = async (dragIndex, hoverIndex, columnId, taskId) => {

     // Update task status on the server  
    
     await updateTask(taskId, { taskStatus: columnId });
    const updatedTasks = [...tasks];
    console.log("uuuuuuuuuuuuu",updateTask)
    const [removed] = updatedTasks.splice(dragIndex, 1);
    removed.taskStatus = columnId;
    updatedTasks.splice(hoverIndex, 0, removed);

    setTasks(updatedTasks);
    categorizeTasks(updatedTasks);

   
  };

  const handleDelete = async (taskId) => {
    await handleDeleteTask(taskId)
  };

  const handleEdit = (taskId) => {
    setEditTaskId(taskId);
    navigate(`/add-tasks`)
  };

  const handleViewDetails = (taskId) => {
    navigate(`/view-tasks/${taskId}`)
  };

  const options = [
    { value: 'recent', label: 'Recent' },
    { value: 'old', label: 'Old' },
    { value: 'option', label: 'Option' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    console.log('Selected Option:', option);
  };

  if (fetchingLoading || updatingLoading) {
    return  <LoadingSpinner />
  }


  if (updatingError) {
    return <p>Error updating task: {updatingError}</p>;
  }

  return (
    <>
      <div className="m-10 bold-Inter">
        <Button
          buttonText="Add Task"
          type="submit"
          onClick={()=>navigate("/add-tasks")}
          className="w-1/6 cursor-pointer hover:shadow-xl mt-4 text-white bg-custom-blue rounded-md"
        />
        <div className="grid grid-cols-5 border p-5 rounded-md my-5 shadow-lg">
          <div className="col-span-3">
            <div className="flex gap-3 items-center">
              <p>Search :</p>
              <div className="border w-1/2 rounded-md bg-red-400">
                <input
                  type="text"
                  className="p-2 w-full border-none outline-none bg-custom-white text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="flex col-span-2 items-center justify-end gap-2">
            <h5>Sort By :</h5>
            <div className="w-1/4">
              <Dropdown
                title="Select an Option"
                options={options}
                placeholder="Select"
                value={selectedOption}
                onChange={handleDropdownChange}
                name="exampleDropdown"
              />
            </div>
          </div>
        </div>
        

        <div className=" rounded-md">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-3 text-custom-white ">
            <Column
              title={"TO DO"}
              tasks={filteredTasks.todo}
              id={"todo"}
              moveCard={moveCard}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleViewDetails={handleViewDetails}
            />
            <Column
              title={"IN PROGRESS"}
              tasks={filteredTasks.inprogress}
              id={"inprogress"}
              moveCard={moveCard}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleViewDetails={handleViewDetails}
            />
            <Column
              title={"DONE"}
              tasks={filteredTasks.done}
              id={"done"}
              moveCard={moveCard}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleViewDetails={handleViewDetails}
            />
          </div>
          <CustomError message={fetchingError} />
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
