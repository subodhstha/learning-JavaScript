// expression

// let my_name= "Subodh Shrestha"
// console.log(my_name);

// var a = {
//     fname:"subodh"
// };
// console.log(a.fname);


// function statement / function decleration
// function my_function() {
//     console.log("this is function");
// }
// my_function();

// if (true){
//     console.log("run");
// }

// function expression
// var my_full_name = function (first, last) {
//     return first + " " + last;
// };
// my_full_name.my_func= function () {
//     console.log("this rain");
// }
// let full_name= my_full_name ("test", "test");
// console.dir(my_full_name);

// var my_fav_book = {
//     book_name : "herry potter",
//     book_author: "J.K Rowling",
//     // showAuthor: function () {
//     //     console.log(this.book_author);
//     // }
// };
// my_fav_book.showAuthor = function () {
//     console.log(this.book_author);
// };
// // console.log(my_fav_book.showAuthor());
// my_fav_book.showAuthor();
// console.log(my_fav_book);


// Object
// const book_detail={
//     bookname: "The Parijat",
//     author : "Parijat",
//     showInfo :function () {
//         console.log(this.bookname + " " + this.author);
//     }
// };
// book_detail.anotherMethode =function () {
//     console.log("this is demo");
// }
// let my_fav_book = book_detail;
// console.log(my_fav_book);
// console.log(book_detail);


// array
let vegetable_to_buy = ["potato", "tomato","cauliflower"];
// console.log(typeof vegetable_to_buy);
// console.log(Array.isArray(vegetable_to_buy));
// console.log(vegetable_to_buy[0]);

// console.log(vegetable_to_buy.length);

for (let i = 0; i < vegetable_to_buy.length; i++) {
    console.log(vegetable_to_buy[i]);
}