import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Slice";
import { backGroundUrl } from "../utils/constant";

export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMessage, setValidationMessage] = useState(null);
  const [emailVAlue, setEmailValue] = useState("");
  const [passwordVAlue, setPasswordValue] = useState("");
  const [userNameVAlue, setuserNameValue] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  // const [errorField, setErrorField] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let emailref = useRef(null);
  let passwordref = useRef(null);
  let userName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

    setEmailValue("");
    setPasswordValue("");
    setValidationMessage(null);
  };
  const submit = () => {
    // validate form data

    //adding feature is pending
    // let errorFieldChecking =
    //   emailVAlue || userNameVAlue || passwordVAlue === ""
    //     ? "Please fill all fields"
    //     : null;
    // console.log(errorFieldChecking);
    // setErrorField(errorFieldChecking);

    if (emailVAlue || passwordVAlue) {
      const validationResponse = validateForm(
        emailref.current.value,
        passwordref.current.value
        // userName.current.value
      );
      if (validationResponse === "Email is not valid") {
        setValidationMessage(validationResponse);
        setEmailValue("");
        return;
      }
      if (validationResponse === "Password is not valid") {
        // console.log(validationResponse);
        setValidationMessage(validationResponse);
        setPasswordValue("");
        return;
      }
      // if (validationResponse === "UserName is not valid") {
      //   setValidationMessage(validationResponse);
      //   setuserNameValue("");
      // }
      // setEmailValue("");
      // setPasswordValue("");

      // login and signup code
      if (validationResponse === null) {
        if (!isSignInForm) {
          // console.log(emailref.current.value, passwordref.current.value);
          // sign up logic
          createUserWithEmailAndPassword(
            auth,
            emailref.current.value,
            passwordref.current.value,
            userName.current.value
          )
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: userName.current.value,
              })
                .then(() => {
                  // Profile updated!
                  const { uid, email, displayName } = auth.currentUser;
                  // ...
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                    })
                  );
                  navigate("/browse");

                  // ...
                })
                .catch((error) => {
                  // An error occurred
                  setValidationMessage(error.message);
                });
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidationMessage(errorMessage);
            });
        } else {
          // Login Logic
          signInWithEmailAndPassword(
            auth,
            emailref.current.value,
            passwordref.current.value
          )
            .then((userCredential) => {
              const user = userCredential.user;
              // console.log(user);
              // navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidationMessage(errorMessage);
            });
        }
      }
    }
    setuserNameValue("");
    setPasswordValue("");
    setEmailValue("");
    setValidationMessage(null);
  };

  const seePasswordfn = () => {
    setSeePassword(!seePassword);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img src={backGroundUrl} alt="" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
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
            ref={userName}
            value={userNameVAlue}
            onChange={(e) => setuserNameValue(e.target.value)}
          />
        )}
        <input
          type="email"
          className="p-4 my-4 w-full bg-gray-800"
          name="Email"
          id="Email"
          placeholder="Email Address"
          ref={emailref}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          value={emailVAlue}
        />
        <div>
          <input
            type={seePassword ? "text" : "password"}
            name="userPassword"
            id="userPassword"
            className="p-4 my-4 w-full bg-gray-800"
            placeholder="Password"
            ref={passwordref}
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
            value={passwordVAlue}
          />
          <p onClick={seePasswordfn} className=" text-white cursor-pointer">
            SeePassword
          </p>
        </div>

        <h1 className=" text-lg font-bold py-2  text-red-600">
          {validationMessage}
        </h1>
        {/* <h1 className=" text-lg font-bold py-2  text-red-600">{errorField}</h1> */}

        <button
          className="py-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={submit}
        >
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
