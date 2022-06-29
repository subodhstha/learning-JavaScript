// Document Object Model
// const h1 = document.querySelector("h1");

// const h2 = document.querySelector("h2");

// we change the text of h1
// h1.textContent= "hello world";

// console.log(h1);

// we change the style of the HTML element (h1)
// h1.style = "color: white; text-align: center; background: dodgerblue";

// more into styling
// h1.style.color = "red";
// h1.style.backgroundColor = "lightblue";


// Styling h2
// h2.style.color = "red";


// querySelector

// targeting by using class

// const des_text = document.querySelector(".description_text");

// different between textContent and innerHTML

// des_text.textContent = "this is new text"
// des_text.innerHTML = "<a href=#>Click Here </a>;"

// console.log(des_text);

// targeting by using id
// const h2 = document.querySelector("#secondary-text");
// h2.style.color="red";


// querySelectAll()
// const para_list = document.querySelectorAll(".para");
// para_list[2].style.color = "red";
// console.log(para_list);


// getElementById
// const secondaryText = document.getElementById("secondary-text");
// secondaryText.style.color="red";


// const detail_container = document.querySelector(".detail-container");
// adding id
// detail_container.id = "added-id"

// adding class
// detail_container.className = "new-class-name"

// const list = detail_container.classList;

// console.log(detail_container.classList.length);
// console.log(list);
// console.log(list[0]);

// adding class to an element
// list.add("new-add-class");

// removing class to an element
// list.remove("detail-c")


// selecting demo para
// const demo_para=document.querySelector(".demo-para");
// console.log(demo_para.parentElement)
// console.log(demo_para.parentElement.parentElement);



// text-container
// const text_container = document.querySelector(".text-container");

// let childrens = text_container.children;
// childrens[2].style.color = "red";

// DOM traversing
const text_container = document.querySelector(".text-container")
console.log(text_container.firstElementChild);
console.log(text_container.lastElementChild);