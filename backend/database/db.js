import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnection = () => {
    
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'restaurant1'
    })
    .then(() => {
        console.log('Connected to database successfully');
    })
    .catch(err => {
        console.log(`Something went wrong! ${err}`);
    });
};
