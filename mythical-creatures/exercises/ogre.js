class Ogre {
  constructor(ogreObject) {
    this.name = ogreObject.name;
    this.home = ogreObject.abode || 'Swamp';
    this.swings = 0;
  };
  encounter(dude) {
    dude.encounterCounter += 1;
    if (dude.noticesOgre()) {
      this.swingAt();
    };
    if (dude.encounterCounter % 2 === 0) {
      dude.knockedOut = true;
    };
  };
  swingAt() {
    this.swings += 1;
    };
    apologize(dude) {
      dude.knockedOut = false;
    };
  };

module.exports = Ogre;
