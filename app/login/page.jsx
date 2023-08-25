'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/Firebase.init';
 
const Login = () => {

  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleMyGoogleSing = () =>{
    signInWithPopup(auth, provider)
    .then(result => {
      const userLogged =result.user;
      console.log(userLogged);
      setUser(userLogged);
    })

    .catch(error=>{
      console.log('error', error.message);
    })
  }

  const handleSingOut = () => {
    signOut(auth)
    .then(result =>{
      console.log(result);
      setUser(null);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='h-screen'> 

      <button className='border-2 border-blue-500 rounded-lg px-5 py-2' onClick={handleMyGoogleSing}
      >Google Login</button>

      <button onClick={handleSingOut} className='ml-5 border-2 border-red-500 rounded-lg px-5 py-2'>Sing Out</button>

      {user && <div>
        <h3>User Name: {user.displayName}</h3>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt={user.displayName} />
      </div>}

    </div>
  )
}

export default Login;