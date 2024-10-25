// src/components/Home.js 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [location, setLocation] = useState('');
  const [departure, setDeparture] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')); // Supposons que vous stockez les données de l'utilisateur ici

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        (error) => {
          alert("Erreur lors de la récupération de votre position géographique.");
        }
      );
    } else {
      alert("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  };

  const getCoordinates = async (address) => {
    const response = await fetch(`https://api.example.com/geocode?address=${encodeURIComponent(address)}`);
    const data = await response.json();
    return { latitude: data.latitude, longitude: data.longitude };
  };

  const haversineDistance = (coords1, coords2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Rayon de la Terre en km
    const dLat = toRad(coords2.latitude - coords1.latitude);
    const dLon = toRad(coords2.longitude - coords1.longitude);
    const lat1 = toRad(coords1.latitude);
    const lat2 = toRad(coords2.latitude);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance en km
  };

  const calculatePrice = (distance) => {
    const pricePerKm = 5; // Exemple de prix par km
    return distance * pricePerKm;
  };

  const handleReservation = async () => {
    if (!user) {
      const wantsToLogin = window.confirm("Vous devez vous connecter pour effectuer une réservation. Voulez-vous vous connecter maintenant ?");
      if (wantsToLogin) {
        navigate('/login'); // Redirection vers la page de connexion
      }
      return;
    }

    try {
      // Récupérer les coordonnées
      const locationCoords = await getCoordinates(location);
      const departureCoords = await getCoordinates(departure);

      // Calculer la distance
      const distance = haversineDistance(locationCoords, departureCoords);
      const price = calculatePrice(distance);

      alert(`Réservation pour ${location} depuis ${departure}. Distance: ${distance.toFixed(2)} km. Prix: ${price.toFixed(2)} €`);
    } catch (error) {
      alert("Erreur lors du calcul des prix. Veuillez vérifier vos adresses.");
    }
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="welcome-title">Bienvenue dans notre application !</h1>
        <p className="welcome-subtitle">Votre voyage commence ici</p>
        
        <fieldset className="input-fieldset">
          <legend>Informations de réservation</legend>
          <div className="input-group">
            <label htmlFor="location">Votre position géographique :</label>
            <input 
              type="text" 
              id="location" 
              placeholder="Entrez votre position" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} // Permettre la saisie manuelle
              className="input-field"
            />
            <button onClick={getGeolocation} className={`home-button position-button`}>Récupérer ma position</button>
          </div>
          <div className="input-group">
            <label htmlFor="departure">Lieu de départ :</label>
            <input 
              type="text" 
              id="departure" 
              placeholder="Entrez votre lieu de départ" 
              value={departure} 
              onChange={(e) => setDeparture(e.target.value)} 
              className="input-field"
            />
          </div>
        </fieldset>
        
        <div className="button-container">
          <button className="home-button" onClick={() => alert(`Voir les prix pour ${location} depuis ${departure}`)}>Voir les prix</button>
          <button className="home-button" onClick={handleReservation}>Réserver</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
