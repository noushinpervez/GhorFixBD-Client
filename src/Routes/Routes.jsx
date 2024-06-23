import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Services from "../pages/Services/Services";
import AddService from "../pages/Dashboard/AddService/AddService";
import ManageService from "../pages/Dashboard/ManageService/ManageService";
import BookedServices from "../pages/Dashboard/BookedServices/BookedServices";
import PrivateRoute from "./PrivateRoute";
import ServiceToDo from "../pages/Dashboard/ServiceToDo/ServiceToDo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "services",
                element: <Services></Services>,
            },
            {
                path: "dashboard/add-service",
                element: <PrivateRoute>
                    <AddService />
                </PrivateRoute>,
            },
            {
                path: "dashboard/manage-service",
                element: <PrivateRoute>
                    <ManageService/>
                </PrivateRoute>,
            },
            {
                path: "dashboard/booked-services",
                element: <PrivateRoute>
                    <BookedServices />
                </PrivateRoute>,
            },
            {
                path: "dashboard/service-to-do",
                element: <PrivateRoute>
                    <ServiceToDo />
                </PrivateRoute>,
            },
        ],
    },
]);