class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //   getSleep() {
  //     console.log(`${Parent.name} Roll Number is ${}`);
  //   }
}

class Child extends Parent {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
  getRollNo() {
    console.log(`${Parent.name} Roll Number is 778`);
  }
}
const student = new Child("Mr. X", 34, "Bangladesh", 777);
console.log(student);
