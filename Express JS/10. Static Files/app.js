import express from 'express';
const app = express();
import {join} from 'path';
const port = process.env.PORT || '3000'
import web from './routes/web.js'

//Static
app.use('/static', express.static(join(process.cwd(), 'public')));



app.use('/', web);

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})