//es5
let x = function(a){
  return a;
}
//es6
let x1 =() => a;


//If we do not have any parameters
let y=function(){
  console.log('hello');
}
let y1=() => {
  console.log('hello');
}

//if we have multiple parameters
let z= (a,b,c)=> a+b+c;
console.log(z(10,20,30));

//multiline arrow Functions
let sum =(a,b)=>{
  let result =a+b;
  return result;
}
console.log(sum(10,59));

let total=arr =>arr.reduce(((a,b)=>a*b),7);
let arr = [5,10,20];
console.log(total(arr));
//7*5=35
//35*10=350
//350*20=7000
const map1=arr.map(x=>x*2);
console.log(map1);
//for..of :creates a loop iterating over iterable objects
let myFruits=['Apple','Orange','Banana'];
for (let value of myFruits) {
console.log(value);
}
