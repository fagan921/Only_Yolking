import mongoose, { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define an interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  saveOrder: mongoose.Types.ObjectId[];
  // customerDetails:string;
  isCorrectPassword(password: string): Promise<boolean>;
  
}

// Define the schema for the User document
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    //add here eventually
   
    saveOrder:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true
    }],
    // customerDetails: {
    //   fullName: { type: String, required: true },
    //   email: { type: String, required: true },
    //   address: { type: String, required: true },
    //   city: { type: String, required: true },
    //   state: { type: String, required: true },
    //   zip: { type: String, required: true },
    //   country: { type: String, required: true },
    // },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

userSchema.pre<IUser>('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User = model<IUser>('User', userSchema);

export default User;
