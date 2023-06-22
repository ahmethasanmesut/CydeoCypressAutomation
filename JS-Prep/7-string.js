var str ="Mesut Yavuz";
console.log(str.length);
console.log(str.charAt(2));
var str2='Welcome to Amazon World';
console.log(str2.indexOf('Amazon'));
console.log(str2.indexOf('Amazon',15));
console.log(str2.includes('World'));
var replaced=str2.replace('Amazon','Ebay');
console.log(replaced);

var arr=str2.split(' ');
console.log(arr);

console.log(str2.substring(0,5)); //from,to
//different than java js has substr
console.log(str2.substr(6,4)); //from,length
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
