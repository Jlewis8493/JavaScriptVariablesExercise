console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Jared";
let lastName = "Lewis";

var myAge = 24.45;
let isDone;

// Exercise 2
let fullName = firstName + " " + lastName;
let templateFullName = '${firstName} ${lastName}';
console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);

// Exercise 3
let myStory;
let city = "Boston";
let pastime = "coding, running, reading, and hanging out with friends";

myStory = "My name is " + fullName + ".\n " + "I live in " + city + ".\n " + "I like " + pastime + ".";
myStory = 'My name is ${fullName}. I live in ${city}, I like to ${pastime}.';
console.log(myStory); 