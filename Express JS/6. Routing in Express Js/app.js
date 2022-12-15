import express from 'express';
const app = express();
const port = process.env.PORT || '3000'
import student from './routes/student.js';
import teacher from './routes/teacher.js';

app.use('/chatra', student);
app.use('/sikkhak', teacher);


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})