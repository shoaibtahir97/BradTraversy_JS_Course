// FOR LOOP
/*
Inside the round braces which takes three parameters separated by semi colons. 
1.  Declaration of variable(Always use let or var instead of const)
Continue will move to the next iteration without rendering the fourth iteration again.
Break will stop the loop.
*/
for(let i = 0; i < 10; i++) { 
  if(i === 4) {
    console.log('Four sum');
    continue
  }

  if(i === 7) {
    console.log('Seven ate nine');
    break;
  }

  console.log('Number',i);

}

let i =0;

// while (i < 10) {
//   i++
//   console.log(i)
// }