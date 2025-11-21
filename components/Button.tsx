import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  // Ancient Style Buttons
  const baseStyles = "font-serif font-bold tracking-[0.15em] uppercase transition-all duration-200 relative group active:top-[2px] active:shadow-none";
  
  const variants = {
    primary: `
      bg-ancient-gold text-ancient-dark
      border-2 border-[#f5d68b] border-b-[#8a6d3b] border-r-[#8a6d3b]
      shadow-[4px_4px_0_#1a1510] hover:shadow-[2px_2px_0_#1a1510] hover:translate-x-[1px] hover:translate-y-[1px]
    `,
    secondary: `
      bg-ancient-blue text-white
      border-2 border-[#3b5f8f] border-b-[#0f1e33] border-r-[#0f1e33]
      shadow-[4px_4px_0_#1a1510] hover:shadow-[2px_2px_0_#1a1510] hover:translate-x-[1px] hover:translate-y-[1px]
    `,
    outline: `
      bg-transparent text-ancient-gold border-2 border-ancient-gold
      hover:bg-ancient-gold/10
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};