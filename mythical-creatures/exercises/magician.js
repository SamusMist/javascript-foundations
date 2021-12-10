class Magician {
  constructor(magicianObject) {
    this.name = `The Great ${magicianObject.name}`;
    this.assistant = magicianObject.assistant;
    this.favoriteAccessory = magicianObject.clothing || 'top hat';
  };
  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`;
  };
  performTrick() {
    if (this.favoriteAccessory !== 'top hat') {
      return `PULL DOVE FROM SLEEVE`;
    }
    return `PULL RABBIT FROM TOP HAT`;
  };

}

module.exports = Magician;
