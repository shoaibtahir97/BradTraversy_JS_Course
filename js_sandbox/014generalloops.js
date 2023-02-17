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
    console.log('Loop braked at 5')
    break;
  }
  console.log('Number', i)
}