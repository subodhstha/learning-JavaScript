// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(1,3,4));

// function add(a,b, ...params){
//     // console.log(params);
//     var sum = a+b;
//     for (let i = 0; i < params.length; i++) {
//         sum += params[i];
//     }
//     return sum;
// }
// console.log(add(1,3,4,5,6));

const message = "Hello there";
// console.log([...message]);
console.log(...message);