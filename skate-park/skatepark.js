class SkatePark {
  constructor(skatepark) {
    this.name = skatepark.name;
    this.yearFounded = skatepark.year;
    this.style = skatepark.type;
    this.features = skatepark.features;
    this.isPrivate = skatepark.isPrivate || false;
    this.cost = skatepark.price || 0;
    this.occupants = [];
  };
  admit(dude) {
    if(this.cost === 0) {
      this.occupants.push(dude);
      return `Welcome to the free ${this.name} Skatepark!`;
    };
    if (this.cost > dude.money) {
      return `Sorry, you don't have enough money.`
    };
    if (this.cost <= dude.money && this.occupants.length < 3) {
      this.occupants.push(dude)
      dude.money = dude.money - this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    }else {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    };
  };
}
module.exports = SkatePark;
