import express from 'express';
import connectDb from './Databases/connectDb.js';
import { getAllDoc, getDoc2, getSingleDoc, getSingleDoc2, getDocByField, getDocByField2, getLimitedDoc, skipDoc, countDoc, comparisontDoc } from './models/Student.js';

const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDb(DATABASE_URL);

// getAllDoc();
// getDoc2();
// getSingleDoc();
// getSingleDoc2();
// getDocByField();
// getDocByField2();
// getLimitedDoc();
// skipDoc();
comparisontDoc();
countDoc();

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})