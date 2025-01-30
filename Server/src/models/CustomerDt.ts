import { Schema, model, Document } from 'mongoose';

export interface ICustomerDt extends Document{
    fullName:   string;
    email: string;
    address:  string;
    city:string;
    state:  string;
    zip:  string;
    country:  string;
}

const customerDtSchema = new Schema({

    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    
})

const CustomerDt = model ('CustomerDt', customerDtSchema);

export default CustomerDt;
