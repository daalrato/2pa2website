import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0908] py-16 border-t-2 border-ancient-stone text-stone-500 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ancient-gold"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-serif text-2xl font-bold text-ancient-gold mb-2">AGE OF 2PA 2</div>
          <p className="text-sm font-serif opacity-60">© 2024. Hecho con la bendición de Apolo.</p>
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="hover:text-ancient-gold hover:scale-110 transition-all"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="hover:text-ancient-gold hover:scale-110 transition-all"><Instagram className="w-6 h-6" /></a>
          <a href="#" className="hover:text-ancient-gold hover:scale-110 transition-all"><Youtube className="w-6 h-6" /></a>
        </div>

        <div className="text-sm flex flex-col md:items-end space-y-2 font-serif uppercase tracking-wider">
           <a href="#" className="hover:text-ancient-paper transition-colors">Términos del Oráculo</a>
           <a href="#" className="hover:text-ancient-paper transition-colors">Privacidad Sagrada</a>
        </div>
      </div>
    </footer>
  );
};