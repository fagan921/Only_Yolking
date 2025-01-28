import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-light transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;