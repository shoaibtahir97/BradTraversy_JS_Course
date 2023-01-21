const person = {
    firstName : 'Shoaib',
    lastName: 'Tahir',
    age: 25,
    email: 'shoaibtahir97@gmail.com',
    hobbies: ['coding', 'badminton'],
    address: {
        city: 'Karachi',
        state: 'SI'
    },
    getBirthYear: function() {
        return 2022 - this.age
    }
}

let val;

//Accessing an Object
val = person

// Accessing values of Object
val = person.firstName; //preferred way
val = person['lastName']; //Not preferred
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear()

console.log(val)