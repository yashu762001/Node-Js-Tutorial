const express = require("express"); 
const app = express();
const port = 80;
const path = require('path');   
const { title } = require("process");
const fs = require('fs'); 

// Setting the Template Engine That Is Pug

app.set('view engine', 'pug'); 

// Set the views directory.

app.set('views', path.join(__dirname, 'templates'));

// Our Pug Demo EndPoint

// To Bring Form Data to express we use express.urlencoded

app.use(express.urlencoded()); 

app.get('/', (req, res)=> {
    const con = "I want to become the best programmer in the world."
    params = {'title': 'Yash Mathur Is The Best', 'content' : con } ; 
    res.render('index.pug', params); 
})
app.post('/', (req,res)=> {
    name = req.body.name; 
    age = req.body.age; 
    phone = req.body.phone; 
    address = req.body.address; 
    weight = req.body.weight ; 
    temp = `Name = ${name}\n Age = ${age}\n Address = ${address}\n Phone = ${phone}\n Weight= ${weight}\n`; 
    
    fs.appendFileSync('static/query.txt', temp); 
    const con = "We Will Contact With You Very Shorty" ;
    const msg = "For Contacting Us Just Visit The Contact Setion On our Website And Dial On the Number Provided. You can also Mail If you want."; 
    const params = {'message': 'Your message is submitted successfully', 'content': con, 'msg': msg}; 
    res.render('index2.pug', params)
})

app.get('/demo', function (req, res) {
    res.render('demo.pug', { title: 'Hey Yash', message: 'Hello there! Thanks For Teaching Me How To Use Express Js', about: 'I felt I would not be able to learn it but youtube proved me wrong. Ek Se Badh Kar Ek Video Available hai. ' })
  })

// app.get("/", (req,res)=> {
//     res.send("This is the home page"); 
// })

// Serving Static Files present in the static folder.
app.use('/static', express.static('static')); 

// app.get("/about", (req, res)=> {
//     res.send("This is the about page"); 
// })

// app.get("/contact", (req,res)=> {
//     res.send("This is the contact Page of my First Express App"); 
// })

// app.get("/services", (req,res)=> {
//     res.send("Here you will find all the services provided by us free as well as paid ones")
// })

// app.post("/about", (req,res)=> {
//     res.send("This is the post request on about page"); 
// })

app.listen(port, ()=> {
    console.log("The application has started running at port number " + port); 
})

