//creating array
var scores =new Array
var numbers = new Array(10); //array with initial size 10
var myNumbers = new Array (9,10,4,5); //array with initial elements

var athletes=Array(3);//array with initial size 3
var signs = Array('Red');
var emptyArray = [];
var colors = ['red','green','blue'];

//accesing array elements
var students=['Mike','Tim','Ozzy'];
console.log(students);
console.log(students.toString());
console.log(students[1]);

//Basic operations on arrays
students.push('Emma');//add element to the end of array
console.log(students);

students.unshift('Adam');//adds to the beginning of array
console.log(students);

students.pop();  // removes an element from the end of arrays
console.log(students);

students.shift(); //removes an element from the beginning of Array
console.log(students);

var index=students.indexOf('Mike');
console.log(index);

students.splice(1,1); //delete elements in arrays //go index and delete second written times
console.log(students);

students.splice(1,0,'mesut','hasan','nuri'); //birinci elemandan basla,hic silme,onlaroda ekle
console.log(students);

var array=[1,24,69,457,32,46,3]; //sorting in string format,first capital,then,small letters.
array.sort();
console.log(array);
