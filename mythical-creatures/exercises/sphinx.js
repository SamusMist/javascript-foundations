class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
  };
  collectRiddle(newRiddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(newRiddle);
    };
  };
}


module.exports = Sphinx;
