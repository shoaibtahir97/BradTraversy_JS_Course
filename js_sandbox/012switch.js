const color = 'green';
  
switch(color) {
  case 'red':
    console.log(`Color is ${color}`);
    break;
  case 'green':
    console.log(`Color is ${color}`);
    break; 
  default:
    console.log(`Color is not red or green`)
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    console.log(`today is Sunday`);
    break;
  case 1:
    console.log(`today is Monday`);
    break;
  case 2:
    console.log(`today is Tuesday`);
    break;
  case 3:
    console.log(`today is Wednesday`);
    break;
  case 4:
    console.log(`today is Thursday`);
    break;
  case 5:
    console.log(`today is Friday`);
    break;
  case 6:
      console.log(`today is Saturday`);
      break;  
}

