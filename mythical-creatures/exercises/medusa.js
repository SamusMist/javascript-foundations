var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };
  gazeAtVictim(newVictim) {
    var firstVictim = {};
    var backToPerson;

    if (this.statues.length < 3) {
      this.statues.push(new Statue(newVictim.name));
    } else if (this.statues.length === 3) {
      firstVictim = this.statues[0];
      backToPerson = new Person(firstVictim.name);
      this.statues.shift();
      this.statues.push(new Statue(newVictim.name));
      backToPerson.mood = 'relieved';
      return backToPerson;
    };
  };
}

module.exports = Medusa;
