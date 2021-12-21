class Ogre {
  constructor(ogreObject) {
    this.name = ogreObject.name;
    this.home = ogreObject.abode || 'Swamp';
  };
}

module.exports = Ogre;
