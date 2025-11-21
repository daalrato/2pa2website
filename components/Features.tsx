import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-ancient-paper bg-parchment relative border-t-8 border-double border-ancient-stone">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-ancient-dark mb-4 uppercase tracking-widest">
            Tesoros del Olimpo
          </h2>
          <div className="h-1 w-40 bg-ancient-gold mx-auto mb-6"></div>
          <p className="text-ancient-stone/80 font-body text-xl italic">
            Forjado por manos mortales, inspirado por la locura divina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#e8dac3] p-8 relative group hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-[#d6c4a8]"
            >
              {/* "Stone Carving" Effect Borders */}
              <div className="absolute inset-1 border border-ancient-gold/20 pointer-events-none"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-ancient-gold rotate-45 -mt-2 border-2 border-ancient-stone"></div>

              <div className="w-16 h-16 mx-auto bg-ancient-stone rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-ancient-gold group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-serif font-bold text-ancient-dark mb-4 text-center border-b border-ancient-gold/30 pb-4">
                {feature.title}
              </h3>
              
              <p className="text-ancient-stone/90 font-body text-lg text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};