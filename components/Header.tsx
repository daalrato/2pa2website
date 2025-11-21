import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b-4 ${
      isScrolled 
        ? 'bg-ancient-dark border-ancient-gold shadow-2xl py-2' 
        : 'bg-gradient-to-b from-black/80 to-transparent border-transparent py-6'
    }`}>
      {/* Greek Key Pattern Overlay for Border */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[url('https://www.transparenttextures.com/patterns/greek-vase.png')] opacity-50 pointer-events-none"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 border-2 border-ancient-gold rotate-45 flex items-center justify-center mr-4 group-hover:rotate-90 transition-transform duration-500 bg-ancient-dark">
              <div className="w-6 h-6 bg-ancient-gold rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-black text-ancient-gold tracking-[0.2em] leading-none text-shadow">
                AGE OF
              </span>
              <span className="font-serif text-xl md:text-2xl font-bold text-ancient-paper tracking-[0.1em] leading-none">
                2PA 2
              </span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['El Cómic', 'Galería', 'Detalles'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item === 'El Cómic' ? 'hero' : item === 'Galería' ? 'gallery' : 'features')} 
                className="text-ancient-paper hover:text-ancient-gold transition-colors font-serif font-bold tracking-widest text-sm uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-ancient-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button onClick={() => scrollToSection('preorder')} size="sm" variant="primary" className="ml-4">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Pre-Ordenar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-ancient-gold hover:text-white p-2">
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-ancient-stone border-t-4 border-ancient-gold absolute w-full shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-3 font-serif font-bold text-ancient-paper border border-ancient-gold/20 bg-ancient-dark/50 hover:bg-ancient-dark">EL CÓMIC</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-3 font-serif font-bold text-ancient-paper border border-ancient-gold/20 bg-ancient-dark/50 hover:bg-ancient-dark">GALERÍA</button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-3 font-serif font-bold text-ancient-paper border border-ancient-gold/20 bg-ancient-dark/50 hover:bg-ancient-dark">DETALLES</button>
            <div className="pt-4">
              <Button onClick={() => scrollToSection('preorder')} className="w-full">Reservar Ahora</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};