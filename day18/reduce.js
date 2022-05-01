const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((previousValue, currentValue, currentIndex,array)=>{
//     console.log(previousValue, currentValue, currentIndex);
//     return previousValue + currentValue;
// });
// console.log(sum);

// const max = numbers.reduce((previousValue, currentValue)=>
//     previousValue > currentValue ? previousValue : currentValue
// );
// console.log(max);


const employees = [
    {
        name:"abc",
        salary: 1000,
    },
    {
        name: "bcd",
        salary:1500
    },
    {
        name: "cde",
        salary:2000
    }
];
const totalSalary = employees.reduce((prev,cur)=>
{
    return{salary: prev.salary + cur.salary};
});

console.log(totalSalary);