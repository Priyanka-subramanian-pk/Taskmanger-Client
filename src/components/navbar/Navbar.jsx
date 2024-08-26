import React, { useContext } from "react";
import Button from "../button/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { RiTodoFill } from "react-icons/ri";
import { myContext } from "../../api/contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(myContext);

  // Get the current location
  const location = useLocation();

  // Function to change the button style based on the path
  const handleButtonClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    navigate("/");
  };

  return (
    <>
      <div className="grid grid-cols-2 bg-custom-blue">
        <div className="flex items-center px-10 text-3xl">
          <p>
            <RiTodoFill className="text-custom-white" />
          </p>
        </div>
        <div className="grid grid-cols-2 flex justify-between">
          <div></div>
          <div className="flex justify-evenly">
            {login ? (
              <Button
                buttonText="Logout"
                type="submit"
                onClick={handleLogout}
                className="text-custom-white bg-red-300 rounded-md my-3 h-9 hover:bg-red-500 "
              />
            ) : (
              <>
                <Button
                  buttonText="Login"
                  type="submit"
                  onClick={() => handleButtonClick("/login")}
                  className={`cursor-pointer hover:shadow-xl my-3 rounded-md ${
                    location.pathname === "/login"
                      ? "bg-custom-white text-custom-blue"
                      : "bg-custom-blue text-white"
                  }`}
                />
                <Button
                  buttonText="Signup"
                  type="submit"
                  onClick={() => handleButtonClick("/register")}
                  className={`cursor-pointer hover:shadow-xl my-3 rounded-md ${
                    location.pathname === "/register"
                      ? "bg-white text-custom-blue"
                      : "bg-custom-blue text-white"
                  }`}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
