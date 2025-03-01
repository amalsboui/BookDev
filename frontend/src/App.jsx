import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookGrid from './components/BookGrid';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-primary">
      <Navbar />
      <Hero />
      <BookGrid />
      <Footer />
    </div>
  );
};

export default App;