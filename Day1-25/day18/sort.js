const numbers = [15,51,45,5];
// console.log(number.sort());
// number.sort(function(){})

// const sortedNumbers = numbers.sort((a,b)=>{
//     if (a>b) return 1;
//     else return -1;
// })

const sortedNumbers = numbers.sort((a,b)=>{
    return a-b;
})
console.log(sortedNumbers);

// const gadgets = ["monitor", "mobile", "desktop"];
// console.log(gadgets.sort());

// console.log("abc".charCodeAt(0));
