// Base class representing a general Character
class Character {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name}, and I am ${this.age} years old.`);
    }
  }
  
  // Derived class representing a Superhero
  class Superhero extends Character {
    constructor(name, age, superpower) {
      super(name, age);  // Inheriting from Character class
      this.superpower = superpower;
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name}, a superhero with the power of ${this.superpower}!`);
    }
  
    savePeople() {
      console.log(`${this.name} is saving people with their ${this.superpower}!`);
    }
  }
  
  // Create instances of Superhero
  let hero1 = new Superhero("Superman", 30, "Super Strength");
  let hero2 = new Superhero("Wonder Woman", 28, "Flight");
  
  hero1.introduce();
  hero1.savePeople();
  
  hero2.introduce();
  hero2.savePeople();
  


  // Base class for Vehicles
class Vehicle {
    move() {
      console.log("The vehicle is moving.");
    }
  }
  
  // Car class inheriting from Vehicle
  class Car extends Vehicle {
    move() {
      console.log("The car is driving 🚗");
    }
  }
  
  // Plane class inheriting from Vehicle
  class Plane extends Vehicle {
    move() {
      console.log("The plane is flying ✈️");
    }
  }
  
  // Boat class inheriting from Vehicle
  class Boat extends Vehicle {
    move() {
      console.log("The boat is sailing 🚤");
    }
  }
  
  // Create instances of each class
  let car = new Car();
  let plane = new Plane();
  let boat = new Boat();
  
  // Call move() for each vehicle
  car.move();   // Outputs: The car is driving 🚗
  plane.move(); // Outputs: The plane is flying ✈️
  boat.move();  // Outputs: The boat is sailing 🚤
  