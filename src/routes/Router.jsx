import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import AddTask from "../pages/AddTask";
import ViewTask from "../pages/ViewTask";
import ProtectedRoute from "../utils/protectedRoutes/ProtectedRoute";


export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
            { path: "/home", element: <ProtectedRoute element={HomePage} /> },
            { path: "/add-tasks", element: <ProtectedRoute element={AddTask} /> },
            { path: "/view-tasks/:id", element: <ProtectedRoute element={ViewTask} /> },
        ],
    },
]);