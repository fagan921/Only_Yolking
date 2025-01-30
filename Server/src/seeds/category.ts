// import mongoose from 'mongoose';
// import Category from '../models/Category';

// const seedCategories = async () => {
//   await mongoose.connect('ongodb+srv://one:kAONeik7Zir0jNZ1@cluster0.sfuw4.mongodb.net/');

//   const categories = [
//     { name: 'T-Shirts (Adult & Child)', description: 'Stylish t-shirts for all ages' },
//     { name: 'Hoodies', description: 'Warm and cozy hoodies' },
//     { name: 'Hats', description: 'Various hats and caps' },
//     { name: 'Mugs', description: 'Mugs for your favorite beverages' },
//     { name: 'Stickers', description: 'Fun stickers to personalize your items' },
//   ];

//   await Category.insertMany(categories);
//   console.log('Categories seeded successfully!');
//   mongoose.connection.close();
// };

// seedCategories();
