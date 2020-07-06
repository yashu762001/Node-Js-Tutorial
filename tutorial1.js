//  Here We have actually created our development server on which i have hosted my html document.
// The server is created at host 127.0.0.1 and port number 3000.
//  So to access this code we have to run server at this port.

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer ((req, res) => {
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html>
  <head>
  <style>
  .center {
      margin : auto ; 
      text-align: center;
       border: 2px solid black ; 
       border-radius :10px ; 
       background-color:  lightgreen ; 
       font-weight: bold; 
       font-color: black ; 
  }

  .center1 {
      margin : auto; 
      text-align: center; 
      border: 1px solid black ; 
      border-radius: 10px; 
      background-color: lightgray; 
      font-weight: bold; 
      font-color: black ; 
  }
  </style>
  
  <body>

  <div class = "center">
  <p> Mera Naam Yash Mathur Hai. </p>
  <p> Main Duniya Ki Sabse Badi Software Company Kholunga. </p>
  <p> Mujhe Coding Karna Bohot Pasand Hai. </p>

  </div>
    <br>
  <div class = "center1">

  <p> Main Mehnat Karne Se Kabhi Darta Nahi Hun. </p>
  <p> Main Ek Idea Par Itna Vishwaas Nahi Karta. </p>
  <p> Par Mujhe Koi Idea Bata De Toh Main Use Implement Bohot Badhiya Se Karta Hun </p>
  
  </div>

  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});