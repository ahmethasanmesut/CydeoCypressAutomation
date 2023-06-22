function add(a,b){
  console.log(a+b);
}
add(25,45);
function multiply(a,b){
  return (a*b)
}
console.log(multiply(25,63));
console.log(multiply(25,42,84,63)); //ilk ikiyi aliyor
//overloading yok js de
//Functions are the first-class citizens in JS
//You can pass functions to other functions as arguments
//you can return functions from other Functions
//you can store functions in variables
var add2=add;
add2(56,45);
//Ananymous functions without name
var show = function(){
  console.log('mesut how do you do?');
}
show();
var divide = function(a,b){
  return a/b
}
var d = divide(50,4);
console.log(d);
//passing a function to another function
function sum(a,b){
  return a+b;
}
function average(a,b,fn){
  return fn(a,b)/2;
}
var res = average(10,20,sum);
console.log(res);
//Example
function cmToIn(length){
  return length/2.54;
}
function InToCm(length){
  return length*2.54;
}
function convert(fn,length){
  return fn(length);
}
var inches = convert(cmToIn,120);
var cm = convert (InToCm,120);
console.log(inches);
console.log(cm);
//Callback functions:A call back is a function passed as an argument to another
//A callback function can run after another function has finished
function myDisplayer(some){
  console.log(some);
}
function myCalculator(num1,num2,myCallback){
  var sum =num1+num2;
  myCallback(sum);
  }
  myCalculator(5,12,myDisplayer);
