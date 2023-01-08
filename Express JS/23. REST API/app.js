import express from "express";
import web from './routes/web.js'
import connectDb from "./databases/connectDb.js";
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"


// Dtatbase Connection
connectDb(DATABASE_URL);

// JSON
app.use(express.json())

//Load Routes
app.use('/student', web)

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})