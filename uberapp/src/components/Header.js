import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Assurez-vous de créer ce fichier pour les styles

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <header className="header">
      <div className="logo">UberApp</div>
      <div className="nav-links">
        <button className="nav-button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="nav-button" onClick={handleSignupClick}>
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
