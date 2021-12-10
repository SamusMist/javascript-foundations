class Magician {
  constructor(magicianObject) {
    this.name = `The Great ${magicianObject.name}`;
    this.assistant = magicianObject.assistant;
    this.favoriteAccessory = magicianObject.clothing || 'top hat';
    this.confidencePercentage = 10;
  };
  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`;
  };
  performTrick() {
    if (this.favoriteAccessory !== 'top hat') {
      return `PULL DOVE FROM SLEEVE`;
    }
    this.confidencePercentage += 10;
    return `PULL RABBIT FROM TOP HAT`;
  };
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return `WOW! The magician totally just sawed that person in half!`
    };
    return `Oh no, this trick is not ready!`;
  };
}

module.exports = Magician;
