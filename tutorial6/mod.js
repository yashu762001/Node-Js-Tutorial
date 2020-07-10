function average(arr){
    let sum =0 ; 
    arr.forEach(element => {
        sum+=element; 
    });

    return sum/(arr.length) ; 
}

module.exports = {
    avg : average , 
    name : "Yash", 
    age : "19", 
    dream : "Open Worlds Largest Software Company",
}


// If we want to use any function of a particular package in some different package we have to put that particular
// function in a export category. 

// Above Statement Actually Means That we are ready to export this particular function.

// To import it we will go to our file and just use command require along with the name of the file which
// is being imported.

