class Magician {
  constructor(magicianObject) {
    this.name = `The Great ${magicianObject.name}`;
    this.assistant = magicianObject.assistant;
    this.favoriteAccessory = magicianObject.clothing || 'top hat';
  };
  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`;
  };
}

module.exports = Magician;
