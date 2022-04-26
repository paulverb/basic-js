const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const nAsString = n.toString();
  let arrayOfPossibilities = []
  for (let i = 0; i < nAsString.length; i++) {
    arrayOfPossibilities.push(parseInt(nAsString.slice(0, i) + nAsString.slice(i+1)));
  }
  return Math.max(...arrayOfPossibilities);
  }

module.exports = {
  deleteDigit
};
