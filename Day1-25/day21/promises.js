function doSomething(){

    return new Promise((resolve, reject)=>{
        let error = true;
        if(!error)
        {
            resolve("You have fetched data");
        }
        else
        {
            reject("Error occur");
        }
    });
}

console.log("Hello");

doSomething()
    .then(response=>console.log(response))
    .catch(err=>console.log(err));

console.log("Hi");