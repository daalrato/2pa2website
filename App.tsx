import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { PreOrder } from './components/PreOrder';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-body selection:bg-ancient-red selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <PreOrder />
      </main>
      <Footer />
    </div>
  );
};

export default App;