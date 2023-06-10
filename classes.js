class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printAge() {
    console.log(`My age is ${this.age}`)
  }
}

const randomPerson = new Person("Rahel", 21)
console.log(randomPerson.age)
randomPerson.printAge()

 class Governor {
  
  state;
  name;
  age;
  hairColor;
  
   constructor(name,age,state,hairColor){
     this.name= name;
     this.age = age;
    this.state = state;
    this.hairColor = hairColor;
  }

  makeOlder(years) {
   this.age = this.age + years;
     this.hairColor = "grey";
    
  }
   static getNumberOfGovernors() {
    return 50;   }
 }

 class Person {
     name;
  height;
  age;

  constructor (name,height,age)    {
    this.name = name;
  this.height = height;
   this.age = age;
    
   }
   
name(){
  console.log(`Hi my name is${this.name} I am ${this.age} years old`)
}


 console.log(Governor.getNumberOfGovernors())
