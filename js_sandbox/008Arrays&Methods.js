/*
Arrays allow us to store multiple values in one variable. 
They can be mutated and iterated through, and used in some
complex algorithms
*/

// Creating an array
let numbers = [23, 04, 12, 13, 24, 14, 56, 77]
let arrayConstructor = new Array(12,45,12,57,54,25) //Create a constructor from array object
const fruits = ['Orange', 'Apple', 'Banana', 'Mango'];
const mixed = [12, 'Car', true, undefined, null, {a:4, b:9}, [24,78, 35, 69], new Date() ]

let val;

//Get array length()
val = numbers.length; 

//Check if is an array
val = Array.isArray(numbers) //returns boolean

//Get single value of array
val = numbers[3]

//Insert in array
numbers[2] = 100

//Find index of value
val = numbers.indexOf(23)

//MUTATING ARRAYS WITH ITS METHODS

//Insert value from right
val = numbers.push(20)

//Insert value from left
val = numbers.unshift(99)
 
//Remove value from right
val = numbers.pop()

//Remove value from left
val = numbers.shift()

//Remove value from center
val = numbers.splice(1,2, 'hello') //


console.log(numbers)
console.log(val)