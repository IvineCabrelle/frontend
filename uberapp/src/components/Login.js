import React from 'react';
import { Link } from 'react-router-dom'; // Ajoutez cette ligne pour importer Link
import './Login.css'; // Assurez-vous que le chemin est correct

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Create Your Account</h2>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="name@yourbank.com"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Your Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <input
            id="remember"
            type="checkbox"
            className="checkbox"
          />
          <label htmlFor="remember" className="checkbox-label">Remember me</label>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Submit
        </button>

        <p className="footer-text">
          Already have an account? 
          <Link to="/login" className="login-link">
            Log In
          </Link>
          <span> | </span>
          Don't have an account? 
          <Link to="/signup" className="login-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
