// Create Web Servrer - http Module
import http from "http";

const server = http.createServer((req, res) => {
  //Request
  // console.log(req.url);
  if (req.url != "/favicon.ico") {
    console.log(req.url);
  }
  console.log(req.method);

  res.setHeader("Content-Type", "text/plain");
  res.end("Response from server 9");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log("Servrer Running at http://localhost:8000");
});

// Run This Command: npm install --save-dev nodemon
