import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [err, setErr] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const handleRestPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("check your email");
        navigate("/signin");
        e.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          setErr("User not found");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4 flex justify-center items-center">
        <div className="w-full max-w-[500px] bg-orange-400 flex flex-col justify-center items-center mt-4 p-4">
          <h1 className="text-center uppercase text-white font-bold text-xl p-4">
            Please Reset Your Password Here
          </h1>
          <div className="p-4 w-full">
            <form
              onSubmit={handleRestPass}
              className="flex flex-col justify-center items-center"
            >
              <input
                className="m-2 p-1 rounded w-full focus:outline-none focus:ring focus:ring-violet-300"
                type="text"
                name="email"
                placeholder="Enter Your Email"
                required
              />

              <input
                className="bg-blue-600 w-full rounded-sm px-2 py-1 text-white font-bold cursor-pointer"
                type="submit"
                value="Reset Password"
              />
            </form>
          </div>
          <div>
            <p className="text-red">{err}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
