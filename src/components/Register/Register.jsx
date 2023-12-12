import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import googleLogo from "../../assets/googlepnglogo.png";

const Register = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user.email;
        if (user) {
          navigate("/");
        } else {
          navigate("/register");
        }
        console.log(user);
      })
      .catch((err) => console.error(err));
    e.target.reset();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/register");
      }
    });
  }, []);

  const handleGoogleSignin = () => {
    console.log("google signin");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("register", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleFacebookLogin = () => {
    console.log("facebook");
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const fbUser = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 flex justify-center items-center">
      <div className="w-full max-w-[500px] bg-orange-400 flex flex-col justify-center items-center mt-4 p-4">
        <h1 className="text-center uppercase text-white font-bold text-2xl p-4">
          Please Register Here
        </h1>
        <div className="p-4 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              className="m-2 p-1 rounded w-full focus:outline-none focus:ring focus:ring-violet-300"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />

            <input
              className="m-2 p-1 rounded w-full focus:outline-none focus:ring focus:ring-violet-300"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              required
            />

            <input
              className="m-2 p-1 rounded w-full focus:outline-none focus:ring focus:ring-violet-300"
              type="text"
              name="password"
              placeholder="Enter Your Password"
              required
            />

            <input
              className="bg-blue-600 w-full rounded-sm px-2 py-1 text-white font-bold cursor-pointer"
              type="submit"
              value="Register"
            />
          </form>
          <div>
            <p className="text-center text-xl p-2">or</p>
            <div className="flex justify-center itmes-center">
              <button onClick={handleGoogleSignin}>
                <img className="w-[60px]" src={googleLogo} alt="" />
              </button>

              <button onClick={handleFacebookLogin}>Facebook</button>
              <button></button>
            </div>
          </div>
          <div>
            <p className="text-center p-4">
              <small>
                Already Have an Account?
                <Link className="underline px-2" to="/signin">
                  Sign In
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
