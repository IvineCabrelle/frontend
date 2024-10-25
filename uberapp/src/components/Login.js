import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");

    // Envoi des données à l'API
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pwd: password }), //  "password" en "pwd"
      });

      if (response.ok) {
        const userData = await response.json();
        
        // Stockage du  token 
        localStorage.setItem('token', userData.token);

        // Redirige vers la page de bienvenue avec les données de l'utilisateur
        navigate('/welcome', { state: { name: userData.firstName, lastName: userData.lastName } });
      } else {
        const errorData = await response.json();
        alert(errorData.data || 'Email ou mot de passe incorrect'); //  le message d'erreur du serveur
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la connexion. Veuillez réessayer plus tard.'); // message d'erreur générique
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Se connecter</h2>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Adresse Electronique</label>
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
          <label htmlFor="password" className="form-label"> Mot de Passe</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Soumettre</button>

        <p className="footer-text">
          Pas de compte? 
          <Link to="/signup" className="login-link">S'inscrire</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
