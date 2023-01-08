import express from "express";
import cookieParser from "cookie-parser";
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || 3000;

// Cookir Parser
app.use(cookieParser())

//Load Routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})