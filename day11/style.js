const btn = document.querySelector("#custom_btn");
const top_heading_text = document.querySelector(".top_heading_text")

/*
//click event
btn.addEventListener("click", function(event){
    // console.log(123);
    // console.log("test");
    
    // console.log(event);

    // //position for the button itself when clicked onto it
    // console.log(event.offsetX);
    // console.log(event.offsetY);

    //change in the content of the text when user click on the button
    top_heading_text.textContent = "change one";
    //change the color
    top_heading_text.style.color = "red";

});
*/
/*
const form = document.querySelector("#contact_service");
form.addEventListener("submit", function(e){
    // console.log(123);
    const first_name = document.querySelector("#first_name");
    const last_name = document.querySelector("#last_name");

    console.log(first_name.value);
    console.log(last_name.value);
    // prevent the reload of page
    e.preventDefault();
});
*/


// first_name
// const first_name = document.querySelector("#first_name");
// first_name.addEventListener("focus",function(e){
//     first_name.style = "border: 1px solid red";
//     e.preventDefault();
//     console.log(123);
// });

// first_name.addEventListener("focus", focus_event)

// function focus_event() {
//     first_name.style = "border : 1px solid red";
// }

// first_name.addEventListener("blur",function(){
    
//     console.log("This is blur");
// });

// creat element using js
// const div = document.createElement("div");
// div.setAttribute("title", "This is custom div");
// console.log(div);


const a = document.createElement("a");
a.setAttribute("title","this is custom div")
a.setAttribute("href", "https://google.com");
a.setAttribute("target", "_blank")
a.textContent= "visit google now in new tab";

// select list
const list = document.getElementById("list");
list.appendChild(a);
console.log(a);