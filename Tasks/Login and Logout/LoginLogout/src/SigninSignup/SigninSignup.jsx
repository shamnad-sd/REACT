import React, { useEffect, useRef, useState } from "react";
import Home from "./home";
import "./SigninSignup.css";

function SigninSignup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  // this time showhome value false
  const [showHome, setShowHome] = useState(false);

  // sigin area
  const [show, setShow] = useState(false);

  // setting signup value at localsignup
  const localSignUp = localStorage.getItem("signUp");

  // signin area
  const localEmail = localStorage.getItem("Email");
  const localName = localStorage.getItem("Name");
  const localPassword = localStorage.getItem("Password");

  // in the time setshow home is true ,then moving trinery operators
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });

  // storing local storage ,signup
  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("Name", name.current.value);
      localStorage.setItem("Email", email.current.value);
      localStorage.setItem("Password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account Created successfully !!!");
      // this time you can see home page details
      setShowHome(true);

      

    }
  };
  // signin area
  const handleSignin = () => {
    if (
      email.current.value == localEmail &&
      password.current.value == localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      setShowHome(true);
    } else {
      alert("Enter Valid Details");
    }
  };
  return (
    <div className="container form-section">
      {showHome ? (
        <Home />
      ) : show ? (
        <div className="container mainbox">
          <h1>Hello {localName} </h1>
          <div className="inputs_space">
            <input type="Email" placeholder="Email" ref={email} />
          </div>
          <div className="inputs_space">
            <input type="password" placeholder="Password" ref={password} />
          </div>
          <button onClick={handleSignin}>Sign In</button>
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
