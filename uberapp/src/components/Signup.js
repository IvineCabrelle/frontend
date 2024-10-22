import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    // Envoi des données à l'API
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password, phone, company }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        alert('Erreur lors de la création de l\'utilisateur');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Créer un compte</h2>

        <div className="form-group">
          <label htmlFor="floating_first_name" className="form-label">Prénom</label>
          <input
            type="text"
            id="floating_first_name"
            className="form-input"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="floating_last_name" className="form-label">Nom de famille</label>
          <input
            type="text"
            id="floating_last_name"
            className="form-input"
            placeholder="Nom de famille"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Mot de Passe</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm_password" className="form-label">Confirmer le Mot de Passe</label>
          <input
            type="password"
            id="confirm_password"
            className="form-input"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="floating_phone" className="form-label">Numéro de téléphone (123-456-7890)</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="floating_phone"
            className="form-input"
            placeholder="123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="floating_company" className="form-label">Société (Ex. Google)</label>
          <input
            type="text"
            id="floating_company"
            className="form-input"
            placeholder="Nom de l'entreprise"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Soumettre</button>
        <Link to="/" className="login-link">Accueil</Link>
      </form>
    </div>
  );
};

export default Signup;
