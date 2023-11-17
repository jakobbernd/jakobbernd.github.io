'use strict';

let message = "hi";
alert(`I wanted to say ${message}!`);
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");
welcome();

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);
