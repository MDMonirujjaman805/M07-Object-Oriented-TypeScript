class Person {
  public name: string;
  protected email: string;
  private password: number;
  constructor(name: string, email: string, password: number) {
    (this.name = name), (this.email = email), (this.password = password);
  }
  abc() {
    console.log(
      `User name is ${this.name} and his email is ${this.email} and Password ${this.password}`
    );
  }
}
const info = new Person("monir", "example@gmail.com", 6565656);
console.log(info);
console.log(info.name);
// console.log(info.email);
// console.log(info.password);