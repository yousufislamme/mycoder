"use client";
 
import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleMyGoogleSing = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const userLogged = result.user;
        console.log(userLogged);
        setUser(userLogged);
      })

      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, GithubProvider)
    .then(result=>{
      const userLoggedGit = result.user;
      console.log(userLoggedGit);
      setUser(userLoggedGit);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <div className="h-screen">
      {user ?<button
        onClick={handleSingOut}
        className="ml-5 border-2 border-red-500 rounded-lg px-5 py-2"
      >Sing Out
      </button> 
      :
      <>
      <button
          className="border-2 border-blue-500 rounded-lg px-5 py-2"
          onClick={handleMyGoogleSing}
        >
          Google Login
      </button>
      <button 
       className="border-2 border-black rounded-lg px-5 py-2"
      onClick={handleGithubLogin}>GitHub Login</button>
      </>
      
}
{/* Show on display */}
      {user && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      )}
    </div>
  );
};

export default Login;
