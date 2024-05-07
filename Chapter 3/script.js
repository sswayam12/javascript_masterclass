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

const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("John")); // Output: Hello, John!
