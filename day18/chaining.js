const employeeList = [
    {
        name:"abc",
        age:22,
        salary:2000,
        post:"Developer"
    },
    {
        name:"bcd",
        age:30,
        salary:2400,
        post: "Developer"
    },
    {
        name:"cde",
        age:23,
        salary:2500,
        post:"Manager"
    }
];
const sanitizedData = employeeList.map((employee)=>{
    return {name:employee.name,age:employee.age,post:employee.post}
})
.filter((employee)=>employee.age>=22 && employee.post == "Developer")
.sort((a,b)=>b.age-a.age);

console.log(sanitizedData);