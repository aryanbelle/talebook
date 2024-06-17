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
      <div className="bg-primary-grey-500 border-2 border-primary-grey-500 p-8 rounded-lg shadow-md w-full max-w-md m-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-red-500">
          Create account
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm  mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <div className="flex items-center border rounded-lg border-1 border-zinc-500 shadow bg-primary-grey-500 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          
              <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
              <input
                className="flex-grow focus:outline-none p-1 bg-transparent text-white"
                id="username"
                type="text"
                placeholder="Enter a username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border rounded-lg border-1 border-zinc-500 shadow bg-primary-grey-500 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <EnvelopeIcon className="h-5 w-5 text-gray-200 mr-2" />
              <input
                className="flex-grow focus:outline-none p-1 bg-transparent text-white"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-200 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border rounded-lg border-1 border-zinc-500 shadow bg-primary-grey-500 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <LockClosedIcon className="h-5 w-5 text-gray-200 mr-2" />
              <input
                className="flex-grow focus:outline-none p-1 bg-transparent text-white"
                id="password"
                type="password"
                placeholder="Enter a password"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-primary-blue bg-primary-red-500 hover:bg-primary-red-700"
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
              className="border-2 border-zinc-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
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
          <div className="text-sm text-white mt-8 text-center">
            Already have an account?
            <a href="#" className="text-primary-red-500 ml-2">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
