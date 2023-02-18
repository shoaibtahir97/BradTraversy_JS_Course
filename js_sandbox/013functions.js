//Function Declaration 
function greeting() {
  console.log('Hello World');
}

greeting();

//Returning a value from a function and saving in variable
function hello(){
  return 'Hello'
}

const greet = hello();
console.log(greet)

// Function Parameters
function name(firstName, lastName){
  console.log(`Hello ${firstName} ${lastName}`)
} 

name('Shoaib', 'Tahir')

//Default Parameters for function if no argument is passed
function myName(firstName = "John", lastName = "Doe") {
  console.log(`Hello ${firstName} ${lastName}`)
}  

myName() 
//If no argument is passed and parameter is given then undefined is returned. Pass a value after the parameter.

//FUNCTION EXPRESSION
/*
Putting a function as a variable assignment. The function is anonymous(having no name)
*/
const square = function(x) {
  return x*x;
};

console.log(square(8))


//IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS IFFEs 
//Declare and run a  function at the same time
// (function(){
//   console.log('IFFE Ran..');
// })()

//Passing a argument in IFFE 
// (function(name){
//   console.log('Hello '+ name);
// })("John")

//PROPERTY METHOS
/*
When a function is placed inside the object it is called a method
*/

let todo = {
  add: function(){
    return 'Add Todo'
  },
  update: function(read){
    console.log( `Update ${read}` )
  }
}

console.log(todo.add());
todo.update('Eloquient JavaScript');
todo.delete = function(){
  console.log('Delete Todo');
};
todo.delete();