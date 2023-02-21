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


//Find height and width of window screen
val = window.outerHeight;
val = window.outerWidth;

//Find Inner height and width 
val = window.innerHeight;
val = window.innerWidth;

//Scroll Points
val = window.scrollX;
val = window.scrollY; //useful when using animations when user scrolls  

//Location Object
//Provides Network data about the website
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;

//Search
val = window.location.search; //Shows the query string

//Redirect
//Do not use these objects globally. Call them on function call 
// val = window.location.href = 'http://google.com'

//Reload
// val = window.location.reload;

//History Object
//Goes back to the page from where it came from 
// val = window.history.go(-1);

//Tells about the number of sites behind the current
val = window.history.length;

//NAVIGATOR OBJECT
//Navigator object deals with the browser itself, not with the location object 


console.log(val)
