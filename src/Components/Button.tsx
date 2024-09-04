import React from 'react';

type ButtonProps = {
 variant?: 'transparent' | 'filled';
 children: React.ReactNode;
 onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant = 'transparent', children, onClick }) => {
 const baseStyles = 'border-2 text-lg font-semibold px-6 py-2 rounded-xl transition duration-300';

 const transparentStyles = 'border-cerulean-blue-700 text-cerulean-blue-600 bg-transparent hover:bg-cerulean-blue-700 hover:text-white';

 const filledStyles = 'bg-cerulean-blue-600 text-white  hover:bg-transparent hover:text-cerulean-blue-600';

 const styles = variant === 'transparent' ? transparentStyles : filledStyles;

 return (
  <button type="button" className={`${baseStyles} ${styles}`} onClick={onClick}>
   {children}
  </button>
 );
};

export default Button;
