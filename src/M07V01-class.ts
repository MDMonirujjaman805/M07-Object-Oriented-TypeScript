class Animal {
  name: string;
  sound: string;
  species: string;
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.sound = sound;
    this.species = species;
  }

  getSleep() {
    console.log(`${this.name} is sleeping sound ${this.sound}`);
  }
}

const dog = new Animal(`dog`, "shee shee", "dogjjghghg");
dog.getSleep();
