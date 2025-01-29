import mongoose, { Schema, type Document } from 'mongoose';

interface ICategory extends Document {
    name: string;
    description?: string;
    products?: mongoose.Types.ObjectId[];
}

const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
    },
    // all the products will be linked to category
    // products: [ {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Product',
    // },
// ],
});


const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;