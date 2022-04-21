// function add(a,b) {
//     return a+b;
// }

// console.log(typeof add);
// console.log(add instanceof Object);
// console.log("abc" instanceof Object);

// var myAdder = function(a, b){
//     return a +b;
// }
// myAdder.info = "Hello";

// console.log(myAdder.info);

// function test (fxn) {
//     fxn();
// }

// function test2() {
//     console.log("test 2");
// }

// test(test2)


// higher order function
// function outer(){
//     function inner(){
//         console.log("inner");
//     }
//     return inner;
// }

// console.log(outer()());
// outer()()

// function outer(a,b){
//     console.log(a,b);
//     function inner(c,d){
//         console.log(c,d);
//     }
//     return inner;
// }

// outer(1,2)(3,4);
// console.log(outer(1, 2)(4,5));