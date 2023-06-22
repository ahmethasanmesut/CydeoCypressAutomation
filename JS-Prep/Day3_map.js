let map = new Map();
map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');
console.log(map.size);
console.log(map.get(true));
//Map can use objects as keys
let student = {name:'Jack',age:20};
let visits = new Map();
visits.set(student,100);
console.log(visits.get(student));
//Map can use functions as keys
let fun = x => {'Mesut is studying'};
visits.set(fun,'Really');
console.log(visits.get(fun));
//chaining
let myCars = new Map();
myCars.set(1,'Opel')
      .set(2,'Mercedes')
      .set(3,'Suzuki');
console.log(myCars.get(2));
//iteration -over keys
for (let car of myCars.keys()) {
  console.log(car);
}
for(let value of myCars.values()){
  console.log(value);
}
for (let [key,value] of myCars ){
  console.log(key + "=" + value);
}
//with arrow functions
myCars.forEach((value,key)  => {
  console.log(key + ":" + value);
});
