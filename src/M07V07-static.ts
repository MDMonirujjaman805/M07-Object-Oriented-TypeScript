// * Before Static. => Dynamic
class Counter1 {
  count: number = 0;
  incriment() {
    return (this.count = this.count + 1);
  }
  decriment() {
    return (this.count = this.count - 1);
  }
}

const instant1 = new Counter1();
console.log(instant1.incriment());
console.log(instant1.incriment());
console.log(instant1.incriment());
console.log(instant1.incriment());
console.log(instant1.incriment());

const instant2 = new Counter1();
console.log(instant2.incriment());
console.log(instant2.incriment());
console.log(instant2.incriment());
console.log(instant2.incriment());
console.log(instant2.incriment());

const instant3 = new Counter1();
console.log(instant3.incriment());
console.log(instant3.incriment());
console.log(instant3.incriment());
console.log(instant3.incriment());
console.log(instant3.incriment());

const instant4 = new Counter1();
console.log(instant4.decriment());
console.log(instant4.decriment());

//* After Static => Static
class Counter2 {
  static count: number = 0;
  static incriment() {
    return (Counter2.count = Counter2.count + 1);
  }
  static decriment() {
    return (Counter2.count = Counter2.count - 1);
  }
}

console.log(Counter2.incriment());
console.log(Counter2.incriment());
console.log(Counter2.incriment());
console.log(Counter2.incriment());
console.log(Counter2.incriment());

console.log(Counter2.decriment());
console.log(Counter2.decriment());

console.log(Counter2.incriment());
console.log(Counter2.incriment());
console.log(Counter2.incriment());
console.log(Counter2.incriment());
console.log(Counter2.incriment());
