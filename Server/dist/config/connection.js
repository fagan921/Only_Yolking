import dotenv from 'dotenv';
dotenv.config();
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/tech';
import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI || '';
const db = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected.');
        return mongoose.connection;
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
};
export default db;
