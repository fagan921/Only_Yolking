import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps{
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div className="bg-blue-400 min-h-screen">
//       <Navbar />
//       <main className="container mx-auto">{children}</main>
//     </div>
//   );
// };

export default Layout;