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

//Testing if undefined
// if (typeof id !== undefined) {
//   console.log(`Your ID is ${id}`);
// } else {
//   console.log("THis is no ID");
// }

// //CHECKING IF A VALUE IS GREATER THAN OR LESS THAN
// if (id > 200) {
//   console.log("CORRECT");
// }

// ELSE IF STATEMENTS
// const color = "orange";

// if (color === "red") {
//   console.log("color is red");
// } else if (color === "orange") {
//   console.log("color is orange");
// } else if (color === "yellow") {
//   console.log("color is yellow");
// } else {
//   console.log("no color found");
// }

/*
LOGICAL OPERATORS && AND || OR
Testing more than one value or statements
*/

// AND && Operator
const name = "Steve";
const age = 14;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age > 12 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

//OR || Operator
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in a race`);
} else {
  console.log(`you are registered`);
}

// TERNARY OPERATOR
console.log(id === 100 ? "CORRECT" : "INCORRECT");
