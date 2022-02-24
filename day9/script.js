// function Email(send_to,send_from,message,subject){
//     this.reciver = send_to;
//     this.send_from = send_from;
//     this.message = message;
//     this.subject = subject;
// };

// Email.prototype.send = function(){
//     return this.message + " was send to " + this.reciver;
// };
// // console.dir(Email);

// const send_mail = new Email("friend@gmail.com","dskfj@gmail.com","testing","test")

// let send_message= send_mail.send();

// console.log(send_message)
// // console.log(send_mail.__proto__)

// console.log(window)


//class syntax
// parent class

// class Email {
//     constructor(send_to, send_from, message, subject) {
//         this.reciver = send_to;
//         this.send_from = send_from;
//         this.message = message;
//         this.subject = subject;
//     }
//     send() {
//         return this.message + " was send to " + this.reciver;
//     }
// };


// const send_email = new Email("sdf@gmail.com", "dsfj@gmail.com","testing","test");
// console.log(send_email.send());






// advanced features for sending email
// child class

// class Email {
//     constructor(send_to, send_from, message, subject) {
//         this.reciver = send_to;
//         this.send_from = send_from;
//         this.message = message;
//         this.subject = subject;
//     }
//     send() {
//         return this.message + " was send to " + this.reciver;
//     }
// };


// class Advanced_email extends Email{
//     constructor(
//         send_to, send_from, message, subject, file, location
//         ){
//             super(send_to, send_from, message, subject);
//             this.file = file;
//             this.location = location;
//         }
//         // send(){
//         //     return this.file +"was send from " + this.location;
//         // }
// }

// const send_adv =new Advanced_email("fskdfj@gmail.com", "sdfhjl@gmail.com", "hello ","test", "image.jpg", "shdk" );
// // console.log(send_adv);

// // console.log(Email.send);

// console.log(send_adv.send());


// different between function statement and function expression
// test()
// // statement or decleration
// function test(){
//     console.log("this is ........");
// }



// // expression
// // console.log(new_func);
// var new_func = function () {
//     console.log("this is function");
// };
// console.log(new_func);