import express from 'express';
// import mongoose from 'mongoose';
import connectDb from './Databases/connectDb.js';
import createDoc from './models/Student.js';


const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://Safiul:123456@localhost:27017/schooldb?authSource=schooldb";

// mongoose.connect("mongodb://localhost:27017/schooldb").then(() => {
//     console.log('Connected Successfully...')
// })

connectDb(DATABASE_URL);

// Create and Save Document

// createDoc();
createDoc('Sonu', 19, 9999.00, ['she is cute', 'i love her'], true, [{value:'Greeeeate'}]);


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})