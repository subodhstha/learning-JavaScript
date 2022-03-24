// var user = {
//     // id:1,// id : id can write as id
//     name: "abc",
//     profilePicture: "https://abc.com/1/a.jpg"
// };

// var id = user.id;
// var name = user.name;
// var profilePicture = user.profilePicture;

// console.log(name);

// var id = user["id"];
// var name = user["name"];
// var profilePicture = user["profilePicture"];
// console.log(id);
// const {id} = user;
// const {id=2,name:userName,location= "ktm"} = user; // id value should not given before
// console.log(id,location,userName);

// var user = {
//     id:1,// id : id can write as id
//     name: "abc",
//     profilePicture: "https://abc.com/1/a.jpg"
// };


// const {id,name:userName,location= "ktm"} = user;
// console.log(id,location,userName);

// var user = {
//     id:1,
//     name: {
//         firstName: "Subodh",
//         lastName: "Shrestha",  
//     },
//     profilePicture: "https://abc.com/1/a.jpg"
// };
// const {name} = user;
// console.log(name);

// nested destruction
// const {name:{firstName}} = user;
// console.log(firstName);

// var user = {
//     id:1,
//     name: {
//         firstName: "Subodh",
//         lastName: "Shrestha",  
//     },
//     profilePicture: "https://abc.com/1/a.jpg",
//     doSomething: function()// doSomething(){return "did something"}
//     {
//         return "did something"
//     }
// };
// console.log(user.doSomething());

var user = {
    id:2,
    name: {
        firstName: "Subodh",
        lastName: "Shrestha",  
    }
};

var userExtraInfo = {
    location : "ktm",
    dob: "1998 August 6"
};

var updateUser = {...user,...userExtraInfo, phone: "98000000", location: 'Dhading'};
console.log(updateUser);