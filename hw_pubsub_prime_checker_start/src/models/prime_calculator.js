const PubSub = require('../helpers/pub_sub.js');

const PrimeCalculator = function(){

};

PrimeCalculator.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number_submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkForPrime(inputtedNumber);
    PubSub.publish('PrimeCalculator:result-calculated', result);
  });

};

PrimeCalculator.prototype.checkForPrime = function (number) {
  if(number <= 1) {
    return false;
  }
      for (let i = 2; i < number; i++) {
        if (number % i === 0){
          return false
        }
      }
      return true;

};

module.exports = PrimeCalculator;
