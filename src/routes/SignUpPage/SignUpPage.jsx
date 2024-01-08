import { useState, useEffect } from "react";
import "./Index.css";
import SignUpImage from "../../assets/images/signuppage.svg";
import abstractshape from "../../assets/images/abstract-shape.png";
import { signUp } from "../../api/api";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormData = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    signUp(formData);
  };

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
            <input
              required
              className="signup-input"
              type="text"
              id="email"
              placeholder="Email"
              onChange={handleFormData}
              value={formData.email}
            />
            <label className="signup-label">Username</label>
            <input
              required
              className="signup-input"
              type="text"
              id="username"
              placeholder="Username"
              onChange={handleFormData}
              value={formData.username}
            />
            <label className="signup-label">Password</label>
            <input
              required
              className="signup-input"
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleFormData}
              value={formData.password}
            />
            <input
              required
              className="signup-input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleFormData}
              value={formData.confirmPassword}
            />
          </div>
          <div className="signup-btn-container">
            <button className="signup-btn" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div className="text-container">
            <p>already have an account?</p>
            &nbsp; &nbsp; &nbsp;
            <Link to="/" className="signin-link">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
