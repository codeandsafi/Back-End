import express from 'express';
const app = express();
const port = process.env.PORT || '3000'


// app.get('/', (req, res) => {
//     res.send('Get Method');
// })

// app.all('/everything', (req, res) => {
//     res.send('All Methods');
// })

// app.all('*', (req, res) => {
//     res.send('404 Page Not Found');
// })

// app.all('/api/*', (req, res) => {
//     res.send('API Page');
// })

//String Path

// app.get('/about', (req, res) => {
//     res.send('About Page');
// })

// String Pattern

// app.get('/ab?cd', (req, res) => {
//     res.send('This route path will match acd and abcd');
// })

// Regular Expression Pattern

// app.get(/a/, (req, res) => {
//     res.send('This route path will match anathing that has a in it');
// })

//One Callback 
// app.get('/cbexample1', (req, res) => {
//     res.send('One Callback Example');
// })

//More Than One Callback 

// app.get('/cbexample2', (req, res, next) => {
//     res.send('First Callback');
//     next();
// }, (req, res) => {
//     console.log('Second Callback');
//     res.send('More than one Callback Example');
// });

//An Array of Callbacks

// const cb1 = (req, res, next) => {
//     console.log('First Callback');
//     next();
// }

// const cb2 = (req, res, next) => {
//     console.log('Second Callback');
//     next();
// }

// const cb3 = (req, res) => {
//     console.log('Third Callback');
//     res.send('An array of callbacks');
// }

//app.get('/cbexample3', [cb1, cb2, cb3]);

//Combination of callbacks

// app.get('/cbexample4', [cb1, cb2], (req, res, next)=>{
//     console.log('Third Callback');
//     next();
// },(req, res)=>{
//     console.log('Fourth Callback');
//     res.send('Combination of Callbacks');
// });

//Chained Route Callbacks

// app.route('/student') 
// .get((req, res)=>{
//     res.send('All Student');
// })
// .post((req, res)=>{
//     res.send('All New Student');
// })
// .put((req, res)=>{
//     res.send('Update Student');
// })

// app.listen(port, ()=>{
//     console.log(`Server listening at http://localhost:${port}`);
// })

// app.route('/student') 
// .all((req, res, next)=>{
//     console.log('Run this first  for all HTTP Method');
//     next();
// })
// .get((req, res)=>{
//     console.log('GET Method');
//     res.send('All Student');
// })
// .post((req, res)=>{
//     console.log('POST Method');
//     res.send('All New Student');
// })
// .put((req, res)=>{
//     console.log('PUT Method');
//     res.send('Update Student');
// })

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})