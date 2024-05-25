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


