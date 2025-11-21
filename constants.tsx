import React from 'react';
import { Sword, Scroll, Map, Zap } from 'lucide-react';
import { Feature } from './types';

// NOTE: These paths assume you have placed the images in your public/assets folder
// or the root of your public folder depending on your build setup.
export const IMAGES = {
  cover: "/cover.png", 
  comicPage: "/page.png",
  
  // Comic Panels
  panelEgypt: "/panel_egypt.png", 
  panelSpartanLaugh: "/panel_laugh.png", 
  panelDuo: "/panel_duo.png", 
  
  // Lifestyle / Product Shots
  lifestyleHand: "/photo_hand.png", 
  lifestyleTable: "/photo_table.png", 
  lifestyleFlat: "/photo_flat.png", 
};

export const SITE_CONTENT = {
  title: "Age of 2pa 2",
  subtitle: "Volumen 1: Agua y Arena",
  pitch: "Cuando los dioses juegan, los aldeanos sufren.",
  description: "Sumérgete en una aventura satírica y épica. Griegos contra Egipcios, centauros contra aldeanos, y un caos divino garantizado.",
  price: 24.95,
  shippingDate: "Envíos: 15 de Octubre",
};

export const FEATURES: Feature[] = [
  {
    title: "Sátira Mitológica",
    description: "Un guion que mezcla la épica de Homero con el humor de un lobby ranked.",
    icon: <Scroll className="w-8 h-8 text-ancient-gold" />,
  },
  {
    title: "Arte Divino",
    description: "Ilustraciones detalladas dignas de un fresco en el templo de Zeus.",
    icon: <Zap className="w-8 h-8 text-ancient-gold" />,
  },
  {
    title: "Calidad Legendaria",
    description: "Papel de alto gramaje, resistente al paso del tiempo (y a la ira de Poseidón).",
    icon: <Sword className="w-8 h-8 text-ancient-gold" />,
  },
  {
    title: "Mapa del Mundo",
    description: "Incluye un mapa desplegable para no perderte camino al centro urbano enemigo.",
    icon: <Map className="w-8 h-8 text-ancient-gold" />,
  },
];