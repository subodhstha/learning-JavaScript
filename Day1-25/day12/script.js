// JSON.stringify()
// JSON.parse()

const mobile = {
    mobile_name : "samsung",
    price : 2200,
    model_number : "J2"
};

// let p = mobile;

// // adding using p
// p.newThing = 123;
// console.log(p);

// converting to JSON string
// // console.log(JSON.stringify(mobile));
// let str = JSON.stringify(mobile)

// // converting to js object
// let js_obj =  console.log(JSON.parse(str));
// console.log(js_obj);

// localStorage API
// localStorage.setItem("My_name","Subodh");

// console.log(localStorage.getItem("My_name"));

// localStorage.removeItem("My_name");

// localStorage.clear()


// let my_name = "test"
// // ES6: templetstring
// const my_str =  `my name is ${my_name} ${1+2}`;
// console.log(my_str);

/*
// insertAdjacentElement
const heroContainer = document.getElementById("hero-container");
// create element
const div = document.createElement("div");

// add class to the newly created div
div.className = "custom-div"

// adding content
div.textContent = "hi everyone";

heroContainer.insertAdjacentElement("beforebegin",div);

console.log(heroContainer);
*/

// Filter()
// scenario
const myFavBooks =[
    {
        author : "Parijat",
        bookName : "The parijat",
        price :120
    },
    {
        author : "Bill Gate",
        bookName: "The Road Ahead",
        price:100
    },
    {
        author:"J.K Rowling",
        bookName: "The Harry Potter",
        price : 150
    }

]
// console.log(myFavBooks.__proto__ === Array.prototype);

//filter()
 let myFilteredItems = myFavBooks.filter(function(book){
    // console.log(book.price);
    return book.price > 100; // when true
})
console.log(myFilteredItems);