class Magician {
  constructor(magicianObject) {
    this.name = `The Great ${magicianObject.name}`;
    this.assistant = magicianObject.assistant;
    this.favoriteAccessory = 'top hat'
  };
}

module.exports = Magician;
