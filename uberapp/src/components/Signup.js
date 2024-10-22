import React from 'react';
import './Signup.css'; // Assurez-vous que le chemin est correct

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Create Account</h2>

        <div className="form-group">
          <label htmlFor="floating_email" className="form-label">Email address</label>
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="form-input"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="floating_password" className="form-label">Password</label>
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="form-input"
            placeholder="********"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="floating_repeat_password" className="form-label">Confirm password</label>
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="form-input"
            placeholder="********"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="form-group">
            <label htmlFor="floating_first_name" className="form-label">First name</label>
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="form-input"
              placeholder="First name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="floating_last_name" className="form-label">Last name</label>
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="form-input"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="form-group">
            <label htmlFor="floating_phone" className="form-label">Phone number (123-456-7890)</label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="form-input"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="floating_company" className="form-label">Company (Ex. Google)</label>
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="form-input"
              placeholder="Company name"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
