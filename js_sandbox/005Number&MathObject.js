/*
Math is a object. So it has methods and properties.
A method is a function and a property is just an attribute.
The method has () parenthesis at the end and property does not have
Example of method: Math.floor(), Math.ceil() etc.
Example of property: Math.PI, Math.E, val.length etc.
*/
let num1 = 100;
let num2 = 50;

let val;
//Simple Math with Numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.7);
val = Math.floor(2.8);
val = Math.ceil(2.3);
val = Math.sqrt(64);
val = Math.pow(8, 2);
val = Math.abs(-3);
val = Math.min(5,42,16,7,4324,67,234,);
val = Math.max(5,42,16,7,4324,67,234,);
val = Math.random()

val = Math.floor(Math.random() * 10 +1)

console.log(val)