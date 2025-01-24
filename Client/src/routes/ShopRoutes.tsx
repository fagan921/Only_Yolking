import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';

const ShopRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default ShopRoutes;