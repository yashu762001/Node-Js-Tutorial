const http = require("http"); 
const fs = require("fs"); 
const { url } = require("inspector");

const hostname = "127.0.0.1"; 
const port = 3000

const home = fs.readFileSync('./index.html', 'utf-8'); 
const about = fs.readFileSync('./about.html'); 
const contact = fs.readFileSync('./contact.html'); 
const services = fs.readFileSync('./services.html'); 
const ErrorFile = fs.readFileSync('./error.html'); 

const server = http.createServer((req,res)=> {
    let url = req.url; 
   res.writeHead(200, {"Content-Type": "text/html"}); 
   
   if(url=="/") {
    res.end(home);
   }
   
   else if(url=="/about") {
       res.end(about); 
   }

   else if(url=="/services") {
       res.end(services); 
   }

   else if(url=="/contact") {
       res.end(contact); 
   }

   else {
       res.statusCode = 404; 
       res.end(ErrorFile); 
   }
})

server.listen(port, hostname, ()=> {
    console.log("The server is running on port " + port); 
})

