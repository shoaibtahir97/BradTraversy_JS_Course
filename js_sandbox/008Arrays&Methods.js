/*
Arrays allow us to store multiple values in one variable. 
They can be mutated and iterated through, and used in some
complex algorithms
*/

// Creating an array
let numbers = [23, 04, 12, 13, 24, 14, 56, 77];
let numbers2 = [01, 97, 84, 85, 23, 69, 42, 27,100, 893, 804, 84]
let numbers3 = [90, 82, 74, 18, 38, 94, 48, 85, 37, 27];
let arrayConstructor = new Array(84, 09, 82103, true, 'Hello World') //Create a constructor from array object
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
val = numbers.splice(1,2) // first value is the position from where you want to remove, second value is the number of elements you want to remove and after that the values you will add will be added in the array  

// Reverse an array
val = numbers.reverse()

//Concatenate two/multiple arrays
val = numbers.concat(arrayConstructor)

// Sorting an array of Strings
val = fruits.sort()

// Sorting an array of Numbers
val = numbers.sort() //This will sort on the basis of first number 

// Proper way of sorting numbers in ascending order array with compare function
val = numbers2.sort((x,y)=> {
    return x - y; 
})

//sort in descending order
val = numbers2.sort((x,y)=> {
    return y - x; 
})

// Find the first value from array which meets the logic. Find accepts a function in which the logic is saved
function under50(num) {
    return num < 50
}

val = numbers3.find(under50)

console.log(numbers3)

console.log(val)