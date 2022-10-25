import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Courses from "../Pages/Courses/Courses";
import FAQs from "../Pages/FAQs/FAQs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faqs',
                element: <FAQs></FAQs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])