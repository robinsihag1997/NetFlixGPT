import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Redux/Slice";
import {
  SUPPORTED_LANGUAGES,
  netflixLogo,
  signOutLogo,
} from "../utils/constant";
import { toggelGptSearchView } from "../Redux/gptSlice";
import { changeLanguage } from "../Redux/configSlice";

export default function Header() {
  const navigate = useNavigate();
  let user = useSelector((store) => store.user);
  let dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  dispatch;

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // gpt search function

  const handleGptSearch = () => {
    dispatch(toggelGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // ...
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser(null));
        navigate("/");
      }
    });
    // called when component is  unmount
    return () => unSubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <Link to="/browse">
        <img className="w-44" src={netflixLogo} alt="netflix logo" />
      </Link>

      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className=" rounded-lg border-collapse p-2 m-2 bg-gray-900 text-white "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.length > 0 &&
                SUPPORTED_LANGUAGES.map((lang, index) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.language}
                  </option>
                ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-3 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>

          <img
            className=" w-12 h-12  mx-4 my-1 rounded-md "
            src={signOutLogo}
            alt="usericon"
          />

          <button onClick={handleSignout} className=" font-bold text-white">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
