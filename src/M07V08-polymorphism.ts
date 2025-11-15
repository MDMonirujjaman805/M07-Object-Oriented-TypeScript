class Person {
  getSleep() {
    console.log("I am a normal Person, I sleep for 8 hours.");
  }
}

class Child extends Person {
  getSleep(): void {
    console.log("I am a Child, I sleep for 10 hours.");
  }
}

class Old extends Person {
  getSleep(): void {
    console.log("I am a Old, I sleep for 6 hours.");
  }
}
const getSleepingHours = (pram: Person) => {
  pram.getSleep();
};

const person = new Person();
const child = new Child();
const old = new Old();

getSleepingHours(person);

//* create by Gemini using class
class Animal {
  makeSound(): string {
    return "Generic animal sound";
  }
}
class Dog extends Animal {
  makeSound(): string {
    // Overriding the makeSound method
    return "Woof!";
  }
}
class Cat extends Animal {
  makeSound(): string {
    // Overriding the makeSound method
    return "Meow!";
  }
}
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => {
  console.log(animal.makeSound()); // Calls the specific makeSound of Dog or Cat
});

//* create by Gemini using Interface
// interface Shape {
//   calculateArea(): number;
// }

// class Circle implements Shape {
//   constructor(private radius: number) {}
//   calculateArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {}
//   calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

// shapes.forEach((shape) => {
//   console.log("Area:", shape.calculateArea());
// });
