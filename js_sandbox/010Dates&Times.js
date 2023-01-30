let date = new Date()
let birthday = new Date('10/27/1997 02:45:59');
let val;


val = date.getDate();
val = date.getMonth()
val = date.getDay();
val = date.getFullYear()
val = date.getHours()
val = date.getMinutes()
val = date.getSeconds()
val = date.getMilliseconds()

val = date.setMonth(10)
val = date.setDate(15)
val = date.setFullYear(2003)

// console.log(birthday)
console.log('date --->', date)
console.log('val --->', val)