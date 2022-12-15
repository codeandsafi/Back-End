import express from 'express';
const app = express();
const port = process.env.PORT || '3000'

//app.get('/product/:catagory/:id', (req, res) => {
//     console.log(req.params);
//     const { catagory, id } = req.params;
//     res.send(`Product Catagory: ${catagory} and Product ID: ${id}`);
// })

// app.get('/product/kol/:catagory/company/:id', (req, res) => {
//     console.log(req.params);
//     const { catagory, id } = req.params;
//     res.send(`Product Catagory: ${catagory} and Product ID: ${id}`);
// })

// app.get('/train/:from-:to', (req, res) => {
//     console.log(req.params);
//     const { from, to } = req.params;
//     res.send(`Traveling from: ${from} to: ${to}`);
// })

// app.get('/train/:from.:to', (req, res) => {
//     console.log(req.params);
//     const { from, to } = req.params;
//     res.send(`Traveling from: ${from} to: ${to}`);
// })


//With Regx

// app.get('/product/:catagory/:id([0-9]{2})', (req, res) => {
//     console.log(req.params);
//     const { catagory, id } = req.params;
//     res.send(`Product Catagory: ${catagory} and Product ID: ${id}`);
// })

// app.get('/:type(post|article)/:id', (req, res) => {
//     console.log(req.params);
//     res.send(`Post or Article`);
// })


// app.param()

// app.param('id', (req, res, next, ids) => {
//     console.log(`Called only once ID: ${ids}`);
//     next();
// })

// app.get('/user/:id', (req, res)=>{
//     console.log("This is User Id path 1")
//     res.send("Executed");
// })

//array of parameters

// app.param(['name', 'id'], (req, res, next, value) => {
//     console.log(`Called only once: ${value}`);
//     next();
// })

// app.get('/user/:name/:id', (req, res)=>{
//     console.log("This is User Id path 1")
//     res.send("Executed");
// })

//Query String

app.get('/product', (req, res)=>{
    console.log(req.query);
    res.send("Executed");
})

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})