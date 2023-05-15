import { createBrowserRouter } from "react-router-dom";
import Main from "../../../main/Main";
import Register from "../../Register/Register";
import Home from "../../Home/Home";
import SignIn from "../../SignIn/SignIn";
import ForgetPassword from "../../ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/register", element: <Register></Register> },
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/forgetPass", element: <ForgetPassword /> },
    ],
  },
]);
export default router;
