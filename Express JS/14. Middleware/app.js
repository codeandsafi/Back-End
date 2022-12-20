import express from 'express';
const app = express();
import {join} from 'path';
const port = process.env.PORT || '3000'
import web from './routes/web.js'
import student from './routes/student.js'
import myLogger from './middlewares/logger-middlewar.js';

//setup the directory where the template files are located
app.set('views', './views');

// Setup the template engine
app.set('view engine', 'ejs');

app.use(express.static(join(process.cwd(), 'public')));

// application level middleware
// app.use(myLogger);
app.use('/about', myLogger);


app.use('/', web);
app.use('/', student);

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})