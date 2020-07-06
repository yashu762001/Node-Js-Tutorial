// Synchronous or Blocking : Line By Line Exceution

//  Asynchronous or Non-Blocking : Line By Line Exceution not guranteed. CallBacks will fire.

// We studied ReadFileAsync : What does it mean by Sync??
// Ans : It means That until the file will not be read completely the program will not move towards next line.

// const fs = require("fs"); 

// var text = fs.readFile("yash.txt", "utf-8", (err,data)=> { 
//     console.log(err,data)
// }); 

// console.log("Yash mathur")


//  Moral Of the Code : When ReadFile function is called then it starts to read the file and does not stop
// the execution of lines after that. It just says that when i will be done with reading the file then i
// will automatically launch the callback and that would execute what i wanted to.

//  So Because of Asynchronous calling the later statements are not stopped from execution.

// It's not like that first 2nd line will be executed and then 1st or other or in any random fashion.

// Actually the execution starts from the 1st line only but whenever a Asynchronous calling is there then

// it just says until i am doing my work you go and complete the remaining work and when this work will
// be completed then i will launch my callback which will ultimately complete this work also.