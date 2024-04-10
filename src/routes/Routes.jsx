import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/news.json"),
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
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
        path: "/newsDetails/:id",
        loader: () => fetch("/news.json"),
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
