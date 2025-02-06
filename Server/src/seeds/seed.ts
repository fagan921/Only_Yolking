import db from '../config/connection.js';
import { User, Category, Products } from '../models/index.js';
import cleanDB from './cleanDB.js';
import mongoose from 'mongoose';
// import userData from './userData.json' assert { type: 'json' };
// import categoryData from './categoryData.json' assert { type: 'json' };
// import productData from './productData.json' assert { type: 'json' };
import { readFileSync } from 'fs';


import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const userDataPath = path.join(__dirname, '../../src/seeds/userData.json');
const categoryDataPath = path.join(__dirname, '../../src/seeds/categoryData.json');
const productDataPath = path.join(__dirname, '../../src/seeds/productData.json');
const userData = JSON.parse(readFileSync(userDataPath, 'utf-8'));
const categoryData = JSON.parse(readFileSync(categoryDataPath, 'utf-8'));
const productData = JSON.parse(readFileSync(productDataPath, 'utf-8'));


const seedDatabase = async (): Promise<void> => {
  try {
    await db(); // Ensure DB is connected
    await cleanDB();

    await User.insertMany(userData);
    const categories = await Category.insertMany(categoryData); // Use insertMany for efficiency

    const updatedProducts = productData.map((product:any) => {
      const category_id = categories.find(category => category.name === product.category)?._id;
      
      return { ...product, category: category_id as string };
    });

    await Products.insertMany(updatedProducts); // Bulk insert for efficiency
    
    // for (const product of productData){
    //   const category_id = categories.find(category => category.name === product.category)?._id;
      
    //   const newProduct = await Products.create({ ...product, category: category_id as string });
    //  console.log(newProduct);
    // };

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
