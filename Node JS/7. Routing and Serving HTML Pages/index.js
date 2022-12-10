import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) =>{
    res.writeHead(200, "OK", {'Content-Type': 'text/html' });
 //   res.end('Response from server 9');
    if(req.url === '/'){
        //res.end("<h1>Home page</h1>");
        fs.readFile('./public/home.html', (error, data) => {
            if(error) throw error;
            res.end(data);
        })
    }
    else if(req.url === '/about') {
        // res.end("<h1>About Page</h1>")
        fs.readFile('./public/about.html', (error, data2) => {
            if(error) throw error;
            res.end(data2);
        })
    }
    else{
        res.end("<h1>404 Page Not Found</h1>");
    }
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, ()=>{
    console.log('Servrer Running at http://localhost:8000'); 
});

// Run This Command: npm install --save-dev nodemon