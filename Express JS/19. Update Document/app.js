import express from 'express';
import connectDb from './Databases/connectDb.js';
import { updateDocByID } from './models/Student.js';

const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDb(DATABASE_URL);


updateDocByID('63a1f26d59cef3ec8c375947');

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})