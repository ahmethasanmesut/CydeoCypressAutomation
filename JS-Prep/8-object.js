var course={
name:'JS training',
url: 'www.cybertekschool.com',
subjects:['es5','es6','js','ts']
}
for(var key in course){
  console.log(key+" : "+course[key]);
}
//Example object in object
var myHonda ={
color: 'red',
wheels : 4,
engine : {
  cylinders : 4,
  size:2.2
},
hp:[300,500,100]
}
console.log(myHonda.engine.size);
console.log(myHonda.hp[1]);

var car = {
make:'Honda',
model:'Civic',
year:2000,
color:'Red',
drive:function(){
  console.log('I am driving Honda');
}
}
car.drive();
