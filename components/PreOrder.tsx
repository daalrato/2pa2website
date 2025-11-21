import React from 'react';
import { Button } from './Button';
import { Check, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONTENT, IMAGES } from '../constants';

export const PreOrder: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fileName: string) => {
    e.currentTarget.src = `https://placehold.co/600x800/1a1510/c5a059?text=Missing:+${fileName}`;
  };

  return (
    <section id="preorder" className="py-32 relative overflow-hidden bg-ancient-stone">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#151311] border-4 border-ancient-gold shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Side - Image */}
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src={IMAGES.lifestyleFlat} 
              alt="Comic Flat Lay" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              onError={(e) => handleImageError(e, 'photo_flat.png')}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#151311]"></div>
            <div className="absolute bottom-8 left-8 bg-black/80 p-4 border border-ancient-gold/50 backdrop-blur-sm">
                <div className="text-ancient-gold font-serif text-sm tracking-widest uppercase mb-1">Objeto Legendario</div>
                <div className="text-white font-serif text-xl">Volumen 1: Agua y Arena</div>
            </div>
          </div>

          {/* Right Side - Offer */}
          <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative">
            {/* Decorative Corners */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-ancient-gold"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-ancient-gold"></div>

            <div className="flex items-center gap-2 mb-4 text-ancient-gold">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-bold uppercase tracking-wider text-sm">Oferta de Pre-Lanzamiento</span>
            </div>

            <h2 className="text-4xl font-serif font-black text-ancient-paper mb-6">ÚNETE A LA BATALLA</h2>
            
            <div className="flex items-end gap-4 mb-8 pb-8 border-b border-stone-800">
                <span className="text-6xl font-serif text-ancient-gold font-bold drop-shadow-md">{SITE_CONTENT.price}€</span>
                <span className="text-xl text-stone-600 line-through mb-2 font-serif">29.95€</span>
            </div>

            <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                    <div className="bg-ancient-gold/10 p-2 rounded-sm border border-ancient-gold/30">
                        <Check className="w-5 h-5 text-ancient-gold" />
                    </div>
                    <div>
                        <h4 className="text-ancient-paper font-serif font-bold">Envío Prioritario</h4>
                        <p className="text-stone-500 text-sm">Recíbelo antes que los aldeanos.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-ancient-gold/10 p-2 rounded-sm border border-ancient-gold/30">
                        <Truck className="w-5 h-5 text-ancient-gold" />
                    </div>
                    <div>
                        <h4 className="text-ancient-paper font-serif font-bold">Envío Gratis</h4>
                        <p className="text-stone-500 text-sm">A toda la península Ibérica.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-ancient-gold/10 p-2 rounded-sm border border-ancient-gold/30">
                        <ShieldCheck className="w-5 h-5 text-ancient-gold" />
                    </div>
                    <div>
                        <h4 className="text-ancient-paper font-serif font-bold">Pago Seguro</h4>
                        <p className="text-stone-500 text-sm">Transacción protegida por los dioses.</p>
                    </div>
                </div>
            </div>

            <Button size="lg" className="w-full text-lg py-5 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                RESERVAR AHORA
            </Button>
            
            <p className="text-center text-stone-600 text-xs mt-6 font-serif uppercase tracking-widest">
                Se aceptan ofrendas vía Tarjeta y PayPal
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};