import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { LanguageProvider } from './components/LanguageContext';  // Importer le LanguageProvider

const App = () => {
  return (
    <LanguageProvider> {/* Envelopper l'application avec LanguageProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Autres routes */}
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
