import express from "express";
import web from './routes/web.js'
import session from "express-session";
import connectDb from "./databases/connectDb.js";
import MongoStore from "connect-mongo";
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"


// Dtatbase Connection
connectDb(DATABASE_URL);


// MonogDB Session
const sessionStorage = MongoStore.create({
    mongoUrl: DATABASE_URL,
    dbName: 'sessionDB',
    collectionName: 'session',
    // ttl: 14*24*60*60,
    autoRemove:'native'
})

// Session
app.use(session({
    name: 'sessionkey',
    secret: 'iamkey',
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge:15000},
    store: sessionStorage
}))

//Load Routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})