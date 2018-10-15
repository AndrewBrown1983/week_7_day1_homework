const FormView = require('./views/form_view.js');
const PrimeCalculator = require('./models/prime_calculator');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const primeCalculator = new PrimeCalculator();
  primeCalculator.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
