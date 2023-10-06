import { useState } from "react";
import "./Index.css";
import SignUpImage from "../../assets/images/signuppage.svg";
import abstractshape from "../../assets/images/abstract-shape.png";

const SignUpPage = () => {
  return (
    <div className="SignUpPage">
      <div className="instructions">
        <div className="instruction-text">
          <h1>Empower Your Product Development</h1>
          <h3>Token Manager</h3>
        </div>
        <img className="sign-up-image" src={SignUpImage} alt="SignUpImage" />
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
          <h1>Sign Up</h1>
          <div className="input-container">
            <label className="signup-label">Email</label>
            <input className="signup-input" type="text" placeholder="Email" />
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
            <button className="signup-btn">Sign Up</button>
          </div>
          <div className="text-container">
            <p>already have an account?</p>
            &nbsp; &nbsp; &nbsp;
            <p className="signin-link">Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
