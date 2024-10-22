import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");

    // Logique de connexion (vous pouvez remplacer ceci par votre propre logique d'authentification)
    if (email && password) {
      // Redirection vers la page de bienvenue (vous pouvez personnaliser cette logique)
      navigate('/welcome', { state: { name: "VotreNom", lastName: "VotrePrénom" } });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Se connecter</h2>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Votre Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="name@yourbank.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Votre Mot de Passe</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <input
            id="remember"
            type="checkbox"
            className="checkbox"
          />
          <label htmlFor="remember" className="checkbox-label">Se souvenir de moi</label>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Soumettre
        </button>

        <p className="footer-text">
          Déjà un compte? 
          <Link to="/login" className="login-link">Se connecter</Link>
          <br />
          Pas de compte? 
          <Link to="/signup" className="login-link">S'inscrire</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
