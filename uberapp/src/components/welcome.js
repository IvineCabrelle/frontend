import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './Welcome.css'; // Assurez-vous de créer ce fichier CSS
import { useLanguage } from '../LanguageContext';
const Welcome = ({ location }) => {
  const { state } = location || {};
  const name = state?.name || "Utilisateur";
  const lastName = state?.lastName || "";
  const { language } = useLanguage(); // Utiliser le contexte
  const [passengers, setPassengers] = useState(1);
  const [destination, setDestination] = useState(null);
  const [price, setPrice] = useState(0);
  const [bookings, setBookings] = useState([]);

  const handlePassengerChange = (e) => {
    setPassengers(e.target.value);
    setPrice(e.target.value * 10); // Exemple de calcul de prix
  };

  const handleConfirm = () => {
    if (destination) {
      const newBooking = { passengers, destination, price };
      setBookings([...bookings, newBooking]);
      alert(`Réservé pour ${passengers} passager(s) vers (${destination.lat}, ${destination.lng}). Prix: ${price}€`);
      // Réinitialiser la sélection
      setDestination(null);
    }
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Remplacez par votre clé API
  });

  const onMapClick = (event) => {
    setDestination({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <img src="path/to/your/image.png" alt="Profile" className="profile-image" />
        <h1>Bienvenue, {name} {lastName}!</h1>
        <p>Nous sommes ravis de vous voir ici. Votre aventure commence maintenant.</p>
        <button className="explore-button">Explorer l'application</button>
      </div>

      <div className="reservation-container">
        <h2>Réservez votre course</h2>
        <div className="passenger-selection">
          <label>Nombre de passagers:</label>
          <select value={passengers} onChange={handlePassengerChange}>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '400px', height: '400px' }}
            center={{ lat: 48.8566, lng: 2.3522 }} // Paris
            zoom={10}
            onClick={onMapClick}
          >
            {destination && <Marker position={destination} />}
          </GoogleMap>
        )}

        <div className="price-display">
          <h3>Prix: {price}€</h3>
          <button onClick={handleConfirm}>Confirmer la réservation</button>
        </div>
      </div>

      <div className="history-container">
        <h2>Historique des réservations</h2>
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.passengers} passager(s) vers ({booking.destination.lat}, {booking.destination.lng}) - Prix: {booking.price}€
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
