class Centaur {
  constructor(newObject)  {
    this.name = newObject.name;
    this.breed = newObject.type;
    this.cranky = false;
    this.standing = true;
    this.crankyCounter = 0;
    this.layingDown = false;
  };
  shootBow() {
    this.crankyCounter++
    if (this.crankyCounter > 2) {
      this.cranky = true;
    };
    if (this.cranky === true) {
      return 'NO!';
    };
    if (this.layingDown === true) {
      return 'NO!';
    };
    return 'Twang!!!';
  };
  run() {
    this.crankyCounter++
    if (this.crankyCounter > 2) {
      this.cranky = true;
  };
  if (this.cranky === true) {
    return 'NO!';
  };
  if (this.layingDown === true) {
    return 'NO!';
  };
  return 'Clop clop clop clop!!!';
  };
  sleep() {
  if (this.standing === true) {
    return 'NO!';
    };
  if (this.layingDown === true) {
    this.crankyCounter = 0;
    this.cranky = false;
    return 'ZZZZ'
    };
  };
  layDown() {
    this.standing = false;
    this.layingDown = true;
  };
  standUp() {
    this.standing = true;
    this.layingDown = false;
  };
  drinkPotion() {
    if (this.standing === false) {
      return `Not while I'm laying down!`;
    };
    this.cranky = false;
  };
}

module.exports = Centaur;
