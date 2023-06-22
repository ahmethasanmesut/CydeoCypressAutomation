/*const birthday = 1980;
let x = function() {let birthday = 1973;
console.log(birthday);
};
//const birthday=1983;
//console.log(birthday);

console.log(birthday);
x();*/
/*let x = function(a)=>{ //es5
  return a;
}
let x1 = ()=>a;  //es6
//if no parameters
let y = ()=>{
  console.log("hello");
}*/
//with parameters
/*let z = (a,b,c)=>console.log(a+b+c);
z(10,222,33);
//multiline arrow functions
let sum = (a,b,c)=>{
  let result =a+b+c;
  return result;
}
console.log(sum(55,77,));*/

//let total= arr=>arr.reduce(((a,b)=>a*b),8);
//let arr=[5,10,20];
//console.log(total(arr));
let arr=[5,11,20];
let map1 = arr.map(x=>(x*2/5)+3);

console.log(map1);

let myFruits =['Apple','Melon','Peach','Cherry',...arr];
for (let value of myFruits) {
  console.log(value);
}
