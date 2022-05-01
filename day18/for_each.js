const fruits = ["Apple","Mango"];
// fruits.forEach(
// });


// for(let fruit of fruits)
// {
//     console.log(fruit);
// }
// fruits.forEach((value, index, array)=>console.log(index, value));


fruits.forEach(function(fruit) {
    console.log(fruit);
});


var doForEach = function(value, index, array) {
    console.log(index, value)
};
fruits.forEach(doForEach);

