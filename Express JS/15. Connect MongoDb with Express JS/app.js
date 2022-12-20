import express from 'express';
import {join} from 'path';
import web from './routes/web.js'
// import mongoose from 'mongoose';
import connectDb from './Databases/connectDb.js';


const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

// mongoose.connect("mongodb://localhost:27017/schooldb").then(() => {
//     console.log('Connected Successfully...')
// })

connectDb(DATABASE_URL);

//setup the directory where the template files are located
app.set('views', './views');

// Setup the template engine
app.set('view engine', 'ejs');

app.use(express.static(join(process.cwd(), 'public')));


app.use('/', web);

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})