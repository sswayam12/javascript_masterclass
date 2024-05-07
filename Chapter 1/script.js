console.log("Welcome Dost");

// Variables, Constants and Comments

var score = 34;
var score = 55;  //Redeclare or reassign
console.log(score);

let points = 22;
// let points = 21;
points = 45;
console.log(points);

// CONSTANTS

const value = 10;
// value = 15;
console.log(value);

// ================================================================================================================================>

// DATATYPES OF VALUES

// 7 Data types
// Numbers 1 2 3 4 5 6

// String "I am singh"

// Boolean true/false

// Null Intentionally Absence of values

// Object Complex datastructure

// Symbol looks like objects

// ===================================================================================================================================>

let scores = null;
console.log(scores);

// Undefined Variables declared but not initialized

let point;
console.log(point);

// ==================================================================================================================================>

// STRINGSS
console.log("Hello Coders");

let firstName = "Swayam";
let lastName  =  "Singh";

console.log(firstName,lastName);

// Strings Concatenation

// Method 1 Using + operator

let fullName = firstName +" " +lastName;

let string1 = "Mobile";

let string2 = "Charger";

let finalSentence = string1 + " and " + string2 + "!";

console.log(finalSentence);

//Output : Mobile and Charger!

// Method 2 Using Template literals

fullName =`I want to Become ${firstName} ${lastName}`;
console.log(fullName);

string1 = "Mobile";
string2 = "Charger";

finalSentence = `${string1} and ${string2}!`;

console.log(finalSentence);

//Output : Mobile and Charger!



// Getting  string character
console.log(firstName[3]);

// String Methods
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.indexOf("y"));


// Common String Methods
  
let hobbies = "Coding reading running";
console.log(hobbies.trim());

let result = hobbies.trim();
console.log(result.lastIndexOf("Running"));

// Include Methods

console.log(result.includes("reading"));

// slice Method
let fulllNAme = "WowProgrammer"
console.log(fulllNAme.slice(0,5)); // Excluding last index 0 - 4

// Imp Note Does not Mutate the original string/array


// String "Split" Method

let favoriteColor = "Brown black Blue Gray";

let arrColor = favoriteColor.split('');
console.log(arrColor);

// STrings are Immutable

let str = "Hello";

str[0] = 'p';
str[1] = 'q';

// There will be no change in "str" variable

console.log(str);


let string3 =  "Namaste";
console.log(typeof(string3));      // string

let string4 = 'Namaste';
console.log(typeof(string4));      // string

let string5 = `Namaste`;
console.log(typeof(string5));      // string

// ========================================================================================================================>

// NUMBERS DATATYPES

let Score = 50;
console.log(Score, typeof Score);

// Mathematical Operators + - * / % **

let Result = score / 2; //Give Quotient

// Using Priority precedence
// 1 Bracket ()
// 2 Power Operator
// 3 * / % (left to right)
// 4 + - (left to right)

// ConCatenation of NUmbers

// Loose Equality (==) vs Strict Equality Operator(===)

// loose equality ==

let age = 22;
console.log(age == '22');

 console.log(age === '22'); //focus on both Values And its types

//  Type Conversion

let stringType = "54";
console.log(stringType,typeof stringType);

// Number Method 
let numberType = Number(stringType);
console.log(numberType,typeof numberType);

// Imp Note
// In  number Method passing String must be of numeric values

let NumberType = 55;

// String method

let StringType = String(NumberType);

console.log(StringType,typeof StringType);


let integerNumber = 3;
console.log(typeof(integerNumber));    // number

let floatNumber = 3.14;
console.log(typeof(floatNumber));       //number

let output = integerNumber + floatNumber;
// Result will be a floating-point number

console.log(output);    // 6.14



let number1 = 13;
let number2 = 10;

let sum = number1 + number2;
console.log(sum);                     // 23

let product = number1 * number2;
console.log(product);                // 103

let quotient = number1/number2;
console.log(quotient);               // 1.3


// JavaScript also provides several built-in methods for working with numbers, 
// such as 'parseInt()' and 'parseFloat()' for converting strings to numbers.

let strNum = "25";
console.log(typeof(strNum));           // string

let strFloat = "35.63";
console.log(typeof(strFloat));         // string

let parsedInteger = parseInt(strNum);
let parsedFloat = parseInt(strFloat);

console.log(typeof(parsedInteger));   // number
console.log(typeof(parsedFloat));     // number

// ======================================================================================================================================>

    // BOOLEAN
    let Age = 32;
    let booleanValueOfAge = Boolean(age);

    console.log("Boolean of age is", booleanValueOfAge);

// =================================================================================================================>

    // ARRAY

    let dishes = ['Biryani','Chaat',"Paratha"];
    // Access
    console.log(dishes[2]);

    // Modify the Array

    dishes[0] = "Dum Biryani";

    console.log(dishes);

    // Array Methods

    // Join Method

    console.log(dishes.join('-'));

    // indexOf

    console.log(dishes.indexOf('chaat'));

    // Concat method

    let newDishes = ["Sweet-dishes","pani-puri"];

    console.log(dishes.concat(newDishes));
    let updatedDishes = dishes.concat(newDishes);

    // length method

    console.log(updatedDishes.length);

    // Push Method

    console.log(updatedDishes.push("Bhally"));
    console.log(updatedDishes);

    // Pop Method

    console.log(dishes.pop());

    // ===============================================================================================================================>

    // Boolean Values and Comparsion Operator
    let boolType = true;
    let strType = "True";

    console.log(typeof boolType, typeof strType);

    // Methods Return Boolean Values

    let email = "wowCoder@example.com";

    let booleanValue = email.includes("@");
    console.log(booleanValue);

    // Comparison Opeartors Always Return Boolean Value

    // ==, === , !==, !=
    // >,>=,<,<=

    let pin = "low";
    console.log(pin == 'low');
    console.log(pin === 'low');

    // ========================================THE END============================================================================>




