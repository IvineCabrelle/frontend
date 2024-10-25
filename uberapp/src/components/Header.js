import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; 
import { useLanguage } from './LanguageContext';   //  contexte

const Header = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage(); //  le contexte

  const handleHomeClick = () => {
    navigate('/'); // Redirige vers la page d'accueil
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLanguageChange = (event) => {
    toggleLanguage(event.target.value);
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        UberApp
      </div>
      <div className="nav-links">
        
        <button className="nav-button" onClick={handleLoginClick}>
          {language === 'fr' ? 'Se connecter' : 'Login'}
        </button>
        <button className="nav-button" onClick={handleSignupClick}>
          {language === 'fr' ? 'S\'inscrire' : 'Sign Up'}
        </button>
        <select value={language} onChange={handleLanguageChange} className="language-select">
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
