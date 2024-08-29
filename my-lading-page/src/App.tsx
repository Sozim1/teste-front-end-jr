// src/App.tsx
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './App.css'; // Assumindo que você está usando um arquivo CSS para estilos

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
