let mid=[3,4];
let arr=[1,2,...mid,5,6];
console.log(arr);

let str ='Hello';
var chars =[...str];
console.log(chars);
//Rest operators collects all elements inti array
function fun(...theArgs){
  console.log(theArgs.length);
}
fun();
fun(10,20,30,40);

function multiply(number,...theArgs){
  return theArgs.map(element=>number+element);
}
let arry = multiply(11,5,8,24);
console.log(arry);

let arr2=[5,10,20,30,40];
function divideNumber(number2,arr2){
  return arr2.map(x=>x/number2);
}
console.log(divideNumber(5,arr2));
