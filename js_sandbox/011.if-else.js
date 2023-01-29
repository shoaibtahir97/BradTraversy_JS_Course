/* If else Statements
If else statements evaluate a condition and 
then perform something depend on it.
*/

const id = 100;

//TESTING VALUE

//Equal To'=='
// if (id == 101) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// //Not Equal To '!='
// if (id != 101) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// //TESTING VALUE AND TYPE

// //Equal to Value and Type '==='
// if (id === 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// //Not Equal to Value and Type '!=='
// if (id !== 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// CHECKING IF A VALUE EXIST
/*In the first program. If the id variable is removed we will get an error of id is not 
defined. The correct way to do this would be to use typeof operator
*/

// if (id) {
//     console.log(`Your id is ${id}`);
// } else {
//     console.log("There is no ID");
// }

if (typeof id !== undefined) {
  console.log(`Your ID is ${id}`);
} else {
  console.log("THis is no ID");
}
