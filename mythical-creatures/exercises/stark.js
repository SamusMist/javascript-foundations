const Direwolf = require('./direwolf');

class Stark {
  constructor(starkObject) {
    this.name = starkObject.name;
    this.location = starkObject.area || `Winterfell`;
    this.safe = false;
  };
  sayHouseWords() {
    if (this.safe){
      return `The North Remembers`;
    }else {
      return `Winter is Coming`;
    };
  };
    callDirewolf(wolf, callFrom) {
      var direwolf3 = new Direwolf(wolf, callFrom);

      direwolf3.starksToProtect.push(this);
      direwolf3.home = this.location;
      this.safe = true;
      return direwolf3;
    };
}

module.exports = Stark;
