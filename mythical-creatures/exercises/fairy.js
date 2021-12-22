class Fairy {
  constructor(fairyObject) {
    this.name = fairyObject.name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris'],
    };
    this.disposition = 'Good natured';
    this.humanWards = [];
  };
  receiveBelief() {
    this.dust += 1;
  };
  believe() {
    this.dust += 10;
  };
  makeDresses(dress) {
  for (var i = 0; i < dress.length; i++) {
    this.clothes.dresses.push(dress[i]);
    };
  };
  becomeProvoked() {
    this.disposition = 'Vengeful';
  };
  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    };
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    };
    return infant;
  };
}

module.exports = Fairy;
