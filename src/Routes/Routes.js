import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import FAQs from "../Pages/FAQs/FAQs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Checkout from "../Pages/Other/Checkout/Checkout";
import Details from "../Pages/Other/Details/Details";
import NotFound from "../Pages/Other/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://t-course-server.vercel.app/courses"),
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://t-course-server.vercel.app/blogs"),
      },
      {
        path: "/courses/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://t-course-server.vercel.app/courses/${params.id}/`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://t-course-server.vercel.app/courses/${params.id}/`),
      },
    ],
    },
    {
        path: '*',
        element:<NotFound></NotFound>
    }
]);