// FOR LOOP

for (initialization; condition; increment/decrement) {
    // code block to be executed
}

for(let i=1; i<=5; i++){
    console.log(i);
}

/*
Output :
1
2
3
4
5
*/

// ===============================================================================================================================>

// WHILE LOOP 
while (condition) {
    // code to be executed
}   
let sum = 0;
let i=1;
while(i <= 10){
    sum = sum + i;
    i++;
}

console.log(sum);

// Output: 55

// ===============================================================================================================================>

// DO WHILE

do {
    // code to be executed
} while (condition);

let sum1 = 0;
let count = 1;
do{
    sum1 = sum1 + count;
    count = count + 1;
}while(count <= 10);

console.log(sum1);

// Output : 55

// ==============================================================================================================================>

// If statement

if (condition){
    // Code block to be executed if the condition is true
}
let speed = 87;

if(speed > 90){
    console.log("OverSpeeding");
}

if(speed > 50 && speed <=90){
    console.log("Normal");
}

if(speed <= 50){
    console.log("Slow");
}

// Output: "Normal"

// ===============================================================================================================================>

    // If - Else Statement
    if (condition) {
        // Code block to be executed if condition is true
    } else {
        // Code block to be executed if condition is false
    }

    let myAge = 15;

if(myAge >= 18){
    console.log("I can Drive");
}else{
    console.log("Cannot Drive");
}

// Output : "Cannot Drive"

// ================================================================================================================================>

    // If-Else-if Statement

    if (condition1) {
        // Code block to be executed if condition1 is true
    } else if (condition2) {
        // Code block to be executed if condition2 is true
    } else {
        // Code block to be executed if all conditions are false
    }

    let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}

// Output : "You are Fit"

// ================================================================================================================================>

// BREAK AND CONTINUE STATEMENT

// Also called jump Statement
// used to skip some values of loop

for(let i = 1;i <=10;i++){
   if(i == 2){
    continue;
   }
   console.log(i);
}

// Break Statement

// Used to terminate the loop and control transfer from outside

for(let i = 1;i <= 10;i++){
    if(i == 5){
        console.log("Our desired value is ",i);
        break;
    }
    console.log(i);
}

// ================================================================================================================================>
// LOGICAL OPERATOR

// Logical operators are used to connect two or more expressions/conditions to make decisions based on the criteria employed.

// There are typically three types of logical operators :

// (a) AND (&&)
// AND (&&)
// The logical AND operator is denoted by '&&'. It is used to evaluate whether both of the given expressions or operands are true. It returns true only if both expressions or operands are true. If any one of 
// the expressions or operands is false or evaluates to 0, the logical AND operator returns false.

// let alert1 = true;
// let alert2 = false;
// let alert3 = true;

console.log(alert1 && alert2);    // false
console.log(alert2 && alert3);    // false
console.log(alert1 && alert3);    // true

// let num1 = 0;
// let num2 = 1;
// let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0



// (b) OR (||)

// The logical OR operator is denoted by '||'. It is used to evaluate whether any one of the given expressions or operands is true. It returns false only if both expressions or operands are false. 
// If any one of the expressions or operands is true or evaluates to 1, the logical OR operator returns true.

// let alert1 = false;
// let alert2 = false;
// let alert3 = true;

console.log(alert1 || alert2);    // false
console.log(alert2 || alert3);    // true
console.log(alert1 || alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 0;

console.log(num1 || num2);    // 1
console.log(num2 || num3);    // 1
console.log(num1 || num3);    // 0



// (c) NOT (!)
// The logical NOT operator is denoted by '!'.
//  It is used to make truthy values falsy and vice-versa. It returns false if input is a true.

let alert1 = false;
let alert2;
let alert3 = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;

console.log(!alert1);      // true
console.log(!alert2);      // true
console.log(!alert3);      // true
console.log(!mySum);       // false
console.log(!gone);        // true
console.log(!isFirst);     // false

// =============================================================================================================================>

// Ternary Operators

// Ternary operator is a concise way to write conditional statements, it is widely used in JavaScript. 
// It is also known as conditional operator. 
// It has three parts: a condition, 
// statement to execute if the condition is true and the statement to execute if the condition is false.

//SYNTAX

(condition) ? (statement1) : (statement2);

let myage = 21;

(myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));

// Output : Cannot Drive

// =================================================================================================================================>

    // VARIABLES AND BLOCK SCOPES

    // scopes->> Area where variables is defined or accessible

    let score = 90;// Global scope

    if(true){
        let score = 50; //block scope
        console.log(score); //Nearest value
    }

