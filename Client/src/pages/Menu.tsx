import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <img src="/menu.jpeg" alt="Menu" className="w-full max-w-md mx-auto" />
    </div>
  );
};

export default Menu;
