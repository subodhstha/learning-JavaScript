// const fruits = ["Apple", "Mango", "Strawberry"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log((fruits[i]));
// }

// // for-of : value
// // for-in :index(key)

// for(let i of fruits) {
//     console.log(i);
// }

// for(let i in fruits) {
//     console.log(i);
// }
// for(let i in fruits) {
//     console.log(fruits[i]);
// }

const user = {
    id : 1,
    name :"ABC"
};

// console.log(Object.keys(user));

// console.log(Object.entries(user));

for(let [key,value] of Object.entries(user)) {
    console.log(value);
}

// for(let i in user) {
//     console.log(user[i]);
// }