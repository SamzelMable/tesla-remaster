import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import ModelYFeatures from './sections/ModelYFeatures/ModelYFeatures';
import Supercharger from './sections/Supercharger/Supercharger';
import Showcase from './sections/Showcase/Showcase';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ModelYFeatures />  
      <Showcase />
      <Supercharger />
      <Footer />
    </div>
  );
}

export default App;
