import { useState } from "react";
import "./Index.css";
import SignInImage from "../../assets/images/signinpage.svg";
import abstractshape from "../../assets/images/abstract-shape.png";

const SignUpPage = () => {
  return (
    <div className="SignUpPage">
      <div className="instructions">
        <div className="instruction-text">
          <h1>Empower Your Product Development</h1>
          <h3>Token Manager</h3>
        </div>
        <img className="sign-in-image" src={SignInImage} alt="SignUpImage" />
      </div>
      <div className="sign-up-container">
        <img
          className="abstract-shape-1"
          src={abstractshape}
          alt="abstractshape"
        />
        <img
          className="abstract-shape-2"
          src={abstractshape}
          alt="abstractshape"
        />
        <div className="sign-up-input-container">
          <h1>Sign In</h1>
          <div className="input-container">
            <label className="signup-label">Username</label>
            <input
              className="signup-input"
              type="text"
              placeholder="Username"
            />
            <label className="signup-label">Password</label>
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="signup-btn-container">
            <button className="signup-btn">Sign In</button>
          </div>
          <div className="text-container">
            <p>don't have an account?</p>
            &nbsp; &nbsp; &nbsp;
            <p className="signin-link">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
