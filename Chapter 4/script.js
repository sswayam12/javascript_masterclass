// Introduction to objects in javascript

let car ={
    color:"black",
    model:2022,
    company:"Honda"
}
console.log(car);

// Acessing the javascript Object properties

console.log(car["color"]);

// Other way

console.log(car.color);
console.log(car.company);

let propertyName = "color";

console.log(car[propertyName]); //computed 

// Modify the object

car.color="brown";
console.log(car.color);

// Delete properties of object
let obj ={
    prop1: "value1",
    prop2: "value2"
}

delete obj.prop1

console.log(obj.prop1);

// Function and methods

let ageCalculate = function(currentYear,BirthYear){
    let age = currentYear - BirthYear;
    console.log(`Current age is ${age}`);
}
ageCalculate(2024,2002);

// Method --> It is nothing but object property holdinhg
// Function as value

let person = {
    ageCalculate: function(BirthYear,currentYear){
        let age = currentYear - BirthYear;
        return age; 
    }
}
console.log(` Current age is ${person.ageCalculate(2002,2024)}`)
// ================================================================================================================================>

// This keyword 
// In each Method we have an access of special keyword called "this" 

// "This" keyword represents the object. "Calling" the "method"
// in which "this " is "present"


let persons = {
    firstName:"Harry",
    lastName:"Brook",
    city:"Delhi",
    Education:"Software Engineer",
    getSummary: function(){
        return `${this.firstName} ${this.lastName} lived in ${this.city} and was a ${this.Education}`
    }

}
console.log(
    persons.getSummary()
);

// Step 1 Check in which method we use "This" keyword
//step 2 Owner of that method (who is calling )
