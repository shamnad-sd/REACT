import React, { useEffect, useRef, useState } from "react";
import "./SigninSignup.css";

function SigninSignup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  

  // State to control visibility of Home and Sign In sections
  const [showHome, setShowHome] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false); // New state for showing Sign In section

  // Local storage values for sign-in
  const localEmail = localStorage.getItem("Email");
  const localName = localStorage.getItem("Name");
  const localPassword = localStorage.getItem("Password");

  // Handle sign up
  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("Name", name.current.value);
      localStorage.setItem("Email", email.current.value);
      localStorage.setItem("Password", password.current.value);
      alert("Account Created successfully !!!");
      // Show Sign In section after signing up
      setShowSignIn(true);
    }
    
    
    
  };

  // Handle sign in
  const handleSignin = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      setShowHome(true); // Move to Home section on successful sign-in
    } else {
      alert("Enter Valid Details");
    }
 
    
  };

  const handleDelete = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    setShowHome(false);
    setShowSignIn(false); // Reset to show Sign Up section
  };

  return (
    <div className="container form-section">
      {showHome ? (
        <div>
          <h1>Welcome {localStorage.getItem('Name')} </h1>
          <button onClick={handleDelete} className="Delete">Delete AC</button>
        </div>
        
      ) : showSignIn ? (
        <div className="container mainbox">
          <h1>Sign IN your Ac</h1>
          <div className="inputs_space">
            <input type="Email" placeholder="Email" ref={email} />
          </div>
          <div className="inputs_space">
            <input type="password" placeholder="Password" ref={password} />
          </div>
          <button onClick={handleSignin}>SignIn</button>
        </div>
      ) : (
        <div className="container mainbox">
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>

            <div className="input">
              <div className="inputs_space">
                <img src="" alt="" />
                <input type="text" placeholder="Name" ref={name} />
              </div>

              <div className="inputs_space">
                <img src="" alt="" />
                <input type="Email" placeholder="Email" ref={email} />
              </div>

              <div className="inputs_space">
                <img src="" alt="" />
                <input type="Password" placeholder="Password" ref={password} />
              </div>
              <button onClick={handleClick}>Sign up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SigninSignup;