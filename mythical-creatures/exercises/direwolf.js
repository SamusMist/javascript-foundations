class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || `Beyond the Wall`;
    this.size = size || `Massive`;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  };
  protect(protectee) {
    if (protectee.location === this.home &&
    this.starksToProtect.length < 2) {
      this.starksToProtect.push(protectee);
      protectee.safe = true;
    };
    this.huntsWhiteWalkers = false;
  };
  leave(protectee) {
    this.starksToProtect = [];
    protectee.safe = false;
  };
}

module.exports = Direwolf;
