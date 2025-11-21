import React from 'react';

export interface ImageData {
  src: string;
  alt: string;
  className?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  cta: string;
  recommended?: boolean;
}