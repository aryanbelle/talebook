import React, {useState, useEffect} from "react";
import {
  EnvelopeIcon,
  InboxIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { handleSignIn, handleSignOut } from "../auth/Auth";
import { auth } from "../auth/firebase";

const Signup = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signIn = () => {
    handleSignIn()
      .then((user) => setUser(user))
      .catch((error) => console.error("Sign-in error: ", error));
  };

  const signOut = () => {
    handleSignOut()
      .then(() => setUser(null))
      .catch((error) => console.error("Sign-out error: ", error));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black border-2 border-primary-grey-500 p-8 rounded-lg shadow-md w-full max-w-md m-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-red-500">
          Create account
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <div className="flex items-center border rounded shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
              <input
                className="flex-grow focus:outline-none p-1"
                id="username"
                type="text"
                placeholder="Enter a username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border rounded shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
              <input
                className="flex-grow focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border rounded shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
              <input
                className="flex-grow focus:outline-none p-1"
                id="password"
                type="password"
                placeholder="Enter a password"
              />
            </div>
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-violet-500 text-sm">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create account
            </button>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
              type="button"
              onClick={handleSignIn}
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
                className="mr-2"
              />
              Continue with Google
            </button>
          </div>
          <div className="text-sm mt-8 text-center">
            Already have an account?
            <a href="#" className="text-violet-500 ml-2">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
