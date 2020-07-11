const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yash', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  console.log("Congratulations!! We are connected to the test database of MongoDB")
});

// Above we have tries to establish connection with the mongod server. If we would have successfully established
// connection then whatever is written in the console.log , would be executed else it would throw certain error.
// MongoD tries to maintain the database and mongo and here mongoose will try to interact with database using
// commands ,i have discussed below.

const Info = new mongoose.Schema({
  name: String, 
  age : String
})

// Above We have created A Schema Showing The different fields which are going to be a part of my database.

Info.methods.code = function () {
  const coder = "Our Employee named " + this.name + " has age " + this.age + " and is a wonderful coder"
  console.log(coder);
}

// Now I am creating a model with all the fields mentioned in the schema and now the objects of this model class
// will actually be the so called documents in our database.


const temp = mongoose.model('Employee', Info)
// We are referencing the objects of Employee model or class by the variable name temp.

const emp2 = new temp({name: 'Mark',age:'45'}); 
const emp1 = new temp({name :'Yash', age :'19'}); 
const emp3 = new temp({name: 'Steve', age :'38'}); 

// Above I have created three objects or documents for Employee class or model.

console.log(emp1.name);
console.log(emp1.age); 

emp1.code()

emp2.save(); // This is a way to save the object in the collection it belongs to.
emp3.save(); 

temp.find({name: 'Yash'}, function(err, name) {
  if(err) {
    console.log(err); 
  }
  console.log(name); 
}) 

// Above shows how we can perform the search operation of mongoDB in Node Js.

temp.find({age :{$gte: "23"}},function(err, name) {
  if(err) {
    console.log(err)
  }

  else {
    console.log(name); 
  }

})

temp.deleteMany({age: {$gt:"0"}}, function(err, name) {
  if(err) {
    console.log(err)
  }

  else {
    console.log("Data Deleted Successfully"); 
  }
})

// Above Shows How i can perform the delete Operation Of MongoDB using Mongoose in Node Js.