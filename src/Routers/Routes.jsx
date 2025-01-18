import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/OurShop/Shop/Shop";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/ContactUs/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "ourShop/:category",
        // element: <PrivetRoute><Shop></Shop></PrivetRoute>
        element:<Shop></Shop>
      },
      {
        path: "contactUs",
        element: <Contact></Contact>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path:"signUp",
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"cart",
        element:<Cart></Cart>
      }
    ]
  }
]);