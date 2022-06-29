// const numbers = [1, 2, 3, 4];

// const filteredNumber = numbers.filter((value, index, array)=>{
//     // if(value>=3) return true;
//     // else return false;
//     return (value>=3)? true:false;
// });
// console.log(filteredNumber);

const user = [{
    name:"abc",
    age:18
},
{
    name:"bcd",
    age:17
},
{
    name:"cde",
    age:20
}
];
const personWhoCanVote = user.filter((value, index, array)=>{
    if(value.age>=18) return true;
    else return false;
});
console.log(personWhoCanVote);
