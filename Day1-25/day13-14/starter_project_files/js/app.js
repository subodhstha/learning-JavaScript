// UI Elements
const form         = document.querySelector(".details-collector-form");
const cards        = document.querySelector(".cards");
const email        = document.querySelector("#email");
const fullName     = document.querySelector("#full-name");
const mobileNumber = document.querySelector("#mobile-number");
const role = document.querySelector("#role");

// show the save items on localStorage when the page loads
document.addEventListener("DOMContentLoaded",function(){
    // steps
    // get the items from the localStorage
    let empDatas = JSON.parse(localStorage.getItem("employeeDetails"));
    // console.log(empDatas);
    // looping over datas
    empDatas.forEach(function(data) {
        // create an element
        const div = document.createElement("div");
        // add class name card
        div.className = "card";

        div.innerHTML = `
    <b>Officer's desk</b>
    <div class="card-inner">
        <div class="card-inner-item">
            <b>Role</b>
            <p>${data.role}</p>
        </div>
        <div class="card-inner-item">
            <b>Contact</b>
            <p>${data.email}</p>
            <p>${data.mobileNumber}</p>
        </div>
        <div class="card-inner-item">
            <b>Full name</b>
            <p>${data.fullName}</p>
        </div>
    </div>
    <div>
        <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
    </div>
    `;
    cards.appendChild(div);
    cards.insertAdjacentElement("beforeend", div);
    });
    // loop over the items and show it to UI
});
    

// console.log(form);
form.addEventListener("submit",function (e) {

    // steps

    // get value from the input

    // check if all the inputs are filled
    if (email.value !== "" && fullName.value !== "" && mobileNumber !== "" && role.value !== "" ) {
    //create a div
    const div = document.createElement("div");
    // add the html/content to the innerHTML property of the newly created
    div.className = "card;"
    // show it on the screen 
    let htmlTemplate = `
    <b>Officer's desk</b>
    <div class="card-inner">
        <div class="card-inner-item">
            <b>Role</b>
            <p>${role.value}</p>
        </div>
        <div class="card-inner-item">
            <b>Contact</b>
            <p>${email.value}</p>
            <p>${mobileNumber.value}</p>
        </div>
        <div class="card-inner-item">
            <b>Full name</b>
            <p>${fullName.value}</p>
        </div>
    </div>
    <div>
        <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
    </div>
    `;
    // add template to the div
    div.innerHTML = htmlTemplate;

    // show it to UI
    cards.insertAdjacentElement("beforeend", div);

    // show success message
    // create div
    const success = document.createElement("div");
    // add class
    success.className = "success-message";
    // text to show
    success.textContent = "form is successfully submitted";
    // to show the message in screen
    form.insertAdjacentElement("beforebegin",success);
    // remove success message
    setTimeout(function() {
        success.remove();
    }, 4000);

    // store it on the localStorage
    if (localStorage.getItem("employeeDetails") === null) {
        let arr = [];
        arr.push( { fullName: fullName.value, email:email.value, mobileNumber: mobileNumber.value, role: role.value});
        localStorage.setItem("employeeDetails", JSON.stringify(arr));
    }
    else
    {
        let arr = [];
        arr = JSON.parse(localStorage.getItem("employeeDetails"));
        arr.push({fullName: fullName.value, email:email.value, mobileNumber: mobileNumber.value, role: role.value});
        localStorage.setItem("employeeDetails", JSON.stringify(arr));
    }
    // localStorage.setItem("empDetails",);


    // clear the input fields
    email.value         = "";
    mobileNumber.value  = "";
    role.value          = "";
    fullName.value      = "";
    // focus on email
    email.focus();

    
    }
    else
    {
        if (document.querySelector(".error-message") === null ){
         // show error message when the field are empty
        // create element to show error message
        const errEl = document.createElement("div");

        // add class
        errEl.className = "error-message";
        // add the text content 
        errEl.textContent = "Please fill in the field";

        // show error message in the UI
        form.insertAdjacentElement("beforebegin",errEl)

        // make that error message disappear after few seconds
        setTimeout(function(){
            // if (document.querySelector(".error-message") !== null)
            // {
            //     errEl.remove();
            // }

            errEl.remove();
        }, 4000);    
        }
       
    }
    e.preventDefault();
});

// for the delete functionality
document.body.addEventListener("click",function(e)
{
    // delete from UI
    if (e.target.classList.contains("trash-icon")) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
    // delete from localStorage
    let employeeDetails = JSON.parse(localStorage.getItem("employeeDetails"));
    // took phone number from UI
    let phoneNumber = e.target.parentElement.parentElement.previousElementSibling.children[1].children[2].textContent;

    
    // discarding the non-matching phone numbers
    let filterDetail = employeeDetails.filter(function(empDetails){
        return phoneNumber !== empDetails.mobileNumber;
    });
    // save the other data to the localStorage again
    localStorage.setItem("employeeDetails",JSON.stringify(filterDetail));

});
