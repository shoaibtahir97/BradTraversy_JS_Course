let val;

// TypeConversion
// DataTypes to String:

// 1). Using String
// Number to String
val = 7;
val = String(val)
val = String(4+4)
// Boolean to String
val = String(true)

// 2). Using .toString()
// Dat to String
val = (new Date()).toString()
// Array to String
val = ([1,2,3,4,5]).toString()

// console.log(val)
// console.log(typeof val);
// console.log(val.length)

//Data Types to Number
val = Number('5.20')
val = Number(true)
val = Number(false)
val = Number(null)
val = parseInt('100')
val = parseInt('Hello') //Returns NaN when a data type is not able to parse to number 
val = parseInt('100.2035') //Does not parse after decimal
val = parseFloat('100.8957') //If last value is zero then it will be neglected
// val = parseFloat([1,2,3,4,5])

console.log(val)
console.log(typeof val);
console.log(val.toFixed(2))//fixes the number after decimal 

// Type Coversion

let val1 = '5';
let val2 = 6;
let result = Number(val1 + val2) //Converting the result to number but the value's type is string
console.log(result)
console.log(typeof result)
