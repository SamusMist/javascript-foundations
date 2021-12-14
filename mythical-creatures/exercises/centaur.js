class Centaur {
  constructor(newObject)  {
    this.name = newObject.name;
    this.breed = newObject.type;
    this.cranky = false;
  };
  shootBow() {
    return 'Twang!!!';
  };
  run() {
    return 'Clop clop clop clop!!!';
  };
}

module.exports = Centaur;
