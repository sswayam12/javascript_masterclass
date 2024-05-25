// FUNCTIONS

// It is simply a piece of code which we can use in our 
// program many times

// It is just like a variable holding some piece of code

// Declaration

function functionName(parameter1, parameter2) {
    // Function body
    // Code to be executed
    return value; // Optional
}

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // Output: Hello, John!

const greeet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("John")); // Output: Hello, John!

let ageCalculation = function(birthyear,currentYear){
    let age = currentYear-birthyear;

    console.log(`Your age in ${currentYear} is ${age}`);

}

ageCalculation(2002,2024);
let invitationn = function(name ="defaultName",time="Morning"){
    console.log(`Welcome ${name} You are invited on our event in the ${time}`)
}
invitationn("Swayam","Morning");

// ==========================================================================================================================>

    // Arrow Function ES6

    // Special form of Function Expression
    // It allows us to write function more fast because
    // No need to use function keyword
    // No need to use parenthesis() in case of single parameter
    // No need to use curly{} if single line code in function
    // No need to return statementif single line of code in a function


    let invitation = name => `Welcome ${name}`

    console.log(invitation('coders'));

    // ===========================================================================================================================>

        // Passing function as an Argument(Higher order Function)

        let upperCase = function(str){
            return str.toUpperCase();
        }

        let lowerCase = function(str){
            return str.toLowerCase();
        }

        let transformer = function(str,fun){
            return fun(str);
        }

        console.log(transformer("abcde",upperCase));

//======================================================================================================================>
    
    // Function returning another function

    let compliment = function(msg){
        return function(name){
            console.log((`${msg} ${name}`));
        }
    }
console.log(compliment("You are a good coder")("Swayam"));

// 2nd method

let complimented = compliment("You are a good coder")("Swayam");
// complimented("Lurie");

// Compliment is a higher order function

// ============================================================================================================>

    // Function
    // Immediately invoked function Expression
    // Executed  only once 

    (function(name){
        console.log("This function will never execute again",name);
    })("IIFE")

    // =====================================================================================================================>
    // SetTimeout and setInterval
    
    // SetTimeout -> Run Function "Once " after "interval of time"
    // setInterval -> Run function repeatedly, Starting after the 
    // interval of time, then repeating.......

    // setTimeout
    
    function greeting(){
        console.log("Welcome to our coder Family");
    }

    setTimeout(greeting,5000);
    
// SetInterval

// setInterval(greeting,3000);

//=======================================================================================================================1.

// HOISTING
// .Variable "declaration" are "hoisted" towards top of their scope
test = 10;
console.log(test);
var test;

// only applicable for var const and let doesn't cause hoisting

// Function

best();

function best(){
    console.log("Hello Programmer");
}

// Not  applicable on function expression or Arrow function





