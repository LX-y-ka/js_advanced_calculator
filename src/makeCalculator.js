'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    methods: [],
  };

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  calculator.add = (number) => (calculator.result += number);
  calculator.subtract = (number) => (calculator.result -= number);
  calculator.multiply = (number) => (calculator.result *= number);

  calculator.divide = (number) => {
    if (number !== 0) {
      calculator.result /= number;
    }
  };

  calculator.methods.push(calculator.add);
  calculator.methods.push(calculator.subtract);
  calculator.methods.push(calculator.multiply);
  calculator.methods.push(calculator.divide);

  calculator.operate = (callback, number) => {
    if (calculator.methods.includes(callback)) {
      callback(number);
    }

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
