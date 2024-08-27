import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg  mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
          Welcome to
        </h1>
        <h1 className="text-4xl font-bold text-center mb-4 text-yellow-500">
          Task Manager Application
        </h1>

        <p className="text-gray-700 text-center mb-6">
          Organize your tasks and collaborate with your team effectively.
        </p>
        <div className="space-y-4 ">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600">
              Create Boards
            </h2>
            <p className="text-gray-600">
              Create and manage boards to organize different projects and tasks.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-600">
              Track Progress
            </h2>
            <p className="text-gray-600">
              Track the progress of your tasks with visual boards and lists.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-600">
              Collaborate
            </h2>
            <p className="text-gray-600">
              Work with your team, assign tasks, and share updates in real-time.
            </p>
          </div>
        </div>
        <div className=" flex justify-center text-center mt-6 ">
        <p onClick={()=>{navigate("/home")}}
        className="bg-blue-600 text-white mx-4 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >    View Tasks
        </p>
         
        <p onClick={()=>{navigate("/register")}}
        className="bg-blue-600 text-white mx-4 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >      Get Started
        </p>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
