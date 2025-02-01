import db from '../config/connection.js';
import { User, Category, Products } from '../models/index.js';
import cleanDB from './cleanDB.js';

import userData from './userData.json' assert { type: 'json' };
import categoryData from './categoryData.json' assert { type: 'json' };
import productData from './productData.json' assert { type: 'json' };
import mongoose from 'mongoose';

const seedDatabase = async (): Promise<void> => {
  try {
    await db(); // Ensure DB is connected
    await cleanDB();

    await User.insertMany(userData);
    const categories = await Category.insertMany(categoryData); // Use insertMany for efficiency

    const updatedProducts = productData.map(product => {
      const category_id = categories.find(category => category.name === product.category)?._id;
      return { ...product, category: category_id as string };
    });

    await Products.insertMany(updatedProducts); // Bulk insert for efficiency

    console.log('🎉🌱 Seeding completed successfully! 🌱🎉');

    await mongoose.connection.close(); // Gracefully close connection
    console.log('📌 Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('😑 Error seeding database: 😩', error);
    process.exit(1);
  }
};

seedDatabase();
