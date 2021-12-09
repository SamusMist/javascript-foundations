class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.isHungry = 0;
  };
  greet() {
    return `Hi, ${this.rider}!`;
  };
  eat() {
    this.isHungry++
    if (this.isHungry > 2) {
      this.hungry = false;
    };
  };
}

module.exports = Dragon;
