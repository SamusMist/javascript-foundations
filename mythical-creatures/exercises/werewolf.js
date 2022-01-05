class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!';
    }
    if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?';
      };
    }
  eatVictim(theyDed) {
    if (this.hungry === true && this.form === 'wolf') {
      theyDed.alive = false;
      this.hungry = false;
      this.form = 'human';
      return `Yum, ${theyDed.name} was delicious.`;
    } else {
      return `No way am I eating ${theyDed.name}, I'd like a burger!`;
    }
  }
}

module.exports = Werewolf;
