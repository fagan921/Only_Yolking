import db from '../config/connection.js';
import {
  User,
  Category,
  Products 
} from '../models/index.js';
import cleanDB from './cleanDB.js';

import userData from './userData.json' assert { type: 'json'};
import categoryData from './categoryData.json' assert { type: 'json'};
import productData from './productData.json' assert { type: 'json'};
const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();

    await User.create(userData);
    const categories = await Category.create(categoryData);
    // console.log(categories[0]._id);
    for (const product of productData) {
      const category_id = categories.find(category => category.name === product.category)?._id;
      // console.log(category_id);
      product.category = category_id as string;
      await Products.create(product);
    }

    console.log('🎉🌱 Seeding completed successfully! 🌱🎉');
    process.exit(0);
  } catch (error) {
    console.error('😑 Error seeding database: 😩', error);
    process.exit(1);
  }
}

seedDatabase();
