import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import FindUs from '../pages/FindUs';
import Menu from '../pages/Menu';
import Gallery from '../pages/Gallery';
import ContactUs from '../pages/ContactUs';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/find-us" element={<FindUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
