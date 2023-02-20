/*
LOOPS
A loop is an instruction that repeats itself until a certain condition is reached.
At the end of an array or a certain element is reached perform a function.
Loops are used to run same block of code using different values each time. 

*/

//FOR LOOPS

// This loop will render up until i is less than 10 because 10 is not less than 10. Thats where the condition fails.
for (let i = 0; i < 10; i++) {
  // console.log('item', i)
}

//Performing a Function on a specific iteration
//The continue will move on the next iteration and not re-render the same element again.  
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    // console.log('2 is my favorite number')
    continue;
  }
  // console.log('number', i)
}

//Breaking out of the loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // console.log('Loop braked at 5')
    break;
  }
  // console.log('Number', i)
}

//Looping through arrays using for loop
const cars = ['Ford', 'Mustang', 'Nissan', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

//Looping through array using forEach
//ForEach is similar to for loop. it takes a parameter which is a callback function and you perform your logic in its block. The forEach function takes three parameters one is the value, second is the index and third is the array itself
cars.forEach((car, index, array) => {
  // console.log(`${index}:${car}`)
})

//Using the array Map function 
const users = [
  { id: 1, name: 'Naqqash' },
  { id: 2, name: 'Shahab' },
  { id: 3, name: 'Bilal' },
  { id: 4, name: 'Shahab' },
  { id: 5, name: 'Misha' },
]

const ids = users.map((value, index) => {
  return value.name
})

console.log(ids)