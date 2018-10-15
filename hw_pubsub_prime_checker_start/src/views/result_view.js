const PubSub = require('../helpers/pub_sub.js');

ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  console.log("hello");
  PubSub.subscribe('PrimeCalculator:result-calculated', (event) =>{
    const PrimeOrNot = event.detail;
    this.displayResult(PrimeOrNot);
  })
};


ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = result;
};

module.exports = ResultView;
