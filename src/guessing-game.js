class GuessingGame {
    constructor() {
this.minimum;
this.maximum;
    }
    setRange(min, max) {
      this.minimum = min;
      this.maximum = max;
    }

    guess() {
        let middle = Math.floor(( this.minimum + (this.maximum+1)) /2);
        return middle;
    }

    lower() {
this.maximum = this.guess();
    }

    greater() {
this.minimum = this.guess();
    }
}

module.exports = GuessingGame;
