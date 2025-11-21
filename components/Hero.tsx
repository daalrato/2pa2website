import React from 'react';
import { Button } from './Button';
import { SITE_CONTENT, IMAGES } from '../constants';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fileName: string) => {
    e.currentTarget.src = `https://placehold.co/600x800/1a1510/c5a059?text=Missing:+${fileName}`;
    e.currentTarget.classList.add('opacity-80');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-ancient-dark">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wall-4-light.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-ancient-dark/80 to-ancient-dark/90 z-0"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ancient-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ancient-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-6">
               <div className="flex items-center justify-center lg:justify-start gap-2 text-ancient-gold border-b border-ancient-gold/30 pb-2 mb-2">
                 <span className="text-xl">✦</span>
                 <span className="font-serif font-bold tracking-[0.3em] text-sm uppercase">Edición Limitada</span>
                 <span className="text-xl">✦</span>
               </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black text-ancient-paper mb-6 leading-none drop-shadow-lg">
              <span className="block text-ancient-gold mb-2">{SITE_CONTENT.title}</span>
              <span className="block text-3xl md:text-4xl font-bold text-ancient-paper/90">{SITE_CONTENT.subtitle}</span>
            </h1>
            
            <p className="text-xl text-stone-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-body border-l-4 border-ancient-red pl-6 italic">
              "{SITE_CONTENT.pitch}"
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto"
              >
                PRE-ORDENAR {SITE_CONTENT.price}€
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto"
              >
                Ver Galería <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product Image Showcase */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
             <div className="relative group perspective-1000">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border-2 border-ancient-gold/30 rounded-sm z-0 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute -inset-4 border border-ancient-gold/20 rounded-sm z-0 rotate-2 group-hover:rotate-3 transition-transform duration-700"></div>
                
                {/* Main Cover */}
                <div className="relative shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] z-10 bg-black border-4 border-ancient-stone">
                  <img 
                    src={IMAGES.cover} 
                    alt="Age of 2pa 2 Cover" 
                    className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => handleImageError(e, 'cover.png')}
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};