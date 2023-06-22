var x =1;//global and function scoped
if (x===1){
  var x=2;
  console.log(x);
}
console.log(x);

let y=1; //block scoped
if(y===1){
  let y=2;
  console.log(y);
}
console.log(y);

const number=50;
//number=40;//gives error you can not assign to constant
console.log(number);

//Template strings
let firstName='Mesut';
let lastName='Yavuz';

console.log('My name is: '+firstName+' '+lastName);
console.log(`My name is: ${firstName} ${lastName} devam edebilirsin`);//back tick using
