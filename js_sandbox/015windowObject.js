/*
WINDOW OBJECT
Window is the global object in the client side JavaScript. Nodejs is the JS runtime on your local machine/PC/Backend where you can run JavaScript. 
But on the client side the global environment to run JavaScript is the browser or the window object. 
Nodejs and Chrome both use the same JS engine called the V8. 
Window object has a lot to offer like localStorage, navigator object, fetch api, alert, prompt, console  
*/

// WINDOW OBJECTS / PROPERTIES/ METHODS

//Console
// window.console.log(123)

//Alert
// window.alert('Hello World')

//Confirm
//Used when we want the user to be sure 
// if (confirm('Ae you sure')) {
//   console.log('YES')
// } else {
//   console.log('NO')
// }

//WINDOW METHODS
let val;


//Find height and widthof window screen
val = window.outerHeight;
val = window.outerWidth;

console.log(val)
