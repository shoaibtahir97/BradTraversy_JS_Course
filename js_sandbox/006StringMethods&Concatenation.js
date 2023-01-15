let firstName = 'Shoaib';
let lastName = 'Tahir';
let str = "Hello there, my name is Brad"
let tags = 'Web Design, Web Development, Programming, JavaScript';

age = 25


let val;

val = firstName + lastName; //concat both variables

// Concatenating strings
val = firstName + ' ' + lastName;

//Appending Strings
val = 'Ramsha ';
val += 'Qasim'; 

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping

val = 'That\'s awesome I can\'t wait';

// Find lenght of string
val = firstName.length; 

// concat() two strings
val = firstName.concat(' ', lastName);

// toLowerCase()
val = firstName.toLocaleLowerCase();

// toUpperCase()
val = lastName.toUpperCase();

//Indexing String
val = firstName[2]

//Find index of a character in string
val = firstName.indexOf('a') 

//===> If we pass a value that is not present in the string then it would return -1 as an error
val = firstName.indexOf('n')

//Find index of a charachter from right side
val = firstName.lastIndexOf('b')

//charAt() gives the character that is present on the index
val = firstName.charAt('2')

// CharAt() getting last character
val = firstName.charAt(firstName.length - 1)

//substring() ==> brings character from index 
val = firstName.substring(0, 4)

//slice() 
val = firstName.slice(4) //If one value then slice from index to end
val = firstName.slice(0, 4) // if two values then slice from first index to index before second value


// split() string based on a character ==> the character is removed and an array is returned
val = firstName.split('o')
val = tags.split(',')

//replace()
val = str.replace('Brad', 'Shoaib')

//includes()
val = str.includes('')

console.log(val) 
