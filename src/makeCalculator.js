'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
  };

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  calculator.add = (number) => (calculator.result += number);
  calculator.subtract = (number) => (calculator.result -= number);
  calculator.multiply = (number) => (calculator.result *= number);
  calculator.divide = (number) => (calculator.result /= number);

  calculator.operate = (callback, number) => {
    callback(number);

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
