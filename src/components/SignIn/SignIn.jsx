import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const SignIn = () => {
  const [alert, setAlert] = useState("");

  const navigate = useNavigate();
  const handleSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          setAlert("log in successful");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
    e.target.reset();
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 flex justify-center items-center">
      <div className="w-full max-w-[500px] bg-orange-400 flex flex-col justify-center items-center mt-4 p-4">
        <h1 className="text-center uppercase text-white font-bold text-2xl p-4">
          Please Sign In Here
        </h1>
        <div className="p-4 w-full">
          <form
            onSubmit={handleSingIn}
            className="flex flex-col justify-center items-center"
          >
            <input
              className="m-2 p-1 rounded w-full focus:outline-none focus:ring focus:ring-violet-300"
              type="text"
              name="email"
              placeholder="Enter Your Email"
            />

            <input
              className="m-2 p-1 rounded w-full focus:outline-none focus:ring focus:ring-violet-300"
              type="text"
              name="password"
              placeholder="Enter Your Password"
            />
            <input
              className="bg-blue-600 w-full rounded-sm px-2 py-1 text-white font-bold cursor-pointer"
              type="submit"
              value="Sign In"
            />
            <p className="w-full p-1 text-white text-xl text-center">{alert}</p>
            <p className="w-full p-1 text-black text-sm">
              <Link to="/forgetPass">Forget Password?</Link>
            </p>
          </form>
          <div>
            <p className="text-center p-4">
              <small>
                New Here?
                <Link className="underline px-2" to="/register">
                  Register
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
