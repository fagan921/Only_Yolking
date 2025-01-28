import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-blue-400 min-h-screen">
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;