import React from 'react';
import { IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fileName: string, width = 400, height = 400) => {
    e.currentTarget.src = `https://placehold.co/${width}x${height}/1a1510/c5a059?text=Missing:+${fileName}`;
    e.currentTarget.classList.add('opacity-80');
  };

  return (
    <section id="gallery" className="py-24 bg-ancient-dark relative overflow-hidden border-t-8 border-ancient-gold">
      {/* Background Fresco Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-ancient-gold mb-4 tracking-widest">
              FRAGMENTOS
            </h2>
            <p className="text-stone-400 font-body text-xl">Un vistazo al caos.</p>
        </div>

        {/* Comic Panels Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
            {/* Panel 1 */}
            <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-ancient-gold/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative border-4 border-stone-800 bg-black shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={IMAGES.panelSpartanLaugh} 
                      alt="Panel Espartano" 
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100"
                      onError={(e) => handleImageError(e, 'panel_laugh.png', 400, 400)} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-3 px-4 border-t border-stone-700">
                        <p className="text-ancient-gold font-serif text-xs tracking-widest uppercase text-center">La Risa del Guerrero</p>
                    </div>
                </div>
            </div>

            {/* Panel 2 - Featured Center */}
            <div className="relative group cursor-pointer md:-mt-12 z-10">
                <div className="absolute -inset-3 bg-ancient-red/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative border-4 border-ancient-gold bg-black shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={IMAGES.panelEgypt} 
                      alt="Panel Egipcio" 
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100" 
                      onError={(e) => handleImageError(e, 'panel_egypt.png', 400, 500)}
                    />
                     <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-3 px-4 border-t border-ancient-gold">
                        <p className="text-ancient-gold font-serif text-xs tracking-widest uppercase text-center">La Espera</p>
                    </div>
                </div>
            </div>

            {/* Panel 3 */}
            <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-ancient-blue/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative border-4 border-stone-800 bg-black shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={IMAGES.panelDuo} 
                      alt="Panel Duo" 
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100" 
                      onError={(e) => handleImageError(e, 'panel_duo.png', 400, 400)}
                    />
                     <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-3 px-4 border-t border-stone-700">
                        <p className="text-ancient-gold font-serif text-xs tracking-widest uppercase text-center">La Caza</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Physical Edition Tease */}
        <div className="relative mt-32">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ancient-gold/5 to-transparent h-full w-full"></div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                
                {/* Comic in Hand */}
                <div className="relative w-full md:w-1/3 transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                    <div className="border-8 border-white p-2 bg-white shadow-xl">
                         <img 
                           src={IMAGES.lifestyleHand} 
                           alt="En mano" 
                           className="w-full h-auto grayscale-[30%] hover:grayscale-0 transition-all" 
                           onError={(e) => handleImageError(e, 'photo_hand.png', 400, 600)}
                          />
                    </div>
                    <div className="text-center mt-4 font-handwriting text-stone-500 -rotate-2">Edición de bolsillo</div>
                </div>

                 {/* Comic on Table */}
                <div className="relative w-full md:w-1/2 transform hover:scale-105 transition-transform duration-500">
                     <div className="border-[12px] border-ancient-stone shadow-2xl relative">
                        <img 
                          src={IMAGES.lifestyleTable} 
                          alt="En mesa" 
                          className="w-full h-auto" 
                          onError={(e) => handleImageError(e, 'photo_table.png', 600, 400)}
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 pointer-events-none"></div>
                     </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};