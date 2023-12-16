import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className=" text-white w-3/12 absolute bg-black p-12 my-36 mx-auto  right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Login" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="FullName"
            id="FullName"
            className="p-4 my-4 w-full bg-gray-800"
            placeholder="Enter Full Name"
          />
        )}
        <input
          type="text"
          className="p-4 my-4 w-full bg-gray-800"
          name="userInput"
          id="userInput"
          placeholder="Email Address"
        />

        <input
          type="password"
          name="userPassword"
          id="userPassword"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Password"
        />
        <button className="py-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Login" : "Sign Up"}
        </button>
        <p className=" cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Login In Now."}
        </p>
      </form>
    </>
  );
}
