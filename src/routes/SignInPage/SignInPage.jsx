import { useState } from "react";
import "./Index.css";
import SignInImage from "../../assets/images/signinpage.svg";
import abstractshape from "../../assets/images/abstract-shape.png";
import { signIn } from "../../api/api";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [signInForm, setSignInForm] = useState({
    username: "",
    password: "",
  });

  const handleSignInForm = (e) => {
    const { id, value } = e.target;
    setSignInForm({ ...signInForm, [id]: value });
  };

  const handleSignIn = () => {
    signIn(signInForm);
  };

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
              id="username"
              className="signup-input"
              type="text"
              placeholder="Username"
              onChange={handleSignInForm}
              value={signInForm.username}
            />
            <label className="signup-label">Password</label>
            <input
              id="password"
              className="signup-input"
              type="password"
              placeholder="Password"
              onChange={handleSignInForm}
              value={signInForm.password}
            />
          </div>
          <div className="signup-btn-container">
            <button className="signup-btn" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
          <div className="text-container">
            <p>don't have an account?</p>
            &nbsp; &nbsp; &nbsp;
            <Link to="/signup" className="signin-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
