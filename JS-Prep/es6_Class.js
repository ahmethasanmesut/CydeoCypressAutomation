//Creating a class and objects
class Car{}
const honda = new Car();
console.log(honda instanceof Car);
//constructor
class Student{
constructor (id,name){
  this.id =id;
  this.name = name;
}
study(){
  console.log(`${this.name} is studying`);
}
static doHomework(){
  console.log(`${this.name} is doing homework`);
}
}

let s1 = new Student(52,'Boris');
console.log(`student ${s1.id} ${s1.name} `);
s1.study();

Student.age = 20;
console.log(Student);
//static Functions
Student.doHomework();
//s1.doHomework(); //in Java static by instance or by class but js static just with class
//inheritance
class Animal{
  constructor(name){
    this.name =name;
  }
  eat(){
    console.log('Animal is eating');
  }
}
class Dog extends Animal{
  constructor(name,age){
    super(name);
    this.age = 4;
  }
}
const d =new Dog('Puppy');
console.log(d);
console.log(d.eat()); //undefined because there is no overriding,you should put eat method in Dog class also
//if you want to print eat from dog you need to put super()
