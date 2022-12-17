import express from 'express';
const app = express();
import {join} from 'path';
const port = process.env.PORT || '3000'
import web from './routes/web.js'

//setup the directory where the template files are located
app.set('views', './views');

// Setup the template engine
app.set('view engine', 'ejs');

app.use(express.static(join(process.cwd(), 'public')));


app.use('/', web);

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})